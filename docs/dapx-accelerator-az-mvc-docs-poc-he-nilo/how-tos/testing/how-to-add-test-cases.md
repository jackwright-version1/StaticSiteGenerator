## How to add test cases?

This guide explains how you can add tests case to the existing DAPx framework. This Application uses SpecFlow for implementing testing. Follow the below guidelines when adding new test cases.

### Steps to follow

1. Add the SpecFlow [feature file](#feature) with the test scenario written in Gherkin language.
2. Add the [scenario outline](#scenariooutline) for test data in the SpecFlow feature file.
3. Add the [Step Definition](#stepdefinition) file having methods mapped with scenario steps of the feature file.
4. Add the implementation methods in the [Page object](#pageobject) class.

<a name="feature"></a>
#### Feature file

```
Feature: Economy Parking

@Acceptance
Feature: Economy Parking feature
  The parking lot calculator can calculate costs for Economy parking.
<a name="scenariooutline"></a>
Scenario Outline: Calculate Economy Parking Cost
	Given parking lot is Economy
	And parking duration is <duration>
	When the cost estimate is calculated
	Then the parking cost should be <cost>

Examples:
| duration | cost |

```
<a name="stepdefinition"></a>
#### Step Definition File
```
[Given(@"parking duration is (.*)")]
public void GivenParkingDuration(string duration)
{
  _scenarioContext.Add("duration", duration)
}
```

<a name="pageobject"></a>
#### Page Object class

Page object class is used to store the web elements of the web page.

```
public class IncidentListPage : PageManager
{
    #region WebElements

    [FindsBy(How = How.Name, Using = "Parking Lot")]
    public IWebElement ParkType  { get; set; }

    #endregion
}

```
**Note:** For writing locators, [refer this article](https://www.guru99.com/locators-in-selenium-ide.html)
