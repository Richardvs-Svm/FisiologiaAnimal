function doGet(e) {
  var requestId = Utilities.getUuid();

  try {
    var name = String((e && e.parameter && e.parameter.nombre) || "")
      .trim()
      .replace(/\s+/g, " ");

    if (name.length < 3 || name.length > 100) {
      throw new Error("No se recibió un nombre válido.");
    }

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName("Consentimientos");

    if (!sheet) {
      sheet = spreadsheet.insertSheet("Consentimientos");
      sheet.appendRow(["Fecha y hora", "Nombre"]);
    }

    var date = new Date();
    sheet.appendRow([date, name]);

    console.log("[%s] SUCCESS: %s was registered at %s", requestId, name, date);

    return resultPage_(true, name, date, requestId, "");
  } catch (error) {
    console.error("[%s] ERROR: %s\n%s", requestId, error.message, error.stack || "");
    return resultPage_(false, "", null, requestId, error.message);
  }
}

function resultPage_(ok, name, date, requestId, errorMessage) {
  var accent = ok ? "#11845b" : "#b42318";
  var pale = ok ? "#dff5ec" : "#fee4e2";
  var title = ok ? "Aceptación registrada" : "No se pudo registrar la respuesta";
  var heading = ok
    ? "Gracias, " + escapeHtml_(name) + "."
    : "Ocurrió un error";
  var message = ok
    ? "Tu respuesta ha quedado registrada correctamente."
    : escapeHtml_(errorMessage || "La solicitud no pudo procesarse.");
  var dateText = ok
    ? Utilities.formatDate(date, Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss")
    : "No se añadió ninguna fila.";

  var html =
    '<!doctype html><html lang="es"><head><meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    "<title>" + title + "</title><style>" +
    "*{box-sizing:border-box}body{min-width:320px;min-height:100vh;margin:0;padding:24px;display:grid;place-items:center;color:#102a43;background:radial-gradient(circle at 12% -5%,rgba(20,121,201,.14),transparent 30rem),#f4f7fa;font:16px/1.55 system-ui,sans-serif}" +
    ".card{width:min(700px,100%);padding:clamp(24px,6vw,48px);background:#fff;border:1px solid #d7e1ea;border-radius:20px;box-shadow:0 18px 55px rgba(16,42,67,.13);text-align:center}" +
    ".mark{width:62px;height:62px;margin:0 auto 18px;display:grid;place-items:center;color:#fff;background:" + accent + ";border-radius:50%;font-size:30px;font-weight:900}" +
    ".label{margin:0 0 8px;color:#0b5c9e;font-size:12px;font-weight:850;letter-spacing:.105em;text-transform:uppercase}" +
    "h1{margin:0;font:700 clamp(30px,7vw,48px)/1.05 Georgia,serif;color:" + accent + "}p{color:#486581}" +
    ".status{margin:24px 0;padding:16px;background:" + pale + ";border-left:5px solid " + accent + ";border-radius:10px;text-align:left}" +
    ".details{font-size:13px}.close-note{margin:22px 0 0;font-size:13px}" +
    "</style></head><body><main class=\"card\"><div class=\"mark\">" + (ok ? "✓" : "!") + "</div>" +
    '<p class="label">Fisiología de Animales 2027-1 · Grupo 5417</p>' +
    "<h1>" + heading + "</h1><div class=\"status\"><strong>" + title + "</strong><p>" + message + "</p></div>" +
    '<p class="details">Fecha y hora: ' + escapeHtml_(dateText) + "<br>ID de solicitud: " + escapeHtml_(requestId) + "</p>" +
    '<p class="close-note">Puedes cerrar esta pestaña y volver a la actividad.</p>' +
    "<script>try{google.script.history.replace({}, {}, '');}catch(error){console.log(error);}</script>" +
    "</main></body></html>";

  return HtmlService.createHtmlOutput(html).setTitle(title);
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

