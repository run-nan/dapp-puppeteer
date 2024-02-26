import "dotenv/config.js";
import { setupAnticaptcha } from "./lib/setup-anticaptcha.js";
import { launchBrowser } from "./lib/puppeteer.js";
import { setupMetamask } from "./lib/setup-metamask.js";

const run = async () => {
  await setupAnticaptcha();
  const browser = await launchBrowser();
  // browser.on("targetcreated", async (target) => {
  //   console.log(await target.asPage());
  // });
  // await page.goto("https://beoble.app");
  await setupMetamask(browser);
};

run().catch((err) => {
  console.log(err);
});
