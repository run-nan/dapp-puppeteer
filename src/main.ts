import "dotenv/config.js";
import { launchBrowser } from "./lib/puppeteer.js";
import { Metamask } from "./lib/metamask.js";
import { Beoble } from "./dapps/beoble.js";
import { delay } from "./lib/utils.js";

const run = async () => {
  const browser = await launchBrowser({
    userDataDir: "second",
  });
  const metamask = new Metamask({
    browser,
  });
  const beobleApp = new Beoble({
    browser,
    page: await Beoble.homePage(browser),
    metamask,
  });
  if (
    await metamask
      .waitForMetamaskPage("home.html", { timeout: 3000 })
      .catch(() => null)
  ) {
    await metamask.importWallet({
      seedPhrase: process.env.WALLET_SEED as string,
      password: process.env.WALLET_PASSWORD as string,
    });
    await beobleApp.connect();
    await beobleApp.register();
  } else {
  }
};

run().catch((err) => {
  console.log(err);
});
