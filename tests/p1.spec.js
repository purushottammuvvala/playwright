const { test, expect } = require('@playwright/test');

test('hotstar', async({page}) => {
    await page.goto('https://www.youtube.com/')
    await page.waitForResponse(response =>{
        return response.request().resourceType() === "xhr"
    })
    await page.close()
});