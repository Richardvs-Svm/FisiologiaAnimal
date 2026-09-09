const STORAGE_KEY = 'fisiologia-animal-neurona-v1';
const IMAGE_PATH = 'imagenes/neurona-numerada-1-a-12-v4.png';
const STRUCTURE_ANSWERS = [
  'DENDRITAS',
  'SOMA',
  'NÚCLEO',
  'NUCLÉOLO',
  'CONO AXÓNICO',
  'SEGMENTO INICIAL',
  'NODO DE RANVIER',
  'CÉLULAS DE SCHWANN',
  'AXÓN',
  'COLATERAL',
  'ARBORIZACIÓN TERMINAL',
  'TERMINAL SINÁPTICA'
];
const SOLVED_PIECES = Array.from({ length: 12 }, (_, index) => index);
const STAGES = ['welcome', 'puzzle', 'labels', 'result'];

const screens = [...document.querySelectorAll('[data-panel]')];
const journeySteps = [...document.querySelectorAll('[data-step]')];
const nameInput = document.querySelector('#student-name');
const nameError = document.querySelector('#name-error');
const startButton = document.querySelector('#start-game');
const resumeBanner = document.querySelector('#resume-banner');
const resumeDescription = document.querySelector('#resume-description');
const resumeButton = document.querySelector('#resume-game');
const resetButton = document.querySelector('#reset-game');

const board = document.querySelector('#puzzle-board');
const selectionStatus = document.querySelector('#selection-status');
const moveCount = document.querySelector('#move-count');
const pieceProgress = document.querySelector('#piece-progress');
const progressFill = document.querySelector('#progress-fill');
const puzzleTimer = document.querySelector('#puzzle-timer');
const shuffleButton = document.querySelector('#shuffle-button');
const puzzleSuccess = document.querySelector('#puzzle-success');
const continueLabelsButton = document.querySelector('#continue-labels');

const answerGrid = document.querySelector('#answer-grid');
const labelForm = document.querySelector('#label-form');
const answerCount = document.querySelector('#answer-count');
const liveScore = document.querySelector('#live-score');
const validationMessage = document.querySelector('#validation-message');

const resultName = document.querySelector('#result-name');
const resultScore = document.querySelector('#result-score');
const resultPuzzleTime = document.querySelector('#result-puzzle-time');
const resultLabelTime = document.querySelector('#result-label-time');
const resultReveals = document.querySelector('#result-reveals');
const resultFeedback = document.querySelector('#result-feedback');
const resultSession = document.querySelector('#result-session');
const resultDate = document.querySelector('#result-date');
const scoreRing = document.querySelector('.score-ring');
const proofButton = document.querySelector('#proof-button');
const playAgainButton = document.querySelector('#play-again');
const downloadStatus = document.querySelector('#download-status');

let selectedPiece = null;
let hasReviewed = false;
let savedState = loadSavedState();
let state = createNewState('');

function createSessionId() {
  const source = globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function'
    ? globalThis.crypto.randomUUID().replaceAll('-', '').slice(0, 8)
    : Math.random().toString(36).slice(2, 10);
  return 'NEU-' + source.toUpperCase();
}

function shufflePieces() {
  const pieces = [...SOLVED_PIECES];
  do {
    for (let index = pieces.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [pieces[index], pieces[randomIndex]] = [pieces[randomIndex], pieces[index]];
    }
  } while (pieces.every((piece, index) => piece === index));
  return pieces;
}

function emptyLetterState() {
  return STRUCTURE_ANSWERS.map((answer) =>
    Array.from({ length: answer.replaceAll(' ', '').length }, () => '')
  );
}

function emptyRevealState() {
  return STRUCTURE_ANSWERS.map((answer) =>
    Array.from({ length: answer.replaceAll(' ', '').length }, () => false)
  );
}

function createNewState(studentName) {
  return {
    version: 1,
    started: false,
    studentName,
    stage: 'welcome',
    pieces: shufflePieces(),
    moves: 0,
    puzzleSolved: false,
    puzzleSeconds: 0,
    labelSeconds: 0,
    answers: emptyLetterState(),
    revealed: emptyRevealState(),
    revealCounts: Array(STRUCTURE_ANSWERS.length).fill(0),
    totalReveals: 0,
    score: 100,
    completed: false,
    completedAt: null,
    sessionId: createSessionId()
  };
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase();
}

