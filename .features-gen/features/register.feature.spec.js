// Generated from: features\register.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Register', () => {

  test.beforeEach('Background', async ({ Given, registerPage }) => {
    await Given('user is in Registration page', null, { registerPage }); 
  });
  
  test('Successful registration', async ({ When, registerPage, And, Then }) => { 
    await When('user enters valid personal details', null, { registerPage }); 
    await And('click next button', null, { registerPage }); 
    await And('enters valid bank account details', null, { registerPage }); 
    await And('clicks Register button', null, { registerPage }); 
    await Then('account is successfully created', null, { registerPage }); 
  });

  test('Unsuccessful registration with existing email', async ({ When, registerPage, And, Then }) => { 
    await When('user enters existing email', null, { registerPage }); 
    await And('click next button', null, { registerPage }); 
    await Then('show email already exists register error', null, { registerPage }); 
  });

  test('Unsuccessful registration with invalid email', async ({ When, registerPage, Then }) => { 
    await When('user enters invalid email', null, { registerPage }); 
    await Then('show invalid email register error', null, { registerPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\register.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given user is in Registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user enters valid personal details","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And click next button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And enters valid bank account details","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And clicks Register button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then account is successfully created","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given user is in Registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When user enters existing email","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And click next button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then show email already exists register error","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given user is in Registration page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When user enters invalid email","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then show invalid email register error","stepMatchArguments":[]}]},
]; // bdd-data-end