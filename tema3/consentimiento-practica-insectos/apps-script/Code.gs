const CONSENT_SETTINGS = Object.freeze({
  sheetName: "Consentimientos",
  spreadsheetProperty: "CONSENT_SPREADSHEET_ID",
});

/**
 * Run this once from the Apps Script editor opened through
 * Spreadsheet -> Extensions -> Apps Script.
 *
 * It stores the parent spreadsheet ID and prepares the Consentimientos tab.
 * It does not add a student response.
 */
function configureConsentSpreadsheet() {
  const requestId = "SETUP-" + Utilities.getUuid();
  console.log("[%s] Configuration started.", requestId);

  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    if (!spreadsheet) {
      throw new Error(
        "No parent spreadsheet was found. Open the intended spreadsheet, select Extensions -> Apps Script, and run this function from that bound project.",
      );
    }

    const spreadsheetId = spreadsheet.getId();
    PropertiesService.getScriptProperties().setProperty(
      CONSENT_SETTINGS.spreadsheetProperty,
      spreadsheetId,
    );

    const sheet = getOrCreateConsentSheet_(spreadsheet, requestId);

    console.log(
      "[%s] CONFIGURATION SUCCESSFUL. spreadsheet=%s; spreadsheetId=%s; sheet=%s",
      requestId,
      spreadsheet.getName(),
      spreadsheetId,
      sheet.getName(),
    );

    return {
      ok: true,
      requestId: requestId,
      spreadsheetName: spreadsheet.getName(),
      spreadsheetId: spreadsheetId,
      sheetName: sheet.getName(),
    };
  } catch (error) {
    logError_(requestId, error);
    throw error;
  }
}

/**
 * Read-only deployment health check. Opening the /exec URL directly runs this
 * function and confirms that the signed-in account can reach the web app.
 * It never adds a consent response.
 */
