# How to extend setup MVC project locally?

For customizing application for your needs it should be setup on the local repository. To setup, the application should be downloaded (cloned) from the source code repository. It would be available in your Azure repos. 

## Pre Requisites

1. Microsoft Visual Studio 2019 or Visual Studio Code.
2. Git Support for CLI and Visual Studio.

## How to setup

1. Clone the application locally from the repository using Visual Studio or GIT Commandline commands.
2. Open the application in Visual Studio.
3. Rename the project names with the name you prefer.

   a. To rename MVC project, name of **Nilo.MVC** project inside the "src" folder should be changed.
   
   b. To rename unit testing project, name of **Nilo.MVC.UnitTests** project inside the "test" should be changed.
   
   c. To rename end to end testing project,name of **Nilo.E2ETests** project inside the "test" should be changed.
   
   
4. To change assembly name of each project

   a. Right click on the project in the "Solution Explorer".
   
   b. Select "Properties".
   
   c. Go to "Application" Tab.
   
   d. Change "Assembly Name" (replace Nilo) to a name you prefer.
   
   
5. To change the namespace in each project

   a. Open all .cs files one by one.
   
   b. Go to namespace line in the code.
   
   c. Change the namespace (replace Nilo) to a name you prefer.
   
   Make sure you enter same namespace for each project.

Note: If you change the assembly name of the E2ETesting, the same name should be specified in the Azure Pipeline for end to end testing.
