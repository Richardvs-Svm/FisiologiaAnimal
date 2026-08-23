(function () {
  "use strict";

  const STORAGE_KEY = "fisiologiaAnimal.granRetoPrincipios.v1";
  const STATE_VERSION = 1;
  const QUESTIONS_PER_SESSION = 15;
  const REQUIRED_SESSIONS = 2;
  const LABELS = ["A", "B", "C", "D"];
  const PRIZES = [
    100,
    200,
    300,
    500,
    1000,
    2000,
    4000,
    8000,
    16000,
    32000,
    64000,
    125000,
    250000,
    500000,
    1000000,
  ];

  const bank = Array.isArray(window.PHYSIOLOGY_QUESTION_BANK)
    ? window.PHYSIOLOGY_QUESTION_BANK
    : null;
  const questionById = new Map((bank || []).map((question) => [question.id, question]));

  const elements = {
    startScreen: document.querySelector("#startScreen"),
    gameScreen: document.querySelector("#gameScreen"),
    resultScreen: document.querySelector("#resultScreen"),
    loadError: document.querySelector("#loadError"),
    studentName: document.querySelector("#studentName"),
    nameError: document.querySelector("#nameError"),
    startButton: document.querySelector("#startButton"),
    resumePanel: document.querySelector("#resumePanel"),
    resumeDescription: document.querySelector("#resumeDescription"),
    resumeButton: document.querySelector("#resumeButton"),
    resetButton: document.querySelector("#resetButton"),
    saveIndicator: document.querySelector("#saveIndicator"),
    sessionLabel: document.querySelector("#sessionLabel"),
    phaseTitle: document.querySelector("#phaseTitle"),
    progressText: document.querySelector("#progressText"),
    currentPrize: document.querySelector("#currentPrize"),
    progressBar: document.querySelector("#progressBar"),
    moneyLadder: document.querySelector("#moneyLadder"),
    phaseBadge: document.querySelector("#phaseBadge"),
    questionCategory: document.querySelector("#questionCategory"),
    questionScenario: document.querySelector("#questionScenario"),
    part1Section: document.querySelector("#part1Section"),
    gameQuestionTitle: document.querySelector("#gameQuestionTitle"),
    part1Options: document.querySelector("#part1Options"),
    submitPart1: document.querySelector("#submitPart1"),
    part2Section: document.querySelector("#part2Section"),
    chosenAnswerRecap: document.querySelector("#chosenAnswerRecap"),
    whyQuestionTitle: document.querySelector("#whyQuestionTitle"),
    part2Options: document.querySelector("#part2Options"),
    submitPart2: document.querySelector("#submitPart2"),
    feedbackPanel: document.querySelector("#feedbackPanel"),
    feedbackIcon: document.querySelector("#feedbackIcon"),
    feedbackLabel: document.querySelector("#feedbackLabel"),
    feedbackTitle: document.querySelector("#feedbackTitle"),
    answerSummary: document.querySelector("#answerSummary"),
    feedbackExplanation: document.querySelector("#feedbackExplanation"),
    reviewAdvice: document.querySelector("#reviewAdvice"),
    nextButton: document.querySelector("#nextButton"),
    resultEyebrow: document.querySelector("#resultEyebrow"),
    resultTitle: document.querySelector("#resultTitle"),
    resultLead: document.querySelector("#resultLead"),
    proofSession: document.querySelector("#proofSession"),
    proofName: document.querySelector("#proofName"),
    proofPrize: document.querySelector("#proofPrize"),
    proofScore: document.querySelector("#proofScore"),
    proofReviews: document.querySelector("#proofReviews"),
    proofDate: document.querySelector("#proofDate"),
    proofCode: document.querySelector("#proofCode"),
    downloadProofButton: document.querySelector("#downloadProofButton"),
    printProofButton: document.querySelector("#printProofButton"),
    nextSessionButton: document.querySelector("#nextSessionButton"),
    summaryMessage: document.querySelector("#summaryMessage"),
    adviceList: document.querySelector("#adviceList"),
    classroomTitle: document.querySelector("#classroomTitle"),
    classroomCopy: document.querySelector("#classroomCopy"),
    pastProofs: document.querySelector("#pastProofs"),
    pastProofList: document.querySelector("#pastProofList"),
    newCycleButton: document.querySelector("#newCycleButton"),
    toast: document.querySelector("#toast"),
  };

  let state = loadState() || emptyState();
  let displayedResult = null;
  let saveTimer = null;
  let toastTimer = null;

  function emptyState(name = "") {
    return {
      version: STATE_VERSION,
      studentName: name,
      cycleId: randomToken(6),
      usedQuestionIds: [],
      activeSession: null,
      history: [],
    };
  }

  function randomToken(length) {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const values = new Uint8Array(length);
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(values);
    } else {
      for (let index = 0; index < length; index += 1) {
        values[index] = Math.floor(Math.random() * 256);
      }
    }
    return [...values].map((value) => alphabet[value % alphabet.length]).join("");
  }

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!parsed || parsed.version !== STATE_VERSION) return null;
      if (!Array.isArray(parsed.history) || !Array.isArray(parsed.usedQuestionIds)) return null;
      if (parsed.activeSession) {
        const ids = parsed.activeSession.questionIds || [];
        if (!ids.length || ids.some((id) => !questionById.has(id))) return null;
      }
      return parsed;
    } catch (error) {
      return null;
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      elements.saveIndicator.classList.remove("save-error");
      elements.saveIndicator.lastChild.textContent = " Guardado ahora";
      clearTimeout(saveTimer);
      saveTimer = window.setTimeout(() => {
        elements.saveIndicator.lastChild.textContent = " Progreso local";
      }, 1600);
    } catch (error) {
      elements.saveIndicator.classList.add("save-error");
      elements.saveIndicator.lastChild.textContent = " No se pudo guardar";
    }
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  }

  function formatMoney(value) {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 0,
    }).format(value);
  }

  function formatDate(value) {
    return new Intl.DateTimeFormat("es-MX", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date(value));
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function showScreen(screen) {
    elements.startScreen.hidden = screen !== "start";
    elements.gameScreen.hidden = screen !== "game";
    elements.resultScreen.hidden = screen !== "result";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      elements.toast.hidden = true;
    }, 3600);
  }

  function updateStartScreen() {
    const hasProgress = Boolean(state.activeSession || state.history.length);
    elements.studentName.value = state.studentName || "";
    elements.studentName.disabled = hasProgress;
    elements.startButton.hidden = hasProgress;
    elements.resumePanel.hidden = !hasProgress;
    elements.resetButton.hidden = !hasProgress;

    if (state.activeSession) {
      const active = state.activeSession;
      const description = active.phase === "initial"
        ? `Sesión ${active.number}: pregunta ${active.initialIndex + 1} de ${QUESTIONS_PER_SESSION}`
        : `Sesión ${active.number}: ronda de refuerzo`;
      elements.resumeDescription.textContent = description;
      elements.resumeButton.textContent = "Continuar";
    } else if (state.history.length >= REQUIRED_SESSIONS) {
      elements.resumeDescription.textContent = "Las dos sesiones están completas";
      elements.resumeButton.textContent = "Ver comprobantes";
    } else if (state.history.length === 1) {
      elements.resumeDescription.textContent = "Sesión 1 completa; la sesión 2 está pendiente";
      elements.resumeButton.textContent = "Ver resultado";
    }
  }

  function validateName() {
    const name = elements.studentName.value.trim().replace(/\s+/g, " ");
    const valid = name.length >= 2;
    elements.nameError.hidden = valid;
    if (valid) state.studentName = name;
    return valid;
  }

  function startSession(number) {
    const available = bank.filter((question) => !state.usedQuestionIds.includes(question.id));
    if (available.length < QUESTIONS_PER_SESSION) {
      showToast("No quedan suficientes preguntas nuevas para esta sesión.");
      return;
    }

    const selectedIds = shuffle(available)
      .slice(0, QUESTIONS_PER_SESSION)
      .map((question) => question.id);

    state.usedQuestionIds.push(...selectedIds);
    state.activeSession = {
      number,
      questionIds: selectedIds,
      phase: "initial",
      initialIndex: 0,
      firstPassResults: [],
      missedIds: [],
      masteredIds: [],
      queue: [],
      selectedPart1: null,
      selectedPart2: null,
      step: "part1",
      feedback: null,
      remediationAttempts: 0,
      startedAt: new Date().toISOString(),
    };

    saveState();
    showGame();
  }

  function currentQuestionId() {
    const active = state.activeSession;
    if (!active) return null;
    if (active.step === "feedback" && active.feedback) return active.feedback.questionId;
    if (active.phase === "initial") return active.questionIds[active.initialIndex];
    return active.queue[0] ? active.queue[0].id : null;
  }

  function currentQuestion() {
    return questionById.get(currentQuestionId());
  }

  function correctPairsCount() {
    const active = state.activeSession;
    if (!active) return 0;
    return active.firstPassResults.filter((result) => result.fullyCorrect).length;
  }

  function currentPrizeValue() {
    const correctPairs = correctPairsCount();
    return correctPairs ? PRIZES[correctPairs - 1] : 0;
  }

  function renderLadder() {
    const reached = state.activeSession ? correctPairsCount() : 0;
    elements.moneyLadder.innerHTML = "";
    for (let step = PRIZES.length; step >= 1; step -= 1) {
      const item = document.createElement("li");
      if ([5, 10, 15].includes(step)) item.classList.add("milestone");
      if (step <= reached) item.classList.add("reached");
      if (step === reached) item.classList.add("current");
      item.innerHTML = `<span>${step}</span><strong>${formatMoney(PRIZES[step - 1])}</strong>`;
      elements.moneyLadder.append(item);
    }
  }

  function renderOptions(part, container, selected, feedback) {
    container.innerHTML = "";
    LABELS.forEach((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.dataset.answer = label;
      button.setAttribute("aria-pressed", selected === label ? "true" : "false");
      if (selected === label) button.classList.add("selected");

      if (feedback) {
        button.disabled = true;
        if (label === part.answer) button.classList.add("correct");
        if (label === selected && label !== part.answer) button.classList.add("incorrect");
      }

      const letter = document.createElement("span");
      letter.className = "option-letter";
      letter.textContent = label;
      const copy = document.createElement("span");
      copy.textContent = part.options[label];
      button.append(letter, copy);

      if (!feedback) {
        button.addEventListener("click", () => selectAnswer(container === elements.part1Options ? 1 : 2, label));
      }
      container.append(button);
    });
  }

  function selectAnswer(partNumber, label) {
    const active = state.activeSession;
    if (!active || active.step === "feedback") return;
    if (partNumber === 1) active.selectedPart1 = label;
    if (partNumber === 2) active.selectedPart2 = label;
    saveState();
    renderQuestion();
  }

  function renderGameStatus() {
    const active = state.activeSession;
    const inInitial = active.phase === "initial";
    elements.sessionLabel.textContent = `Sesión ${active.number} de ${REQUIRED_SESSIONS}`;
    elements.phaseTitle.textContent = inInitial ? "Primera vuelta" : "Ronda de refuerzo";
    elements.phaseBadge.textContent = inInitial
      ? "Primera vuelta"
      : active.queue[0] && active.queue[0].stage === "confirmation"
        ? "Confirmación final"
        : "Corrección";
    elements.phaseBadge.classList.toggle("mastery", !inInitial);

    if (inInitial) {
      elements.progressText.textContent = `${active.initialIndex + 1} de ${QUESTIONS_PER_SESSION}`;
      elements.progressBar.style.width = `${((active.initialIndex + 1) / QUESTIONS_PER_SESSION) * 100}%`;
    } else {
      const total = active.missedIds.length;
      const mastered = active.masteredIds.length;
      elements.progressText.textContent = `${mastered} de ${total} dominados`;
      elements.progressBar.style.width = `${total ? (mastered / total) * 100 : 100}%`;
    }

    elements.currentPrize.textContent = formatMoney(currentPrizeValue());
    renderLadder();
  }

  function renderQuestion() {
    const active = state.activeSession;
    const question = currentQuestion();
    if (!active || !question) return;

    renderGameStatus();
    elements.questionCategory.textContent = question.category;
    elements.questionScenario.textContent = question.scenario;
    elements.gameQuestionTitle.textContent = question.part1.prompt;
    elements.whyQuestionTitle.textContent = question.part2.prompt;

    const feedbackVisible = active.step === "feedback";
    elements.feedbackPanel.hidden = !feedbackVisible;
    elements.part1Section.hidden = active.step !== "part1";
    elements.part2Section.hidden = active.step !== "part2";

    if (active.step === "part1") {
      renderOptions(question.part1, elements.part1Options, active.selectedPart1, false);
      elements.submitPart1.disabled = !active.selectedPart1;
    }

    if (active.step === "part2") {
      const selectedConcept = question.part1.options[active.selectedPart1];
      if (elements.chosenAnswerRecap) {
        elements.chosenAnswerRecap.textContent = `Elegiste en la primera parte: ${active.selectedPart1}. ${selectedConcept}`;
      }
      renderOptions(question.part2, elements.part2Options, active.selectedPart2, false);
      elements.submitPart2.disabled = !active.selectedPart2;
    }

    if (feedbackVisible) renderFeedback(question);
  }

  function showGame() {
    if (!state.activeSession) return;
    showScreen("game");
    renderQuestion();
  }

  function submitFirstPart() {
    const active = state.activeSession;
    if (!active || !active.selectedPart1) return;
    active.step = "part2";
    saveState();
    renderQuestion();
    document.querySelector("#questionCard").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function insertLater(item) {
    const queue = state.activeSession.queue;
    if (!queue.length) {
      queue.push(item);
      return;
    }
    const insertAt = Math.floor(Math.random() * queue.length) + 1;
    queue.splice(insertAt, 0, item);
  }

  function submitSecondPart() {
    const active = state.activeSession;
    const question = currentQuestion();
    if (!active || !question || !active.selectedPart2) return;

    const part1Correct = active.selectedPart1 === question.part1.answer;
    const part2Correct = active.selectedPart2 === question.part2.answer;
    const fullyCorrect = part1Correct && part2Correct;
    let outcome = "initial-correct";

    if (active.phase === "initial") {
      active.firstPassResults.push({
        id: question.id,
        part1Correct,
        part2Correct,
        fullyCorrect,
      });
      if (!fullyCorrect && !active.missedIds.includes(question.id)) {
        active.missedIds.push(question.id);
        outcome = "initial-missed";
      }
    } else {
      active.remediationAttempts += 1;
      const item = active.queue.shift();
      if (fullyCorrect && item.stage === "correction") {
        insertLater({ id: question.id, stage: "confirmation" });
        outcome = "correction-correct";
      } else if (fullyCorrect && item.stage === "confirmation") {
        if (!active.masteredIds.includes(question.id)) active.masteredIds.push(question.id);
        outcome = "confirmation-correct";
      } else {
        insertLater({ id: question.id, stage: "correction" });
        outcome = item.stage === "confirmation" ? "confirmation-missed" : "correction-missed";
      }
    }

    active.feedback = {
      questionId: question.id,
      selectedPart1: active.selectedPart1,
      selectedPart2: active.selectedPart2,
      part1Correct,
      part2Correct,
      fullyCorrect,
      outcome,
    };
    active.step = "feedback";
    saveState();
    renderQuestion();
  }

  function answerResult(label, part, selected, correct) {
    const selectedCopy = `${selected}. ${part.options[selected]}`;
    const correctCopy = `${part.answer}. ${part.options[part.answer]}`;
    return `
      <div class="answer-result ${correct ? "correct" : "incorrect"}">
        <strong>${escapeHtml(label)}: ${correct ? "correcta" : "por revisar"}</strong>
        <span>Tu respuesta: ${escapeHtml(selectedCopy)}</span>
        ${correct ? "" : `<span>Respuesta correcta: ${escapeHtml(correctCopy)}</span>`}
      </div>`;
  }

  function renderFeedback(question) {
    const active = state.activeSession;
    const feedback = active.feedback;
    const success = feedback.fullyCorrect;
    const messages = {
      "initial-correct": ["Respuesta completa", "¡Muy bien!", "Ambas partes son correctas."],
      "initial-missed": ["Se repetirá al final", "Esta idea necesita otra vuelta", "Después de las 15 preguntas podrás corregirla y confirmarla."],
      "correction-correct": ["Primera confirmación", "¡Corrección acertada!", "La pregunta volverá una vez más para confirmar el aprendizaje."],
      "confirmation-correct": ["Dominio confirmado", "¡Concepto dominado!", "Respondiste correctamente las dos comprobaciones."],
      "correction-missed": ["Ronda de refuerzo", "Sigamos practicando", "La pregunta volverá a la fila hasta que la respondas correctamente."],
      "confirmation-missed": ["Confirmación pendiente", "Necesitamos reforzarla otra vez", "Volverás a corregirla y después realizarás una nueva confirmación final."],
    };
    const [label, title, lead] = messages[feedback.outcome];

    elements.feedbackPanel.classList.toggle("success", success);
    elements.feedbackPanel.classList.toggle("needs-review", !success);
    elements.feedbackIcon.textContent = success ? "✓" : "↻";
    elements.feedbackLabel.textContent = label;
    elements.feedbackTitle.textContent = title;
    elements.answerSummary.innerHTML = [
      answerResult("Parte 1", question.part1, feedback.selectedPart1, feedback.part1Correct),
      answerResult("Parte 2", question.part2, feedback.selectedPart2, feedback.part2Correct),
    ].join("");
    elements.feedbackExplanation.textContent = `${lead} ${question.explanation}`;
    elements.reviewAdvice.textContent = `Para repasar: ${question.review}`;

    if (active.phase === "initial") {
      const isLast = active.initialIndex === QUESTIONS_PER_SESSION - 1;
      elements.nextButton.textContent = isLast
        ? active.missedIds.length
          ? "Comenzar la ronda de refuerzo"
          : "Ver resultado de la sesión"
        : "Siguiente pregunta";
    } else {
      elements.nextButton.textContent = active.queue.length ? "Continuar el refuerzo" : "Completar la sesión";
    }
  }

  function resetDraft() {
    const active = state.activeSession;
    active.selectedPart1 = null;
    active.selectedPart2 = null;
    active.step = "part1";
    active.feedback = null;
  }

  function continueAfterFeedback() {
    const active = state.activeSession;
    if (!active) return;

    if (active.phase === "initial") {
      if (active.initialIndex < QUESTIONS_PER_SESSION - 1) {
        active.initialIndex += 1;
        resetDraft();
        saveState();
        renderQuestion();
        return;
      }

      if (active.missedIds.length) {
        active.phase = "remediation";
        active.queue = shuffle(active.missedIds.map((id) => ({ id, stage: "correction" })));
        resetDraft();
        saveState();
        renderQuestion();
        showToast("Comienza el refuerzo: corrige cada pregunta y confírmala una vez más.");
        return;
      }

      completeSession();
      return;
    }

    if (active.queue.length) {
      resetDraft();
      saveState();
      renderQuestion();
    } else {
      completeSession();
    }
  }

  function makeSessionCode(sessionNumber) {
    const date = new Date();
    const stamp = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("");
    return `FIS-${stamp}-S${sessionNumber}-${state.cycleId}`;
  }

  function completeSession() {
    const active = state.activeSession;
    const correctDecisions = active.firstPassResults.reduce(
      (total, result) => total + Number(result.part1Correct) + Number(result.part2Correct),
      0,
    );
    const correctPairs = active.firstPassResults.filter((result) => result.fullyCorrect).length;
    const advice = [...new Set(active.missedIds.map((id) => questionById.get(id).review))];
    const completedAt = new Date().toISOString();
    const result = {
      sessionNumber: active.number,
      studentName: state.studentName,
      questionIds: [...active.questionIds],
      correctDecisions,
      correctPairs,
      initialMissed: active.missedIds.length,
      remediationAttempts: active.remediationAttempts,
      prize: correctPairs ? PRIZES[correctPairs - 1] : 0,
      advice,
      startedAt: active.startedAt,
      completedAt,
      code: makeSessionCode(active.number),
    };

    state.history = state.history.filter((item) => item.sessionNumber !== result.sessionNumber);
    state.history.push(result);
    state.history.sort((a, b) => a.sessionNumber - b.sessionNumber);
    state.activeSession = null;
    saveState();
    showResult(result);
  }

  function showResult(result) {
    displayedResult = result;
    showScreen("result");
    const million = result.prize === 1000000;
    elements.resultEyebrow.textContent = `Sesión ${result.sessionNumber} de ${REQUIRED_SESSIONS} completada`;
    elements.resultTitle.textContent = million ? "¡Llegaste al millón!" : "¡Conceptos dominados!";
    elements.resultLead.textContent = million
      ? "Respondiste correctamente las 30 decisiones desde la primera vuelta."
      : "Corregiste y confirmaste todos los conceptos de esta sesión.";
    elements.proofSession.textContent = `Sesión ${result.sessionNumber} de ${REQUIRED_SESSIONS}`;
    elements.proofName.textContent = result.studentName;
    elements.proofPrize.textContent = formatMoney(result.prize);
    elements.proofScore.textContent = `${result.correctDecisions}/${QUESTIONS_PER_SESSION * 2}`;
    elements.proofReviews.textContent = String(result.remediationAttempts);
    elements.proofDate.textContent = formatDate(result.completedAt);
    elements.proofCode.textContent = result.code;

    elements.summaryMessage.textContent = result.initialMissed
      ? `En la primera vuelta, ${result.initialMissed} ${result.initialMissed === 1 ? "pregunta necesitó" : "preguntas necesitaron"} refuerzo. Al finalizar, todas quedaron corregidas y confirmadas.`
      : "No necesitaste la ronda de refuerzo: todas las respuestas y sus explicaciones fueron correctas en la primera vuelta.";

    elements.adviceList.innerHTML = "";
    const advice = result.advice.length
      ? result.advice.slice(0, 5)
      : ["Sigue explicando con tus propias palabras por qué cada mecanismo corresponde al concepto elegido."];
    advice.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      elements.adviceList.append(li);
    });

    const finalSession = result.sessionNumber >= REQUIRED_SESSIONS;
    elements.nextSessionButton.hidden = finalSession;
    elements.nextSessionButton.textContent = "Comenzar la sesión 2 con preguntas nuevas";
    elements.newCycleButton.hidden = !finalSession;
    elements.classroomTitle.textContent = finalSession
      ? "Ya tienes las dos sesiones"
      : "Guarda este primer comprobante";
    elements.classroomCopy.textContent = finalSession
      ? "Descarga los comprobantes de las sesiones 1 y 2 —o toma capturas— y sube ambos a Classroom."
      : "Después completa la sesión 2. Al final deberás subir a Classroom los dos comprobantes diferentes.";
    renderPastProofs();
  }

  function renderPastProofs() {
    elements.pastProofs.hidden = state.history.length < 2;
    elements.pastProofList.innerHTML = "";
    state.history.forEach((result) => {
      const row = document.createElement("div");
      row.className = "past-proof-row";
      const copy = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = `Sesión ${result.sessionNumber}: ${formatMoney(result.prize)}`;
      const detail = document.createElement("span");
      detail.textContent = `${result.correctDecisions}/30 en la primera vuelta · ${result.code}`;
      copy.append(title, detail);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "secondary-button";
      button.textContent = `Descargar sesión ${result.sessionNumber}`;
      button.addEventListener("click", () => downloadProof(result));
      row.append(copy, button);
      elements.pastProofList.append(row);
    });
  }

  function roundedRect(context, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    context.beginPath();
    context.moveTo(x + r, y);
    context.arcTo(x + width, y, x + width, y + height, r);
    context.arcTo(x + width, y + height, x, y + height, r);
    context.arcTo(x, y + height, x, y, r);
    context.arcTo(x, y, x + width, y, r);
    context.closePath();
  }

  function fitText(context, text, maxWidth, startSize, fontFamily) {
    let size = startSize;
    do {
      context.font = `700 ${size}px ${fontFamily}`;
      if (context.measureText(text).width <= maxWidth) return size;
      size -= 2;
    } while (size > 30);
    return size;
  }

  function downloadProof(result) {
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1000;
    const context = canvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 0, 1600, 1000);
    gradient.addColorStop(0, "#04112b");
    gradient.addColorStop(1, "#123f7f");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = "#f4be35";
    context.lineWidth = 12;
    roundedRect(context, 38, 38, 1524, 924, 34);
    context.stroke();
    context.strokeStyle = "rgba(244,190,53,.45)";
    context.lineWidth = 3;
    roundedRect(context, 58, 58, 1484, 884, 26);
    context.stroke();

    context.fillStyle = "rgba(255,255,255,.055)";
    context.font = "700 600px Georgia";
    context.fillText("Φ", 1050, 860);

    context.fillStyle = "#c5d8ef";
    context.font = "700 28px Arial";
    context.fillText("EL GRAN RETO FISIOLÓGICO", 110, 135);
    context.textAlign = "right";
    context.fillText(`SESIÓN ${result.sessionNumber} DE ${REQUIRED_SESSIONS}`, 1490, 135);
    context.textAlign = "left";

    context.fillStyle = "#f4be35";
    context.font = "700 27px Arial";
    context.fillText("COMPROBANTE DE DOMINIO", 110, 225);

    context.fillStyle = "#ffffff";
    const nameSize = fitText(context, result.studentName, 1380, 76, "Georgia");
    context.font = `700 ${nameSize}px Georgia`;
    context.fillText(result.studentName, 110, 315);

    context.fillStyle = "#dce8f6";
    context.font = "34px Arial";
    context.fillText("Completó 15 preguntas de dos partes y dominó todos los conceptos presentados.", 110, 380);

    context.fillStyle = "#bdd0e7";
    context.font = "700 25px Arial";
    context.fillText("PREMIO DE PRIMERA VUELTA", 110, 475);
    context.fillStyle = "#f4be35";
    context.font = "700 112px Georgia";
    context.fillText(formatMoney(result.prize), 110, 590);

    const stats = [
      ["PRIMERA VUELTA", `${result.correctDecisions}/30`],
      ["DOMINIO FINAL", "100%"],
      ["REPASOS", String(result.remediationAttempts)],
    ];
    stats.forEach(([label, value], index) => {
      const x = 110 + index * 340;
      context.fillStyle = "rgba(255,255,255,.09)";
      roundedRect(context, x, 660, 300, 120, 18);
      context.fill();
      context.fillStyle = "#bdd0e7";
      context.font = "700 21px Arial";
      context.fillText(label, x + 24, 700);
      context.fillStyle = "#ffffff";
      context.font = "700 42px Arial";
      context.fillText(value, x + 24, 755);
    });

    context.fillStyle = "#c5d8ef";
    context.font = "25px Arial";
    context.fillText(formatDate(result.completedAt), 110, 885);
    context.textAlign = "right";
    context.font = "700 25px Arial";
    context.fillText(result.code, 1490, 885);

    const safeName = result.studentName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 36);
    const filename = `comprobante-principios-fisiologia-${safeName}-sesion-${result.sessionNumber}.png`;

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast(`Comprobante de la sesión ${result.sessionNumber} descargado.`);
    }, "image/png");
  }

  function resumeProgress() {
    if (state.activeSession) {
      showGame();
      return;
    }
    if (state.history.length) showResult(state.history[state.history.length - 1]);
  }

  function resetAll() {
    const confirmed = window.confirm("¿Quieres borrar las sesiones y respuestas guardadas en este dispositivo?");
    if (!confirmed) return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      // The in-memory state can still be reset if storage is unavailable.
    }
    state = emptyState();
    displayedResult = null;
    updateStartScreen();
    showScreen("start");
    showToast("El progreso anterior fue borrado.");
  }

  function startNewCycle() {
    const confirmed = window.confirm("¿Quieres iniciar un ciclo nuevo? Las dos sesiones actuales serán reemplazadas.");
    if (!confirmed) return;
    const name = state.studentName;
    state = emptyState(name);
    saveState();
    startSession(1);
  }

  function bindEvents() {
    elements.startButton.addEventListener("click", () => {
      if (!validateName()) return;
      saveState();
      startSession(1);
    });
    elements.studentName.addEventListener("input", () => {
      elements.nameError.hidden = true;
    });
    elements.studentName.addEventListener("keydown", (event) => {
      if (event.key === "Enter") elements.startButton.click();
    });
    elements.resumeButton.addEventListener("click", resumeProgress);
    elements.resetButton.addEventListener("click", resetAll);
    elements.submitPart1.addEventListener("click", submitFirstPart);
    elements.submitPart2.addEventListener("click", submitSecondPart);
    elements.nextButton.addEventListener("click", continueAfterFeedback);
    elements.downloadProofButton.addEventListener("click", () => {
      if (displayedResult) downloadProof(displayedResult);
    });
    elements.printProofButton.addEventListener("click", () => window.print());
    elements.nextSessionButton.addEventListener("click", () => startSession(2));
    elements.newCycleButton.addEventListener("click", startNewCycle);
  }

  function init() {
    if (!bank || bank.length < QUESTIONS_PER_SESSION * REQUIRED_SESSIONS) {
      elements.startScreen.hidden = true;
      elements.loadError.hidden = false;
      return;
    }
    bindEvents();
    updateStartScreen();
    showScreen("start");
  }

  init();
})();
