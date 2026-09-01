/**
 * TEST-ONLY GOOGLE APPS SCRIPT
 *
 * Attach this script to the spreadsheet named "test1" by opening the sheet
 * and selecting Extensions -> Apps Script.
 *
 * This version intentionally uses doGet, like the working congress check-in
 * script. The submitted value will therefore appear in the URL. Do not use
 * this test implementation for private or sensitive information.
 */

function doGet(e) {
  const requestId = Utilities.getUuid();
  const startedAt = new Date();

  console.log("[%s] doGet started at %s", requestId, startedAt.toISOString());
  console.log("[%s] Event received: %s", requestId, safeStringify_(e));

  try {
    if (!e || !e.parameter) {
      throw new Error("Apps Script did not provide the expected event parameter object.");
    }

    const rawName = e.parameter.name;
    console.log("[%s] Raw name parameter: %s", requestId, String(rawName));

    if (typeof rawName !== "string") {
      throw new Error(
        'The URL reached doGet, but the required parameter "name" was not provided. ' +
          'Expected a URL ending in ?name=Something.',
      );
    }

    const name = rawName.trim();

    if (!name) {
      throw new Error('The parameter "name" was received, but it was empty.');
    }

    const result = writeName_(name, requestId);
    const finishedAt = new Date();

    console.log(
      "[%s] SUCCESS. Spreadsheet=%s; sheet=%s; row=%s; durationMs=%s",
      requestId,
      result.spreadsheetName,
      result.sheetName,
      result.row,
      finishedAt.getTime() - startedAt.getTime(),
    );

    return createResultPage_({
      ok: true,
      title: "WRITE SUCCESSFUL",
      message: 'The value "' + name + '" was added to the spreadsheet.',
      details: {
        requestId: requestId,
        spreadsheetName: result.spreadsheetName,
        spreadsheetId: result.spreadsheetId,
        sheetName: result.sheetName,
        row: result.row,
        column: 1,
        receivedValue: name,
        startedAt: startedAt.toISOString(),
        finishedAt: finishedAt.toISOString(),
        durationMs: finishedAt.getTime() - startedAt.getTime(),
      },
    });
  } catch (error) {
    const finishedAt = new Date();
    const normalizedError = normalizeError_(error);

    console.error(
      "[%s] FAILURE after %s ms: %s\n%s",
      requestId,
      finishedAt.getTime() - startedAt.getTime(),
      normalizedError.message,
      normalizedError.stack,
    );

    return createResultPage_({
      ok: false,
      title: "WRITE FAILED",
      message: normalizedError.message,
      details: {
        requestId: requestId,
        errorName: normalizedError.name,
        errorMessage: normalizedError.message,
        stack: normalizedError.stack,
        startedAt: startedAt.toISOString(),
        finishedAt: finishedAt.toISOString(),
        durationMs: finishedAt.getTime() - startedAt.getTime(),
        receivedEvent: safeStringify_(e),
      },
    });
  }
}

/**
 * Run this function manually once from the Apps Script editor.
 * It tests spreadsheet access without involving GitHub or a web deployment.
 * A successful run adds exactly one cell containing TEST FROM SCRIPT EDITOR.
 */
function testWriteFromEditor() {
  const requestId = "EDITOR-" + Utilities.getUuid();
  console.log("[%s] Manual editor test started.", requestId);

  try {
    configureSpreadsheetFromEditor_(requestId);
    const result = writeName_("TEST FROM SCRIPT EDITOR", requestId);
    console.log("[%s] Manual editor test succeeded: %s", requestId, safeStringify_(result));
    return result;
  } catch (error) {
    const normalizedError = normalizeError_(error);
    console.error(
      "[%s] Manual editor test failed: %s\n%s",
      requestId,
      normalizedError.message,
      normalizedError.stack,
    );
    throw error;
  }
}

function configureSpreadsheetFromEditor_(requestId) {
  console.log("[%s] Reading the parent spreadsheet from the script editor.", requestId);
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  if (!spreadsheet) {
    throw new Error(
      "getActiveSpreadsheet() returned null during editor setup. " +
        "Open test1, select Extensions -> Apps Script, and run testWriteFromEditor from that bound project.",
    );
  }

  const spreadsheetId = spreadsheet.getId();
  PropertiesService.getScriptProperties().setProperty("SPREADSHEET_ID", spreadsheetId);

  console.log(
    "[%s] Saved parent spreadsheet connection: name=%s; id=%s; url=%s",
    requestId,
    spreadsheet.getName(),
    spreadsheetId,
    spreadsheet.getUrl(),
  );
}

