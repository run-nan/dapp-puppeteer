import { createRunner, PuppeteerRunnerExtension } from "@puppeteer/replay";

export async function run(browser) {
  const page = (await browser.pages()).find((page) =>
    page.url().startsWith("chrome-extension"),
  );
  const runner = await createRunner(
    new PuppeteerRunnerExtension(browser, page),
  );

  await runner.runBeforeAllSteps();
  await runner.runStep({
    type: "navigate",
    url: "chrome-extension://kabgpgpmafhbdemcdkbkefalpcobchjg/home.html#onboarding/welcome",
    assertedEvents: [
      {
        type: "navigation",
        url: "chrome-extension://kabgpgpmafhbdemcdkbkefalpcobchjg/home.html#onboarding/welcome",
        title: "MetaMask",
      },
    ],
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/我同意MetaMask的使用条款"],
      ["[data-testid='onboarding-terms-checkbox']"],
      ['xpath///*[@data-testid="onboarding-terms-checkbox"]'],
      ["pierce/[data-testid='onboarding-terms-checkbox']"],
    ],
    offsetY: 11,
    offsetX: 6.5,
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/导入现有钱包"],
      ["[data-testid='onboarding-import-wallet']"],
      ['xpath///*[@data-testid="onboarding-import-wallet"]'],
      ["pierce/[data-testid='onboarding-import-wallet']"],
      ["text/导入现有钱包"],
    ],
    offsetY: 23.40625,
    offsetX: 162.5,
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/我同意"],
      ["[data-testid='metametrics-i-agree']"],
      ['xpath///*[@data-testid="metametrics-i-agree"]'],
      ["pierce/[data-testid='metametrics-i-agree']"],
      ["text/我同意"],
    ],
    offsetY: 25.65625,
    offsetX: 103.5,
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["div:nth-of-type(1) > div.MuiFormControl-root > div"],
      [
        'xpath///*[@data-testid="import-srp"]/div[4]/div/div/div[3]/div[1]/div[1]/div',
      ],
      ["pierce/div:nth-of-type(1) > div.MuiFormControl-root > div"],
    ],
    offsetY: 6.8203125,
    offsetX: 34.5,
  });
  await runner.runStep({
    type: "change",
    value: "bike",
    selectors: [
      ["aria/1."],
      ["[data-testid='import-srp__srp-word-0']"],
      ['xpath///*[@data-testid="import-srp__srp-word-0"]'],
      ["pierce/[data-testid='import-srp__srp-word-0']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["div.import-srp__srp > div:nth-of-type(1) svg"],
      [
        'xpath///*[@data-testid="import-srp"]/div[4]/div/div/div[3]/div[1]/div[2]/label/svg',
      ],
      ["pierce/div.import-srp__srp > div:nth-of-type(1) svg"],
    ],
    offsetY: 22.0703125,
    offsetX: 13.171875,
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/2."],
      ["[data-testid='import-srp__srp-word-1']"],
      ['xpath///*[@data-testid="import-srp__srp-word-1"]'],
      ["pierce/[data-testid='import-srp__srp-word-1']"],
    ],
    offsetY: 12.8203125,
    offsetX: 56.171875,
  });
  await runner.runStep({
    type: "change",
    value: "attend",
    selectors: [
      ["aria/2."],
      ["[data-testid='import-srp__srp-word-1']"],
      ['xpath///*[@data-testid="import-srp__srp-word-1"]'],
      ["pierce/[data-testid='import-srp__srp-word-1']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/3."],
      ["[data-testid='import-srp__srp-word-2']"],
      ['xpath///*[@data-testid="import-srp__srp-word-2"]'],
      ["pierce/[data-testid='import-srp__srp-word-2']"],
    ],
    offsetY: 13.8203125,
    offsetX: 28.171875,
  });
  await runner.runStep({
    type: "change",
    value: "buffalo",
    selectors: [
      ["aria/3."],
      ["[data-testid='import-srp__srp-word-2']"],
      ['xpath///*[@data-testid="import-srp__srp-word-2"]'],
      ["pierce/[data-testid='import-srp__srp-word-2']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/4."],
      ["[data-testid='import-srp__srp-word-3']"],
      ['xpath///*[@data-testid="import-srp__srp-word-3"]'],
      ["pierce/[data-testid='import-srp__srp-word-3']"],
    ],
    offsetY: 9.8203125,
    offsetX: 4.171875,
  });
  await runner.runStep({
    type: "change",
    value: "palm",
    selectors: [
      ["aria/4."],
      ["[data-testid='import-srp__srp-word-3']"],
      ['xpath///*[@data-testid="import-srp__srp-word-3"]'],
      ["pierce/[data-testid='import-srp__srp-word-3']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/5."],
      ["[data-testid='import-srp__srp-word-4']"],
      ['xpath///*[@data-testid="import-srp__srp-word-4"]'],
      ["pierce/[data-testid='import-srp__srp-word-4']"],
    ],
    offsetY: 16.8203125,
    offsetX: 14.171875,
  });
  await runner.runStep({
    type: "change",
    value: "aim",
    selectors: [
      ["aria/5."],
      ["[data-testid='import-srp__srp-word-4']"],
      ['xpath///*[@data-testid="import-srp__srp-word-4"]'],
      ["pierce/[data-testid='import-srp__srp-word-4']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/6."],
      ["[data-testid='import-srp__srp-word-5']"],
      ['xpath///*[@data-testid="import-srp__srp-word-5"]'],
      ["pierce/[data-testid='import-srp__srp-word-5']"],
    ],
    offsetY: 14.8203125,
    offsetX: 19.171875,
  });
  await runner.runStep({
    type: "change",
    value: "salon",
    selectors: [
      ["aria/6."],
      ["[data-testid='import-srp__srp-word-5']"],
      ['xpath///*[@data-testid="import-srp__srp-word-5"]'],
      ["pierce/[data-testid='import-srp__srp-word-5']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/7."],
      ["[data-testid='import-srp__srp-word-6']"],
      ['xpath///*[@data-testid="import-srp__srp-word-6"]'],
      ["pierce/[data-testid='import-srp__srp-word-6']"],
    ],
    offsetY: 20.8203125,
    offsetX: 28.171875,
  });
  await runner.runStep({
    type: "change",
    value: "display",
    selectors: [
      ["aria/7."],
      ["[data-testid='import-srp__srp-word-6']"],
      ['xpath///*[@data-testid="import-srp__srp-word-6"]'],
      ["pierce/[data-testid='import-srp__srp-word-6']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["div.import-srp__srp"],
      ['xpath///*[@data-testid="import-srp"]/div[4]/div/div/div[3]'],
      ["pierce/div.import-srp__srp"],
      ["text/1.bike2.attend3.buffalo4.palm5.aim6.salon7.display8.9.10.11.12."],
    ],
    offsetY: 512.8203125,
    offsetX: 98.171875,
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/8."],
      ["[data-testid='import-srp__srp-word-7']"],
      ['xpath///*[@data-testid="import-srp__srp-word-7"]'],
      ["pierce/[data-testid='import-srp__srp-word-7']"],
    ],
    offsetY: 23.8203125,
    offsetX: 41.171875,
  });
  await runner.runStep({
    type: "change",
    value: "hurt",
    selectors: [
      ["aria/8."],
      ["[data-testid='import-srp__srp-word-7']"],
      ['xpath///*[@data-testid="import-srp__srp-word-7"]'],
      ["pierce/[data-testid='import-srp__srp-word-7']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/9."],
      ["[data-testid='import-srp__srp-word-8']"],
      ['xpath///*[@data-testid="import-srp__srp-word-8"]'],
      ["pierce/[data-testid='import-srp__srp-word-8']"],
    ],
    offsetY: 26.8203125,
    offsetX: 38.171875,
  });
  await runner.runStep({
    type: "change",
    value: "helmet",
    selectors: [
      ["aria/9."],
      ["[data-testid='import-srp__srp-word-8']"],
      ['xpath///*[@data-testid="import-srp__srp-word-8"]'],
      ["pierce/[data-testid='import-srp__srp-word-8']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/10."],
      ["[data-testid='import-srp__srp-word-9']"],
      ['xpath///*[@data-testid="import-srp__srp-word-9"]'],
      ["pierce/[data-testid='import-srp__srp-word-9']"],
    ],
    offsetY: 20.8203125,
    offsetX: 7.171875,
  });
  await runner.runStep({
    type: "change",
    value: "process",
    selectors: [
      ["aria/10."],
      ["[data-testid='import-srp__srp-word-9']"],
      ['xpath///*[@data-testid="import-srp__srp-word-9"]'],
      ["pierce/[data-testid='import-srp__srp-word-9']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/11."],
      ["[data-testid='import-srp__srp-word-10']"],
      ['xpath///*[@data-testid="import-srp__srp-word-10"]'],
      ["pierce/[data-testid='import-srp__srp-word-10']"],
    ],
    offsetY: 22.8203125,
    offsetX: 33.171875,
  });
  await runner.runStep({
    type: "change",
    value: "leopard",
    selectors: [
      ["aria/11."],
      ["[data-testid='import-srp__srp-word-10']"],
      ['xpath///*[@data-testid="import-srp__srp-word-10"]'],
      ["pierce/[data-testid='import-srp__srp-word-10']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/12."],
      ["[data-testid='import-srp__srp-word-11']"],
      ['xpath///*[@data-testid="import-srp__srp-word-11"]'],
      ["pierce/[data-testid='import-srp__srp-word-11']"],
    ],
    offsetY: 22.8203125,
    offsetX: 32.171875,
  });
  await runner.runStep({
    type: "change",
    value: "file",
    selectors: [
      ["aria/12."],
      ["[data-testid='import-srp__srp-word-11']"],
      ['xpath///*[@data-testid="import-srp__srp-word-11"]'],
      ["pierce/[data-testid='import-srp__srp-word-11']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/确认私钥助记词"],
      ["[data-testid='import-srp-confirm']"],
      ['xpath///*[@data-testid="import-srp-confirm"]'],
      ["pierce/[data-testid='import-srp-confirm']"],
    ],
    offsetY: 15.8203125,
    offsetX: 162.5,
  });
  await runner.runStep({
    type: "change",
    value: "Sm",
    selectors: [
      ["[data-testid='create-password-new']"],
      ['xpath///*[@data-testid="create-password-new"]'],
      ["pierce/[data-testid='create-password-new']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "keyUp",
    key: "s",
    target: "main",
  });
  await runner.runStep({
    type: "change",
    value: "Smielpf1204.",
    selectors: [
      ["[data-testid='create-password-new']"],
      ['xpath///*[@data-testid="create-password-new"]'],
      ["pierce/[data-testid='create-password-new']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ['aria/确认密码[role="textbox"]'],
      ["[data-testid='create-password-confirm']"],
      ['xpath///*[@data-testid="create-password-confirm"]'],
      ["pierce/[data-testid='create-password-confirm']"],
    ],
    offsetY: 33.203125,
    offsetX: 80.5,
  });
  await runner.runStep({
    type: "change",
    value: "S",
    selectors: [
      ['aria/确认密码[role="textbox"]'],
      ["[data-testid='create-password-confirm']"],
      ['xpath///*[@data-testid="create-password-confirm"]'],
      ["pierce/[data-testid='create-password-confirm']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "keyUp",
    key: "s",
    target: "main",
  });
  await runner.runStep({
    type: "change",
    value: "Smielpf1204.",
    selectors: [
      ['aria/确认密码[role="textbox"]'],
      ["[data-testid='create-password-confirm']"],
      ['xpath///*[@data-testid="create-password-confirm"]'],
      ["pierce/[data-testid='create-password-confirm']"],
    ],
    target: "main",
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/我明白 MetaMask 无法为我恢复此密码。了解更多"],
      ["[data-testid='create-password-terms']"],
      ['xpath///*[@data-testid="create-password-terms"]'],
      ["pierce/[data-testid='create-password-terms']"],
    ],
    offsetY: 6.203125,
    offsetX: 12.5,
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/导入我的钱包"],
      ["[data-testid='create-password-import']"],
      ['xpath///*[@data-testid="create-password-import"]'],
      ["pierce/[data-testid='create-password-import']"],
      ["text/导入我的钱包"],
    ],
    offsetY: 10.203125,
    offsetX: 158.5,
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/知道了！"],
      ["[data-testid='onboarding-complete-done']"],
      ['xpath///*[@data-testid="onboarding-complete-done"]'],
      ["pierce/[data-testid='onboarding-complete-done']"],
      ["text/知道了！"],
    ],
    offsetY: 28.9453125,
    offsetX: 47.5,
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/下一步"],
      ["[data-testid='pin-extension-next']"],
      ['xpath///*[@data-testid="pin-extension-next"]'],
      ["pierce/[data-testid='pin-extension-next']"],
      ["text/下一步"],
    ],
    offsetY: 16,
    offsetX: 134,
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/下一步"],
      ["[data-testid='pin-extension-next']"],
      ['xpath///*[@data-testid="pin-extension-next"]'],
      ["pierce/[data-testid='pin-extension-next']"],
      ["text/下一步"],
    ],
    offsetY: 17,
    offsetX: 136,
  });
  await runner.runStep({
    type: "click",
    target: "main",
    selectors: [
      ["aria/关闭", 'aria/[role="generic"]'],
      ["div.popover-header span"],
      ['xpath///*[@data-testid="popover-close"]/span'],
      ["pierce/div.popover-header span"],
    ],
    offsetY: 8,
    offsetX: 1.5,
  });

  await runner.runAfterAllSteps();
}
