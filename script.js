"use strict";

const GRID_SIZE = 23;
const STORAGE_KEY = "fisiologia-tema1-crossword-v2";
const MAX_SCORE = 100;

const entries = [
  {
    id: "1-down",
    number: 1,
    direction: "down",
    row: 0,
    col: 3,
    answer: "HOMEOCINESIS",
    displayAnswer: "HOMEOCINESIS",
    clue:
      "Estabilidad dinámica que emerge de procesos activos, oscilatorios e interconectados. Ejemplo: gradientes iónicos, glucemia, presión arterial.",
    hint: "Empieza con H y describe un equilibrio que se mantiene mediante movimiento y oscilaciones.",
  },
  {
    id: "2-down",
    number: 2,
    direction: "down",
    row: 1,
    col: 0,
    answer: "ADAPTACION",
    displayAnswer: "ADAPTACIÓN",
    clue:
      "Característica heredable cuya frecuencia aumentó en una población por selección natural porque contribuyó al éxito reproductivo.",
    hint: "Ocurre a lo largo de generaciones, no durante la vida de un solo individuo.",
  },
  {
    id: "3-down",
    number: 3,
    direction: "down",
    row: 1,
    col: 11,
    answer: "POSITIVA",
    displayAnswer: "POSITIVA",
    clue:
      "Tipo de circuito (o asa) de retroalimentación. Refuerza la desviación y amplifica la señal.",
    hint: "En procesos como el parto o la coagulación, la respuesta aumenta el estímulo original.",
  },
  {
    id: "4-down",
    number: 4,
    direction: "down",
    row: 1,
    col: 22,
    answer: "ACLIMATACION",
    displayAnswer: "ACLIMATACIÓN",
    clue:
      "Cambio que aparece cuando un investigador modifica una o unas pocas variables bien definidas.",
    hint: "Este ajuste del individuo suele estudiarse bajo condiciones controladas de laboratorio.",
  },
  {
    id: "5-across",
    number: 5,
    direction: "across",
    row: 2,
    col: 10,
    answer: "CONFORMISTA",
    displayAnswer: "CONFORMISTA",
    clue: "Tipo de animal que permite que una variable cambie de acuerdo con el ambiente.",
    hint: "No mantiene constante esa variable cuando cambia el ambiente.",
  },
  {
    id: "6-down",
    number: 6,
    direction: "down",
    row: 5,
    col: 15,
    answer: "HOMEOSTASIS",
    displayAnswer: "HOMEOSTASIS",
    clue: "Es el proceso que mantiene una variable dentro de un intervalo compatible con la función.",
    hint: "Es el término clásico para conservar el medio interno dentro de límites funcionales.",
  },
  {
    id: "7-across",
    number: 7,
    direction: "across",
    row: 6,
    col: 0,
    answer: "ACLIMATIZACION",
    displayAnswer: "ACLIMATIZACIÓN",
    clue: "Cambio del individuo entre ambientes naturales que difieren en múltiples aspectos.",
    hint: "Es un ajuste reversible ante ambientes naturales complejos, no una modificación evolutiva.",
  },
  {
    id: "8-down",
    number: 8,
    direction: "down",
    row: 6,
    col: 7,
    answer: "INTEGRADOR",
    displayAnswer: "INTEGRADOR",
    clue:
      "Centro ________. Compara la información del sensor con el valor preestablecido. Ejemplo: páncreas.",
    hint: "Recibe la señal del sensor, la compara con el objetivo y organiza la respuesta.",
  },
  {
    id: "9-across",
    number: 9,
    direction: "across",
    row: 8,
    col: 14,
    answer: "RESPUESTA",
    displayAnswer: "RESPUESTA",
    clue: "Es el cambio en las condiciones del sistema. Ejemplo: niveles de glucosa.",
    hint: "Es el resultado producido ante un estímulo o un cambio del sistema.",
  },
  {
    id: "10-down",
    number: 10,
    direction: "down",
    row: 8,
    col: 19,
    answer: "EVASOR",
    displayAnswer: "EVASOR",
    clue:
      "Tipo de animal que reduce su exposición a un desafío en lugar de compensarlo. Ejemplo: migra, se mueve a la sombra.",
    hint: "Evita el reto mediante una conducta, en vez de compensar fisiológicamente sus efectos.",
  },
  {
    id: "11-across",
    number: 11,
    direction: "across",
    row: 11,
    col: 11,
    answer: "EFECTOR",
    displayAnswer: "EFECTOR",
    clue: "Modifica una variable como glucosa, temperatura, etc.",
    hint: "Es el componente que ejecuta la corrección ordenada por el centro integrador.",
  },
  {
    id: "12-across",
    number: 12,
    direction: "across",
    row: 13,
    col: 1,
    answer: "REGULADOR",
    displayAnswer: "REGULADOR",
    clue: "Tipo de animal que mantiene una variable dentro de límites a pesar de cambios externos.",
    hint: "Compensa los cambios ambientales para sostener la variable en un intervalo.",
  },
  {
    id: "12-down",
    number: 12,
    direction: "down",
    row: 13,
    col: 1,
    answer: "REFERENCIA",
    displayAnswer: "REFERENCIA",
    clue: "Valor de ________. Es el valor preestablecido de una variable.",
    hint: "También se conoce como valor objetivo o punto de ajuste.",
  },
  {
    id: "13-across",
    number: 13,
    direction: "across",
    row: 15,
    col: 7,
    answer: "REOSTASIS",
    displayAnswer: "REOSTASIS",
    clue:
      "Cambio regulado del nivel o intervalo defendido de una variable fisiológica. Ejemplo: fiebre durante una infección.",
    hint: "El sistema conserva estabilidad, pero cambia temporalmente el nivel que defiende.",
  },
  {
    id: "14-down",
    number: 14,
    direction: "down",
    row: 15,
    col: 13,
    answer: "SENSOR",
    displayAnswer: "SENSOR",
    clue:
      "Informa sobre el estado de una variable. Ejemplo: termómetro, o proteínas sensibles a niveles de glucosa en el páncreas.",
    hint: "Es el componente que detecta y comunica el valor actual de la variable.",
  },
  {
    id: "15-down",
    number: 15,
    direction: "down",
    row: 17,
    col: 8,
    answer: "ESTRES",
    displayAnswer: "ESTRÉS",
    clue: "Condición (real o percibida) que amenaza o desafía la estabilidad funcional.",
    hint: "Puede ser real o percibido y exige una respuesta compensatoria.",
  },
  {
    id: "16-across",
    number: 16,
    direction: "across",
    row: 17,
    col: 13,
    answer: "NEGATIVA",
    displayAnswer: "NEGATIVA",
    clue:
      "Tipo de circuito (o asa) de retroalimentación. Se opone a la desviación de un nivel y estabiliza la variable.",
    hint: "La respuesta va en sentido contrario al cambio inicial.",
  },
  {
    id: "17-across",
    number: 17,
    direction: "across",
    row: 18,
    col: 3,
    answer: "CRONOSTASIS",
    displayAnswer: "CRONOSTASIS",
    clue:
      "Modulación periódica del nivel defendido de una o varias variables por un sistema de temporización biológica. Ejemplo: variación circadiana de la temperatura, producción de melatonina.",
    hint: "El objetivo cambia siguiendo ritmos biológicos, como el ritmo circadiano.",
  },
  {
    id: "18-across",
    number: 18,
    direction: "across",
    row: 20,
    col: 13,
    answer: "REGULADA",
    displayAnswer: "REGULADA",
    clue:
      "Variable _______. Es la que se desea mantener en un intervalo. Ejemplo: temperatura, glucosa, osmolaridad o concentración de un ion.",
    hint: "Es la variable objetivo del sistema de control, aquella cuyo valor se intenta conservar.",
  },
];

