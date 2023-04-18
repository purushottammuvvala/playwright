const playwright = require('@playwright/test');

(async () => {

    //code execution happens within here
     const browser = await playwright["chromium","firefox"].launch({
        headless: false
     })

     //context
     const context = await browser.newContext();

     //page
     const page = await context.newPage();
    //    const context =  await page.newContext({
     
    //     await page.goto('https://automationintfesting.online/')
    //     await page.waitForTimeout(5000)
    // });
    await page.goto('https://demosite.executeautomation.com/')
    await page.getByText('UserName').fill('hello')
})()