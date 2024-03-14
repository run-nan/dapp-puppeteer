import puppeteer from "puppeteer-core";
import { resolvePath } from "./utils.js";
import fse from "fs-extra";
import path from "path";

const extensionsPath = [
  resolvePath(import.meta.url, "../../extensions/metamask-11.10.0"),
  resolvePath(import.meta.url, "../../extensions/anticaptcha-0.65"),
];

interface Options {
  userDataDir?: string;
}

const userDatasDir = resolvePath(import.meta.url, "../../.user-datas");

export const launchBrowser = async (options: Options = {}) => {
  const { userDataDir: name = undefined } = options;
  const userDataDir = name && path.join(userDatasDir, name);
  if (userDataDir) {
    if (!(await fse.exists(userDataDir))) {
      await fse.mkdir(userDataDir, { recursive: true });
    }
  }
  const browser = puppeteer.launch({
    headless: false,
    channel: "chrome",
    defaultViewport: null,
    userDataDir,
    args: [
      "--start-fullscreen",
      `--disable-extensions-except=${extensionsPath.join(",")}`,
      `--load-extension=${extensionsPath.join(",")}`,
    ],
  });
  console.log("Browser launched");
  return browser;
};
