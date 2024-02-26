const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 645,
            height: 774
        })
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('chrome-extension://kabgpgpmafhbdemcdkbkefalpcobchjg/home.html#onboarding/welcome');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(我同意MetaMask的使用条款)'),
            targetPage.locator("[data-testid='onboarding-terms-checkbox']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"onboarding-terms-checkbox\\"])'),
            targetPage.locator(":scope >>> [data-testid='onboarding-terms-checkbox']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 6.5,
                y: 11,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(导入现有钱包)'),
            targetPage.locator("[data-testid='onboarding-import-wallet']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"onboarding-import-wallet\\"])'),
            targetPage.locator(":scope >>> [data-testid='onboarding-import-wallet']"),
            targetPage.locator('::-p-text(导入现有钱包)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 162.5,
                y: 23.40625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(我同意)'),
            targetPage.locator("[data-testid='metametrics-i-agree']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"metametrics-i-agree\\"])'),
            targetPage.locator(":scope >>> [data-testid='metametrics-i-agree']"),
            targetPage.locator('::-p-text(我同意)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 103.5,
                y: 25.65625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(1) > div.MuiFormControl-root > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp\\"]/div[4]/div/div/div[3]/div[1]/div[1]/div)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > div.MuiFormControl-root > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 34.5,
                y: 6.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(1.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-0']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-0\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-0']")
        ])
            .setTimeout(timeout)
            .fill('bike');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.import-srp__srp > div:nth-of-type(1) svg'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp\\"]/div[4]/div/div/div[3]/div[1]/div[2]/label/svg)'),
            targetPage.locator(':scope >>> div.import-srp__srp > div:nth-of-type(1) svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.171875,
                y: 22.0703125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(2.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-1']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-1\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-1']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56.171875,
                y: 12.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(2.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-1']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-1\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-1']")
        ])
            .setTimeout(timeout)
            .fill('attend');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(3.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-2']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-2\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-2']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28.171875,
                y: 13.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(3.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-2']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-2\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-2']")
        ])
            .setTimeout(timeout)
            .fill('buffalo');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(4.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-3']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-3\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-3']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4.171875,
                y: 9.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(4.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-3']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-3\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-3']")
        ])
            .setTimeout(timeout)
            .fill('palm');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(5.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-4']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-4\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-4']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 14.171875,
                y: 16.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(5.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-4']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-4\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-4']")
        ])
            .setTimeout(timeout)
            .fill('aim');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(6.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-5']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-5\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-5']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19.171875,
                y: 14.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(6.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-5']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-5\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-5']")
        ])
            .setTimeout(timeout)
            .fill('salon');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(7.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-6']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-6\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-6']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28.171875,
                y: 20.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(7.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-6']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-6\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-6']")
        ])
            .setTimeout(timeout)
            .fill('display');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.import-srp__srp'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp\\"]/div[4]/div/div/div[3])'),
            targetPage.locator(':scope >>> div.import-srp__srp'),
            targetPage.locator('::-p-text(1.bike2.attend3.buffalo4.palm5.aim6.salon7.display8.9.10.11.12.)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 98.171875,
                y: 512.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(8.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-7']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-7\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-7']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 41.171875,
                y: 23.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(8.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-7']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-7\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-7']")
        ])
            .setTimeout(timeout)
            .fill('hurt');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(9.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-8']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-8\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-8']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 38.171875,
                y: 26.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(9.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-8']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-8\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-8']")
        ])
            .setTimeout(timeout)
            .fill('helmet');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(10.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-9']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-9\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-9']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 7.171875,
                y: 20.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(10.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-9']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-9\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-9']")
        ])
            .setTimeout(timeout)
            .fill('process');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(11.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-10']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-10\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-10']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 33.171875,
                y: 22.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(11.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-10']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-10\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-10']")
        ])
            .setTimeout(timeout)
            .fill('leopard');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(12.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-11']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-11\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-11']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32.171875,
                y: 22.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(12.)'),
            targetPage.locator("[data-testid='import-srp__srp-word-11']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp__srp-word-11\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp__srp-word-11']")
        ])
            .setTimeout(timeout)
            .fill('file');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(确认私钥助记词)'),
            targetPage.locator("[data-testid='import-srp-confirm']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"import-srp-confirm\\"])'),
            targetPage.locator(":scope >>> [data-testid='import-srp-confirm']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 162.5,
                y: 15.8203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='create-password-new']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"create-password-new\\"])'),
            targetPage.locator(":scope >>> [data-testid='create-password-new']")
        ])
            .setTimeout(timeout)
            .fill('Sm');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('s');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='create-password-new']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"create-password-new\\"])'),
            targetPage.locator(":scope >>> [data-testid='create-password-new']")
        ])
            .setTimeout(timeout)
            .fill('Smielpf1204.');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(确认密码[role=\\"textbox\\"])'),
            targetPage.locator("[data-testid='create-password-confirm']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"create-password-confirm\\"])'),
            targetPage.locator(":scope >>> [data-testid='create-password-confirm']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 80.5,
                y: 33.203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(确认密码[role=\\"textbox\\"])'),
            targetPage.locator("[data-testid='create-password-confirm']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"create-password-confirm\\"])'),
            targetPage.locator(":scope >>> [data-testid='create-password-confirm']")
        ])
            .setTimeout(timeout)
            .fill('S');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('s');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(确认密码[role=\\"textbox\\"])'),
            targetPage.locator("[data-testid='create-password-confirm']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"create-password-confirm\\"])'),
            targetPage.locator(":scope >>> [data-testid='create-password-confirm']")
        ])
            .setTimeout(timeout)
            .fill('Smielpf1204.');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(我明白 MetaMask 无法为我恢复此密码。了解更多)'),
            targetPage.locator("[data-testid='create-password-terms']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"create-password-terms\\"])'),
            targetPage.locator(":scope >>> [data-testid='create-password-terms']")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.5,
                y: 6.203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(导入我的钱包)'),
            targetPage.locator("[data-testid='create-password-import']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"create-password-import\\"])'),
            targetPage.locator(":scope >>> [data-testid='create-password-import']"),
            targetPage.locator('::-p-text(导入我的钱包)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 158.5,
                y: 10.203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(知道了！)'),
            targetPage.locator("[data-testid='onboarding-complete-done']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"onboarding-complete-done\\"])'),
            targetPage.locator(":scope >>> [data-testid='onboarding-complete-done']"),
            targetPage.locator('::-p-text(知道了！)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47.5,
                y: 28.9453125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(下一步)'),
            targetPage.locator("[data-testid='pin-extension-next']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"pin-extension-next\\"])'),
            targetPage.locator(":scope >>> [data-testid='pin-extension-next']"),
            targetPage.locator('::-p-text(下一步)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 134,
                y: 16,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(下一步)'),
            targetPage.locator("[data-testid='pin-extension-next']"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"pin-extension-next\\"])'),
            targetPage.locator(":scope >>> [data-testid='pin-extension-next']"),
            targetPage.locator('::-p-text(下一步)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 136,
                y: 17,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(关闭) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('div.popover-header span'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"popover-close\\"]/span)'),
            targetPage.locator(':scope >>> div.popover-header span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1.5,
                y: 8,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
