# Guidelines for editing Configuration

Application configurations should be kept in appsettings.json file of the application. 

1. Always keep secrets in the "Configuration" of the App Service in Azure rather than keeping in the "appsettings.json"
2. Development related settings should be kept in the "appsettings.Development.json"
3. Always include configuration inside the configuration file rather than putting in side the code.
4. No secrets should be checked into the source control.


Note: It is recommended to use Azure App Service Configuration along with KeyVault Reference for securing secrets.
