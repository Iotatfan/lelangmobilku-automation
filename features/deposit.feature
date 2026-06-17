@authenticated
Feature: Deposit

  Background:
    Given user is on the profile page

  Scenario: Open deposit page from profile menu
    When user selects the Deposit menu
    Then the Deposit page is displayed
