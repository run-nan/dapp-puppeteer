import type { Browser, Page } from "puppeteer-core";
import { DappWithMetamask } from "../lib/dapp-with-metamask.js";
import { setupAnticaptcha } from "../lib/setup-anticaptcha.js";
import { delay } from "../lib/utils.js";
import { StepType, createRunner } from "@puppeteer/replay";

export class Beoble extends DappWithMetamask {
  static async homePage(browser: Browser): Promise<Page> {
    const page = await browser.newPage();
    console.log("Going to https://beoble.app/");
    await page.goto("https://beoble.app/", {
      timeout: 60 * 1000,
    });
    return page;
  }

  async connect() {
    await setupAnticaptcha();
    await this.runFlow("beoble/connect");
    await this.metamask.connect();
    console.log("Waiting for captcha to be solved...");
    const solved = await this.page
      .waitForSelector(".antigate_solver.solved", {
        timeout: 180 * 1000,
      })
      .catch(() => {
        console.error("Unable to solve captcha.");
        return null;
      });
    if (!solved) {
      this.browser.close();
    }
    await this.metamask.sign();
    await delay(1000);
    await this.metamask.sign();
    console.log("Connect complete");
  }

  async register() {
    await this.page.waitForSelector("text/Enter your invitation code.");
    const runner = await createRunner(this.replayExtension);
    await runner.runStep({
      type: StepType.Change,
      target: "main",
      selectors: [
        "aria/Invitation code",
        "div.sc-290ef99f-0 input",
        'xpath///*[@id="__next"]/main/div[2]/div/div/main/div[1]/div/div/div[1]/div[2]/div[2]/input',
        "pierce/div.sc-290ef99f-0 input",
      ],
      value: "69d140ff-72dc-4bbd-a0b3-8fe1d5e99a0e",
    });
    await this.page.waitForSelector("text/This invitation code is available");
    await this.runFlow("beoble/register");
    await runner.runStep({
      type: StepType.Change,
      value: "sdimt",
      selectors: [
        ["aria/beoble"],
        ["div.sc-290ef99f-0 input"],
        [
          'xpath///*[@id="__next"]/main/div[2]/div/div/main/div[1]/div/div/form/div[1]/div[2]/div[1]/div[2]/input',
        ],
        ["pierce/div.sc-290ef99f-0 input"],
      ],
      target: "main",
    });
  }

  async SayGmToGeneral() {
    await this.runFlow("beoble/general-gm");
  }
}
