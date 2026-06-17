const { createBdd } = require('playwright-bdd');
const { test } = require('../fixtures/fixtures');
const { expect } = require('@playwright/test');

const { Given, When, Then } = createBdd(test);

Given('user is on the profile page', async ({ context, depositPage }) => {
  const baseUrl = process.env.BASE_URL;

  await context.addCookies([
    {
      name: 'access_token',
      value: process.env.ACCESS_TOKEN,
      url: baseUrl,
    },
    {
      name: 'expiry_time',
      value: process.env.EXPIRY_TIME,
      url: baseUrl,
    },
    {
      name: 'refresh_token',
      value: process.env.REFRESH_TOKEN,
      url: baseUrl,
    },
  ]);

  await depositPage.gotoProfile();
});

When('user selects the Deposit menu', async ({ depositPage }) => {
  await depositPage.clickDepositMenu();
});

Then('the Deposit page is displayed', async ({ depositPage, page }) => {
  await expect(page).toHaveURL(depositPage.depositPath);
});
