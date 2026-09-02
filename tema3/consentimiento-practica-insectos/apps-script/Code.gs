function doPost(e) {
  try {
    console.log("Request received: " + JSON.stringify(e));

    var name = e.parameter.nombre;

    if (!name || !name.trim()) {
      throw new Error("No name was received in the field called 'nombre'.");
    }

    name = name.trim();

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName("Consentimientos");

    if (!sheet) {
      sheet = spreadsheet.insertSheet("Consentimientos");
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Fecha y hora", "Nombre"]);
    }

    var date = new Date();
    sheet.appendRow([date, name]);

    console.log("SUCCESS: " + name + " was added at " + date);

    return ContentService.createTextOutput(
      "SUCCESS\n\n" +
        "Name: " + name + "\n" +
        "Date and time: " + date + "\n\n" +
        "The response was added to the Consentimientos sheet."
    );
  } catch (error) {
    console.error("ERROR: " + error.message);
    console.error(error.stack);

    return ContentService.createTextOutput(
      "ERROR\n\n" +
        error.message + "\n\n" +
        "Stack trace:\n" +
        (error.stack || "No stack trace available.")
    );
  }
}
