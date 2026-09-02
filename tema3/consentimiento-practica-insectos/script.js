const CONFIG = {
  // Pega aquí la URL /exec del Apps Script vinculado a la hoja de cálculo.
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbyk1WFl7tcsz2VcK8UpakUF_Xm-7e1DXmJ1469yvEuiebSLQEpvpPflUC6EY7zS8w4Lpg/exec",
};

const form = document.querySelector("#consentForm");
const studentName = document.querySelector("#studentName");
const nameError = document.querySelector("#nameError");
const submitButton = document.querySelector("#submitButton");
const submissionPanel = document.querySelector("#submissionPanel");
const confirmedName = document.querySelector("#confirmedName");
const connectionPill = document.querySelector("#connectionPill");
const sourcePage = document.querySelector("#sourcePage");

let confirmationTimer;

function cleanName(value) {
  return value.trim().replace(/\s+/g, " ");
}

function hasCompleteName(value) {
  const cleaned = cleanName(value);
  return cleaned.length >= 3 && cleaned.split(" ").filter(Boolean).length >= 2;
}

function getDeploymentUrl() {
  const value = CONFIG.appsScriptUrl.trim();
  return /^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(value) ? value : null;
}

function showError(message) {
  studentName.setAttribute("aria-invalid", "true");
  nameError.textContent = message;
  nameError.hidden = false;
}

function clearError() {
  studentName.removeAttribute("aria-invalid");
  nameError.hidden = true;
}

function setSubmitting(isSubmitting) {
  submitButton.disabled = isSubmitting;
  submitButton.querySelector("span:first-child").textContent = isSubmitting
    ? "Registrando…"
    : "Acepto participar";
}

function isAppsScriptOrigin(origin) {
  return (
    origin === "https://script.google.com" ||
    origin === "https://script.googleusercontent.com" ||
    origin.endsWith(".googleusercontent.com")
  );
}

const deploymentUrl = getDeploymentUrl();

if (deploymentUrl) {
  form.action = deploymentUrl;
  connectionPill.hidden = true;
} else {
  connectionPill.textContent = "Falta conectar";
}

sourcePage.value = window.location.href;
studentName.addEventListener("input", clearError);

form.addEventListener("submit", (event) => {
  clearError();

  const endpoint = getDeploymentUrl();
  const name = cleanName(studentName.value);

  if (!endpoint) {
    event.preventDefault();
    showError("El formulario aún no está conectado con Google Apps Script.");
    studentName.focus();
    return;
  }

  if (!hasCompleteName(name)) {
    event.preventDefault();
    showError("Escribe tu nombre completo para continuar.");
    studentName.focus();
    return;
  }

  studentName.value = name;
  form.action = endpoint;
  sourcePage.value = window.location.href;
  setSubmitting(true);

  window.clearTimeout(confirmationTimer);
  confirmationTimer = window.setTimeout(() => {
    setSubmitting(false);
    showError(
      "No recibimos confirmación de Google. Comprueba que hayas iniciado sesión con la cuenta autorizada e inténtalo nuevamente.",
    );
  }, 20000);
});

window.addEventListener("message", (event) => {
  if (!isAppsScriptOrigin(event.origin)) return;

  const result = event.data;
  if (!result || result.source !== "consentimiento-practica-insectos") return;

  window.clearTimeout(confirmationTimer);

  if (result.ok) {
    confirmedName.textContent = result.name || cleanName(studentName.value);
    form.hidden = true;
    submissionPanel.hidden = false;
    return;
  }

  setSubmitting(false);
  showError(
    result.message
      ? `Google no pudo registrar la respuesta: ${result.message}`
      : "Google no pudo registrar la respuesta. Inténtalo nuevamente.",
  );
});

