const SETTINGS = Object.freeze({
  spreadsheetId: "1xnm49YmbpXrgLzFe_c20lWSOEcExb0h1tqIZM6TrkCU",
  sheetName: "Consentimientos",
});

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    const data = JSON.parse(e.postData.contents);
    const name = sanitize_(data.nombre, 100);

    if (!name) {
      return json_({ ok: false, error: "El nombre es obligatorio." });
    }

    const spreadsheet = SpreadsheetApp.openById(SETTINGS.spreadsheetId);
    let sheet = spreadsheet.getSheetByName(SETTINGS.sheetName);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SETTINGS.sheetName);
      sheet.appendRow([
        "Fecha y hora",
        "Nombre",
        "Aceptación",
        "Curso",
        "Semestre",
        "Grupo",
        "Actividad",
        "Versión del consentimiento",
        "Página de origen",
      ]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      name,
      sanitize_(data.aceptacion, 50),
      sanitize_(data.curso, 100),
      sanitize_(data.semestre, 30),
      sanitize_(data.grupo, 30),
      sanitize_(data.actividad, 180),
      sanitize_(data.versionConsentimiento, 50),
      sanitize_(data.paginaOrigen, 500),
    ]);

    return json_({ ok: true });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: "No se pudo guardar el registro." });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function sanitize_(value, maxLength) {
  if (typeof value !== "string") return "";

  const clean = value.trim().replace(/\s+/g, " ").slice(0, maxLength);

  // Evita que una respuesta se interprete como fórmula al abrir la hoja.
  if (/^[=+\-@]/.test(clean)) return "'" + clean;

  return clean;
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
