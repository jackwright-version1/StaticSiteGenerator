### Adding additional Azure Resources

#### <u> To enable Azure monitor alerts for a resource </u>

Azure monitor alerts are currently enabled on app-services and storage accounts. To enable alert on app-service, add the following resource block in the terraform file **10-monitor.tf**. Use export templates feature for alerts in azure portal to get all the values required to configure this resource.

    resource "azurerm_monitor_metric_alert" "%ALERT_NAME%" {
        name                = format("%s-%s-%s", var.customer_abbreviation, "%ALERT_NAME%", var.environment)
        scopes              = [data.azurerm_app_service.app_name.id]
        resource_group_name = data.azurerm_resource_group.app_rg.name
        description         = "%CONDITION%"
        severity            = " "
        enabled             = "true|false"
        frequency           = " "
        window_size         = " "
        criteria {
            metric_namespace = "Microsoft.Web/sites"
            metric_name      = "%METRIC_NAME%" 
            aggregation      = ''
            operator         = ''
            threshold        = ''
        }
        action {
            action_group_id = azurerm_monitor_action_group.dapx_alert.id
        }
    }
    
The alerts configured in **10-monitor.tf** file, triggers a mail to action-group with default mail id "dapxteam@version1.com". To modify the mail address, change the value of "alert_email" variable in **00-variables.tf** file.

    variable "alert_email" {
        type        = string
        description = "Email address to be included in alert_action_group"
        default     = "%EMAIL%"
    }

**Note:** To enable alert for a storage account use "Microsoft.Storage/storageAccounts" as metric_namespace

