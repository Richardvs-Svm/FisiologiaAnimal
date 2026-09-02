const CONFIG = {
  // Pega aquí la URL /exec del Apps Script vinculado a la hoja de cálculo.
  appsScriptUrl: "PEGA_AQUI_LA_URL_EXEC_DEL_APPS_SCRIPT",
};

const form = document.querySelector("#consentForm");
const studentName = document.querySelector("#studentName");
const nameError = document.querySelector("#nameError");
const submissionPanel = document.querySelector("#submissionPanel");
const confirmedName = document.querySelector("#confirmedName");
const connectionPill = document.querySelector("#connectionPill");
const sourcePage = document.querySelector("#sourcePage");

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
  studentName.focus();
}

function clearError() {
  studentName.removeAttribute("aria-invalid");
  nameError.hidden = true;
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
    return;
  }

  if (!hasCompleteName(name)) {
    event.preventDefault();
    showError("Escribe tu nombre completo para continuar.");
    return;
  }

  studentName.value = name;
  form.action = endpoint;
  sourcePage.value = window.location.href;
  confirmedName.textContent = name;

  form.hidden = true;
  submissionPanel.hidden = false;
});

