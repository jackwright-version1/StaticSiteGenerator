### Customizing Azure Environments

Each environment in Azure consists of following resources. To create an environment, add the following resources in a terraform file(.tf) in root folder.
 * Resource Group
 * Key Vault
 * App Service Plan
 * App Service(production)
 * App Service(staging)
 * Appilcation insights
 * Storage account

Environment specific configurations for each azure environment is defined under **config/eun** folder. Create **$ENV.tfvars** file to define SKU, location, subscription and tags related information. Sample environment configuration is given below:
            
            location             = "northeurope"
            location_abbreviated = "eun"
            subscription         = $ENV
            environment          = $ENV

            storage_account_tier             = "Standard"
            storage_account_replication_type = "LRS"
            storage_account_kind             = "StorageV2"

            app_service_plan_sku_size = "S1"
            app_service_plan_sku_tier = "Standard"
            apim_sku_name             = " "
            enable_app_insights       = true

            environment_tags = {
                Lifecycle   = " "
                Environment = $ENV
            }

#### <u> To add an AppService Plan in Azure </u>

Add the following resource block in the terraform file **14-appservice.tf**

        resource "azurerm_app_service_plan" "%PLAN_NAME%" {
            name                = format("%s-plan-%s", var.customer_abbreviation, var.environment)
            location            = azurerm_resource_group.rg.location
            resource_group_name = azurerm_resource_group.rg.name
            kind                = "Windows"

            sku {
                tier = var.app_service_plan_sku_tier
                size = var.app_service_plan_sku_size
            }

            tags = local.tags
        }