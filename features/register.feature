Feature: Register
  Background:
    Given user is in Registration page

  Scenario: Successful registration
    When user enters valid personal details
    And click next button
    And enters valid bank account details
    And clicks Register button
    Then account is successfully created

  Scenario: Unsuccessful registration with existing email
    When user enters existing email
    And click next button
    Then show email already exists register error

  Scenario: Unsuccessful registration with invalid email
    When user enters invalid email
    Then show invalid email register error
