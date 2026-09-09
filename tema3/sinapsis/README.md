# Sinapsis en secuencia

Actividad web para estudiantes de **Fisiología Animal 2027-1, Grupo 5417**. Su propósito es reforzar la identificación visual de una sinapsis colinérgica y la secuencia causal de los acontecimientos de la transmisión sináptica.

## Cómo funciona

1. El estudiante escribe su nombre completo.
2. Reconstruye el diagrama seleccionando dos piezas para intercambiarlas.
3. Al terminar el rompecabezas, el juego se detiene hasta que el estudiante presiona el botón para continuar.
4. El estudiante ordena ocho acontecimientos seleccionando dos tarjetas para intercambiarlas.
5. Durante esta etapa puede abrir el diagrama numerado como referencia.
6. Al revisar, los acontecimientos que aún están fuera de lugar se marcan en amarillo. El juego no muestra el orden correcto.
7. El comprobante se desbloquea únicamente cuando no quedan errores.
8. El resultado puede descargarse como una imagen PNG para entregarla en Google Classroom.

## Archivos necesarios

- `index.html`: página principal del juego.
- `styles.css`: diseño adaptable para computadora y teléfono.
- `game.js`: rompecabezas, ordenamiento, cronómetros, validación y generación del comprobante.
- `imagenes/sinapsis-partes.png`: diagrama utilizado por la actividad.

Los archivos llamados `mockup.*` pertenecen al prototipo de diseño y no son necesarios para publicar la versión final.

## Publicar en GitHub Pages

Sube `index.html`, `styles.css`, `game.js` y la carpeta `imagenes` al mismo directorio de tu repositorio. Conserva exactamente esas posiciones relativas.

Después, en GitHub:

1. Abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige la rama que contiene los archivos y guarda los cambios.
4. Si la actividad está dentro de una subcarpeta, su dirección terminará con el nombre de esa carpeta.

## Modificar el proceso

Los ocho acontecimientos están al comienzo de `game.js`, dentro de la lista `PROCESS_STEPS`. El orden de la lista es el orden correcto. Puedes cambiar la redacción sin modificar el resto del juego.

Si añades o eliminas acontecimientos, también debes actualizar los textos que indican “8 acontecimientos” y “8/8” en `index.html` y en la función que genera el comprobante.

## Privacidad

La actividad funciona completamente en el navegador. El nombre del estudiante, sus movimientos y su resultado no se envían a ningún servidor. Al recargar la página se inicia una actividad nueva.

## Licencia

El código se distribuye bajo la licencia MIT y puede utilizarse y modificarse, incluso con fines comerciales. La imagen incluida debe conservar su licencia o autorización original si la actividad se redistribuye.