function sanitizeSavedState(candidate) {
  if (!candidate || candidate.version !== 1 || !candidate.started) return null;
  const restored = createNewState(String(candidate.studentName || '').slice(0, 80));

  const validPieces = Array.isArray(candidate.pieces)
    && candidate.pieces.length === 12
    && new Set(candidate.pieces).size === 12
    && candidate.pieces.every((piece) => Number.isInteger(piece) && piece >= 0 && piece < 12);
  if (validPieces) restored.pieces = [...candidate.pieces];

  restored.started = true;
  restored.moves = Math.max(0, Number(candidate.moves) || 0);
  restored.puzzleSeconds = Math.max(0, Number(candidate.puzzleSeconds) || 0);
  restored.labelSeconds = Math.max(0, Number(candidate.labelSeconds) || 0);
  restored.puzzleSolved = Boolean(candidate.puzzleSolved)
    || restored.pieces.every((piece, index) => piece === index);
  restored.sessionId = typeof candidate.sessionId === 'string'
    ? candidate.sessionId.slice(0, 24)
    : restored.sessionId;

  if (Array.isArray(candidate.answers)) {
    restored.answers = restored.answers.map((emptyAnswer, answerIndex) =>
      emptyAnswer.map((_, letterIndex) => {
        const value = candidate.answers[answerIndex]?.[letterIndex];
        return typeof value === 'string' ? [...value.toUpperCase()].slice(-1).join('') : '';
      })
    );
  }

  if (Array.isArray(candidate.revealed)) {
    restored.revealed = restored.revealed.map((emptyAnswer, answerIndex) =>
      emptyAnswer.map((_, letterIndex) => Boolean(candidate.revealed[answerIndex]?.[letterIndex]))
    );
  }

  restored.revealed.forEach((letters, answerIndex) => {
    const correctLetters = [...STRUCTURE_ANSWERS[answerIndex].replaceAll(' ', '')];
    letters.forEach((revealed, letterIndex) => {
      if (revealed) restored.answers[answerIndex][letterIndex] = correctLetters[letterIndex];
    });
  });

  restored.revealCounts = restored.revealed.map((letters) => letters.filter(Boolean).length);
  restored.totalReveals = restored.revealCounts.reduce((sum, count) => sum + count, 0);
  restored.score = Math.max(0, 100 - restored.totalReveals);

  const allAnswersCorrect = STRUCTURE_ANSWERS.every((_, index) =>
    isAnswerCorrect(index, restored)
  );
  restored.completed = Boolean(candidate.completed) && restored.puzzleSolved && allAnswersCorrect;
  restored.completedAt = restored.completed && candidate.completedAt
    ? candidate.completedAt
    : null;

  const requestedStage = STAGES.includes(candidate.stage) ? candidate.stage : 'puzzle';
  if (restored.completed) {
    restored.stage = 'result';
  } else if (!restored.puzzleSolved && requestedStage !== 'welcome') {
    restored.stage = 'puzzle';
  } else if (requestedStage === 'result') {
    restored.stage = 'labels';
  } else {
    restored.stage = requestedStage === 'welcome' ? 'puzzle' : requestedStage;
  }
  return restored;
}

function loadSavedState() {
  try {
    return sanitizeSavedState(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  } catch {
    return null;
  }
}

function saveState() {
  if (!state.started) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // The activity still works when browser storage is unavailable.
  }
}

function clearSavedState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing else is required if storage is unavailable.
  }
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
}

