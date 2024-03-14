import type { Browser, Page } from "puppeteer-core";
import { DappRunnerExtension } from "./dapp-runner-extension.js";
import type { Metamask } from "./metamask.js";
import { loadFlow } from "./utils.js";
import { createRunner } from "@puppeteer/replay";

interface BeobleAppOptions {
  browser: Browser;
  page: Page;
  metamask: Metamask;
}

export class DappWithMetamask {
  protected browser: Browser;
  protected page: Page;
  protected metamask: Metamask;
  protected replayExtension: DappRunnerExtension;
  constructor({ browser, page, metamask }: BeobleAppOptions) {
    this.browser = browser;
    this.page = page;
    this.metamask = metamask;
    this.replayExtension = new DappRunnerExtension(browser, this.page);
  }

  protected getFlow(name: string) {
    const flow = loadFlow(name, {
      overwrite: true,
    });
    flow.steps.forEach((step) => {
      if (step.target?.startsWith("metamask://")) {
        step.target = step.target.replace(
          "metamask://",
          `chrome-extension://${this.metamask.getChromeExtensionID()}/`,
        );
      }
    });
    return flow;
  }

  protected async runFlow(name: string) {
    const flow = this.getFlow(name);
    const runner = await createRunner(flow, this.replayExtension);
    await runner.run();
  }
}
