## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Fri Mar 28 2025 15:57:56 GMT+0800 (China Standard Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.14.5|
|**Generation Platform**<br>Visual Studio Code|
|**Template Used**<br>simple|
|**Service Type**<br>SAP System (ABAP On Premise)|
|**Service URL**<br>https://tchddi35.bmwbrill.cn:8443/sap/opu/odata/sap/ZW_FLIGHT_SRV|
|**Module Name**<br>docexport|
|**Application Title**<br>App Title|
|**Namespace**<br>com.dzw|
|**UI5 Theme**<br>sap_fiori_3|
|**UI5 Version**<br>1.71.73|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## docexport

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)

---
### manifest.json
#### add jspdf + autotable js
```json
    "resources": {
      "css": [
        {
          "uri": "css/style.css"
        }
      ],
      "js": [
        { "uri": "libs/jsPDF.js" },
        { "uri": "libs/jspdfautotablemin.js" }
      ]
    },
```

#### comment gitfillColor() in  jspdfautotablemin.js
```json
            // doc.getDocument().setFillColor(doc.getDocument().getFillColor());

```

## USAGE
```js
   var doc = new jsPDF("p", "pt");

   doc.text("Hello, World!", 10, 10, {});

   autoTable(doc, {
      head: [["Name", "Email", "Country"]],
      body: [
        ["David", "david@example.com", "Sweden"],
        ["Castille", "castille@example.com", "Spain"],
        // ...
      ],
   });

```

### Result example
![alt text](img/pdf-demo-result.png)





