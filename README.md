# AAD-ADAL-JWT-NETCore #

Example project that uses **ADAL.js** to authenticate with **Azure Active Directory** and use the **JWT** access
token with a **.NET Core** API.

## Configure ##

You need a Azure Active Directory and a registered application that will be the client.

Edit `appsettings.json` (or user secrets in Visual Studio) and add this:

```json
{
  "ADAL": {
    "TenantId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "ClientId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  }
}
```