const byId = new Map(entries.map((entry) => [entry.id, entry]));
const cells = new Map();
const values = new Map();
const revealedCells = new Set();
const revealCounts = new Map();
const shownHints = new Set();
let selectedEntryId = null;
let selectedCellKey = null;
let toastTimer = null;
let studentName = "";
let completionTimestamp = null;

const elements = {
  grid: document.querySelector("#crosswordGrid"),
  gridScroller: document.querySelector("#gridScroller"),
  acrossClues: document.querySelector("#acrossClues"),
  downClues: document.querySelector("#downClues"),
  selectedMeta: document.querySelector("#selectedMeta"),
  selectedLength: document.querySelector("#selectedLength"),
  selectedClue: document.querySelector("#selectedClue"),
  conceptHint: document.querySelector("#conceptHint"),
  hintButton: document.querySelector("#hintButton"),
  letterButton: document.querySelector("#letterButton"),
  checkWordButton: document.querySelector("#checkWordButton"),
  checkAllButton: document.querySelector("#checkAllButton"),
  resetButton: document.querySelector("#resetButton"),
  printButton: document.querySelector("#printButton"),
  zoomButton: document.querySelector("#zoomButton"),
  progressCopy: document.querySelector("#progressCopy"),
  progressBar: document.querySelector("#progressBar"),
  progressFill: document.querySelector("#progressFill"),
  scoreValue: document.querySelector("#scoreValue"),
  toast: document.querySelector("#toast"),
  completion: document.querySelector("#completion"),
  closeCompletion: document.querySelector("#closeCompletion"),
  studentName: document.querySelector("#studentName"),
  studentNamePrint: document.querySelector("#studentNamePrint"),
  finalScore: document.querySelector("#finalScore"),
  finalRevealCount: document.querySelector("#finalRevealCount"),
  completedAt: document.querySelector("#completedAt"),
  printProofButton: document.querySelector("#printProofButton"),
  boardTitle: document.querySelector("#board-title"),
};

