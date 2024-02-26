import puppeteer from "puppeteer-core";
import { resolvePath } from "./utils.js";

const extensionsPath = [
  resolvePath(import.meta.url, "../../extensions/metamask-11.10.0"),
  resolvePath(import.meta.url, "../../extensions/anticaptcha-0.65"),
];

export const launchBrowser = async () => {
  const browser = puppeteer.launch({
    headless: false,
    channel: "chrome",
    defaultViewport: null,
    args: [
      "--start-fullscreen",
      `--disable-extensions-except=${extensionsPath.join(",")}`,
      `--load-extension=${extensionsPath.join(",")}`,
    ],
  });
  console.log("Browser launched");
  return browser;
};
