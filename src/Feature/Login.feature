# Extent reports
#add library
#add extent-confif.xml file
#add plugin "com.cucumber.listener.ExtentCucumberFormatter"
#add Extentreportformatter in a class in runner class



@Smoke
Feature: Login
  
  In order to perform successful login
  As a user
  i want to enter the correct username and password

  #background is used if same steps in multiple scenario
  Background: 
    Given user navigates to facebook website
    When user validates the homepage title

  Scenario: In order to verify the login to facebook
    Then user entered "valid" username
    And user entered "valid" password
    Then user "shouldbe" successfully logged in

  #adding multiple scenario also mapped with Login steps
  Scenario: In order to verify the login to facebook with Invalid user
    Then user entered "Invalid" username
    And user entered "Invalid" password
    Then user "shouldnotbe" successfully logged in
