const { test, expect } = require('@playwright/test');

test('multiple pages', async({context}) => {
    const page = await context.newPage()
    await page.goto('https://www.programsbuzz.com/')

    const newPage = await Promise.all([
        context.waitForEvent('page'),
        page.locator('text=By iVagus Services Pvt. Ltd.').click()
    ])
    //console.log(await newPage.())
    //console.log(await page.title())
});