import type { Browser } from "puppeteer-core";
import {
  createRunner,
  PuppeteerRunnerExtension,
  type Step,
  type UserFlow,
} from "@puppeteer/replay";
import { createRequire } from "module";

class MetamaskRunnerExtension extends PuppeteerRunnerExtension {
  // async beforeEachStep(step: Step, flow?: UserFlow) {
  //   console.log(this.page.url());
  //   const ele = await Promise.race([
  //     this.page.waitForSelector("[data-testid='onboarding-terms-checkbox']", {
  //       timeout: 60 * 1000,
  //     }),
  //     this.page.waitForSelector("aria/我同意MetaMask的使用条款", {
  //       timeout: 60 * 1000,
  //     }),
  //     this.page.waitForSelector(
  //       "pierce/[data-testid='onboarding-terms-checkbox']",
  //       {
  //         timeout: 60 * 1000,
  //       },
  //     ),
  //   ]);
  //   console.log(this.page.locator("aria/我同意MetaMask的使用条款"));
  //   await super.beforeEachStep?.(step, flow);
  // }
}

export const setupMetamask = async (browser: Browser) => {
  const target = await browser.waitForTarget((target) =>
    target
      .url()
      .startsWith(
        "chrome-extension://kabgpgpmafhbdemcdkbkefalpcobchjg/home.html",
      ),
  );
  const metamaskPage = await target.page();
  if (!metamaskPage) {
    throw new Error("No metamask page found");
  }
  const runner = await createRunner(
    createRequire(import.meta.url)("../recorder/setup-metamask.json"),
    new MetamaskRunnerExtension(browser, metamaskPage, { timeout: 60 * 1000 }),
  );
  await runner.run();
};
