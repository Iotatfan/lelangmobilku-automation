// Generated from: features\login.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Login', () => {

  test.beforeEach('Background', async ({ Given, loginPage }) => {
    await Given('user is in Login page', null, { loginPage }); 
  });
  
  test('Successful login with valid credentials', async ({ When, loginPage, And, Then }) => { 
    await When('user enters valid credentials', null, { loginPage }); 
    await And('clicks Login button', null, { loginPage }); 
    await Then('account is successfully logged in', null, { loginPage }); 
  });

  test('Unsuccessful login with invalid password', async ({ When, loginPage, And, Then }) => { 
    await When('user enters registered email', null, { loginPage }); 
    await And('enters invalid password', null, { loginPage }); 
    await And('clicks Login button', null, { loginPage }); 
    await Then('show error message "Username atau Password anda salah"', null, { loginPage }); 
  });

  test('Unsuccessful login with unregistered email', async ({ When, loginPage, And, Then }) => { 
    await When('user enters unregistered email', null, { loginPage }); 
    await And('user enters valid password', null, { loginPage }); 
    await And('clicks Login button', null, { loginPage }); 
    await Then('show error message "Username tidak di temukan/salah"', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user is in Login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user enters valid credentials","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And clicks Login button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then account is successfully logged in","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user is in Login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When user enters registered email","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And enters invalid password","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And clicks Login button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then show error message \"Username atau Password anda salah\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Username atau Password anda salah\"","children":[{"start":20,"value":"Username atau Password anda salah","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user is in Login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When user enters unregistered email","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And user enters valid password","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And clicks Login button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then show error message \"Username tidak di temukan/salah\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Username tidak di temukan/salah\"","children":[{"start":20,"value":"Username tidak di temukan/salah","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end