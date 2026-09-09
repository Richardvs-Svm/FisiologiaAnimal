# Reconstruye la neurona

Actividad web para estudiantes de **Fisiología Animal 2027-1, Grupo 5417**. El objetivo es reconstruir una neurona y después identificar doce de sus estructuras.

## Cómo funciona

1. El estudiante escribe su nombre.
2. Ordena doce piezas seleccionando dos para intercambiarlas.
3. Cuando el rompecabezas está completo, se desbloquea la identificación de estructuras.
4. Cada respuesta se escribe en casillas de una letra.
5. Las respuestas incorrectas o incompletas se marcan en amarillo al revisarlas.
6. El estudiante puede pedir hasta dos letras en respuestas de ocho letras o menos, y hasta tres en respuestas más largas. Cada letra revelada resta un punto y queda marcada con un punto rojo.
7. Al completar las doce estructuras, se genera un resultado que puede descargarse como imagen para Google Classroom.

La puntuación comienza en 100. Los errores escritos no descuentan puntos; solamente lo hacen las letras reveladas.

## Archivos necesarios

- `index.html`: página principal.
- `styles.css`: diseño adaptable para computadora y teléfono.
- `game.js`: funcionamiento, respuestas, puntuación, guardado y comprobante.
- `imagenes/neurona-numerada-1-a-12-v4.png`: ilustración utilizada por el juego.

Los archivos llamados `mockup.*` son solamente el prototipo de diseño y no son necesarios para publicar la actividad final.

## Publicar en GitHub Pages

Sube `index.html`, `styles.css`, `game.js` y la carpeta `imagenes` al mismo directorio del repositorio. No cambies sus posiciones relativas.

Después, en el repositorio de GitHub:

1. Abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige la rama que contiene los archivos y guarda los cambios.
4. Si la actividad está dentro de una subcarpeta, su dirección terminará con el nombre de esa carpeta.

## Guardado y privacidad

El progreso se guarda únicamente en el navegador del dispositivo mediante almacenamiento local. No se envía el nombre ni las respuestas a ningún servidor. Si el estudiante cambia de navegador, dispositivo o borra los datos del sitio, el progreso no estará disponible allí.

## Modificar las respuestas

Las doce respuestas están al comienzo de `game.js`, dentro de la lista `STRUCTURE_ANSWERS`. Los espacios crean separaciones visuales entre palabras. La validación ignora mayúsculas, minúsculas y acentos.

## Licencia

El código se distribuye bajo la licencia MIT y puede utilizarse y modificarse, incluso con fines comerciales. La ilustración de la neurona debe conservarse junto con la actividad o sustituirse por otra imagen compatible con el mismo diseño.