function doGet() {
  const requestId = "HEALTH-" + Utilities.getUuid();
  console.log("[%s] Read-only health check started.", requestId);

  try {
    const spreadsheetId = PropertiesService.getScriptProperties().getProperty(
      CONSENT_SETTINGS.spreadsheetProperty,
    );

    if (!spreadsheetId) {
      throw new Error(
        "The spreadsheet is not configured. Run configureConsentSpreadsheet from the bound Apps Script editor.",
      );
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(CONSENT_SETTINGS.sheetName);

    if (!sheet) {
      throw new Error(
        'The configured spreadsheet is accessible, but the sheet "' +
          CONSENT_SETTINGS.sheetName +
          '" does not exist.',
      );
    }

    console.log(
      "[%s] HEALTH CHECK SUCCESSFUL. spreadsheet=%s; sheet=%s; rows=%s",
      requestId,
      spreadsheet.getName(),
      sheet.getName(),
      sheet.getLastRow(),
    );

    return createResponsePage_({
      ok: true,
      title: "Conexión disponible",
      heading: "Apps Script está listo",
      message: "La hoja configurada es accesible. Esta prueba no añadió ninguna respuesta.",
      details: {
        solicitud: requestId,
        hojaDeCalculo: spreadsheet.getName(),
        pestaña: sheet.getName(),
        filasActuales: sheet.getLastRow(),
      },
    });
  } catch (error) {
    const normalized = normalizeError_(error);
    logError_(requestId, error);

    return createResponsePage_({
      ok: false,
      title: "La conexión no está lista",
      heading: "Ocurrió un error de configuración",
      message: "No se añadió ninguna respuesta. Revisa la configuración y la ejecución indicada.",
      details: {
        solicitud: requestId,
        tipo: normalized.name,
        mensaje: normalized.message,
        detalleTecnico: normalized.stack,
      },
    });
  }
}

/**
 * Receives the standard HTML form POST. Because this is a real browser form
 * submission, it works without fetch or CORS and can use Google sign-in.
 */
function doPost(e) {
  const requestId = Utilities.getUuid();
  const startedAt = new Date();
  const lock = LockService.getScriptLock();

  console.log("[%s] doPost started at %s", requestId, startedAt.toISOString());
  console.log("[%s] Event received: %s", requestId, safeStringify_(e));

  try {
    if (!e || !e.parameter) {
      throw new Error("Apps Script did not provide the expected POST parameter object.");
    }

    const submission = readSubmission_(e.parameter);
    console.log("[%s] Validated submission: %s", requestId, safeStringify_(submission));

    console.log("[%s] Waiting for the spreadsheet write lock.", requestId);
    lock.waitLock(15000);
    console.log("[%s] Spreadsheet write lock acquired.", requestId);

    const spreadsheetId = PropertiesService.getScriptProperties().getProperty(
      CONSENT_SETTINGS.spreadsheetProperty,
    );

    if (!spreadsheetId) {
      throw new Error(
        "The spreadsheet is not configured. Run configureConsentSpreadsheet once from the bound Apps Script editor, then deploy a new version.",
      );
    }

    console.log("[%s] Opening configured spreadsheet ID: %s", requestId, spreadsheetId);
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = getOrCreateConsentSheet_(spreadsheet, requestId);
    const rowBefore = sheet.getLastRow();

    console.log(
      "[%s] Appending response. spreadsheet=%s; sheet=%s; lastRowBefore=%s",
      requestId,
      spreadsheet.getName(),
      sheet.getName(),
      rowBefore,
    );

    sheet.appendRow([
      new Date(),
      submission.nombre,
      submission.aceptacion,
      submission.curso,
      submission.semestre,
      submission.grupo,
      submission.actividad,
      submission.versionConsentimiento,
      submission.paginaOrigen,
      requestId,
    ]);
    SpreadsheetApp.flush();

    const writtenRow = sheet.getLastRow();
    const nameReadBack = sheet.getRange(writtenRow, 2).getDisplayValue();

    if (nameReadBack !== submission.nombre) {
      throw new Error(
        'Write verification failed. Expected name "' +
          submission.nombre +
          '" but read back "' +
          nameReadBack +
          '".',
      );
    }

    const finishedAt = new Date();
    console.log(
      "[%s] SUCCESS. row=%s; verifiedName=%s; durationMs=%s",
      requestId,
      writtenRow,
      nameReadBack,
      finishedAt.getTime() - startedAt.getTime(),
    );

    return createResponsePage_({
      ok: true,
      title: "Aceptación registrada",
      heading: "Gracias, " + submission.nombre + ".",
      message: "Tu aceptación para participar quedó registrada correctamente.",
      details: {
        solicitud: requestId,
        curso: submission.curso,
        semestre: submission.semestre,
        grupo: submission.grupo,
        hoja: sheet.getName(),
        fila: writtenRow,
        fecha: finishedAt.toISOString(),
      },
    });
  } catch (error) {
    const normalized = normalizeError_(error);
    logError_(requestId, error);

    return createResponsePage_({
      ok: false,
      title: "No se pudo registrar la aceptación",
      heading: "Ocurrió un error",
      message:
        "La respuesta no debe considerarse registrada. Comunica este mensaje al docente e incluye el número de solicitud.",
      details: {
        solicitud: requestId,
        tipo: normalized.name,
        mensaje: normalized.message,
        detalleTecnico: normalized.stack,
        eventoRecibido: safeStringify_(e),
      },
    });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
      console.log("[%s] Spreadsheet write lock released.", requestId);
    }
  }
}

function readSubmission_(parameters) {
  const submission = {
    nombre: sanitize_(parameters.nombre, 100),
    aceptacion: sanitize_(parameters.aceptacion, 50),
    curso: sanitize_(parameters.curso, 100),
    semestre: sanitize_(parameters.semestre, 30),
    grupo: sanitize_(parameters.grupo, 30),
    actividad: sanitize_(parameters.actividad, 180),
    versionConsentimiento: sanitize_(parameters.versionConsentimiento, 50),
    paginaOrigen: sanitize_(parameters.paginaOrigen, 500),
  };

  if (!submission.nombre) {
    throw new Error("The submitted name is empty.");
  }

  if (submission.aceptacion !== "Acepto participar") {
    throw new Error("The expected consent statement was not received.");
  }

  return submission;
}