function writeName_(name, requestId) {
  console.log("[%s] Reading SPREADSHEET_ID from Script Properties.", requestId);
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");

  if (!spreadsheetId) {
    throw new Error(
      "SPREADSHEET_ID is not configured. Run testWriteFromEditor once from the bound Apps Script editor before deploying the web app.",
    );
  }

  console.log("[%s] Opening spreadsheet by stored ID: %s", requestId, spreadsheetId);
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);

  console.log(
    "[%s] Spreadsheet opened: name=%s; id=%s; url=%s",
    requestId,
    spreadsheet.getName(),
    spreadsheet.getId(),
    spreadsheet.getUrl(),
  );

  console.log("[%s] Requesting the first sheet tab.", requestId);
  const sheets = spreadsheet.getSheets();
  const sheet = sheets[0];

  if (!sheet) {
    throw new Error("The spreadsheet exists, but it does not contain a sheet tab.");
  }

  const rowBefore = sheet.getLastRow();
  console.log(
    "[%s] First sheet found: name=%s; lastRowBefore=%s; maxRows=%s; maxColumns=%s",
    requestId,
    sheet.getName(),
    rowBefore,
    sheet.getMaxRows(),
    sheet.getMaxColumns(),
  );

  console.log("[%s] Appending one cell with value: %s", requestId, name);
  sheet.appendRow([name]);
  SpreadsheetApp.flush();

  const rowAfter = sheet.getLastRow();
  const writtenValue = sheet.getRange(rowAfter, 1).getDisplayValue();

  console.log(
    "[%s] Append completed: lastRowAfter=%s; valueReadBack=%s",
    requestId,
    rowAfter,
    writtenValue,
  );

  if (writtenValue !== name) {
    throw new Error(
      'The append operation finished, but verification failed. Expected "' +
        name +
        '" and read back "' +
        writtenValue +
        '".',
    );
  }

  return {
    spreadsheetName: spreadsheet.getName(),
    spreadsheetId: spreadsheet.getId(),
    sheetName: sheet.getName(),
    row: rowAfter,
    valueReadBack: writtenValue,
  };
}

function createResultPage_(result) {
  const statusColor = result.ok ? "#137a52" : "#b42318";
  const statusBackground = result.ok ? "#e3f5ed" : "#fee4e2";
  const detailRows = Object.keys(result.details)
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
    '<!doctype html><html lang="en"><head><meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    "<title>Apps Script diagnostic</title>" +
    "<style>" +
    "body{margin:0;padding:24px;color:#102a43;background:#f4f7fa;font:16px/1.5 system-ui,sans-serif}" +
    ".card{max-width:900px;margin:0 auto;padding:24px;background:white;border:1px solid #d7e1ea;border-radius:16px;box-shadow:0 16px 45px rgba(16,42,67,.12)}" +
    "h1{margin-top:0;color:" +
    statusColor +
    "}.status{padding:16px;background:" +
    statusBackground +
    ";border-left:5px solid " +
    statusColor +
    ";border-radius:8px}" +
    "table{width:100%;margin-top:20px;border-collapse:collapse}th,td{padding:10px;border:1px solid #d7e1ea;text-align:left;vertical-align:top}th{width:190px;background:#f1f6fa}pre{margin:0;white-space:pre-wrap;overflow-wrap:anywhere;font:13px/1.45 ui-monospace,monospace}" +
    "</style></head><body><main class=\"card\"><h1>" +
    escapeHtml_(result.title) +
    "</h1><div class=\"status\">" +
    escapeHtml_(result.message) +
    "</div><h2>Complete diagnostic details</h2><table>" +
    detailRows +
    "</table><p>Also inspect <strong>Apps Script -> Executions</strong> using the requestId above.</p></main></body></html>";

  return HtmlService.createHtmlOutput(html).setTitle("Apps Script diagnostic");
}

function normalizeError_(error) {
  return {
    name: error && error.name ? String(error.name) : "UnknownError",
    message: error && error.message ? String(error.message) : String(error),
    stack: error && error.stack ? String(error.stack) : "No stack trace was provided.",
  };
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