function keyFor(row, col) {
  return `${row}-${col}`;
}

function entryCellKeys(entry) {
  return [...entry.answer].map((_, index) =>
    keyFor(
      entry.row + (entry.direction === "down" ? index : 0),
      entry.col + (entry.direction === "across" ? index : 0),
    ),
  );
}

function revealLimitFor(entry) {
  return entry.answer.length > 8 ? 3 : 2;
}

function totalRevealsUsed() {
  return [...revealCounts.values()].reduce((total, count) => total + count, 0);
}

function currentScore() {
  return Math.max(0, MAX_SCORE - totalRevealsUsed());
}

function buildCellModel() {
  for (const entry of entries) {
    entryCellKeys(entry).forEach((key, index) => {
      const [row, col] = key.split("-").map(Number);
      const letter = entry.answer[index];
      const current = cells.get(key) || { row, col, letter, entryIds: [], number: null };

      if (current.letter !== letter) {
        throw new Error(`Cruce incompatible en ${key}`);
      }

      current.entryIds.push(entry.id);
      if (index === 0) current.number = entry.number;
      cells.set(key, current);
    });
  }
}

function buildGrid() {
  const fragment = document.createDocumentFragment();

  for (let row = 0; row < GRID_SIZE; row += 1) {
    for (let col = 0; col < GRID_SIZE; col += 1) {
      const key = keyFor(row, col);
      const data = cells.get(key);
      const cell = document.createElement("div");
      cell.className = data ? "cell" : "cell block";
      cell.dataset.cellKey = key;

      if (data) {
        if (data.number !== null) {
          const number = document.createElement("span");
          number.className = "cell-number";
          number.textContent = data.number;
          cell.append(number);
        }

        const input = document.createElement("input");
        input.className = "cell-input";
        input.maxLength = 1;
        input.inputMode = "text";
        input.autocomplete = "off";
        input.autocapitalize = "characters";
        input.spellcheck = false;
        input.dataset.cellKey = key;
        input.setAttribute("aria-label", `Casilla, fila ${row + 1}, columna ${col + 1}`);
        input.value = values.get(key) || "";

        input.addEventListener("pointerdown", () => {
          input.dataset.wasSelected = String(key === selectedCellKey);
        });
        input.addEventListener("click", () => {
          selectCell(key, input.dataset.wasSelected === "true");
        });
        input.addEventListener("focus", () => {
          if (key !== selectedCellKey) selectCell(key, false, false);
        });
        input.addEventListener("input", handleInput);
        input.addEventListener("keydown", handleKeydown);
        input.addEventListener("paste", handlePaste);
        cell.append(input);
      }

      fragment.append(cell);
    }
  }

  elements.grid.append(fragment);
}

function buildClueLists() {
  for (const direction of ["across", "down"]) {
    const container = direction === "across" ? elements.acrossClues : elements.downClues;
    entries
      .filter((entry) => entry.direction === direction)
      .sort((a, b) => a.number - b.number)
      .forEach((entry) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "clue-item";
        button.dataset.entryId = entry.id;
        button.innerHTML = `<span class="clue-number">${entry.number}.</span><span>${entry.clue}</span>`;
        button.addEventListener("click", () => selectEntry(entry.id, true));
        container.append(button);
      });
  }
}

