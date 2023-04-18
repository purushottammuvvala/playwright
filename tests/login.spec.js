import { test } from '@playwright/test'

test('', async({browser}) => {
    
   const context =  await browser.newContext({
        storageState: './auth.json'
    })
    const page = await context.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForTimeout(5000)
});