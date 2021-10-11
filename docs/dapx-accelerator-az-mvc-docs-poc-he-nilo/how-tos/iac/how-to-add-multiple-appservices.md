### Customizing Azure Environments

#### <u>To add multiple app service in an environment</u>

Define multiple app service names as variables under environment configuration file $ENV.tfvars.

            appservice_names = [
                {
                    name = "$APP-1"
                },
                {
                    name = "$APP-2"
                }

            ]

            appserviceslot_names = [
                {
                    name = "$ENV"
                }
            ]
    
The variable 'appservice_names' is defined as list type in variables.tf file.    
While creating appservice resources, the resource block enumerates through the appservice_names resulting in multile AppServices.

            resource "azurerm_app_service" "appservice" {
                for_each            = { for app in var.appservice_names : app.name => app }
                name                = "${var.customer_abbreviation}-app-${each.value.name}"
                location            = azurerm_resource_group.rg.location
                resource_group_name = azurerm_resource_group.rg.name
                app_service_plan_id = azurerm_app_service_plan.plan.id

            }