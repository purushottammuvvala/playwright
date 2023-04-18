// @ts-check
const { test, expect } = require('@playwright/test');

const data=["ranjith",
"ranjith@email.com",
"8383838338",
"hello@gmail.com",
"hello subject",
"m"
]

test('has title', async ({ page }) => {
  await page.goto('https://automationintesting.online/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Restful-booker-platform demo/);

  
  await page.getByTestId('ContactName').fill(data[0])
  await page.getByTestId('ContactEmail').fill(data[1])
  await page.getByLabel('Phone').fill(data[2])
  await page.locator('#subject').fill(data[3])
  await page.locator('#description').fill(data[3])
  await page.getByRole('button',{name: 'Submit'}).click()

  await page.getByRole('button',{name:"Book this room"}).click()

  await page.getByPlaceholder('Firstname').fill(data[0])
  await page.getByPlaceholder('Lastname').fill(data[5])
  await page.locator("//input[@class='form-control room-email']").fill(data[3])
  await page.locator("//input[@class='form-control room-phone']").fill(data[2])
  await page.getByRole('button',{name: "Back"}).hover()
  await page.getByRole('button',{name: "Book"})
});


// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