function normalizeLetters(text) {
  return text
    .toLocaleUpperCase("es-MX")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/Ñ/g, "N")
    .replace(/[^A-Z]/g, "");
}

function selectCell(key, toggleDirection = false, focus = true) {
  const data = cells.get(key);
  if (!data) return;

  let nextEntryId = selectedEntryId;
  if (!data.entryIds.includes(nextEntryId)) {
    const previousDirection = byId.get(selectedEntryId)?.direction;
    nextEntryId = data.entryIds.find((id) => byId.get(id).direction === previousDirection) || data.entryIds[0];
  } else if (toggleDirection && data.entryIds.length > 1) {
    const index = data.entryIds.indexOf(nextEntryId);
    nextEntryId = data.entryIds[(index + 1) % data.entryIds.length];
  }

  selectedEntryId = nextEntryId;
  selectedCellKey = key;
  updateSelection();

  if (focus) {
    document.querySelector(`.cell-input[data-cell-key="${key}"]`)?.focus({ preventScroll: true });
  }
}

function selectEntry(entryId, focus = true) {
  const entry = byId.get(entryId);
  if (!entry) return;
  const keys = entryCellKeys(entry);
  selectedEntryId = entryId;
  selectedCellKey = keys.find((key) => !values.get(key)) || keys[0];
  updateSelection();

  if (focus) {
    document.querySelector(`.cell-input[data-cell-key="${selectedCellKey}"]`)?.focus({ preventScroll: true });
  }
}

function updateSelection() {
  const entry = byId.get(selectedEntryId);
  const activeKeys = new Set(entry ? entryCellKeys(entry) : []);

  document.querySelectorAll(".cell[data-cell-key]").forEach((cell) => {
    const key = cell.dataset.cellKey;
    cell.classList.toggle("in-word", activeKeys.has(key));
    cell.classList.toggle("current", key === selectedCellKey);
  });

  document.querySelectorAll(".clue-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.entryId === selectedEntryId);
  });

  if (!entry) return;
  const directionName = entry.direction === "across" ? "Horizontal" : "Vertical";
  elements.selectedMeta.textContent = `${entry.number} · ${directionName}`;
  elements.selectedLength.textContent = `${entry.answer.length} letras`;
  elements.selectedClue.textContent = entry.clue;
  elements.boardTitle.textContent = `${entry.number} ${directionName.toLowerCase()}`;
  elements.hintButton.disabled = false;
  elements.checkWordButton.disabled = false;

  const keys = entryCellKeys(entry);
  const wordIsCorrect = keys.every((key, index) => values.get(key) === entry.answer[index]);
  const revealLimit = revealLimitFor(entry);
  const revealCount = revealCounts.get(entry.id) || 0;
  const revealsRemaining = Math.max(0, revealLimit - revealCount);
  elements.letterButton.disabled = wordIsCorrect || revealsRemaining === 0;
  elements.letterButton.textContent = wordIsCorrect
    ? "Palabra completa"
    : revealsRemaining
      ? `Revelar una letra · ${revealsRemaining} disponible${revealsRemaining === 1 ? "" : "s"}`
      : "Sin letras disponibles";

  const hintIsShown = shownHints.has(entry.id);
  elements.conceptHint.hidden = !hintIsShown;
  elements.conceptHint.textContent = hintIsShown ? `Pista adicional: ${entry.hint}` : "";
  elements.hintButton.textContent = hintIsShown ? "Ocultar pista" : "Pista conceptual";
}

function handleInput(event) {
  const input = event.currentTarget;
  const key = input.dataset.cellKey;
  const letters = normalizeLetters(input.value);
  const letter = letters.slice(-1);
  input.value = letter;

  if (letter) values.set(key, letter);
  else values.delete(key);

  clearCellFeedback(key);
  saveState();
  updateProgress();

  if (letter) moveWithinEntry(1);
}

function handlePaste(event) {
  const text = normalizeLetters(event.clipboardData?.getData("text") || "");
  if (!text || !selectedEntryId) return;
  event.preventDefault();

  const entry = byId.get(selectedEntryId);
  const keys = entryCellKeys(entry);
  let index = Math.max(0, keys.indexOf(event.currentTarget.dataset.cellKey));

  for (const letter of text) {
    if (index >= keys.length) break;
    setCellValue(keys[index], letter);
    index += 1;
  }

  selectedCellKey = keys[Math.min(index, keys.length - 1)];
  saveState();
  updateProgress();
  updateSelection();
  focusSelectedCell();
  checkForCompletion();
}

