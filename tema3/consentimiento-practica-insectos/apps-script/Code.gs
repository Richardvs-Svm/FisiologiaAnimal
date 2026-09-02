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

    return sendResultToPage_(true, name, "");
  } catch (error) {
    console.error("ERROR: " + error.message);
    console.error(error.stack);

    return sendResultToPage_(false, "", error.message);
  }
}

function sendResultToPage_(ok, name, message) {
  var result = JSON.stringify({
    source: "consentimiento-practica-insectos",
    ok: ok,
    name: name,
    message: message,
  }).replace(/</g, "\\u003c");

  return HtmlService.createHtmlOutput(
    "<script>window.top.postMessage(" + result + ", '*');</script>"
  );
}
