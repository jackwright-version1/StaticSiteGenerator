# Frequently Asked Questions

## Where can I find the Azure DevOps Configuration?
This information is available in installation guides as Azure DevOps configuration is required for both IaC (for environment pipelines) and Application Development (CI/CD pipelines). This approach is to make sure that each repository can stand on it's own and be taken independently of others. 

Find the IaC Instatllation guide [here](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-iac-poc-he-nilo/browse/docs/installation.md)<br/>
Find the MVC Installation guide [here](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-app-poc-he-nilo/browse/)

## How to setup service connections?
To setup service connection to Azure Cloud, please refer the sub-section "Setup the Service Connection to Azure" in this [installation guide](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-iac-poc-he-nilo/browse/docs/installation.md)

To setup service connction to Sonar cloud, please refer the sub-section "Setup new Azure Service Connection for Sonar Cloud" in this [installation guide](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-app-poc-he-nilo/browse/docs/installation.md)

## Do I need Admin privilege in Microsoft Azure to setup Accelerator?

To setup DAPx accelerator in Azure DevOps, you need to have **OWNER** access for the project. 

## Do I need organization admin privilege to setup the Azure DevOps configuration?

No, You need Project level **admin** privileges for adding service connections. You can request organization admin to setup a project for you with necessary privileges (which is mentioned in our installation guides).

## Do I need to get a paid version of SonarCloud account to setup quality gate?

A licensed version of Sonarcloud is recommended for setting up quality gates as it helps to make your code private and secure. If you go for free version, then the project should be hosted in public repository.


