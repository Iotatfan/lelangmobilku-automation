const { createBdd } = require('playwright-bdd');
const { test } = require('../fixtures/fixtures');
const { expect } = require('@playwright/test');
const testData = require('../data/testData.json');

const { Given, When, Then } = createBdd(test);

Given('user is in Login page', async ({ loginPage }) => {
  await loginPage.goto();
});

When('user enters valid credentials', async ({ loginPage }) => {
  const email = testData.existingUser.email;
  const password = testData.existingUser.password;
  await loginPage.fillCredentials(email, password);
});

When('clicks Login button', async ({ loginPage }) => {
  await loginPage.clickLoginButton();
});

Then('account is successfully logged in', async ({ loginPage }) => {
  const isSuccess = await loginPage.isSuccessfulLogin();
  expect(isSuccess).toBeTruthy();
});

When('user enters registered email', async ({ loginPage }) => {
  loginPage.tempEmail = testData.existingUser.email;
});

When('enters invalid password', async ({ loginPage }) => {
  const password = testData.invalidPassword.password;
  await loginPage.fillCredentials(loginPage.tempEmail, password);
});

Then('show error message {string}', async ({ loginPage }, errorMessage) => {
  const actualMessage = await loginPage.getErrorMessage();
  expect(actualMessage).toContain(errorMessage);
});

When('user enters unregistered email', async ({ loginPage }) => {
  loginPage.tempEmail = testData.unregisteredUser.email;
});

When('user enters valid password', async ({ loginPage }) => {
  const password = testData.existingUser.password;
  await loginPage.fillCredentials(loginPage.tempEmail, password);
});
