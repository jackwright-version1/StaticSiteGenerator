# How to extend Azure DevOps pipelines?

Pipelines for DAPx Accelerator for Web Application is located at [.azure-pipeline](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-app-poc-he-nilo/browse/.azurepipeline) folder in the [MVC Repository](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-app-poc-he-nilo/browse)

The pipeline folder contains below files and folders.

* **scripts** - Scripts folder contains different powershell scripts for various Azure pipeline tasks.
* **templates** - templates folder contains smaller units of tasks in yml files. eg. owasp-dc.yml, code-coverage.yml etc.
* **build-release.yml** - This file is responsible for holding entire CI/CD strategy of MVC application. It has three stages build, test and deployuat. Each stage contains various tasks to fullfil various CI/CD tasks.
* **deployment-pipeline.yml** - Production release is seperated into this file. It will deploy application to staging and production environment. Since manual trigger is preferred for production release, it is seperated in a different file.

## Add new tasks to DevOps pipeline

To add a new task to the pipelines (build-release.yml or deployment-pipeline.yml), follow below steps.

1. Create a new YAML file in the templates folder for the new tasks (eg: performance-testing.yml)
2. Refer the YAML file in the build-release.yml with "template" keyword.
3. Always move PowerShell scripts to "scripts" folder and refer it in the YAML files.


