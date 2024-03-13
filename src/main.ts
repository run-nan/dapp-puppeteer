import "dotenv/config.js";
import { launchBrowser } from "./lib/puppeteer.js";
import { Metamask } from "./lib/metamask.js";
import { Beoble } from "./dapps/beoble.js";

const run = async () => {
  const browser = await launchBrowser();
  const metamask = new Metamask({
    browser,
    page: await Metamask.getHomePage(browser),
  });
  await metamask.init({
    wallet: {
      seedPhrase: process.env.WALLET_SEED as string,
      password: process.env.WALLET_PASSWORD as string,
    },
  });
  const beobleApp = new Beoble({
    browser,
    page: await Beoble.open(browser),
    metamask,
  });
  await beobleApp.login();
  // await beobleApp.gmToGeneral();
};

run().catch((err) => {
  console.log(err);
});
