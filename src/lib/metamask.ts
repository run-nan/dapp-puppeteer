import type { Browser, Page, WaitForTargetOptions } from "puppeteer-core";
import { createRunner, StepType, type ChangeStep } from "@puppeteer/replay";
import { DappRunnerExtension } from "./dapp-runner-extension.js";
import { loadFlow } from "./utils.js";

type Options = {
  browser: Browser;
};

type Status = "unintialized" | "initialized";

const EXTENSION_URL_PREFIX_PATTERN = "chrome-extension://([a-z]+)/";

export class Metamask {
  private status: Status = "unintialized";
  private extensionID: string | null = null;
  private browser: Browser;
  constructor(options: Options) {
    const { browser } = options;
    this.browser = browser;
    this.status = "unintialized";
  }

  private async runFlow(page: Page, name: string) {
    const flow = loadFlow(name);
    const runner = await createRunner(
      flow,
      new DappRunnerExtension(this.browser, page),
    );
    await runner.run();
  }

  public async waitForMetamaskPage(
    urlPrefix: string = "",
    options?: WaitForTargetOptions,
  ) {
    const target = await this.browser.waitForTarget((t) => {
      if (this.extensionID) {
        return t
          .url()
          .startsWith(`chrome-extension://${this.extensionID}/${urlPrefix}`);
      } else {
        const extensionID =
          t.url().match(EXTENSION_URL_PREFIX_PATTERN + urlPrefix)?.[1] || "";
        if (extensionID) {
          this.extensionID = extensionID;
        }
        return !!extensionID;
      }
    }, options);
    const page = await target.page();
    if (page) {
      return page;
    }
    throw new Error(`Page not found for ${urlPrefix}`);
  }

  public getStatus() {
    return this.status;
  }

  public getChromeExtensionID() {
    return this.extensionID;
  }

  private async fillInSeedPhrase(page: Page, seedPhrase: string) {
    const seedPhraseList = seedPhrase.trim().split(" ");
    const runner = await createRunner(
      new DappRunnerExtension(this.browser, page),
    );
    await page.select("div.mm-box select", `${seedPhraseList.length}`);
    let index = 0;
    for (const word of seedPhraseList) {
      await runner.runStep({
        type: StepType.Change,
        value: word,
        selectors: [
          [`[data-testid='import-srp__srp-word-${index}']`],
          [`xpath///*[@data-testid="import-srp__srp-word-${index}"]`],
          [`pierce/[data-testid='import-srp__srp-word-${index}']`],
        ],
        target: "main",
      });
      index++;
    }
    await runner.runStep({
      type: StepType.Click,
      target: "main",
      selectors: [
        ["aria/确认私钥助记词"],
        ["[data-testid='import-srp-confirm']"],
        ['xpath///*[@data-testid="import-srp-confirm"]'],
        ["pierce/[data-testid='import-srp-confirm']"],
      ],
      offsetY: 0,
      offsetX: 0,
    });
  }

  public async importWallet(options: { seedPhrase: string; password: string }) {
    const { seedPhrase, password } = options;
    const page = await this.waitForMetamaskPage("home.html");
    await this.runFlow(page, "metamask/setup-import-wallet")
      .then(async () => {
        await this.fillInSeedPhrase(page, seedPhrase);
      })
      .then(async () => {
        const flow = loadFlow("metamask/input-password");
        const steps = flow.steps;
        steps
          .filter((step) => step.type === StepType.Change)
          .forEach((step) => {
            (step as ChangeStep).value = password;
          });
        const runner = await createRunner(
          flow,
          new DappRunnerExtension(this.browser, page),
        );
        await runner.run();
      })
      .then(async () => {
        await this.runFlow(page, "metamask/finish-import-wallet");
      });
    this.status = "initialized";
  }

  public async connect() {
    const page = await this.waitForMetamaskPage("notification.html#connect");
    await page.waitForSelector("text/下一步");
    const nextBtn = await page.waitForSelector(
      ".button.btn--rounded.btn-primary.page-container__footer-button",
    );
    await nextBtn?.click();
    await page.waitForSelector("text/连接");
    const connectBtn = await page.waitForSelector(
      ".button.btn--rounded.btn-primary.page-container__footer-button",
    );
    await connectBtn?.click();
  }

  public async sign() {
    const page = await this.waitForMetamaskPage(
      "notification.html#confirm-transaction",
    );
    await page.waitForSelector("text/签名请求");
    const signBtn = await page.waitForSelector(
      "[data-testid='page-container-footer-next']",
    );
    await signBtn?.click();
  }
}
