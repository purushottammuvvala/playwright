import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Let me hack!' }).click();
  await page.getByTestId('ContactName').click();
  await page.getByTestId('ContactName').fill('ranjith');
  await page.getByText('MessageSubmit').click();
  await page.getByTestId('ContactEmail').click();
  await page.getByTestId('ContactEmail').fill('ranjith');
  await page.getByTestId('ContactEmail').press('CapsLock');
  await page.getByTestId('ContactEmail').press('CapsLock');
  await page.getByTestId('ContactEmail').fill('ranjith@gmail.com');
  await page.getByTestId('ContactPhone').click();
  await page.getByTestId('ContactPhone').fill('09999999999');
  await page.getByTestId('ContactSubject').click();
  await page.getByTestId('ContactSubject').fill('ra@gmail.com');
  await page.getByTestId('ContactDescription').click();
  await page.getByTestId('ContactDescription').fill('hello how are you doing good');
  await page.getByRole('button', { name: 'Submit' }).click();
});