function handleKeydown(event) {
  const key = event.currentTarget.dataset.cellKey;

  if (event.key === "Backspace") {
    event.preventDefault();
    if (values.get(key)) {
      setCellValue(key, "");
    } else {
      moveWithinEntry(-1);
      setCellValue(selectedCellKey, "");
    }
    saveState();
    updateProgress();
    return;
  }

  if (event.key === " " || event.key === "Enter") {
    const data = cells.get(key);
    if (data?.entryIds.length > 1) {
      event.preventDefault();
      selectCell(key, true);
    }
    return;
  }

  const arrows = {
    ArrowLeft: [0, -1],
    ArrowRight: [0, 1],
    ArrowUp: [-1, 0],
    ArrowDown: [1, 0],
  };
  if (arrows[event.key]) {
    event.preventDefault();
    moveGeometrically(...arrows[event.key]);
  }
}

function moveWithinEntry(step) {
  const entry = byId.get(selectedEntryId);
  if (!entry) return;
  const keys = entryCellKeys(entry);
  const currentIndex = Math.max(0, keys.indexOf(selectedCellKey));
  const nextIndex = Math.min(Math.max(currentIndex + step, 0), keys.length - 1);
  selectedCellKey = keys[nextIndex];
  updateSelection();
  focusSelectedCell();
}

function moveGeometrically(rowStep, colStep) {
  if (!selectedCellKey) return;
  let [row, col] = selectedCellKey.split("-").map(Number);

  for (let tries = 0; tries < GRID_SIZE; tries += 1) {
    row += rowStep;
    col += colStep;
    if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE) return;
    const nextKey = keyFor(row, col);
    if (cells.has(nextKey)) {
      selectCell(nextKey, false);
      return;
    }
  }
}

function focusSelectedCell() {
  document.querySelector(`.cell-input[data-cell-key="${selectedCellKey}"]`)?.focus({ preventScroll: true });
}

function setCellValue(key, value) {
  const input = document.querySelector(`.cell-input[data-cell-key="${key}"]`);
  if (value) values.set(key, value);
  else values.delete(key);
  if (input) input.value = value;
  clearCellFeedback(key);
}

function clearCellFeedback(key) {
  const cell = document.querySelector(`.cell[data-cell-key="${key}"]`);
  cell?.classList.remove("is-error", "is-correct");
}

function toggleHint() {
  const entry = byId.get(selectedEntryId);
  if (!entry) return;
  if (shownHints.has(entry.id)) shownHints.delete(entry.id);
  else shownHints.add(entry.id);
  saveState();
  updateSelection();
}

function revealLetter() {
  const entry = byId.get(selectedEntryId);
  if (!entry) return;
  const revealLimit = revealLimitFor(entry);
  const revealCount = revealCounts.get(entry.id) || 0;

  if (revealCount >= revealLimit) {
    showToast("Ya utilizaste todas las letras disponibles para esta palabra.");
    updateSelection();
    return;
  }

  const keys = entryCellKeys(entry);
  const candidates = keys.filter(
    (key, index) => !revealedCells.has(key) && values.get(key) !== entry.answer[index],
  );

  if (!candidates.length) {
    showToast("Esta palabra ya está completa o sus letras disponibles ya fueron reveladas.");
    return;
  }

  const chosenKey = candidates[Math.floor(Math.random() * candidates.length)];
  const chosenIndex = keys.indexOf(chosenKey);
  setCellValue(chosenKey, entry.answer[chosenIndex]);
  revealedCells.add(chosenKey);
  revealCounts.set(entry.id, revealCount + 1);
  document.querySelector(`.cell[data-cell-key="${chosenKey}"]`)?.classList.add("is-revealed");
  selectedCellKey = chosenKey;
  saveState();
  updateProgress();
  updateSelection();
  focusSelectedCell();
  const remaining = revealLimit - (revealCount + 1);
  showToast(
    `Se reveló una letra y el puntaje bajó a ${currentScore()}. ${remaining ? `Quedan ${remaining} para esta palabra.` : "No quedan más para esta palabra."}`,
  );
  checkForCompletion();
}

