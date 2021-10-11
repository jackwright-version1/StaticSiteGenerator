## How to extend unit tests and code coverage?

This guide explains how you can add unit tests and verify the code coverage in the DAPx Accelerator. 

### How to add Unit Tests

For unit testing the Application uses XUnit. 

1. Create new class in a folder.
2. Add [Fact] for each unit test case added to the file.
3. Implement test "Arrange"
4. Implement test "Act"
5. Implement test "Assert"

### Verifying the Code Coverage

Code coverage is a measurement of the amount of code that is run by unit tests - either lines, branches, or methods. Unit tests help to ensure functionality, and provide a means of verification for refactoring efforts.

To verify the code coverage, there is a task in the Azure Pipleline. 

1. Go to Azure Pipelines.
2. Select the pipeline you want to check.
3. Go to "Code Coverage" tab in the next page.

### Guidelines for writing unit tests

Follow below guidelines when adding new unit test cases to the solution.

1. Always create corresponding folders (from mvc projects) in the unit test project to create folders. (eg: Services, Repositories)
2. Make use of Moq framework to implement mock services, repositories and object.
3. Make the unit tests as simple as possible
4. Always mock external dependencies like SQLConnection, TableConnection
5. Test should not duplicate implementatin logic.
6. Tests should be readable. Test case name should be self explanatory.


### Guidelines for improving code coverage

Follow below guidelines for improving the code coverage in the MVC application.

1. Write more unit test cases.
2. Implement well known code coverage frameworks during development to test code coverage.

