import type { Browser, Page } from "puppeteer-core";
import { DappWithMetamask } from "../lib/dapp-with-metamask.js";
import { setupAnticaptcha } from "../lib/setup-anticaptcha.js";

export class Beoble extends DappWithMetamask {
  static async open(browser: Browser): Promise<Page> {
    const page = await browser.newPage();
    console.log("Goint to https://beoble.app/");
    await page.goto("https://beoble.app/", {
      timeout: 60 * 1000,
    });
    return page;
  }
  async login() {
    await setupAnticaptcha();
    await this.runFlow("beoble/login");
    await this.page
      .waitForSelector(".antigate_solver.solved", {
        timeout: 180 * 1000,
      })
      .catch(() => {
        console.error("Unable to solve captcha.");
      });
    await this.runFlow("beoble/sign");
  }
  async gmToGeneral() {
    await this.runFlow("beoble/gm-to-general");
  }
}
