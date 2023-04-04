@loginMain @dev @onMerge
Feature: Login Main
  As an Argos customer
  I want to login to my account
  So that I can access my profile, my order or proceed to pay online checkout

  Scenario: Login - Page Layout - guest user
    Given I am a guest user
    When I navigate to the login page
    Then I should see the sign in title
    And I should see the email address field
    And I should not see the email error message
    And I should see the password field
    And I should see the forgot password link
    And I should see the sign in button
    And I should see the register link