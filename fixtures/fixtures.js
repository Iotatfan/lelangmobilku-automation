const { test: base } = require('playwright-bdd');
const LoginPage = require('../pages/LoginPage');
const RegisterPage = require('../pages/RegisterPage');
const DepositPage = require('../pages/DepositPage');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  depositPage: async ({ page }, use) => {
    await use(new DepositPage(page));
  },
});

module.exports = { test };
