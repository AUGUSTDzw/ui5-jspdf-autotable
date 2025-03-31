// const { default: autoTable } = require("jspdf-autotable");

sap.ui.define(
  ["sap/ui/core/mvc/Controller", "com/dzw/docexport/utils/PdfCreator"],
  function (Controller, PdfCreator) {
    "use strict";

    return Controller.extend("com.dzw.docexport.controller.Main", {
      onInit: function () {
        this.oModel = this.getOwnerComponent().getModel();
      },
      onDataExportPDF: function (oEvent) {
        var fnSuccess = function (oData, oResponse) {
          var columns = ["Carrid", "Carrname", "Currcode", "Url"];
          var data = [];
          debugger;
          for (var i = 0; i < oData.results.length; i++) {
            data[i] = [
              oData.results[i].Carrid,
              oData.results[i].Carrname,
              oData.results[i].Currcode,
              oData.results[i].Url,
            ];
          }
          var doc = new jsPDF("p", "pt");

          doc.text("Hello, World!", 10, 10, {});

          // autoTable(doc, {
          //   head: [["Name", "Email", "Country"]],
          //   body: [
          //     ["David", "david@example.com", "Sweden"],
          //     ["Castille", "castille@example.com", "Spain"],
          //     // ...
          //   ],
          // });
          // doc.table(0, 0, data);
          // doc.autoTa=ble(columns, data);
          // autoTable(doc, { html: '#idPDFTable' })

          autoTable(doc, { head: [["Carrid", "Carrname", "Currcode", "Url"]], body: data });
          doc.save("DemoData.pdf");
          // doc.autoTable(columns, data);
          // PdfCreator.createPdfDoc(data);
          // PdfCreator.saveFile("Test.pdf");
        };
        var fnFail = function () {};
        //   this.oModel.read("/AirlineSet", null, null, true, fnSuccess, fnFail);
        this.oModel.read("/AirlineSet", {
          success: fnSuccess,
          error: fnFail,
        });
      },
    });
  }
);
