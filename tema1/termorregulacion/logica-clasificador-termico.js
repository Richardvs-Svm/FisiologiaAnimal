(function () {
  "use strict";

  var datos = window.DATOS_CLASIFICADOR_TERMICO;
  if (!datos) {
    document.body.innerHTML = "<p>No se pudo cargar el banco de animales.</p>";
    return;
  }

  function porId(id) {
    return document.getElementById(id);
  }

  var elementos = {
    pantallas: {
      introduccion: porId("pantalla-introduccion"),
      juego: porId("pantalla-juego"),
      pausa: porId("pantalla-pausa"),
      final: porId("pantalla-final")
    },
    metricaNivel: porId("metrica-nivel"),
    metricaTiempo: porId("metrica-tiempo"),
    metricaAvance: porId("metrica-avance"),
    metricaPuntos: porId("metrica-puntos"),
    pasos: Array.prototype.slice.call(document.querySelectorAll(".paso")),
    introCeja: porId("intro-ceja"),
    introTitulo: porId("intro-titulo"),
    introEntrada: porId("intro-entrada"),
    introConceptos: porId("intro-conceptos"),
    introRecordatorio: porId("intro-recordatorio"),
    introPregunta: porId("intro-pregunta"),
    identificacionEstudiante: porId("identificacion-estudiante"),
    nombreEstudiante: porId("nombre-estudiante"),
    errorNombre: porId("error-nombre"),
    botonComenzar: porId("boton-comenzar"),
    juegoCeja: porId("juego-ceja"),
    juegoTitulo: porId("juego-titulo"),
    categorias: porId("categorias"),
    animales: porId("animales"),
    notaBanco: porId("nota-banco"),
    retroalimentacion: porId("retroalimentacion"),
    pausaSello: porId("pausa-sello"),
    pausaCeja: porId("pausa-ceja"),
    pausaTitulo: porId("pausa-titulo"),
    pausaResumen: porId("pausa-resumen"),
    pausaDatos: porId("pausa-datos"),
    pausaTiempo: porId("pausa-tiempo"),
    pausaErrores: porId("pausa-errores"),
    pausaPuntos: porId("pausa-puntos"),
    pausaAnimales: porId("pausa-animales"),
    pausaAprendizaje: porId("pausa-aprendizaje"),
    pausaPregunta: porId("pausa-pregunta"),
    botonPracticar: porId("boton-practicar"),
    botonSiguiente: porId("boton-siguiente"),
    finalTitulo: porId("final-titulo"),
    finalRango: porId("final-rango"),
    finalPuntos: porId("final-puntos"),
    resumenFinal: porId("resumen-final"),
    consejoFinal: porId("consejo-final"),
    botonComprobante: porId("boton-comprobante"),
    botonRepetir: porId("boton-repetir"),
    botonReiniciar: porId("boton-reiniciar"),
    lienzo: porId("lienzo-comprobante")
  };

  var estado = {};
  var guardado = cargarGuardado();
  elementos.nombreEstudiante.value = guardado.nombreEstudiante || "";

  function cargarGuardado() {
    var base = { version: datos.version, historial: {}, mejorPuntuacion: 0, sesiones: [], nombreEstudiante: "" };
    try {
      var crudo = localStorage.getItem(datos.claveAlmacenamiento);
      if (!crudo) return base;
      var leido = JSON.parse(crudo);
      if (!leido || leido.version !== datos.version) return base;
      return Object.assign(base, leido);
    } catch (error) {
      return base;
    }
  }

  function guardarDatos() {
    try {
      localStorage.setItem(datos.claveAlmacenamiento, JSON.stringify(guardado));
    } catch (error) {
      /* La actividad sigue funcionando aunque el navegador bloquee localStorage. */
    }
  }

  function barajar(lista) {
    var copia = lista.slice();
    for (var i = copia.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var temporal = copia[i];
      copia[i] = copia[j];
      copia[j] = temporal;
    }
    return copia;
  }

  function seleccionarAnimales(nivel) {
    var recientes = guardado.historial[nivel.id] || [];
    var elegidos = [];

    nivel.categorias.forEach(function (categoria) {
      var candidatos = datos.animales.filter(function (animal) {
        return animal[nivel.campo] === categoria.id;
      });
      var nuevos = barajar(candidatos.filter(function (animal) {
        return recientes.indexOf(animal.id) === -1;
      }));
      var repetidos = barajar(candidatos.filter(function (animal) {
        return recientes.indexOf(animal.id) !== -1;
      }));
      var seleccion = nuevos.concat(repetidos).slice(0, nivel.cantidadPorCategoria);
      elegidos = elegidos.concat(seleccion);
    });

    return barajar(elegidos);
  }

  function reiniciarEstado() {
    detenerReloj();
    estado = {
      nivel: 0,
      pantalla: "introduccion",
      seleccionadosPorNivel: {},
      resultados: [],
      animalSeleccionado: null,
      colocados: 0,
      errores: 0,
      segundos: 0,
      reloj: null,
      relojIniciado: false,
      nombresPorCategoria: {},
      erroresPorCategoria: {},
      erroresPorAnimal: {},
      modoPractica: false,
      animalesPractica: [],
      colocadosPractica: 0,
      intentosPractica: 0,
      nombresPracticaPorCategoria: {},
      practicaCompletada: false,
      nombre: elementos.nombreEstudiante.value.trim()
    };
  }

  function nivelActual() {
    return datos.niveles[estado.nivel];
  }

  function animalesActuales() {
    var nivel = nivelActual();
    if (!estado.seleccionadosPorNivel[nivel.id]) {
      estado.seleccionadosPorNivel[nivel.id] = seleccionarAnimales(nivel);
    }
    return estado.seleccionadosPorNivel[nivel.id];
  }

  function animalesEnPantalla() {
    return estado.modoPractica ? estado.animalesPractica : animalesActuales();
  }

  function totalPorCategoria(categoriaId) {
    var nivel = nivelActual();
    return animalesEnPantalla().filter(function (animal) {
      return animal[nivel.campo] === categoriaId;
    }).length;
  }

  function mostrarPantalla(nombre) {
    Object.keys(elementos.pantallas).forEach(function (clave) {
      elementos.pantallas[clave].hidden = clave !== nombre;
    });
    estado.pantalla = nombre;
    actualizarRuta();
    actualizarMetricas();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function actualizarRuta() {
    elementos.pasos.forEach(function (paso, indice) {
      paso.classList.toggle("actual", indice === estado.nivel && estado.pantalla !== "final");
      paso.classList.toggle("completo", indice < estado.nivel || estado.pantalla === "final");
      var numero = paso.querySelector(".paso-numero");
      numero.textContent = indice < estado.nivel || estado.pantalla === "final" ? "✓" : String(indice + 1);
    });
  }

  function formatearTiempo(segundos) {
    var minutos = Math.floor(segundos / 60);
    var resto = segundos % 60;
    return String(minutos).padStart(2, "0") + ":" + String(resto).padStart(2, "0");
  }

  function puntuacionNivelActual() {
    var bono = Math.max(0, 500 - estado.segundos * 5);
    return Math.max(0, estado.colocados * 100 + bono - estado.errores * 25);
  }

  function puntuacionCompletada() {
    return estado.resultados.reduce(function (suma, resultado) {
      return suma + resultado.puntos;
    }, 0);
  }

  function actualizarMetricas() {
    var nivel = nivelActual();
    var total = animalesEnPantalla().length;
    var puntos = puntuacionCompletada();
    var tiempoVisible = estado.segundos;
    var avanceVisible = estado.modoPractica
      ? String(estado.colocadosPractica) + "/" + String(total)
      : String(estado.colocados) + "/" + String(total);

    if (!estado.modoPractica && (estado.pantalla === "introduccion" || estado.pantalla === "juego")) {
      puntos += puntuacionNivelActual();
    }

    if (estado.pantalla === "final") {
      tiempoVisible = totalTiempo();
      var totalClasificados = estado.resultados.reduce(function (suma, resultado) {
        return suma + resultado.animales.length;
      }, 0);
      avanceVisible = String(totalClasificados) + "/" + String(totalClasificados);
    }

    elementos.metricaNivel.textContent = String(estado.nivel + 1) + "/" + String(datos.niveles.length);
    elementos.metricaTiempo.textContent = formatearTiempo(tiempoVisible);
    elementos.metricaAvance.textContent = avanceVisible;
    elementos.metricaPuntos.textContent = puntos.toLocaleString("es-MX");
  }

  function iniciarReloj() {
    if (estado.relojIniciado || estado.modoPractica) return;
    estado.relojIniciado = true;
    estado.reloj = window.setInterval(function () {
      estado.segundos += 1;
      actualizarMetricas();
    }, 1000);
  }

  function detenerReloj() {
    if (estado && estado.reloj) {
      window.clearInterval(estado.reloj);
      estado.reloj = null;
    }
  }

  function prepararIntroduccion() {
    detenerReloj();
    var nivel = nivelActual();
    var intro = nivel.intro;

    estado.animalSeleccionado = null;
    estado.colocados = 0;
    estado.errores = 0;
    estado.segundos = 0;
    estado.relojIniciado = false;
    estado.nombresPorCategoria = {};
    estado.erroresPorCategoria = {};
    estado.erroresPorAnimal = {};
    estado.modoPractica = false;
    estado.animalesPractica = [];
    estado.colocadosPractica = 0;
    estado.intentosPractica = 0;
    estado.nombresPracticaPorCategoria = {};
    estado.practicaCompletada = false;
    animalesActuales();

    elementos.introCeja.textContent = nivel.ceja;
    elementos.introTitulo.textContent = intro.titulo;
    elementos.introEntrada.innerHTML = intro.entrada;
    elementos.introRecordatorio.innerHTML = intro.recordatorio;
    elementos.introPregunta.textContent = intro.pregunta;
    elementos.botonComenzar.querySelector("span").textContent = intro.boton;
    elementos.identificacionEstudiante.hidden = estado.nivel !== 0;
    elementos.errorNombre.textContent = "";
    elementos.nombreEstudiante.removeAttribute("aria-invalid");
    elementos.introConceptos.className = "conceptos " + (intro.conceptos.length === 3 ? "tres" : "dos");
    elementos.introConceptos.replaceChildren();

    intro.conceptos.forEach(function (concepto) {
      var tarjeta = document.createElement("article");
      tarjeta.className = "concepto";
      tarjeta.innerHTML =
        "<span class=\"concepto-icono\" aria-hidden=\"true\">" + concepto.icono + "</span>" +
        "<h2>" + concepto.titulo + "</h2>" +
        "<p>" + concepto.texto + "</p>";
      elementos.introConceptos.appendChild(tarjeta);
    });

    mostrarPantalla("introduccion");
  }

  function comenzarNivel() {
    if (estado.nivel === 0) {
      var nombre = elementos.nombreEstudiante.value.trim().replace(/\s+/g, " ");
      if (!nombre) {
        elementos.nombreEstudiante.setAttribute("aria-invalid", "true");
        elementos.errorNombre.textContent = "Escribe tu nombre antes de comenzar; aparecerá en el comprobante.";
        elementos.nombreEstudiante.focus();
        return;
      }

      estado.nombre = nombre;
      elementos.nombreEstudiante.value = nombre;
      elementos.nombreEstudiante.removeAttribute("aria-invalid");
      elementos.errorNombre.textContent = "";
      guardado.nombreEstudiante = nombre;
      guardarDatos();
    }

    prepararJuego();
  }

  function prepararJuego() {
    var nivel = nivelActual();
    elementos.juegoCeja.textContent = nivel.ceja;
    elementos.juegoTitulo.textContent = nivel.titulo;
    elementos.notaBanco.textContent = nivel.notaBanco;
    elementos.retroalimentacion.className = "retroalimentacion";
    elementos.retroalimentacion.textContent = "Selecciona el primer animal.";

    crearCategorias(nivel);
    crearAnimales(nivel);
    mostrarPantalla("juego");
  }

  function crearCategorias(nivel) {
    elementos.categorias.replaceChildren();
    elementos.categorias.className = "categorias columnas-" + String(nivel.categorias.length);

    nivel.categorias.forEach(function (categoria) {
      if (estado.modoPractica) {
        estado.nombresPracticaPorCategoria[categoria.id] = [];
      } else {
        estado.nombresPorCategoria[categoria.id] = [];
        estado.erroresPorCategoria[categoria.id] = 0;
      }

      var boton = document.createElement("button");
      boton.type = "button";
      boton.className = "categoria";
      boton.dataset.categoria = categoria.id;
      boton.setAttribute("aria-label", "Clasificar como " + categoria.nombre);
      boton.innerHTML =
        "<span class=\"categoria-icono\" aria-hidden=\"true\">" + categoria.icono + "</span>" +
        "<strong>" + categoria.nombre + "</strong>" +
        "<small>" + categoria.detalle + "</small>" +
        "<span class=\"categoria-contador\">" + (estado.modoPractica ? "Disponible" : "0/" + String(totalPorCategoria(categoria.id))) + "</span>" +
        "<span class=\"categoria-nombres\"></span>";
      boton.addEventListener("click", function () {
        clasificar(categoria, boton);
      });
      elementos.categorias.appendChild(boton);
    });
  }

  function crearAnimales(nivel) {
    var animales = animalesEnPantalla();
    elementos.animales.replaceChildren();
    elementos.animales.className = "animales" + (animales.length === 6 ? " seis" : "") + (estado.modoPractica ? " practica" : "");

    animales.forEach(function (animal) {
      var boton = document.createElement("button");
      boton.type = "button";
      boton.className = "animal";
      boton.dataset.animal = animal.id;
      boton.dataset.respuesta = animal[nivel.campo];
      boton.setAttribute("aria-pressed", "false");
      boton.setAttribute("aria-label", "Seleccionar " + animal.nombre);
      boton.innerHTML =
        "<img src=\"" + animal.imagen + "\" alt=\"" + animal.alt + "\" loading=\"lazy\" decoding=\"async\">" +
        "<span class=\"animal-texto\"><strong>" + animal.nombre + "</strong><em>" + animal.cientifico + "</em><small>" +
        (estado.modoPractica ? "Toca para volver a clasificar" : "Toca para seleccionar") + "</small></span>";

      boton.addEventListener("click", function () {
        seleccionarAnimal(animal, boton);
      });
      elementos.animales.appendChild(boton);
    });
  }

  function seleccionarAnimal(animal, boton) {
    if (boton.classList.contains("colocado")) return;
    iniciarReloj();

    Array.prototype.forEach.call(elementos.animales.querySelectorAll(".animal"), function (tarjeta) {
      tarjeta.classList.remove("seleccionado");
      tarjeta.setAttribute("aria-pressed", "false");
    });

    estado.animalSeleccionado = { animal: animal, boton: boton };
    boton.classList.add("seleccionado");
    boton.setAttribute("aria-pressed", "true");
    elementos.retroalimentacion.className = "retroalimentacion";
    elementos.retroalimentacion.textContent = "Seleccionaste “" + animal.nombre + "”. Ahora toca su categoría.";
  }

  function clasificar(categoria, botonCategoria) {
    if (!estado.animalSeleccionado) {
      elementos.retroalimentacion.className = "retroalimentacion fallo";
      elementos.retroalimentacion.textContent = "Primero selecciona un animal.";
      return;
    }

    iniciarReloj();
    var nivel = nivelActual();
    var seleccion = estado.animalSeleccionado;

    if (seleccion.animal[nivel.campo] === categoria.id) {
      var nombresCategoria = estado.modoPractica
        ? estado.nombresPracticaPorCategoria[categoria.id]
        : estado.nombresPorCategoria[categoria.id];

      seleccion.boton.classList.remove("seleccionado");
      seleccion.boton.classList.add("colocado");
      seleccion.boton.setAttribute("aria-pressed", "false");
      seleccion.boton.disabled = true;
      seleccion.boton.querySelector("small").textContent = estado.modoPractica
        ? "Concepto reforzado"
        : "Clasificado correctamente";

      nombresCategoria.push(seleccion.animal.nombre.replace("*", ""));
      if (estado.modoPractica) {
        estado.colocadosPractica += 1;
      } else {
        estado.colocados += 1;
      }
      botonCategoria.classList.add("lista");
      botonCategoria.querySelector(".categoria-contador").textContent =
        estado.modoPractica
          ? String(nombresCategoria.length) + (nombresCategoria.length === 1 ? " reforzado" : " reforzados")
          : String(nombresCategoria.length) + "/" + String(totalPorCategoria(categoria.id));
      botonCategoria.querySelector(".categoria-nombres").textContent =
        nombresCategoria.join(" · ");

      elementos.retroalimentacion.className = "retroalimentacion acierto";
      elementos.retroalimentacion.textContent = estado.modoPractica
        ? "¡Bien razonado! Has reforzado este concepto. " + categoria.retroalimentacion
        : "¡Correcto! " + categoria.retroalimentacion + " " + seleccion.animal.contexto;
      estado.animalSeleccionado = null;
      actualizarMetricas();

      if (estado.modoPractica && estado.colocadosPractica === estado.animalesPractica.length) {
        window.setTimeout(terminarPractica, 650);
      } else if (!estado.modoPractica && estado.colocados === animalesActuales().length) {
        window.setTimeout(terminarNivel, 650);
      }
    } else {
      if (estado.modoPractica) {
        estado.intentosPractica += 1;
      } else {
        estado.errores += 1;
        estado.erroresPorCategoria[categoria.id] += 1;
        estado.erroresPorAnimal[seleccion.animal.id] = (estado.erroresPorAnimal[seleccion.animal.id] || 0) + 1;
      }
      seleccion.boton.classList.add("error");
      botonCategoria.classList.add("error");
      elementos.retroalimentacion.className = "retroalimentacion fallo";
      elementos.retroalimentacion.textContent = mensajeDeError(nivel);

      window.setTimeout(function () {
        seleccion.boton.classList.remove("error");
        botonCategoria.classList.remove("error");
      }, 420);
      actualizarMetricas();
    }
  }

  function mensajeDeError(nivel) {
    if (nivel.id === "fuente") {
      return "Todavía no. Pregúntate si el calor procede principalmente del metabolismo o del ambiente.";
    }
    if (nivel.id === "estabilidad") {
      return "Todavía no. Observa si la temperatura permanece estable, fluctúa o alterna entre periodos.";
    }
    return "Todavía no. Resuelve los dos ejes por separado: primero la fuente del calor y después la estabilidad.";
  }

  function terminarNivel() {
    detenerReloj();
    var nivel = nivelActual();
    var puntos = puntuacionNivelActual();
    var resultado = {
      id: nivel.id,
      nombre: nivel.ceja.replace(/^Nivel \d+ · /, ""),
      puntos: puntos,
      segundos: estado.segundos,
      errores: estado.errores,
      animales: animalesActuales().map(function (animal) { return animal.id; }),
      erroresPorCategoria: Object.assign({}, estado.erroresPorCategoria),
      erroresPorAnimal: Object.assign({}, estado.erroresPorAnimal)
    };

    estado.resultados.push(resultado);
    mostrarPausaNivel();
  }

  function animalesConError() {
    return animalesActuales().filter(function (animal) {
      return Boolean(estado.erroresPorAnimal[animal.id]);
    });
  }

  function crearTarjetasDeError(animales) {
    elementos.pausaAnimales.replaceChildren();

    animales.forEach(function (animal) {
      var intentos = estado.erroresPorAnimal[animal.id] || 0;
      var tarjeta = document.createElement("article");
      tarjeta.className = "pausa-animal";
      tarjeta.innerHTML =
        "<img src=\"" + animal.imagen + "\" alt=\"" + animal.alt + "\" loading=\"lazy\" decoding=\"async\">" +
        "<div><strong>" + animal.nombre + "</strong><small>" +
        (estado.practicaCompletada
          ? "Concepto reforzado en la práctica"
          : String(intentos) + (intentos === 1 ? " intento incorrecto" : " intentos incorrectos")) +
        "</small></div>";
      elementos.pausaAnimales.appendChild(tarjeta);
    });
  }

  function crearRecordatorios(nivel) {
    var lista = nivel.intro.conceptos.map(function (concepto) {
      return "<li><span aria-hidden=\"true\">" + concepto.icono + "</span><p><strong>" +
        concepto.titulo + ":</strong> " + concepto.texto + "</p></li>";
    }).join("");

    elementos.pausaAprendizaje.innerHTML =
      "<strong>Antes de volver a clasificar, recuerda:</strong><ul class=\"lista-recordatorios\">" + lista + "</ul>";
  }

  function estilizarBotonSiguiente(principal) {
    elementos.botonSiguiente.className = "boton " + (principal ? "boton-principal" : "boton-secundario");
  }

  function mostrarPausaNivel() {
    var nivel = nivelActual();
    var puntos = estado.resultados[estado.resultados.length - 1].puntos;
    var pendientes = animalesConError();
    var tieneErrores = pendientes.length > 0;
    var cantidadTexto = String(pendientes.length) + (pendientes.length === 1 ? " concepto" : " conceptos");

    elementos.pausaTiempo.textContent = formatearTiempo(estado.segundos);
    elementos.pausaErrores.textContent = String(estado.errores);
    elementos.pausaPuntos.textContent = puntos.toLocaleString("es-MX");
    elementos.botonSiguiente.querySelector("span").textContent =
      estado.nivel < datos.niveles.length - 1 ? "Continuar al nivel " + String(estado.nivel + 2) : "Ver resultado final";

    if (!tieneErrores) {
      elementos.pausaSello.textContent = "✓";
      elementos.pausaCeja.textContent = "Nivel completado · tiempo en pausa";
      elementos.pausaTitulo.textContent = "¡Clasificación correcta!";
      elementos.pausaResumen.textContent =
        "Clasificaste " + String(estado.colocados) + " animales sin errores y el reloj quedó detenido antes de continuar.";
      elementos.pausaDatos.hidden = false;
      elementos.pausaAnimales.hidden = true;
      elementos.pausaAnimales.replaceChildren();
      elementos.pausaAprendizaje.innerHTML = "<strong>Idea clave:</strong> " + nivel.pausa;
      elementos.pausaPregunta.hidden = true;
      elementos.botonPracticar.hidden = true;
      estilizarBotonSiguiente(true);
      mostrarPantalla("pausa");
      return;
    }

    elementos.pausaSello.textContent = estado.practicaCompletada ? "✓" : "↻";
    elementos.pausaCeja.textContent = estado.practicaCompletada
      ? "Práctica completada · tiempo en pausa"
      : "Nivel completado · tiempo en pausa";
    elementos.pausaTitulo.textContent = estado.practicaCompletada
      ? "¡Conceptos reforzados!"
      : "Tienes " + cantidadTexto + " por reforzar";
    elementos.pausaResumen.textContent = estado.practicaCompletada
      ? "Volviste a clasificar " + cantidadTexto + ". Puedes continuar o practicar de nuevo para afianzar el recuerdo."
      : "No te mostraremos las respuestas. Revisa las pistas y decide si quieres intentarlo de nuevo.";
    elementos.pausaDatos.hidden = true;
    elementos.pausaAnimales.hidden = false;
    crearTarjetasDeError(pendientes);
    crearRecordatorios(nivel);
    elementos.pausaPregunta.hidden = false;
    elementos.pausaPregunta.textContent = estado.practicaCompletada
      ? "¿Quieres repetir la práctica antes de continuar?"
      : "¿Quieres practicar " + (pendientes.length === 1 ? "este animal" : "estos animales") + " antes de continuar?";
    elementos.botonPracticar.hidden = false;
    elementos.botonPracticar.querySelector("span").textContent = estado.practicaCompletada
      ? "Practicar otra vez"
      : "Practicar " + (pendientes.length === 1 ? "mi error" : "mis " + String(pendientes.length) + " errores");
    estilizarBotonSiguiente(false);
    mostrarPantalla("pausa");
  }

  function practicarErrores() {
    var pendientes = animalesConError();
    if (!pendientes.length) return;

    estado.modoPractica = true;
    estado.animalesPractica = barajar(pendientes);
    estado.colocadosPractica = 0;
    estado.intentosPractica = 0;
    estado.nombresPracticaPorCategoria = {};
    estado.animalSeleccionado = null;

    var nivel = nivelActual();
    elementos.juegoCeja.textContent = "Práctica de errores · tiempo y puntos en pausa";
    elementos.juegoTitulo.textContent = "Vuelve a clasificar " +
      (pendientes.length === 1 ? "el concepto que estás reforzando" : "los conceptos que estás reforzando");
    elementos.notaBanco.textContent = "Solo aparecen las tarjetas que causaron dificultad";
    elementos.retroalimentacion.className = "retroalimentacion";
    elementos.retroalimentacion.textContent = "Selecciona un animal y vuelve a razonar su clasificación.";
    crearCategorias(nivel);
    crearAnimales(nivel);
    mostrarPantalla("juego");
  }

  function terminarPractica() {
    estado.modoPractica = false;
    estado.animalSeleccionado = null;
    estado.practicaCompletada = true;
    mostrarPausaNivel();
  }

  function avanzar() {
    if (estado.nivel < datos.niveles.length - 1) {
      estado.nivel += 1;
      prepararIntroduccion();
    } else {
      finalizarSesion();
    }
  }

  function totalTiempo() {
    return estado.resultados.reduce(function (suma, resultado) {
      return suma + resultado.segundos;
    }, 0);
  }

  function totalErrores() {
    return estado.resultados.reduce(function (suma, resultado) {
      return suma + resultado.errores;
    }, 0);
  }

  function obtenerRango(puntos) {
    if (puntos >= 3600) return { titulo: "Maestría térmica", texto: "Reconociste los dos ejes con gran precisión y rapidez." };
    if (puntos >= 3100) return { titulo: "Clasificador experto", texto: "Distingues con seguridad la fuente del calor y el patrón térmico." };
    if (puntos >= 2500) return { titulo: "Buen dominio", texto: "La base está firme; una nueva sesión ayudará a automatizar las distinciones." };
    return { titulo: "Explorador térmico", texto: "Ya completaste el recorrido. Repetirlo con otros animales fortalecerá el recuerdo." };
  }

  function consejoSegunErrores() {
    var peor = estado.resultados.slice().sort(function (a, b) {
      return b.errores - a.errores;
    })[0];

    if (!peor || totalErrores() === 0) {
      return "No registraste errores. En la siguiente sesión intenta conservar la precisión y mejorar el tiempo.";
    }
    if (peor.id === "fuente") {
      return "Repasa la pregunta clave del nivel 1: ¿el calor procede principalmente del metabolismo o del ambiente?";
    }
    if (peor.id === "estabilidad") {
      return "Repasa la diferencia entre temperatura estable, variable y alternante. No mezcles este eje con la fuente del calor.";
    }
    return "En las combinaciones, clasifica en dos pasos: fuente del calor primero y estabilidad térmica después.";
  }

  function finalizarSesion() {
    var puntos = puntuacionCompletada();
    var rango = obtenerRango(puntos);
    var eraRecord = puntos > guardado.mejorPuntuacion;

    estado.resultados.forEach(function (resultado) {
      guardado.historial[resultado.id] = resultado.animales.slice();
    });
    guardado.mejorPuntuacion = Math.max(guardado.mejorPuntuacion, puntos);
    guardado.sesiones.push({
      fecha: new Date().toISOString(),
      nombre: estado.nombre,
      puntos: puntos,
      segundos: totalTiempo(),
      errores: totalErrores()
    });
    guardado.sesiones = guardado.sesiones.slice(-12);
    guardarDatos();

    elementos.finalRango.innerHTML =
      "<strong>" + rango.titulo + ".</strong> " + rango.texto + (eraRecord ? " <strong>¡Nuevo récord en este dispositivo!</strong>" : "");
    elementos.finalTitulo.textContent = "¡Misión térmica completada, " + estado.nombre + "!";
    elementos.finalPuntos.textContent = puntos.toLocaleString("es-MX");
    elementos.consejoFinal.innerHTML = "<strong>Para tu próxima sesión:</strong> " + consejoSegunErrores();
    crearResumenFinal();
    mostrarPantalla("final");
  }

  function crearResumenFinal() {
    elementos.resumenFinal.replaceChildren();
    var cabecera = document.createElement("div");
    cabecera.className = "fila-resumen cabecera";
    cabecera.innerHTML = "<span>Nivel</span><span>Tiempo</span><span>Errores</span><span>Puntos</span>";
    elementos.resumenFinal.appendChild(cabecera);

    estado.resultados.forEach(function (resultado) {
      var fila = document.createElement("div");
      fila.className = "fila-resumen";
      fila.innerHTML =
        "<strong>" + resultado.nombre + "</strong>" +
        "<span>" + formatearTiempo(resultado.segundos) + "</span>" +
        "<span>" + String(resultado.errores) + "</span>" +
        "<span>" + resultado.puntos.toLocaleString("es-MX") + "</span>";
      elementos.resumenFinal.appendChild(fila);
    });
  }

  function escribirTextoAjustado(contexto, texto, anchoMaximo, tamanoInicial, tamanoMinimo, familia, x, y) {
    var tamano = tamanoInicial;
    contexto.font = String(tamano) + "px " + familia;
    while (contexto.measureText(texto).width > anchoMaximo && tamano > tamanoMinimo) {
      tamano -= 1;
      contexto.font = String(tamano) + "px " + familia;
    }
    contexto.fillText(texto, x, y);
  }

  function descargarComprobante() {
    var lienzo = elementos.lienzo;
    var contexto = lienzo.getContext("2d");
    var puntos = puntuacionCompletada();
    var rango = obtenerRango(puntos);
    var gradiente = contexto.createLinearGradient(0, 0, lienzo.width, lienzo.height);
    gradiente.addColorStop(0, "#07172d");
    gradiente.addColorStop(0.62, "#0d3152");
    gradiente.addColorStop(1, "#09213b");

    contexto.fillStyle = gradiente;
    contexto.fillRect(0, 0, lienzo.width, lienzo.height);
    contexto.strokeStyle = "#f4c75d";
    contexto.lineWidth = 4;
    contexto.strokeRect(34, 34, lienzo.width - 68, lienzo.height - 68);

    contexto.textAlign = "center";
    contexto.fillStyle = "#f4c75d";
    contexto.font = "700 22px Arial";
    contexto.fillText("FISIOLOGÍA ANIMAL 2027-1 · GRUPO 5417", 600, 82);

    contexto.fillStyle = "#a9c4d6";
    contexto.font = "700 18px Arial";
    contexto.fillText("CLASIFICADOR TÉRMICO", 600, 116);

    contexto.fillStyle = "#fffdf6";
    contexto.font = "48px Georgia";
    contexto.fillText("Misión térmica completada", 600, 178);

    contexto.fillStyle = "#dce8ef";
    escribirTextoAjustado(contexto, estado.nombre || "Estudiante", 980, 31, 20, "Arial", 600, 226);

    contexto.fillStyle = "#a9c4d6";
    contexto.font = "22px Arial";
    contexto.fillText(rango.titulo, 600, 264);

    contexto.fillStyle = "#f4c75d";
    contexto.font = "78px Georgia";
    contexto.fillText(puntos.toLocaleString("es-MX") + " puntos", 600, 345);

    contexto.fillStyle = "#d6e4ed";
    contexto.font = "23px Arial";
    contexto.fillText("Tiempo total: " + formatearTiempo(totalTiempo()) + "   ·   Errores: " + String(totalErrores()), 600, 390);

    estado.resultados.forEach(function (resultado, indice) {
      var x = 226 + indice * 374;
      contexto.fillStyle = "rgba(255,255,255,0.08)";
      contexto.fillRect(x - 150, 425, 300, 88);
      contexto.fillStyle = "#fffdf6";
      contexto.font = "700 20px Arial";
      contexto.fillText("Nivel " + String(indice + 1), x, 455);
      contexto.fillStyle = "#b9ccda";
      contexto.font = "18px Arial";
      contexto.fillText(resultado.puntos.toLocaleString("es-MX") + " pts · " + formatearTiempo(resultado.segundos), x, 488);
    });

    contexto.fillStyle = "#839bad";
    contexto.font = "18px Arial";
    contexto.fillText(new Intl.DateTimeFormat("es-MX", { dateStyle: "long", timeStyle: "short" }).format(new Date()), 600, 565);

    var nombreSeguro = (estado.nombre || "estudiante").toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    var nombre = "clasificador-termico-" + (nombreSeguro || "estudiante") + "-" + new Date().toISOString().slice(0, 10) + ".png";
    if (lienzo.toBlob) {
      lienzo.toBlob(function (blob) {
        var enlace = document.createElement("a");
        enlace.href = URL.createObjectURL(blob);
        enlace.download = nombre;
        enlace.click();
        window.setTimeout(function () { URL.revokeObjectURL(enlace.href); }, 1000);
      }, "image/png");
    } else {
      var enlaceAlternativo = document.createElement("a");
      enlaceAlternativo.href = lienzo.toDataURL("image/png");
      enlaceAlternativo.download = nombre;
      enlaceAlternativo.click();
    }
  }

  function comenzarSesion() {
    reiniciarEstado();
    prepararIntroduccion();
  }

  elementos.botonComenzar.addEventListener("click", comenzarNivel);
  elementos.nombreEstudiante.addEventListener("input", function () {
    if (elementos.nombreEstudiante.value.trim()) {
      elementos.nombreEstudiante.removeAttribute("aria-invalid");
      elementos.errorNombre.textContent = "";
    }
  });
  elementos.botonPracticar.addEventListener("click", practicarErrores);
  elementos.botonSiguiente.addEventListener("click", avanzar);
  elementos.botonComprobante.addEventListener("click", descargarComprobante);
  elementos.botonRepetir.addEventListener("click", comenzarSesion);
  elementos.botonReiniciar.addEventListener("click", function () {
    if (window.confirm("¿Quieres reiniciar esta sesión desde el nivel 1?")) {
      comenzarSesion();
    }
  });
  window.addEventListener("beforeunload", detenerReloj);

  comenzarSesion();
}());