function checkEntry(entryId, announce = true) {
  const entry = byId.get(entryId);
  const keys = entryCellKeys(entry);
  const complete = keys.every((key) => values.get(key));
  const correct = keys.every((key, index) => values.get(key) === entry.answer[index]);

  keys.forEach((key, index) => {
    const cell = document.querySelector(`.cell[data-cell-key="${key}"]`);
    cell?.classList.remove("is-error", "is-correct");
    if (values.get(key) && values.get(key) !== entry.answer[index]) cell?.classList.add("is-error");
    else if (correct) cell?.classList.add("is-correct");
  });

  if (announce) {
    if (correct) showToast("¡Palabra correcta!");
    else if (!complete) showToast("Todavía faltan casillas en esta palabra.");
    else showToast("Hay alguna letra que necesita revisión.");
  }

  updateClueStates();
  if (correct) checkForCompletion();
  return correct;
}

function checkAll() {
  const completeCount = [...cells.keys()].filter((key) => values.get(key)).length;
  entries.forEach((entry) => checkEntry(entry.id, false));
  const allCorrect = isPuzzleCorrect();

  if (allCorrect) {
    openCompletion();
  } else if (completeCount < cells.size) {
    showToast("Se marcaron las letras incorrectas. Aún quedan casillas vacías.");
  } else {
    showToast("Se marcaron las letras que necesitan revisión.");
  }
}

function updateProgress() {
  const filled = [...cells.keys()].filter((key) => values.get(key)).length;
  const percent = Math.round((filled / cells.size) * 100);
  elements.progressCopy.textContent = `${filled} de ${cells.size} casillas`;
  elements.progressBar.setAttribute("aria-valuenow", String(percent));
  elements.progressFill.style.width = `${percent}%`;
  updateScoreDisplay();
  updateClueStates();
  if (selectedEntryId) updateSelection();
}

function updateScoreDisplay() {
  const score = currentScore();
  const reveals = totalRevealsUsed();
  elements.scoreValue.textContent = String(score);
  elements.finalScore.textContent = String(score);
  elements.finalRevealCount.textContent = String(reveals);
}

function updateClueStates() {
  entries.forEach((entry) => {
    const keys = entryCellKeys(entry);
    const solved = keys.every((key, index) => values.get(key) === entry.answer[index]);
    document.querySelector(`.clue-item[data-entry-id="${entry.id}"]`)?.classList.toggle("solved", solved);
  });
}

function isPuzzleCorrect() {
  return [...cells.entries()].every(([key, data]) => values.get(key) === data.letter);
}

function checkForCompletion() {
  if (isPuzzleCorrect()) openCompletion();
}

function openCompletion() {
  if (!completionTimestamp) {
    completionTimestamp = new Date().toISOString();
    saveState();
  }
  updateProofDetails();
  elements.completion.hidden = false;
  if (studentName.trim()) elements.printProofButton.focus();
  else elements.studentName.focus();
}

function closeCompletion() {
  elements.completion.hidden = true;
  focusSelectedCell();
}

function updateProofDetails() {
  elements.studentName.value = studentName;
  elements.studentNamePrint.textContent = studentName.trim()
    ? `Estudiante: ${studentName.trim()}`
    : "Estudiante: sin nombre";
  elements.completedAt.textContent = completionTimestamp
    ? new Intl.DateTimeFormat("es-MX", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(completionTimestamp))
    : "—";
  updateScoreDisplay();
}

function updateStudentName(event) {
  studentName = event.currentTarget.value;
  elements.studentNamePrint.textContent = studentName.trim()
    ? `Estudiante: ${studentName.trim()}`
    : "Estudiante: sin nombre";
  saveState();
}

function printProof() {
  if (!studentName.trim()) {
    showToast("Escribe el nombre del estudiante antes de imprimir el comprobante.");
    elements.studentName.focus();
    return;
  }
  document.body.classList.add("printing-proof");
  window.print();
  window.setTimeout(() => document.body.classList.remove("printing-proof"), 1000);
}

