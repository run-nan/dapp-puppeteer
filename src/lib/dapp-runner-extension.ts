import {
  AssertedEventType,
  PuppeteerRunnerExtension,
  StepType,
  type Step,
  type UserFlow,
  type StepWithSelectors,
  mouseButtonMap,
} from "@puppeteer/replay";
import {
  type Frame,
  type Browser,
  type Page,
  ElementHandle,
} from "puppeteer-core";
import { delay } from "./utils.js";

export class DappRunnerExtension extends PuppeteerRunnerExtension {
  public browser: Browser;
  public page: Page;
  constructor(
    browser: Browser,
    page: Page,
    opts?: {
      timeout?: number;
      ignoreClickOffset?: boolean;
    },
  ) {
    super(browser, page, opts);
    this.page = page;
    this.browser = browser;
    this.timeout = opts?.timeout || 15 * 1000;
  }
  private async getPageForStep(step: Step): Promise<Page | null> {
    if (!step.target || step.target === "main") {
      return this.page;
    }
    const target = await this.browser.waitForTarget(
      (t) => t.url().startsWith(step.target as string),
      {
        timeout: this.timeout,
      },
    );
    const targetPage = await target.page();
    if (!targetPage) {
      return null;
    }
    targetPage.setDefaultTimeout(this.timeout);
    return targetPage;
  }

  private async getFrameForStep(
    targetPage: Page | null,
    step: Step,
  ): Promise<Frame> {
    let mainFrame: Frame | null = null;
    if (targetPage) {
      mainFrame = targetPage.mainFrame();
    } else {
      const frames = this.page.frames();
      for (const frame of frames) {
        if (frame.isOOPFrame() && frame.url() === step.target) {
          mainFrame = frame;
          break;
        }
      }
      if (!mainFrame) {
        mainFrame = await this.page.waitForFrame(step.target || "", {
          timeout: this.timeout,
        });
      }
    }
    if (!mainFrame) {
      throw new Error("No Target Frame found");
    }
    let result = mainFrame;
    if ("frame" in step && step.frame) {
      for (const index of step.frame) {
        result = mainFrame.childFrames()[index]!;
      }
    }
    return result;
  }

  private async waitForEvents(frame: Frame, step: Step) {
    const promises: Promise<unknown>[] = [];
    if (step.assertedEvents) {
      for (const event of step.assertedEvents) {
        switch (event.type) {
          case AssertedEventType.Navigation: {
            promises.push(
              frame.waitForNavigation({
                timeout: this.timeout,
              }),
            );
            continue;
          }
          default:
            throw new Error(`Event type ${event.type} is not supported`);
        }
      }
    }
    await Promise.all(promises);
  }

  private async waitForElement(
    frame: Frame,
    step: StepWithSelectors,
    callback: (element: ElementHandle) => void | Promise<void>,
  ) {
    const selectors = step.selectors.flat();
    const promises = selectors.map((selector) =>
      frame.waitForSelector(selector),
    );
    const element = await Promise.race(promises);
    if (!element) {
      throw new Error(
        `No element found for selectors:\n ${selectors.join("\n")}`,
      );
    }
    await element.scrollIntoView();
    await Promise.resolve(callback(element));
    await element.dispose();
  }

  async beforeAllSteps?(flow?: UserFlow): Promise<void> {
    console.log(`Start to run flow [${flow?.title}]`);
    await super.beforeAllSteps?.(flow);
  }
  async afterAllSteps?(flow?: UserFlow): Promise<void> {
    console.log(`Flow [${flow?.title}] completed`);
    await super.beforeAllSteps?.(flow);
  }
  async beforeEachStep(step: Step & { wait?: number }): Promise<void> {
    if (step.wait) {
      await delay(step.wait);
    }
    await super.beforeEachStep?.(step);
  }
  async afterEachStep(
    step: Step & { delay?: number; index: number },
  ): Promise<void> {
    if (step.delay) {
      await delay(step.delay);
    }
    if (typeof step.index === "number") {
      console.log(`Step [${step.index}] completed`);
    }
    await super.afterEachStep?.(step);
  }
  async runStep(step: Step, flow?: UserFlow): Promise<void> {
    const page = await this.getPageForStep(step);
    const frame = await this.getFrameForStep(page, step);
    let assertedEventsPromises: Promise<void>[] = [];
    assertedEventsPromises.push(this.waitForEvents(frame, step));
    switch (step.type) {
      case StepType.Click:
        await this.waitForElement(frame, step, async (element) => {
          await element.evaluate((el) => {
            el.style.border = "2px red solid";
          });
          await element.click({
            button: step.button && mouseButtonMap.get(step.button),
            delay: step.duration,
          });
        });
        break;
      case StepType.DoubleClick:
        await this.waitForElement(frame, step, async (element) => {
          await element.click({
            count: 2,
            button: step.button && mouseButtonMap.get(step.button),
            delay: step.duration,
          });
        });
        break;
      case StepType.Change:
        await this.waitForElement(frame, step, async (element) => {
          await element.type(step.value);
        });
        break;
      case StepType.Hover:
        await this.waitForElement(frame, step, async (element) => {
          await element.hover();
        });
        break;
      case StepType.Scroll:
        if ("selectors" in step) {
          await this.waitForElement(frame, step, async (element) => {
            await element.evaluate(
              (el, scrollLeft, scrollTop) => {
                el.scrollLeft = scrollLeft;
                el.scrollTop = scrollTop;
              },
              step.x || 0,
              step.y || 0,
            );
          });
        } else {
          await frame.evaluate(
            `window.scrollTo(${step.x || 0}, ${step.y || 0})`,
          );
        }
        break;
      case StepType.KeyUp:
        await page?.keyboard.up(step.key);
        break;
      case StepType.KeyDown:
        await page?.keyboard.down(step.key);
        break;
      default:
        super.runStep(step, flow);
    }
    await Promise.all(assertedEventsPromises);
  }
}
