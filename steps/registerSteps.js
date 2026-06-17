const { createBdd } = require('playwright-bdd');
const { test } = require('../fixtures/fixtures');
const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const testData = require('../data/testData.json');
const { NATIONALITY, NPWP_OPTIONS, ID_CARD_IMAGES } = require('../data/constant');

const { Given, When, Then } = createBdd(test);

function buildValidPersonalDetails(overrides = {}) {
  return {
    givenName: testData.existingUser.givenName,
    surname: testData.existingUser.surname,
    email: faker.internet.email(),
    password: testData.register.password,
    confirmPassword: testData.register.password,
    birthLocation: faker.location.city(),
    idCardNumber: faker.string.numeric(16),
    idCardPicture: faker.helpers.arrayElement(ID_CARD_IMAGES),
    lifetimeIdCard: faker.datatype.boolean(),
    nationality: faker.helpers.arrayElement(NATIONALITY),
    province: testData.register.province,
    city: testData.register.city,
    domicile: faker.location.streetAddress(),
    phone: faker.string.numeric(10),
    job: testData.register.job,
    npwpOption: faker.helpers.arrayElement(NPWP_OPTIONS),
    npwpNumber: faker.string.numeric(15),
    ...overrides
  };
}

Given('user is in Registration page', async ({ registerPage }) => {
  await registerPage.goto();
});

When('user enters valid personal details', async ({ registerPage }) => {
  await registerPage.mockSuccessfulRegistrationAPI();
  await registerPage.fillPersonalDetails(buildValidPersonalDetails());
});

When('proceeds to bank account setup', async ({ registerPage }) => {
  await registerPage.clickNextButton();
});

When('enters valid bank account details', async ({ registerPage }) => {
  const bankName = testData.register.bankName;
  const accountNumber = faker.string.numeric(5);
  const accountHolderName = testData.existingUser.fullName;
  const fundSource = testData.register.fundSource;
  const paymentMethod = testData.register.paymentMethod;
  await registerPage.fillBankAccountDetails(bankName, accountNumber, accountHolderName, fundSource, paymentMethod);
});

When('clicks Register button', async ({ registerPage }) => {
  await registerPage.clickRegisterButton();
});

Then('account is successfully created', async ({ registerPage }) => {
  const isSuccess = await registerPage.isSuccessfulRegistration();
  expect(isSuccess).toBeTruthy();
});

When('user enters existing email', async ({ registerPage }) => {
  await registerPage.fillPersonalDetails(buildValidPersonalDetails({
    email: testData.existingUser.email
  }));
});

Then('show register error message {string}', async ({ registerPage }, errorMessage) => {
  const actualMessage = await registerPage.getErrorMessage();
  expect(actualMessage).toContain(errorMessage);
});

Then('show email already exists register error', async ({ registerPage }) => {
  const hasErrorMessage = await registerPage.hasErrorMessage(registerPage.errorEmailAlreadyExists);
  expect(hasErrorMessage).toBeTruthy();
});

Then('show invalid email register error', async ({ registerPage }) => {
  const hasErrorMessage = await registerPage.hasErrorMessage(registerPage.errorEmailInvalid);
  expect(hasErrorMessage).toBeTruthy();
});

When('user enters invalid email', async ({ registerPage }) => {
  await registerPage.fillPersonalDetails(buildValidPersonalDetails({
    email: testData.invalidEmail.email
  }));
});
