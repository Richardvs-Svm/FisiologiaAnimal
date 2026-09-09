const IMAGE_PATH = "imagenes/sinapsis-partes.png";
const PIECE_COUNT = 9;
const STAGE_ORDER = ["welcome", "puzzle", "sequence", "result"];

// Esta lista contiene el orden correcto. Puedes modificar el texto sin cambiar
// el resto del juego, siempre que conserves el orden causal de los elementos.
const PROCESS_STEPS = [
  "Un potencial de acción despolariza la terminal axónica de una neurona motora.",
  "La despolarización abre canales de Ca²⁺ sensibles al voltaje y el Ca²⁺ entra en la terminal.",
  "El Ca²⁺ desencadena la exocitosis de vesículas en la zona activa y la liberación de acetilcolina (ACh).",
  "La ACh se difunde por la hendidura sináptica y se une a sus receptores en la membrana postsináptica.",
  "Los receptores se abren: pasan Na⁺ y K⁺ y se produce un potencial postsináptico excitatorio que desencadena un potencial de acción.",
  "El potencial de acción se propaga por la fibra muscular y genera la contracción.",
  "La acetilcolinesterasa hidroliza la ACh en acetato y colina.",
  "La colina regresa a la terminal axónica para utilizarse en la resíntesis de ACh."
];

const panels = [...document.querySelectorAll("[data-panel]")];
const progressSteps = [...document.querySelectorAll("[data-progress]")];
const nameInput = document.querySelector("#student-name");
const nameError = document.querySelector("#name-error");
const startButton = document.querySelector("#start-button");
const puzzleBoard = document.querySelector("#puzzle-board");
const puzzleTimer = document.querySelector("#puzzle-timer");
const totalTimer = document.querySelector("#total-timer");
const pieceProgress = document.querySelector("#piece-progress");
const progressFill = document.querySelector("#progress-fill");
const selectionStatus = document.querySelector("#selection-status");
const moveCount = document.querySelector("#move-count");
const shuffleButton = document.querySelector("#shuffle-button");
const puzzleComplete = document.querySelector("#puzzle-complete");
const continueSequenceButton = document.querySelector("#continue-sequence");
const sequenceList = document.querySelector("#sequence-list");
const validationMessage = document.querySelector("#validation-message");
const checkSequenceButton = document.querySelector("#check-sequence");
const resetSequenceButton = document.querySelector("#reset-sequence");
const diagramOverlay = document.querySelector("#diagram-overlay");
const diagramOpeners = [...document.querySelectorAll("[data-open-diagram]")];
const closeDiagramButton = document.querySelector("#close-diagram");
const resultName = document.querySelector("#result-name");
const resultTime = document.querySelector("#result-time");
const resultDate = document.querySelector("#result-date");
const resultSession = document.querySelector("#result-session");
const proofButton = document.querySelector("#proof-button");
const playAgainButton = document.querySelector("#play-again");
const downloadStatus = document.querySelector("#download-status");

let focusBeforeDiagram = null;
let selectedPuzzleIndex = null;
let selectedSequenceIndex = null;
let reviewPositions = new Set();
let timerHandle = null;

let state = createState("");

function createSessionId() {
  const source = globalThis.crypto && typeof globalThis.crypto.randomUUID === "function"
    ? globalThis.crypto.randomUUID().replaceAll("-", "").slice(0, 8)
    : Math.random().toString(36).slice(2, 10);
  return `SIN-${source.toUpperCase()}`;
}

function shuffle(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  if (result.every((value, index) => value === index)) {
    [result[0], result[1]] = [result[1], result[0]];
  }
  return result;
}