function formatCompletionDate(isoDate) {
  const date = isoDate ? new Date(isoDate) : new Date();
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

function showStage(stage, options = {}) {
  screens.forEach((screen) => {
    const active = screen.dataset.panel === stage;
    screen.hidden = !active;
  });

  const stageIndex = STAGES.indexOf(stage);
  journeySteps.forEach((step) => {
    const stepIndex = STAGES.indexOf(step.dataset.step);
    step.classList.toggle('is-current', stepIndex === stageIndex);
    step.classList.toggle('is-done', stepIndex < stageIndex);
  });

  resetButton.hidden = stage === 'welcome';
  state.stage = stage;
  if (stage === 'puzzle') renderPuzzle();
  if (stage === 'labels') updateAnswerState(true);
  if (stage === 'result') renderResult();
  if (options.save !== false) saveState();
  window.scrollTo({ top: 0, behavior: options.instant ? 'auto' : 'smooth' });
}

function showSavedActivity() {
  if (!savedState) {
    resumeBanner.hidden = true;
    return;
  }
  nameInput.value = savedState.studentName;
  resumeDescription.textContent = savedState.completed
    ? 'La actividad está completa. Puedes volver a ver y descargar tu resultado.'
    : 'Puedes continuar desde ' + (savedState.stage === 'labels' ? 'las etiquetas' : 'el rompecabezas') + '.';
  resumeButton.textContent = savedState.completed ? 'Ver resultado' : 'Continuar';
  resumeBanner.hidden = false;
}

function startNewGame() {
  const studentName = nameInput.value.trim().replace(/\s+/g, ' ');
  if (!studentName) {
    nameError.hidden = false;
    nameInput.focus();
    return;
  }
  if (savedState && !savedState.completed) {
    const confirmed = window.confirm('Hay una actividad guardada. ¿Deseas reemplazarla y comenzar de nuevo?');
    if (!confirmed) return;
  }

  nameError.hidden = true;
  state = createNewState(studentName);
  state.started = true;
  savedState = null;
  selectedPiece = null;
  hasReviewed = false;
  resumeBanner.hidden = true;
  applyStateToInterface();
  showStage('puzzle');
}

function resumeGame() {
  if (!savedState) return;
  state = savedState;
  selectedPiece = null;
  hasReviewed = false;
  applyStateToInterface();
  showStage(state.stage, { instant: true });
}

function resetActivity() {
  const confirmed = window.confirm('¿Deseas borrar el progreso de esta actividad y comenzar de nuevo?');
  if (!confirmed) return;
  const previousName = state.studentName || nameInput.value.trim();
  clearSavedState();
  savedState = null;
  state = createNewState(previousName);
  selectedPiece = null;
  hasReviewed = false;
  nameInput.value = previousName;
  resumeBanner.hidden = true;
  nameError.hidden = true;
  applyStateToInterface();
  showStage('welcome', { save: false });
}

function applyStateToInterface() {
  nameInput.value = state.studentName;
  renderPuzzle();
  updateAnswerState(true);
  updateTimers();
}

function renderPuzzle() {
  board.replaceChildren();
  state.pieces.forEach((piece, position) => {
    const row = Math.floor(piece / 3);
    const column = piece % 3;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'puzzle-piece' + (selectedPiece === position ? ' is-selected' : '');
    button.style.setProperty('--piece-x', column);
    button.style.setProperty('--piece-y', row);
    button.setAttribute('aria-label', 'Pieza en la posición ' + (position + 1));
    button.setAttribute('aria-pressed', selectedPiece === position ? 'true' : 'false');
    button.disabled = state.puzzleSolved;
    button.addEventListener('click', () => selectPiece(position));
    board.append(button);
  });

  const correctPieces = state.pieces.filter((piece, index) => piece === index).length;
  pieceProgress.textContent = correctPieces + ' de 12';
  progressFill.style.width = (correctPieces / 12 * 100) + '%';
  moveCount.textContent = String(state.moves).padStart(2, '0');
  continueLabelsButton.disabled = !state.puzzleSolved;
  puzzleSuccess.hidden = !state.puzzleSolved;
  shuffleButton.disabled = state.puzzleSolved;

  if (state.puzzleSolved) {
    selectionStatus.textContent = 'La imagen está completa.';
  } else if (selectedPiece === null) {
    selectionStatus.textContent = 'Selecciona la primera pieza.';
  }
  updateTimers();
}

function selectPiece(position) {
  if (state.puzzleSolved) return;

  if (selectedPiece === null) {
    selectedPiece = position;
    selectionStatus.textContent = 'Ahora selecciona la pieza con la que deseas intercambiarla.';
  } else if (selectedPiece === position) {
    selectedPiece = null;
    selectionStatus.textContent = 'Selección cancelada. Elige una pieza.';
  } else {
    [state.pieces[selectedPiece], state.pieces[position]] =
      [state.pieces[position], state.pieces[selectedPiece]];
    selectedPiece = null;
    state.moves += 1;
    state.puzzleSolved = state.pieces.every((piece, index) => piece === index);
    selectionStatus.textContent = state.puzzleSolved
      ? '¡Rompecabezas completo!'
      : 'Piezas intercambiadas. Continúa observando la imagen.';
  }

  renderPuzzle();
  saveState();
}

function restartPuzzle() {
  if (state.moves > 0) {
    const confirmed = window.confirm('¿Deseas mezclar nuevamente las piezas? El tiempo y los movimientos del rompecabezas volverán a cero.');
    if (!confirmed) return;
  }
  state.pieces = shufflePieces();
  state.moves = 0;
  state.puzzleSeconds = 0;
  state.puzzleSolved = false;
  selectedPiece = null;
  renderPuzzle();
  saveState();
}

function buildAnswerCards() {
  answerGrid.replaceChildren();
  STRUCTURE_ANSWERS.forEach((answer, answerIndex) => {
    const card = document.createElement('article');
    card.className = 'answer-card';
    card.dataset.answer = answerIndex;

    const heading = document.createElement('div');
    heading.className = 'answer-card-head';
    heading.innerHTML = '<span class="answer-number">' + (answerIndex + 1) + '</span>';

    const letterCount = answer.replaceAll(' ', '').length;
    const revealLimit = letterCount > 8 ? 3 : 2;
    const revealButton = document.createElement('button');
    revealButton.type = 'button';
    revealButton.className = 'reveal-button';
    revealButton.dataset.limit = revealLimit;
    revealButton.addEventListener('click', () => revealLetter(answerIndex));
    heading.append(revealButton);

    const row = document.createElement('div');
    row.className = 'letter-row';
    let letterIndex = 0;
    [...answer].forEach((character) => {
      if (character === ' ') {
        const gap = document.createElement('span');
        gap.className = 'letter-gap';
        gap.setAttribute('aria-hidden', 'true');
        row.append(gap);
        return;
      }

      const box = document.createElement('span');
      box.className = 'letter-box';
      const input = document.createElement('input');
      input.className = 'letter-input';
      input.maxLength = 1;
      input.autocomplete = 'off';
      input.spellcheck = false;
      input.dataset.answer = answerIndex;
      input.dataset.letter = letterIndex;
      input.setAttribute('aria-label', 'Estructura ' + (answerIndex + 1) + ', letra ' + (letterIndex + 1));
      input.addEventListener('input', handleLetterInput);
      input.addEventListener('keydown', handleLetterKeydown);
      input.addEventListener('paste', handleLetterPaste);
      box.append(input);
      row.append(box);
      letterIndex += 1;
    });

    const meta = document.createElement('p');
    meta.className = 'answer-meta';
    meta.textContent = letterCount + ' letras · máximo ' + revealLimit + ' pistas';
    card.append(heading, row, meta);
    answerGrid.append(card);
  });
}

function getCardInputs(card) {
  return [...card.querySelectorAll('.letter-input')];
}

function handleLetterInput(event) {
  const input = event.currentTarget;
  const answerIndex = Number(input.dataset.answer);
  const letterIndex = Number(input.dataset.letter);
  input.value = [...input.value.toUpperCase()].slice(-1).join('');
  state.answers[answerIndex][letterIndex] = input.value;

  if (input.value) {
    const inputs = getCardInputs(input.closest('.answer-card'));
    const next = inputs[inputs.indexOf(input) + 1];
    if (next && !next.readOnly) next.focus();
  }

  updateAnswerState();
  saveState();
}

function handleLetterKeydown(event) {
  if (event.key !== 'Backspace' || event.currentTarget.value || event.currentTarget.readOnly) return;
  const inputs = getCardInputs(event.currentTarget.closest('.answer-card'));
  const previous = inputs[inputs.indexOf(event.currentTarget) - 1];
  if (previous && !previous.readOnly) previous.focus();
}

function handleLetterPaste(event) {
  event.preventDefault();
  const input = event.currentTarget;
  const answerIndex = Number(input.dataset.answer);
  const pasted = [...event.clipboardData.getData('text').replace(/[^a-záéíóúüñ]/gi, '').toUpperCase()];
  const inputs = getCardInputs(input.closest('.answer-card'));
  let position = inputs.indexOf(input);

  pasted.forEach((character) => {
    while (inputs[position] && inputs[position].readOnly) position += 1;
    if (inputs[position]) {
      inputs[position].value = character;
      state.answers[answerIndex][Number(inputs[position].dataset.letter)] = character;
    }
    position += 1;
  });

  updateAnswerState();
  saveState();
}

function revealLetter(answerIndex) {
  const card = answerGrid.querySelector('[data-answer="' + answerIndex + '"]');
  const button = card.querySelector('.reveal-button');
  const limit = Number(button.dataset.limit);
  if (state.revealCounts[answerIndex] >= limit || isAnswerCorrect(answerIndex)) return;

  const correctLetters = [...STRUCTURE_ANSWERS[answerIndex].replaceAll(' ', '')];
  const candidates = correctLetters
    .map((character, letterIndex) => ({ character, letterIndex }))
    .filter(({ character, letterIndex }) =>
      !state.revealed[answerIndex][letterIndex]
      && normalizeText(state.answers[answerIndex][letterIndex]) !== normalizeText(character)
    );
  if (!candidates.length) return;

  const choice = candidates[Math.floor(Math.random() * candidates.length)];
  state.answers[answerIndex][choice.letterIndex] = choice.character;
  state.revealed[answerIndex][choice.letterIndex] = true;
  state.revealCounts[answerIndex] += 1;
  state.totalReveals += 1;
  state.score = Math.max(0, 100 - state.totalReveals);
  updateAnswerState(true);
  saveState();
}

function isAnswerCorrect(answerIndex, sourceState = state) {
  const typed = sourceState.answers[answerIndex].join('');
  const expected = STRUCTURE_ANSWERS[answerIndex].replaceAll(' ', '');
  return typed.length === expected.length && normalizeText(typed) === normalizeText(expected);
}

function completedAnswerCount() {
  return STRUCTURE_ANSWERS.filter((_, index) => isAnswerCorrect(index)).length;
}

function updateAnswerState(syncInputs = false) {
  STRUCTURE_ANSWERS.forEach((_, answerIndex) => {
    const card = answerGrid.querySelector('[data-answer="' + answerIndex + '"]');
    const inputs = getCardInputs(card);

    inputs.forEach((input, letterIndex) => {
      if (syncInputs) input.value = state.answers[answerIndex][letterIndex] || '';
      const revealed = Boolean(state.revealed[answerIndex][letterIndex]);
      input.readOnly = revealed;
      input.parentElement.classList.toggle('is-revealed', revealed);
    });

    const correct = isAnswerCorrect(answerIndex);
    card.classList.toggle('is-complete', correct);
    card.classList.toggle('needs-review', hasReviewed && !correct);

    const button = card.querySelector('.reveal-button');
    const limit = Number(button.dataset.limit);
    button.disabled = correct || state.revealCounts[answerIndex] >= limit;
    button.textContent = correct
      ? 'Completa ✓'
      : state.revealCounts[answerIndex] >= limit
        ? 'Sin más pistas'
        : 'Pedir una letra · ' + state.revealCounts[answerIndex] + '/' + limit;
  });

  const completed = completedAnswerCount();
  answerCount.textContent = completed + ' / 12';
  liveScore.textContent = state.score;

  if (completed === STRUCTURE_ANSWERS.length) {
    validationMessage.hidden = true;
  } else if (hasReviewed) {
    const remaining = STRUCTURE_ANSWERS.length - completed;
    validationMessage.textContent = 'Todavía hay ' + remaining + ' '
      + (remaining === 1 ? 'estructura que necesita' : 'estructuras que necesitan')
      + ' revisión. Las respuestas marcadas en amarillo contienen errores o están incompletas.';
    validationMessage.hidden = false;
  }
}

function reviewAnswers(event) {
  event.preventDefault();
  hasReviewed = true;
  updateAnswerState();

  if (completedAnswerCount() === STRUCTURE_ANSWERS.length) {
    state.completed = true;
    state.completedAt = new Date().toISOString();
    state.stage = 'result';
    saveState();
    showStage('result');
    return;
  }

  const firstAnswerToReview = answerGrid.querySelector('.answer-card.needs-review .letter-input:not([readonly])');
  if (firstAnswerToReview) firstAnswerToReview.focus({ preventScroll: true });
  validationMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function updateTimers() {
  puzzleTimer.textContent = formatTime(state.puzzleSeconds);
}

function renderResult() {
  if (!state.completed || completedAnswerCount() !== STRUCTURE_ANSWERS.length) {
    showStage('labels');
    return;
  }

  resultName.textContent = state.studentName;
  resultScore.textContent = state.score;
  resultPuzzleTime.textContent = formatTime(state.puzzleSeconds);
  resultLabelTime.textContent = formatTime(state.labelSeconds);
  resultReveals.textContent = state.totalReveals;
  resultSession.textContent = 'Sesión ' + state.sessionId;
  resultDate.textContent = formatCompletionDate(state.completedAt);
  scoreRing.style.setProperty('--score', state.score + '%');
  resultFeedback.innerHTML = state.score === 100
    ? '<strong>¡Excelente!</strong> Identificaste correctamente las 12 estructuras sin pedir ninguna letra.'
    : '<strong>¡Muy buen trabajo!</strong> Identificaste correctamente las 12 estructuras y terminaste con '
      + state.score + ' puntos. Utilizaste ' + state.totalReveals + ' '
      + (state.totalReveals === 1 ? 'letra revelada' : 'letras reveladas') + '.';
  downloadStatus.textContent = '';
}

function playAgain() {
  const studentName = state.studentName;
  state = createNewState(studentName);
  state.started = true;
  savedState = null;
  selectedPiece = null;
  hasReviewed = false;
  applyStateToInterface();
  showStage('puzzle');
}

function roundedRectangle(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function fitText(context, text, maxWidth, startSize, minimumSize = 24) {
  let size = startSize;
  while (size > minimumSize) {
    context.font = '700 ' + size + 'px system-ui, sans-serif';
    if (context.measureText(text).width <= maxWidth) break;
    size -= 2;
  }
  return size;
}

function loadProofImage() {
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
  downloadStatus.textContent = 'Preparando la imagen…';

  try {
    const neuronImage = await loadProofImage();
    const canvas = document.createElement('canvas');
    canvas.width = 1400;
    canvas.height = 900;
    const context = canvas.getContext('2d');

    const background = context.createLinearGradient(0, 0, 1400, 900);
    background.addColorStop(0, '#eaf2f7');
    background.addColorStop(1, '#dcefed');
    context.fillStyle = background;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ffffff';
    roundedRectangle(context, 55, 55, 1290, 790, 34);
    context.fill();
    context.fillStyle = '#f3ac24';
    roundedRectangle(context, 55, 55, 1290, 16, 8);
    context.fill();

    context.fillStyle = '#062f67';
    context.font = '800 25px system-ui, sans-serif';
    context.fillText('FISIOLOGÍA ANIMAL 2027-1 · GRUPO 5417', 115, 125);

    context.fillStyle = '#1c9a97';
    context.font = '800 20px system-ui, sans-serif';
    context.fillText('ACTIVIDAD COMPLETADA', 115, 185);

    context.fillStyle = '#062f67';
    context.font = '600 58px Georgia, serif';
    context.fillText('¡Neurona reconstruida!', 115, 255);

    context.fillStyle = '#526a7e';
    const nameSize = fitText(context, state.studentName, 720, 38, 25);
    context.font = '700 ' + nameSize + 'px system-ui, sans-serif';
    context.fillText(state.studentName, 115, 315);

    context.strokeStyle = '#f3ac24';
    context.lineWidth = 22;
    context.beginPath();
    context.arc(260, 490, 112, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (state.score / 100));
    context.stroke();
    context.strokeStyle = '#e4ebef';
    context.lineWidth = 22;
    context.beginPath();
    context.arc(260, 490, 112, -Math.PI / 2 + Math.PI * 2 * (state.score / 100), Math.PI * 1.5);
    context.stroke();
    context.fillStyle = '#062f67';
    context.textAlign = 'center';
    context.font = '600 76px Georgia, serif';
    context.fillText(String(state.score), 260, 505);
    context.fillStyle = '#607487';
    context.font = '800 19px system-ui, sans-serif';
    context.fillText('PUNTOS', 260, 548);
    context.textAlign = 'left';

    const metrics = [
      ['ROMPECABEZAS', formatTime(state.puzzleSeconds)],
      ['ETIQUETAS', formatTime(state.labelSeconds)],
      ['ESTRUCTURAS', '12 / 12'],
      ['LETRAS REVELADAS', String(state.totalReveals)]
    ];
    metrics.forEach(([label, value], index) => {
      const column = index % 2;
      const row = Math.floor(index / 2);
      const x = 430 + column * 260;
      const y = 420 + row * 130;
      context.fillStyle = '#f4f8fa';
      roundedRectangle(context, x, y, 230, 100, 17);
      context.fill();
      context.fillStyle = '#687b8d';
      context.font = '800 15px system-ui, sans-serif';
      context.fillText(label, x + 20, y + 31);
      context.fillStyle = '#062f67';
      context.font = '800 31px system-ui, sans-serif';
      context.fillText(value, x + 20, y + 72);
    });

    const imageHeight = 590;
    const imageWidth = neuronImage.width / neuronImage.height * imageHeight;
    context.drawImage(neuronImage, 1035, 155, imageWidth, imageHeight);

    context.strokeStyle = '#d8e2ea';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(115, 735);
    context.lineTo(1285, 735);
    context.stroke();
    context.fillStyle = '#607487';
    context.font = '600 19px system-ui, sans-serif';
    context.fillText('Sesión ' + state.sessionId, 115, 785);
    context.textAlign = 'right';
    context.fillText(formatCompletionDate(state.completedAt), 1285, 785);
    context.textAlign = 'left';

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('No se pudo crear el comprobante.');

    const safeName = normalizeText(state.studentName)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 45) || 'estudiante';
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resultado-neurona-' + safeName + '.png';
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1500);
    downloadStatus.textContent = 'Comprobante descargado.';
  } catch {
    downloadStatus.textContent = 'No fue posible generar la imagen. Puedes tomar una captura de esta tarjeta.';
  } finally {
    proofButton.disabled = false;
  }
}

startButton.addEventListener('click', startNewGame);
resumeButton.addEventListener('click', resumeGame);
resetButton.addEventListener('click', resetActivity);
shuffleButton.addEventListener('click', restartPuzzle);
continueLabelsButton.addEventListener('click', () => {
  if (!state.puzzleSolved) return;
  state.stage = 'labels';
  saveState();
  showStage('labels');
});
labelForm.addEventListener('submit', reviewAnswers);
proofButton.addEventListener('click', downloadProof);
playAgainButton.addEventListener('click', playAgain);
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim()) nameError.hidden = true;
});

setInterval(() => {
  if (!state.started || state.completed || document.hidden) return;
  if (state.stage === 'puzzle' && !state.puzzleSolved) state.puzzleSeconds += 1;
  if (state.stage === 'labels') state.labelSeconds += 1;
  updateTimers();
  if ((state.puzzleSeconds + state.labelSeconds) % 5 === 0) saveState();
}, 1000);

window.addEventListener('beforeunload', saveState);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) saveState();
});

buildAnswerCards();
applyStateToInterface();
showSavedActivity();
showStage('welcome', { save: false, instant: true });
