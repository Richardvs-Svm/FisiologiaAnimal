const CONFIG = {
  // Pega aquí la URL que termina en /exec después de desplegar Code.gs como aplicación web.
  appsScriptUrl: "https://script.google.com/macros/s/AKfycby0zmFqAShtIqf8LC0cTTIXDSxhhU1622G0wjk-TpWhIjIB0MedpDhKK4FahIt_qtXC/exec",
  course: "Fisiología de Animales",
  semester: "2027-1",
  group: "5417",
  activity: "Sesión de observación del sistema nervioso de insectos",
  consentVersion: "2027-1-v1",
};

const form = document.querySelector("#consentForm");
const studentName = document.querySelector("#studentName");
const nameError = document.querySelector("#nameError");
const submitButton = document.querySelector("#submitButton");
const successPanel = document.querySelector("#successPanel");
const successLabel = document.querySelector("#successLabel");
const confirmedName = document.querySelector("#confirmedName");
const successMessage = document.querySelector("#successMessage");
const previewPill = document.querySelector("#previewPill");

const isConfigured = /^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(
  CONFIG.appsScriptUrl.trim(),
);

if (isConfigured) {
  previewPill.hidden = true;
}

function cleanName(value) {
  return value.trim().replace(/\s+/g, " ");
}

function hasCompleteName(value) {
  const parts = cleanName(value).split(" ").filter(Boolean);
  return cleanName(value).length >= 3 && parts.length >= 2;
}

function showNameError() {
  studentName.setAttribute("aria-invalid", "true");
  nameError.hidden = false;
  studentName.focus();
}

function clearNameError() {
  studentName.removeAttribute("aria-invalid");
  nameError.hidden = true;
}

function setSubmitting(isSubmitting) {
  submitButton.disabled = isSubmitting;
  submitButton.querySelector("span:first-child").textContent = isSubmitting
    ? "Enviando aceptación…"
    : "Acepto participar";
}

function showConfirmation(name, isPreview) {
  form.hidden = true;
  confirmedName.textContent = name;

  if (isPreview) {
    successLabel.textContent = "Vista previa completada";
    successMessage.textContent =
      "El diseño funciona correctamente. Aún no se enviaron datos porque falta conectar Google Apps Script.";
  }

  successPanel.hidden = false;
  successPanel.focus?.();
}

studentName.addEventListener("input", clearNameError);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearNameError();

  const name = cleanName(studentName.value);
  if (!hasCompleteName(name)) {
    showNameError();
    return;
  }

  const submission = {
    nombre: name,
    curso: CONFIG.course,
    semestre: CONFIG.semester,
    grupo: CONFIG.group,
    actividad: CONFIG.activity,
    versionConsentimiento: CONFIG.consentVersion,
    aceptacion: "Acepto participar",
    paginaOrigen: window.location.href,
  };

  if (!isConfigured) {
    showConfirmation(name, true);
    return;
  }

  setSubmitting(true);

  try {
    await fetch(CONFIG.appsScriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(submission),
    });

    showConfirmation(name, false);
  } catch (error) {
    setSubmitting(false);
    nameError.textContent =
      "No pudimos enviar tu aceptación. Revisa tu conexión e inténtalo nuevamente.";
    nameError.hidden = false;
  }
});

