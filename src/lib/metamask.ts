import type { Browser, Page } from "puppeteer-core";
import {
  createRunner,
  StepType,
  type Step,
  type ChangeStep,
} from "@puppeteer/replay";
import { DappRunnerExtension } from "./dapp-runner-extension.js";
import { loadFlow } from "./utils.js";

interface Options {
  browser: Browser;
  page: Page;
}

type Status = "unintialized" | "initialized";

const MM_HOME_REGEX = "chrome-extension://[a-z]+/home.html";

export class Metamask {
  static async getHomePage(browser: Browser): Promise<Page> {
    const pages = await browser.pages();
    for (const page of pages) {
      if (page.url().match(MM_HOME_REGEX)) {
        return page;
      }
    }
    return new Promise((resolve, reject) => {
      browser.on("targetcreated", async (target) => {
        if (target.url().match(MM_HOME_REGEX)) {
          try {
            const pages = await browser.pages();
            for (const page of pages) {
              if (page.url().match(MM_HOME_REGEX)) {
                resolve(page);
              }
            }
          } catch (e) {
            reject(e);
          }
        }
      });
    });
  }
  private page: Page;
  private replayExtension: DappRunnerExtension;
  private status: Status = "unintialized";
  private extensionID: string;
  private browser: Browser;
  constructor({ browser, page }: Options) {
    this.browser = browser;
    this.page = page;
    this.replayExtension = new DappRunnerExtension(browser, this.page);
    this.status = "unintialized";
    const pageUrl = page.url();
    this.extensionID =
      pageUrl.match(/chrome-extension:\/\/([a-z]+)/)?.[1] || "";
  }

  private async runFlow(name: string) {
    const flow = loadFlow(name);
    const runner = await createRunner(flow, this.replayExtension);
    await runner.run();
  }

  public getStatus() {
    return this.status;
  }

  public getChromeExtensionID() {
    return this.extensionID;
  }

  public async init(options: {
    wallet: {
      seedPhrase: string;
      password: string;
    };
  }) {
    const { wallet } = options;
    const { seedPhrase, password } = wallet;

    await this.runFlow("metamask/setup-import-wallet")
      .then(async () => {
        const flow = loadFlow("metamask/input-seed-phrase");
        const steps = flow.steps;
        const seedList = seedPhrase.trim().split(" ");
        if (seedList.length !== 12) {
          throw new Error("Invalid seed phrase");
        }
        steps
          .filter((step) => step.type === StepType.Change)
          .forEach((step, index) => {
            (step as ChangeStep).value = seedList[index];
          });
        const runner = await createRunner(flow, this.replayExtension);
        await runner.run();
      })
      .then(async () => {
        const flow = loadFlow("metamask/input-password");
        const steps = flow.steps;
        steps
          .filter((step) => step.type === StepType.Change)
          .forEach((step) => {
            (step as ChangeStep).value = password;
          });
        const runner = await createRunner(flow, this.replayExtension);
        await runner.run();
      })
      .then(async () => {
        await this.runFlow("metamask/finish-import-wallet");
      });
    this.status = "initialized";
  }

  public async connect() {
    const target = await this.browser.waitForTarget((t) =>
      t
        .url()
        .startsWith(
          `chrome-extension://${this.extensionID}/notification.html#connect`,
        ),
    );
    console.log("target", target.url());
    const page = await target.page();
    await page?.waitForSelector("text/下一步");
    console.log("clicking next");
    const nextBtn = await page?.waitForSelector(
      ".button.btn--rounded.btn-primary.page-container__footer-button",
    );
    await nextBtn?.click();
    await page?.waitForSelector("text/连接");
    console.log("clicking connect");
    const connectBtn = await page?.waitForSelector(
      ".button.btn--rounded.btn-primary.page-container__footer-button",
    );
    await connectBtn?.click();
  }
}