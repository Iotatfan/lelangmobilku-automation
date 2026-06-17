// Generated from: features\deposit.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Deposit', () => {

  test.beforeEach('Background', async ({ Given, context, depositPage }) => {
    await Given('user is on the profile page', null, { context, depositPage }); 
  });
  
  test('Open deposit page from profile menu', { tag: ['@authenticated'] }, async ({ When, depositPage, Then, page }) => { 
    await When('user selects the Deposit menu', null, { depositPage }); 
    await Then('the Deposit page is displayed', null, { depositPage, page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\deposit.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@authenticated"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user is on the profile page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user selects the Deposit menu","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the Deposit page is displayed","stepMatchArguments":[]}]},
]; // bdd-data-end