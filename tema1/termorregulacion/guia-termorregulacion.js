(function () {
  "use strict";

  var barra = document.getElementById("barra-progreso");
  var volver = document.getElementById("volver-arriba");
  var filtros = Array.prototype.slice.call(document.querySelectorAll(".filtro"));
  var grupos = Array.prototype.slice.call(document.querySelectorAll(".grupo-atlas"));
  var enlacesIndice = Array.prototype.slice.call(document.querySelectorAll(".indice a"));
  var secciones = enlacesIndice.map(function (enlace) {
    return document.querySelector(enlace.getAttribute("href"));
  }).filter(Boolean);

  function actualizarLectura() {
    var desplazamiento = window.scrollY || document.documentElement.scrollTop;
    var disponible = document.documentElement.scrollHeight - window.innerHeight;
    var porcentaje = disponible > 0 ? Math.min(100, Math.max(0, desplazamiento / disponible * 100)) : 0;
    barra.style.width = porcentaje.toFixed(2) + "%";
    volver.classList.toggle("visible", desplazamiento > 700);

    var actual = "";
    secciones.forEach(function (seccion) {
      if (seccion.getBoundingClientRect().top <= 125) actual = "#" + seccion.id;
    });
    enlacesIndice.forEach(function (enlace) {
      enlace.classList.toggle("activo", enlace.getAttribute("href") === actual);
    });
  }

  function aplicarFiltro(valor) {
    filtros.forEach(function (boton) {
      var activo = boton.dataset.filtro === valor;
      boton.classList.toggle("activo", activo);
      boton.setAttribute("aria-pressed", String(activo));
    });

    grupos.forEach(function (grupo) {
      grupo.hidden = valor !== "todos" && grupo.dataset.grupo !== valor;
    });
  }

  filtros.forEach(function (boton) {
    boton.addEventListener("click", function () {
      aplicarFiltro(boton.dataset.filtro);
    });
  });

  volver.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", actualizarLectura, { passive: true });
  window.addEventListener("resize", actualizarLectura);
  actualizarLectura();
}());
