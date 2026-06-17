Feature: Login

  Background:
    Given user is in Login page

  Scenario: Successful login with valid credentials
    When user enters valid credentials
    And clicks Login button
    Then account is successfully logged in

  Scenario: Unsuccessful login with invalid password
    When user enters registered email
    And enters invalid password
    And clicks Login button
    Then show wrong credential login error

  Scenario: Unsuccessful login with unregistered email
    When user enters unregistered email
    And user enters valid password
    And clicks Login button
    Then show unregistered email login error
