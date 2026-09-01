const CONFIG = {
  // Replace this with the /exec URL from the deployment created in the
  // spreadsheet-bound Apps Script project.
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbxR0jjB30rKbFC85Lj4Q9btr0CPM0K2pcsHhQRHsdQVAXzcyKUnyXK4l4JVbMWqZWa5tg/exec",
};

const form = document.querySelector("#testForm");
const input = document.querySelector("#nameInput");
const pageError = document.querySelector("#pageError");
const diagnosticLog = document.querySelector("#diagnosticLog");

function timestamp() {
  return new Date().toISOString();
}

function log(level, message, details) {
  const detailText = details === undefined ? "" : `\n${formatDetails(details)}`;
  const line = `[${timestamp()}] [${level}] ${message}${detailText}`;

  diagnosticLog.textContent += `${line}\n\n`;
  diagnosticLog.scrollTop = diagnosticLog.scrollHeight;

  const consoleMethod = console[level.toLowerCase()] || console.log;
  consoleMethod(line);
}

function formatDetails(value) {
  try {
    return typeof value === "string" ? value : JSON.stringify(value, null, 2);
  } catch (error) {
    return `[Could not serialize diagnostic details: ${String(error)}]`;
  }
}

function showPageError(message, error) {
  pageError.textContent = message;
  pageError.hidden = false;
  log("ERROR", message, error instanceof Error ? { message: error.message, stack: error.stack } : error);
}

function configuredUrl() {
  const value = CONFIG.appsScriptUrl.trim();
  const valid = /^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(value);

  log("INFO", "Apps Script URL validation completed.", {
    configuredValue: value,
    isValidExecUrl: valid,
  });

  return valid ? value : null;
}

window.addEventListener("error", (event) => {
  showPageError("An uncaught JavaScript error occurred on the page.", {
    message: event.message,
    filename: event.filename,
    line: event.lineno,
    column: event.colno,
    stack: event.error?.stack || "No stack trace was provided.",
  });
});

window.addEventListener("unhandledrejection", (event) => {
  showPageError("An unhandled Promise rejection occurred on the page.", {
    reason: String(event.reason),
    stack: event.reason?.stack || "No stack trace was provided.",
  });
});

form.addEventListener("submit", (event) => {
  pageError.hidden = true;

  try {
    const endpoint = configuredUrl();
    const value = input.value.trim();

    log("INFO", "Submit button selected.", {
      rawInput: input.value,
      trimmedInput: value,
      online: navigator.onLine,
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
    });

    if (!endpoint) {
      event.preventDefault();
      showPageError(
        "The Apps Script deployment URL is missing or invalid. Edit CONFIG.appsScriptUrl in script.js.",
        { currentValue: CONFIG.appsScriptUrl },
      );
      return;
    }

    if (!value) {
      event.preventDefault();
      showPageError("The input is empty. Enter any test value before submitting.");
      input.focus();
      return;
    }

    form.action = endpoint;

    const outgoingUrl = new URL(endpoint);
    outgoingUrl.searchParams.set("name", value);

    log("INFO", "The browser is about to open the Apps Script request in a new tab.", {
      method: "GET",
      target: "_blank",
      outgoingUrl: outgoingUrl.toString(),
      expectedResult:
        "A new tab should show either WRITE SUCCESSFUL with the exact sheet row, or WRITE FAILED with a stack trace.",
    });
  } catch (error) {
    event.preventDefault();
    showPageError("The page failed while preparing the request.", error);
  }
});

log("INFO", "Diagnostic page loaded.", {
  documentReadyState: document.readyState,
  pageUrl: window.location.href,
  online: navigator.onLine,
  appsScriptUrlConfigured: CONFIG.appsScriptUrl,
});

