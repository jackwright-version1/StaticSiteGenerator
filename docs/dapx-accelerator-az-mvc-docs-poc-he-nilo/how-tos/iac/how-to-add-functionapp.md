### Adding additional Azure Resources

#### <u>To Add Function App Resource</u>

Azure FunctionApp resource requires a resource group and an app service plan to provision a functionapp service. Add the following resource block in the terraform file **13-functionapp.tf**. Replace %NAME% with appropriate values.

    resource "azurerm_function_app" "%FA_NAME%" {
        count               = var.create_funcapp ? 1 : 0
        name                = format("%s-func-%s", var.customer_abbreviation, var.environment)
        resource_group_name = azurerm_resource_group.rg.name
        location            = azurerm_resource_group.rg.location
        app_service_plan_id = azurerm_app_service_plan.funcapp_plan[count.index].id
        app_settings = {
            "FUNCTIONS_EXTENSION_VERSION" = "%VERSION%",
            "FUNCTIONS_WORKER_RUNTIME"    = "%RUNTIME%",
        }
        site_config {
            use_32_bit_worker_process = false
        }
        storage_account_name       = azurerm_storage_account.funcapp_sa[count.index].name
        storage_account_access_key = azurerm_storage_account.funcapp_sa[count.index].primary_access_key
        version                    = ''

        lifecycle {
            ignore_changes = [
            app_settings["WEBSITE_RUN_FROM_PACKAGE"],
            ]
        }
    }
    
To enable provisioning of functionapp resource in any environment, the functionapp variables should be set to *true* in the respective environment configuration file. 

Example: $ENV.tfvars

        create_funcappsa   = true
        create_funcappplan = true
        create_funcapp     = true

If these variables are set to false, functionapp will not be deployed in that environment.