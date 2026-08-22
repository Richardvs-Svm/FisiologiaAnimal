# Crucigrama interactivo · Tema 1

Sitio web estático para el crucigrama de **Fisiología de Animales 2027-1 · Grupo 5417**.

## Contenido

- `index.html`: estructura y textos de la página.
- `styles.css`: diseño para computadora, teléfono e impresión.
- `script.js`: cuadrícula, respuestas, pistas, comprobación y guardado automático.

No requiere instalar programas, crear una base de datos ni usar un servidor especial.

## Probarlo en tu computadora

Abre `index.html` en Chrome, Edge, Firefox o Safari. El crucigrama funcionará directamente.

## Publicarlo con GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube `index.html`, `styles.css` y `script.js` al nivel principal del repositorio.
3. Abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama **main**, la carpeta **/(root)** y guarda.
6. Cuando GitHub muestre la dirección publicada, copia ese enlace en Google Classroom.

## Comportamiento

- Las respuestas se escriben sin espacios; el sistema acepta letras con o sin acento.
- El avance se guarda solamente en el navegador y dispositivo del estudiante.
- No se recopilan nombres, respuestas ni datos personales.
- La página no envía una calificación a Google Classroom.
- El botón **Imprimir** conserva una versión en papel como alternativa.

## Editar una pista o respuesta

Las 19 palabras están al principio de `script.js`, dentro de la lista `entries`. Cada elemento contiene la respuesta, la definición y la pista conceptual correspondiente.
