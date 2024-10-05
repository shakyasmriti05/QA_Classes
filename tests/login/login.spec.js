// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Click the get started link.
  await page.getByPlaceholder('Email').fill('smri@gmail.com');//fill() or type() used to insert value
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByTestId('submit').click;

  await expect(page.locator('//*[text()="Click on any contact to view the Contact Details"]')).toHaveText('Click on any contact to view the Contact Details');


  await expect(page.locator('//*[text()="Click on any contact to view the Contact Details"]')).toHaveText('Click on any contact to view the Contact Details');

//   await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