function saveState() {
  const state = {
    values: Object.fromEntries(values),
    revealedCells: [...revealedCells],
    revealCounts: Object.fromEntries(revealCounts),
    shownHints: [...shownHints],
    studentName,
    completionTimestamp,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    Object.entries(state.values || {}).forEach(([key, value]) => {
      if (cells.has(key) && /^[A-Z]$/.test(value)) values.set(key, value);
    });
    (state.revealedCells || []).forEach((key) => {
      if (cells.has(key)) revealedCells.add(key);
    });
    Object.entries(state.revealCounts || {}).forEach(([id, count]) => {
      const entry = byId.get(id);
      const numericCount = Number(count);
      if (entry && Number.isInteger(numericCount) && numericCount >= 0) {
        revealCounts.set(id, Math.min(numericCount, revealLimitFor(entry)));
      }
    });
    (state.shownHints || []).forEach((id) => {
      if (byId.has(id)) shownHints.add(id);
    });
    studentName = typeof state.studentName === "string" ? state.studentName.slice(0, 80) : "";
    if (typeof state.completionTimestamp === "string" && !Number.isNaN(Date.parse(state.completionTimestamp))) {
      completionTimestamp = state.completionTimestamp;
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function applyLoadedState() {
  values.forEach((value, key) => {
    const input = document.querySelector(`.cell-input[data-cell-key="${key}"]`);
    if (input) input.value = value;
  });
  revealedCells.forEach((key) => {
    document.querySelector(`.cell[data-cell-key="${key}"]`)?.classList.add("is-revealed");
  });
}

function resetPuzzle() {
  const confirmed = window.confirm("¿Quieres borrar todas las respuestas y ayudas guardadas?");
  if (!confirmed) return;

  values.clear();
  revealedCells.clear();
  revealCounts.clear();
  shownHints.clear();
  selectedEntryId = null;
  selectedCellKey = null;
  studentName = "";
  completionTimestamp = null;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem("fisiologia-tema1-crossword-v1");

  document.querySelectorAll(".cell-input").forEach((input) => {
    input.value = "";
  });
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("in-word", "current", "is-error", "is-correct", "is-revealed");
  });

  elements.selectedMeta.textContent = "Selecciona una definición";
  elements.selectedLength.textContent = "";
  elements.selectedClue.textContent = "Puedes empezar con cualquiera de las pistas horizontales o verticales.";
  elements.conceptHint.hidden = true;
  elements.hintButton.disabled = true;
  elements.letterButton.disabled = true;
  elements.checkWordButton.disabled = true;
  elements.hintButton.textContent = "Pista conceptual";
  elements.letterButton.textContent = "Revelar una letra · 0 disponibles";
  elements.boardTitle.textContent = "Selecciona una palabra";
  elements.studentName.value = "";
  elements.completion.hidden = true;
  updateProgress();
  showToast("El crucigrama se reinició.");
}

function toggleZoom() {
  const isZoomed = elements.grid.classList.toggle("is-zoomed");
  elements.zoomButton.textContent = isZoomed ? "Ajustar cuadrícula" : "Ampliar cuadrícula";
  if (isZoomed && selectedCellKey) {
    document.querySelector(`.cell[data-cell-key="${selectedCellKey}"]`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    elements.toast.hidden = true;
  }, 3200);
}

function bindControls() {
  elements.hintButton.addEventListener("click", toggleHint);
  elements.letterButton.addEventListener("click", revealLetter);
  elements.checkWordButton.addEventListener("click", () => {
    if (selectedEntryId) checkEntry(selectedEntryId);
  });
  elements.checkAllButton.addEventListener("click", checkAll);
  elements.resetButton.addEventListener("click", resetPuzzle);
  elements.printButton.addEventListener("click", () => window.print());
  elements.zoomButton.addEventListener("click", toggleZoom);
  elements.closeCompletion.addEventListener("click", closeCompletion);
  elements.studentName.addEventListener("input", updateStudentName);
  elements.printProofButton.addEventListener("click", printProof);
  window.addEventListener("afterprint", () => document.body.classList.remove("printing-proof"));
  elements.completion.addEventListener("click", (event) => {
    if (event.target === elements.completion) closeCompletion();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !elements.completion.hidden) closeCompletion();
  });
}

buildCellModel();
loadState();
buildGrid();
buildClueLists();
applyLoadedState();
bindControls();
updateProgress();

if (values.size) {
  selectEntry(entries.find((entry) => !entryCellKeys(entry).every((key) => values.get(key)))?.id || entries[0].id, false);
}

if (isPuzzleCorrect()) {
  window.setTimeout(openCompletion, 0);
}