function getOrCreateConsentSheet_(spreadsheet, requestId) {
  let sheet = spreadsheet.getSheetByName(CONSENT_SETTINGS.sheetName);

  if (!sheet) {
    console.log(
      "[%s] Sheet %s does not exist; creating it.",
      requestId,
      CONSENT_SETTINGS.sheetName,
    );
    sheet = spreadsheet.insertSheet(CONSENT_SETTINGS.sheetName);
  }

  if (sheet.getLastRow() === 0) {
    console.log("[%s] Adding the header row.", requestId);
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
      "ID de solicitud",
    ]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 10).setFontWeight("bold");
    SpreadsheetApp.flush();
  }

  return sheet;
}

function sanitize_(value, maxLength) {
  if (typeof value !== "string") return "";

  const clean = value.trim().replace(/\s+/g, " ").slice(0, maxLength);

  // Prevent spreadsheet formula injection.
  return /^[=+\-@]/.test(clean) ? "'" + clean : clean;
}

function createResponsePage_(result) {
  const accent = result.ok ? "#11845b" : "#b42318";
  const pale = result.ok ? "#dff5ec" : "#fee4e2";
  const rows = Object.keys(result.details)
    .map(function (key) {
      return (
        "<tr><th>" +
        escapeHtml_(key) +
        "</th><td><pre>" +
        escapeHtml_(String(result.details[key])) +
        "</pre></td></tr>"
      );
    })
    .join("");

  const html =
    '<!doctype html><html lang="es"><head><meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    "<title>" +
    escapeHtml_(result.title) +
    "</title><style>" +
    "*{box-sizing:border-box}body{min-width:320px;min-height:100vh;margin:0;padding:24px;display:grid;place-items:center;color:#102a43;background:#f4f7fa;font:16px/1.55 system-ui,sans-serif}" +
    ".card{width:min(720px,100%);padding:clamp(22px,5vw,42px);background:#fff;border:1px solid #d7e1ea;border-radius:20px;box-shadow:0 18px 55px rgba(16,42,67,.13)}" +
    ".mark{width:58px;height:58px;display:grid;place-items:center;color:#fff;background:" +
    accent +
    ";border-radius:50%;font-size:28px;font-weight:900}" +
    "h1{margin:18px 0 8px;font:700 clamp(28px,6vw,44px)/1.05 Georgia,serif;color:" +
    accent +
    "}p{margin:0;color:#486581}.status{margin:22px 0;padding:16px;background:" +
    pale +
    ";border-left:5px solid " +
    accent +
    ";border-radius:10px}" +
    "details{margin-top:20px;border-top:1px solid #d7e1ea}summary{padding-top:16px;cursor:pointer;font-weight:800;color:#0b5c9e}" +
    "table{width:100%;margin-top:14px;border-collapse:collapse}th,td{padding:9px;border:1px solid #d7e1ea;text-align:left;vertical-align:top}th{width:165px;background:#f1f6fa}pre{margin:0;white-space:pre-wrap;overflow-wrap:anywhere;font:12px/1.45 ui-monospace,monospace}" +
    "button{width:100%;min-height:48px;margin-top:22px;cursor:pointer;color:#fff;background:#0b5c9e;border:0;border-radius:9px;font:800 15px system-ui,sans-serif}" +
    "</style></head><body><main class=\"card\"><div class=\"mark\">" +
    (result.ok ? "✓" : "!") +
    "</div><h1>" +
    escapeHtml_(result.heading) +
    "</h1><div class=\"status\"><strong>" +
    escapeHtml_(result.title) +
    "</strong><p>" +
    escapeHtml_(result.message) +
    "</p></div><details" +
    (result.ok ? "" : " open") +
    "><summary>Detalles del registro</summary><table>" +
    rows +
    "</table></details><button type=\"button\" onclick=\"window.close()\">Cerrar esta pestaña</button></main></body></html>";

  return HtmlService.createHtmlOutput(html).setTitle(result.title);
}

function normalizeError_(error) {
  return {
    name: error && error.name ? String(error.name) : "UnknownError",
    message: error && error.message ? String(error.message) : String(error),
    stack: error && error.stack ? String(error.stack) : "No stack trace was provided.",
  };
}

function logError_(requestId, error) {
  const normalized = normalizeError_(error);
  console.error(
    "[%s] FAILURE: %s\n%s",
    requestId,
    normalized.message,
    normalized.stack,
  );
}

function safeStringify_(value) {
  try {
    return JSON.stringify(value);
  } catch (error) {
    return "[Could not serialize value: " + String(error) + "]";
  }
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
