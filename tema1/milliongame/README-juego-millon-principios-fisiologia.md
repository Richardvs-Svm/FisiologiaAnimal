# El Gran Reto Fisiológico — Principios generales

Juego web para estudiantes de Fisiología Animal. La actividad practica la comprensión de los principios generales mediante preguntas de dos partes: primero se identifica o clasifica un concepto y después se explica por qué.

## Archivo que deben abrir los estudiantes

`juego-millon-principios-fisiologia.html`

No se utiliza `index.html` porque ese nombre queda reservado para la futura página que reunirá todos los juegos del curso.

## Archivos de la actividad

- `juego-millon-principios-fisiologia.html`: página principal del juego.
- `estilos-juego-millon-principios-fisiologia.css`: presentación visual y adaptación para teléfonos.
- `logica-juego-millon-principios-fisiologia.js`: selección de preguntas, puntuación, refuerzo, guardado y comprobantes.
- `banco-preguntas-principios-fisiologia.js`: banco editable de 40 preguntas.
- `revision-banco-preguntas-principios-fisiologia.html`: página privada de revisión para el docente.

Todos los archivos deben permanecer juntos en la misma carpeta. Para publicar la actividad en GitHub Pages, se sube la carpeta completa y se enlaza `juego-millon-principios-fisiologia.html` desde la futura página general del curso.

## Funcionamiento

- Cada sesión selecciona 15 preguntas al azar.
- Cada pregunta contiene una respuesta conceptual y una explicación de tipo “¿por qué?”.
- Si una de las dos partes es incorrecta, la pregunta pasa a la ronda de refuerzo.
- En el refuerzo debe responderse correctamente y después confirmarse una vez más.
- Si falla la confirmación, la pregunta regresa a la ronda hasta alcanzar el dominio.
- La segunda sesión utiliza 15 preguntas que no aparecieron en la primera sesión del mismo dispositivo.
- El premio se calcula únicamente con las respuestas de la primera vuelta; las repeticiones muestran el dominio final.

## Guardado y comprobantes

El avance se guarda automáticamente en el almacenamiento local del navegador. El estudiante puede cerrar la página y continuar otro día usando el mismo navegador y dispositivo. Borrar los datos del navegador o utilizar navegación privada puede eliminar el progreso.

Al terminar cada sesión, el estudiante puede descargar un comprobante en formato PNG o imprimirlo. Después de completar las dos sesiones, debe subir a Classroom los dos comprobantes diferentes.

## Modificar o ampliar las preguntas

Las preguntas están separadas del funcionamiento del juego en `banco-preguntas-principios-fisiologia.js`. Para añadir una pregunta, se copia un registro completo, se cambia su identificador y se edita su contenido. Cada identificador debe ser único.

El archivo `revision-banco-preguntas-principios-fisiologia.html` permite revisar las preguntas, buscar conceptos, filtrar categorías y mostrar u ocultar las respuestas.

## Licencia

Este material puede utilizarse, copiarse y modificarse libremente, incluso con fines comerciales.
