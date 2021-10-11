## Executing specific test scenarios using tags 

This guide explains how you can trigger specific tests cases using Azure Devops. C#, Selenium and SpecFlow are used for implementing E2E testing using build-release pipeline. Follow the below guidelines for executing specific test cases.

### Configure Visual Studio Test task in Azure Devops pipeline

1. Create a build pipeline for generating build artifacts.
2. Create a release pipeline and download the build artifacts.
3. Add "Visual Studio Test" task to the agent job of release pipeline.

Examples :

```
@smoke
Scenario: Verifying the login page
Given user navigated to the URl
When user enters <username>
And user enters <password>

```
4. Enter category=tagname in test filter crtiteria input field.
5. Once the agent job runs, the test scenarios matching tagname will get executed.

**Note:** 
1. While creating test scenario locally group the test scenarios using tags such as @smoke, @regression, @sanity, etc.

2. For more examples on how to use category [click here](https://docs.specflow.org/projects/specflow/en/latest/Execution/Executing-Specific-Scenarios.html)



