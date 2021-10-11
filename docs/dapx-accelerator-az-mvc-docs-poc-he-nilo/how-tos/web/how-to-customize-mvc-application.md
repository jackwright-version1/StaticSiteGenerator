## How to customize MVC application?

To add a functionality to the web application in the DAPx Accelerator, the application should be cloned to the local computer at first. To work on the web application, following pre requisites are required.

### Add new Controllers

Follow below guidelines to create new controllers in the .NET Core MVC application.

1. Create Controllers with Business Entity Name (eg: IncidentsController)
2. Define actions with proper HTTP verbs (GET, POST, DELETE etc) for each pages. 
3. Define [models](#models) to communicate between controllers and views.

<a name="models"></a>
### Add new Models

1. Create Models class inside the Models folder located in the MVC Project.
2. All models should be inherited for "IModel" class located in the "Models" folder, if you want to convert it into dictionary for sending to Application insights.

### Add new Repositories

All data access classes should be implemented as the repository classes. 

1. Create all the Repository classes in the "Repository" folder.
2. Repositories should have a corresponding interface, it should help to extend for unit testing.
3. Repository should have business entity name associated with it and should have "Repository" suffix. (eg: IncidentsRepository.cs)

### Add new Services

All business logic should be implemented in the service layer. For that we have a service folder inside the solution.

1. Create all service classes in the "Services" folder.
2. Services should have a corresponding interface which will be useful for implementing unit testing.
3. Services should have business entity name associated with it and should have "Service" suffix (eg: IncidentService.cs)

### Add new Views

1. All views should be inhertited from a Layout file which is WCAG 2.1 AA compliant
2. Avoid inline styles, scripts in the views. Better to move it to dedicated files in side the www folder. 

### Add new packages

To add new packages to MVC project, make use of CLI or Nuget Package Manager available in the Visual Studio. When selecting the packages, please note below points.

1. Always select packages developed by Microsoft.
2. If selecting for a third party package, always run vulnerability tests (OWASP DC task in the pipeline).