function createState(studentName) {
  return {
    studentName,
    stage: "welcome",
    puzzleOrder: shuffle([...Array(PIECE_COUNT).keys()]),
    puzzleSolved: false,
    puzzleMoves: 0,
    puzzleSeconds: 0,
    sequenceOrder: shuffle([...Array(PROCESS_STEPS.length).keys()]),
    sequenceSeconds: 0,
    completed: false,
    completedAt: null,
    sessionId: createSessionId()
  };
}

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainder = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function formatDate(dateValue) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(dateValue));
}

function updateTimers() {
  puzzleTimer.textContent = formatTime(state.puzzleSeconds);
  const totalSeconds = state.puzzleSeconds + state.sequenceSeconds;
  totalTimer.textContent = formatTime(totalSeconds);
  resultTime.textContent = formatTime(totalSeconds);
}

function updateProgress() {
  const activeIndex = STAGE_ORDER.indexOf(state.stage);
  progressSteps.forEach((step) => {
    const stepIndex = STAGE_ORDER.indexOf(step.dataset.progress);
    step.classList.toggle("is-active", stepIndex === activeIndex);
    step.classList.toggle("is-complete", stepIndex < activeIndex || state.stage === "result");
    if (stepIndex === activeIndex) step.setAttribute("aria-current", "step");
    else step.removeAttribute("aria-current");
  });
}

