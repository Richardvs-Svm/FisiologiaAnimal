# Clasificador térmico

Juego web de repaso para estudiantes de Fisiología Animal. Su objetivo es ayudar a recordar y distinguir dos criterios de clasificación térmica:

- Endotermia y ectotermia: de dónde proviene principalmente el calor corporal.
- Homeotermia, poiquilotermia y heterotermia: qué patrón presenta la temperatura corporal a lo largo del tiempo.

La actividad comienza con una guía ilustrada que explica los dos ejes y todos los animales del banco. Después continúa con un juego de tres niveles. En cada uno, el estudiante toca la tarjeta de un animal y después la categoría correspondiente. El último nivel combina los dos criterios.

La cabecera identifica la actividad como parte de **Fisiología Animal 2027-1, Grupo 5417** y permanece visible en todas las pantallas del juego.

## Cómo se usa

1. Abre index.html en un navegador moderno.
2. Lee la guía y consulta el atlas de animales; puedes filtrar las cinco combinaciones.
3. Pulsa “Comenzar el clasificador térmico”.
4. Escribe tu nombre completo; este dato aparecerá en el comprobante para Classroom.
5. Lee la explicación que aparece antes de cada nivel.
6. Toca un animal y luego su categoría.
7. Al terminar el nivel, revisa la retroalimentación. Si hubo errores, puedes practicar únicamente esas tarjetas antes de continuar.
8. Usa el botón para avanzar al nivel siguiente; el juego nunca cambia de nivel automáticamente.
9. Al final, descarga el comprobante en formato PNG si deseas conservar o entregar el resultado.

El navegador recuerda localmente el último nombre escrito para facilitar sesiones posteriores. El estudiante puede modificarlo en la pantalla inicial antes de empezar.

No necesita instalación, servidor, cuenta ni conexión a internet después de descargar la carpeta. También funciona en GitHub Pages y puede enlazarse desde Google Classroom.

## Archivos principales

- index.html: guía ilustrada y página de entrada a la actividad.
- estilos-guia-termorregulacion.css: diseño editorial adaptable de la guía.
- guia-termorregulacion.js: progreso de lectura y filtros del atlas.
- juego-clasificador-termico.html: estructura del juego.
- estilos-clasificador-termico.css: colores, distribución y adaptación a pantallas móviles.
- datos-clasificador-termico.js: banco editable de animales, categorías y textos explicativos.
- logica-clasificador-termico.js: selección aleatoria, interacción, temporizador, puntuación y comprobante.
- imagenes: fotografías utilizadas en las tarjetas.

## Cómo modificar o ampliar el banco

Abre datos-clasificador-termico.js y busca la lista animales. Cada animal contiene su nombre, nombre científico, imagen y tres clasificaciones: fuente, estabilidad y combinación.

Para añadir un animal:

1. Guarda su imagen dentro de la carpeta imagenes.
2. Copia una entrada existente del banco.
3. Cambia el identificador, los nombres, la ruta de la imagen y las clasificaciones.
4. Comprueba que el identificador sea único.

No es necesario cambiar la lógica ni el diseño. El juego seleccionará automáticamente los animales que correspondan a cada categoría.

## Variación entre sesiones

El juego guarda en el navegador los animales vistos en la sesión anterior y favorece ejemplos diferentes en la siguiente. También conserva el mejor resultado y las últimas sesiones. Estos datos permanecen únicamente en el dispositivo y navegador utilizados; no se envían a ningún servidor.

Si el estudiante cambia de dispositivo, usa navegación privada o borra los datos del navegador, el historial comenzará de nuevo.

## Puntuación

Cada nivel otorga:

- 100 puntos por clasificación correcta.
- Hasta 500 puntos adicionales por rapidez; el bono disminuye 5 puntos por segundo.
- Una penalización de 25 puntos por cada intento incorrecto.

La puntuación máxima de los tres niveles es de 4,000 puntos. El reloj comienza al seleccionar el primer animal y se detiene al completar cada nivel.

## Retroalimentación y práctica de errores

El juego registra qué animales produjeron al menos un intento incorrecto. Al completar el nivel presenta nuevamente esas tarjetas y recordatorios generales de los conceptos, pero no muestra la clasificación correcta.

El estudiante puede elegir entre:

- Practicar solo las tarjetas que causaron dificultad.
- Continuar al siguiente nivel o al resultado final.

Durante la práctica, el tiempo y la puntuación permanecen en pausa. Las respuestas incorrectas de esta fase no añaden nuevas penalizaciones. La práctica termina cuando todas las tarjetas pendientes se clasifican correctamente; después, el estudiante decide cuándo continuar.

## Consideraciones didácticas y científicas

La actividad está pensada como repaso introductorio, principalmente de reconocimiento y clasificación. Los dos criterios se presentan como ejes independientes.

Algunos ejemplos del nivel 3 dependen del contexto:

- Los peces antárticos se presentan como ectotermos con temperatura corporal relativamente estable cuando viven en agua térmicamente estable.
- La rata topo desnuda se marca como caso debatido.
- El perezoso se marca como caso contextual, pues su temperatura fluctúa ampliamente para un mamífero y también puede describirse mediante heterotermia.

Conviene conservar los asteriscos y las notas si se modifica el banco.

## Referencias de contenido

- Thermoregulation, Concepts in Biology, Loyola Marymount University Pressbooks: https://lmu.pressbooks.pub/conceptsinbiology/chapter/thermoregulation/
- Naked mole-rat thermoregulation: https://pmc.ncbi.nlm.nih.gov/articles/PMC13099574/
- Sloth thermoregulation: https://pmc.ncbi.nlm.nih.gov/articles/PMC6151113/
- Hummingbird heterothermy: https://journals.biologists.com/jeb/article/225/2/jeb243208/274119/A-heterothermic-spectrum-in-hummingbirds
- Antarctic fish physiology: https://pmc.ncbi.nlm.nih.gov/articles/PMC2443173/

## Imágenes

Las imágenes incluidas fueron generadas con ChatGPT v5.6. Pueden sustituirse por fotografías propias o por imágenes con una licencia compatible.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Cualquier persona puede usarlo, copiarlo, modificarlo, publicarlo y distribuirlo, incluso con fines comerciales, de acuerdo con el archivo LICENSE.
