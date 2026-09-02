function doPost(e) {
  try {
    var name = e.parameter.nombre;

    if (!name || !name.trim()) {
      throw new Error("No name was received.");
    }

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName("Consentimientos");

    if (!sheet) {
      sheet = spreadsheet.insertSheet("Consentimientos");
      sheet.appendRow(["Fecha y hora", "Nombre"]);
    }

    sheet.appendRow([new Date(), name.trim()]);

    return ContentService.createTextOutput("OK");
  } catch (error) {
    console.error(error);
    return ContentService.createTextOutput("ERROR: " + error.message);
  }
}
