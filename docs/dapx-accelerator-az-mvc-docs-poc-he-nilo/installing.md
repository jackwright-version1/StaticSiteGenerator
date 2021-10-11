# Installation
The accelerator is composed of a number of different code repositories, each dealing with different aspects such as “Infrastructure as Code (IAC)” or application code.

## Assumptions
1. You have a basic understanding of related concepts such as Azure, Azure DevOps, IAC, .NET development

2. This accelerator assumes use of Azure DevOps to run DevOps pipelines and to store the codebase

## Prerequisites

1. You have access to the target Azure DevOps instance. For installing extensions, get it touch with Organization admin to get it approved.

2. You have access to the  Azure DevOps Project into which the accelerator will be cloned. Project admin access is needed to add Service connections.

3. You have the necessary permissions to create an Azure Service Connection which will be used to provision resources. This is only required if one is not already available for use.

4. You have access to the DAPx project hosting the relevant repositories to be cloned. [Link](https://git.version1.com/projects/VDAPX)

5. You have the access to Microsoft Azure environment with necessary permission to create Service connections. An **Owner** access is preferred. 

## Repositories
| Name| Repository | Description |
| ---------- | ---------- | ----------- |
| **Documentation** | [**dapx-accelerator-az-mvc-docs-poc-he-nilo**](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-docs-poc-he-nilo) | **Documentation (This Repo)** |
| IaC | [dapx-accelerator-az-mvc-iac-poc-he-nilo](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-iac-poc-he-nilo) | Terraform code to create infrastructure |
| App | [dapx-accelerator-az-mvc-app-poc-he-nilo](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-app-poc-he-nilo) | .NET Core MVC application |

## Installation Instructions

### 1. Clone into your Azure DevOps Project
At this point, you are effectively taking the latest version of the accelerator and making your own copy of it for you project. This will cut all linkage back to the parent accelerator and you are free to edit your copy of the accelerator as you see fit. This is something you will need to do to ensure you adhere to your customer's naming conventions and standards etc. More information on how to do this can be found in our [how-tos](../getting-started/how-tos/readme.md).

1. If you haven’t already done so, create your Azure DevOps project and open it

2. Open the repositories tab and it will default to a repository with the same name as the project

3. On the top menu where the repo name is mentioned, press the down arrow and click the option to “Import repository”

4. Import the repositories listed in the table. Choose the name of the repo based on agreed naming conventions but please use something sensible and consistent to distinguish between the repositories. Sample names are given in the table. You will also need to provide authentication. Please contact the DAPx team for the username and personal access token to use for importing if you have any issues.

### 2. Configure pipelines and deploy
Once you have cloned the repositories into your Azure DevOps project, you can now go ahead with installing these onto your Azure DevOps project and getting pipelines setup etc.

1. Follow the installation instructions for the Infrastructure As Code repository. This will create the resource groups representing each environment. Please see the readme in that repository for those installation instructions.

2. Follow the installation instructions for the MVC repository. This will install the CI/CD pipelines and execute these to deploy the application to the dev environment. Please see the readme in that repository for those installation instructions.
