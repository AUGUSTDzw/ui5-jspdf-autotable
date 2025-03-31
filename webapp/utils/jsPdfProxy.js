sap.ui.define([
  "com/dzw/docexport/libs/jsPDF"
], function (jsPDFlib) {
  "use strict";

  return {
    
    //Find jsPDF source on https://cdnjs.com/libraries/jspdf
    
    getJsPdfDoc: function(){
      var doc = new jsPDF(); 
      return doc; 
    }

  };
}
);