function showStage(stage) {
  state.stage = stage;
  panels.forEach((panel) => {
    const active = panel.dataset.panel === stage;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startTimer() {
  if (timerHandle !== null) return;
  timerHandle = window.setInterval(() => {
    if (document.hidden || state.completed) return;
    if (state.stage === "puzzle" && !state.puzzleSolved) state.puzzleSeconds += 1;
    if (state.stage === "sequence") state.sequenceSeconds += 1;
    updateTimers();
  }, 1000);
}

function startGame() {
  const studentName = nameInput.value.trim().replace(/\s+/g, " ");
  if (!studentName) {
    nameInput.classList.add("is-invalid");
    nameError.hidden = false;
    nameInput.focus();
    return;
  }

  state = createState(studentName);
  selectedPuzzleIndex = null;
  selectedSequenceIndex = null;
  reviewPositions.clear();
  renderPuzzle();
  renderSequence();
  updateTimers();
  showStage("puzzle");
  startTimer();
}

function renderPuzzle() {
  puzzleBoard.innerHTML = "";
  state.puzzleOrder.forEach((pieceId, position) => {
    const piece = document.createElement("button");
    piece.type = "button";
    piece.className = "puzzle-piece";
    piece.disabled = state.puzzleSolved;
    piece.dataset.position = position + 1;
    piece.style.setProperty("--piece-x", pieceId % 3);
    piece.style.setProperty("--piece-y", Math.floor(pieceId / 3));
    piece.setAttribute("aria-label", `Pieza en la posición ${position + 1}`);
    piece.setAttribute("aria-pressed", String(position === selectedPuzzleIndex));
    if (position === selectedPuzzleIndex) piece.classList.add("is-selected");
    if (pieceId === position) piece.classList.add("is-correct");
    piece.addEventListener("click", () => selectPuzzlePiece(position));
    puzzleBoard.appendChild(piece);
  });
  updatePuzzleProgress();
}

function selectPuzzlePiece(index) {
  if (state.puzzleSolved) return;
  if (selectedPuzzleIndex === null) {
    selectedPuzzleIndex = index;
    selectionStatus.textContent = `Pieza ${index + 1} seleccionada. Ahora elige otra.`;
  } else if (selectedPuzzleIndex === index) {
    selectedPuzzleIndex = null;
    selectionStatus.textContent = "Selección cancelada. Elige la primera pieza.";
  } else {
    [state.puzzleOrder[selectedPuzzleIndex], state.puzzleOrder[index]] = [state.puzzleOrder[index], state.puzzleOrder[selectedPuzzleIndex]];
    state.puzzleMoves += 1;
    selectedPuzzleIndex = null;
    selectionStatus.textContent = "Piezas intercambiadas. Continúa observando los bordes.";
  }
  renderPuzzle();
  checkPuzzleCompletion();
}

function updatePuzzleProgress() {
  const correct = state.puzzleOrder.filter((piece, index) => piece === index).length;
  pieceProgress.textContent = `${correct} de ${PIECE_COUNT}`;
  progressFill.style.width = `${(correct / PIECE_COUNT) * 100}%`;
  moveCount.textContent = state.puzzleMoves;
}

function checkPuzzleCompletion() {
  const solved = state.puzzleOrder.every((piece, index) => piece === index);
  if (!solved || state.puzzleSolved) return;
  state.puzzleSolved = true;
  selectedPuzzleIndex = null;
  selectionStatus.textContent = "¡Imagen reconstruida! El cronómetro está en pausa.";
  puzzleComplete.hidden = false;
  continueSequenceButton.disabled = false;
  shuffleButton.disabled = true;
  renderPuzzle();
}

function restartPuzzle() {
  state.puzzleOrder = shuffle([...Array(PIECE_COUNT).keys()]);
  state.puzzleMoves = 0;
  state.puzzleSeconds = 0;
  state.puzzleSolved = false;
  selectedPuzzleIndex = null;
  puzzleComplete.hidden = true;
  continueSequenceButton.disabled = true;
  shuffleButton.disabled = false;
  selectionStatus.textContent = "Nueva mezcla lista. Selecciona la primera pieza.";
  renderPuzzle();
  updateTimers();
}

function enterSequence() {
  if (!state.puzzleSolved) return;
  selectedSequenceIndex = null;
  reviewPositions.clear();
  validationMessage.hidden = true;
  renderSequence();
  showStage("sequence");
}

function renderSequence() {
  sequenceList.innerHTML = "";
  state.sequenceOrder.forEach((stepId, position) => {
    const item = document.createElement("li");
    const card = document.createElement("button");
    const copy = document.createElement("p");
    const symbol = document.createElement("span");
    card.type = "button";
    card.className = "sequence-card";
    card.dataset.step = stepId;
    card.setAttribute("aria-pressed", String(position === selectedSequenceIndex));
    card.setAttribute("aria-label", `Posición ${position + 1}: ${PROCESS_STEPS[stepId]}`);
    if (position === selectedSequenceIndex) card.classList.add("is-selected");
    if (reviewPositions.has(position)) card.classList.add("needs-review");
    copy.textContent = PROCESS_STEPS[stepId];
    symbol.className = "swap-symbol";
    symbol.setAttribute("aria-hidden", "true");
    symbol.textContent = "↕";
    card.append(copy, symbol);
    card.addEventListener("click", () => selectSequenceCard(position));
    item.appendChild(card);
    sequenceList.appendChild(item);
  });
}

function selectSequenceCard(index) {
  validationMessage.hidden = true;
  reviewPositions.clear();
  if (selectedSequenceIndex === null) {
    selectedSequenceIndex = index;
  } else if (selectedSequenceIndex === index) {
    selectedSequenceIndex = null;
  } else {
    [state.sequenceOrder[selectedSequenceIndex], state.sequenceOrder[index]] = [state.sequenceOrder[index], state.sequenceOrder[selectedSequenceIndex]];
    selectedSequenceIndex = null;
  }
  renderSequence();
}

function checkSequence() {
  selectedSequenceIndex = null;
  reviewPositions = new Set();
  state.sequenceOrder.forEach((stepId, position) => {
    if (stepId !== position) reviewPositions.add(position);
  });

  if (reviewPositions.size > 0) {
    validationMessage.textContent = reviewPositions.size === 1
      ? "Hay 1 acontecimiento fuera de lugar. Revísalo antes de continuar."
      : `Hay ${reviewPositions.size} acontecimientos fuera de lugar. Revisa las relaciones de causa y efecto.`;
    validationMessage.hidden = false;
    renderSequence();
    validationMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }

  state.completed = true;
  state.completedAt = new Date().toISOString();
  resultName.textContent = state.studentName;
  resultTime.textContent = formatTime(state.puzzleSeconds + state.sequenceSeconds);
  resultDate.textContent = formatDate(state.completedAt);
  resultSession.textContent = state.sessionId;
  downloadStatus.textContent = "";
  showStage("result");
}

function reshuffleSequence() {
  state.sequenceOrder = shuffle([...Array(PROCESS_STEPS.length).keys()]);
  selectedSequenceIndex = null;
  reviewPositions.clear();
  validationMessage.hidden = true;
  renderSequence();
}

function openDiagram(event) {
  focusBeforeDiagram = event.currentTarget;
  diagramOverlay.hidden = false;
  document.body.classList.add("overlay-open");
  closeDiagramButton.focus();
}

function closeDiagram() {
  diagramOverlay.hidden = true;
  document.body.classList.remove("overlay-open");
  if (focusBeforeDiagram) focusBeforeDiagram.focus();
}

function handleDialogKeys(event) {
  if (diagramOverlay.hidden) return;
  if (event.key === "Escape") {
    closeDiagram();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = [...diagramOverlay.querySelectorAll("button, [href], [tabindex]:not([tabindex='-1'])")]
    .filter((element) => !element.disabled);
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function roundedRectangle(context, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
}

function fitText(context, text, maximumWidth, startingSize, minimumSize = 30) {
  let size = startingSize;
  while (size > minimumSize) {
    context.font = `700 ${size}px Georgia, serif`;
    if (context.measureText(text).width <= maximumWidth) break;
    size -= 2;
  }
  return size;
}

function loadDiagramImage() {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = IMAGE_PATH;
  });
}

async function downloadProof() {
  if (!state.completed) return;
  proofButton.disabled = true;
  downloadStatus.textContent = "Preparando la imagen…";

  try {
    const diagram = await loadDiagramImage();
    const canvas = document.createElement("canvas");
    canvas.width = 1400;
    canvas.height = 900;
    const context = canvas.getContext("2d");

    const background = context.createLinearGradient(0, 0, 1400, 900);
    background.addColorStop(0, "#e8f5f4");
    background.addColorStop(1, "#fbeef1");
    context.fillStyle = background;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.shadowColor = "rgba(9,47,93,.18)";
    context.shadowBlur = 35;
    context.shadowOffsetY = 15;
    context.fillStyle = "#ffffff";
    roundedRectangle(context, 55, 55, 1290, 790, 34);
    context.fill();
    context.shadowColor = "transparent";

    context.fillStyle = "#ef7188";
    roundedRectangle(context, 55, 55, 1290, 16, 8);
    context.fill();

    context.fillStyle = "#092f5d";
    context.font = "800 25px system-ui, sans-serif";
    context.fillText("FISIOLOGÍA ANIMAL 2027-1 · GRUPO 5417", 110, 130);
    context.fillStyle = "#4eaaa9";
    context.font = "800 20px system-ui, sans-serif";
    context.fillText("TEMA 3 · COMUNICACIÓN NEURONAL", 110, 170);

    context.fillStyle = "#f4f8fa";
    roundedRectangle(context, 105, 220, 450, 460, 25);
    context.fill();
    context.save();
    roundedRectangle(context, 120, 235, 420, 430, 18);
    context.clip();
    context.drawImage(diagram, 120, 235, 420, 430);
    context.restore();

    context.fillStyle = "#4eaaa9";
    context.beginPath();
    context.arc(675, 280, 52, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#ffffff";
    context.font = "800 55px system-ui, sans-serif";
    context.textAlign = "center";
    context.fillText("✓", 675, 299);
    context.textAlign = "left";

    context.fillStyle = "#607386";
    context.font = "800 19px system-ui, sans-serif";
    context.fillText("ACTIVIDAD COMPLETADA", 755, 260);
    context.fillStyle = "#092f5d";
    context.font = "700 58px Georgia, serif";
    context.fillText("¡Sinapsis", 755, 330);
    context.fillText("reconstruida!", 755, 395);

    context.fillStyle = "#607386";
    context.font = "600 21px system-ui, sans-serif";
    context.fillText("Estudiante", 650, 458);
    const nameSize = fitText(context, state.studentName, 620, 44, 28);
    context.fillStyle = "#092f5d";
    context.font = `700 ${nameSize}px Georgia, serif`;
    context.fillText(state.studentName, 650, 510);

    const stats = [
      { value: "9 / 9", label: "PIEZAS" },
      { value: "8 / 8", label: "ACONTECIMIENTOS" },
      { value: formatTime(state.puzzleSeconds + state.sequenceSeconds), label: "TIEMPO" }
    ];
    stats.forEach((stat, index) => {
      const x = 650 + index * 205;
      context.fillStyle = index === 1 ? "#fff0f3" : "#e6f6f5";
      roundedRectangle(context, x, 560, 185, 105, 18);
      context.fill();
      context.fillStyle = "#092f5d";
      context.font = "700 31px Georgia, serif";
      context.textAlign = "center";
      context.fillText(stat.value, x + 92, 605);
      context.fillStyle = "#607386";
      context.font = "800 13px system-ui, sans-serif";
      context.fillText(stat.label, x + 92, 638);
    });
    context.textAlign = "left";

    context.fillStyle = "#39566a";
    context.font = "600 20px system-ui, sans-serif";
    context.fillText("Proceso de transmisión sináptica ordenado correctamente.", 650, 715);

    context.strokeStyle = "#d8e2e9";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(105, 755);
    context.lineTo(1295, 755);
    context.stroke();
    context.fillStyle = "#607386";
    context.font = "700 16px system-ui, sans-serif";
    context.fillText(`SESIÓN ${state.sessionId}`, 110, 800);
    context.textAlign = "right";
    context.fillText(formatDate(state.completedAt), 1290, 800);
    context.textAlign = "left";

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("No se pudo crear el comprobante.");
    const safeName = state.studentName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 45) || "estudiante";
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `resultado-sinapsis-${safeName}.png`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1500);
    downloadStatus.textContent = "Comprobante descargado.";
  } catch {
    downloadStatus.textContent = "No fue posible generar la imagen. Puedes tomar una captura de la tarjeta.";
  } finally {
    proofButton.disabled = false;
  }
}

function playAgain() {
  const studentName = state.studentName;
  state = createState(studentName);
  state.stage = "puzzle";
  selectedPuzzleIndex = null;
  selectedSequenceIndex = null;
  reviewPositions.clear();
  puzzleComplete.hidden = true;
  continueSequenceButton.disabled = true;
  shuffleButton.disabled = false;
  selectionStatus.textContent = "Selecciona la primera pieza.";
  validationMessage.hidden = true;
  renderPuzzle();
  renderSequence();
  updateTimers();
  showStage("puzzle");
}

startButton.addEventListener("click", startGame);
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim()) {
    nameInput.classList.remove("is-invalid");
    nameError.hidden = true;
  }
});
nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") startGame();
});
shuffleButton.addEventListener("click", restartPuzzle);
continueSequenceButton.addEventListener("click", enterSequence);
checkSequenceButton.addEventListener("click", checkSequence);
resetSequenceButton.addEventListener("click", reshuffleSequence);
diagramOpeners.forEach((button) => button.addEventListener("click", openDiagram));
closeDiagramButton.addEventListener("click", closeDiagram);
document.querySelector("[data-close-diagram]").addEventListener("click", closeDiagram);
document.addEventListener("keydown", handleDialogKeys);
proofButton.addEventListener("click", downloadProof);
playAgainButton.addEventListener("click", playAgain);

renderPuzzle();
renderSequence();
updateTimers();
updateProgress();
