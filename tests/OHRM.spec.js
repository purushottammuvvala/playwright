import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').waitFor();
  await page.getByPlaceholder('Username').click();
 // await page.locator('//input[@class="oxd-input oxd-input--focus"]').click()
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('//span[@class="oxd-userdropdown-tab"]//i[1]').click()
  //await page.getByRole('listitem').filter({ hasText: 'Prasad Collins' }).locator('i').click();
  await page.locator('//a[contains(text(),"Logout")]').click();
});

//import { test, expect } from '@playwright/test';
