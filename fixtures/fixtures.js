const { test: base } = require('playwright-bdd');
const LoginPage = require('../pages/LoginPage');
const RegisterPage = require('../pages/RegisterPage');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});

module.exports = { test };
