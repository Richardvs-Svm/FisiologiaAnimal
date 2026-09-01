# Consentimiento para práctica con insectos

Página para **Fisiología de Animales 2027-1, Grupo 5417**. Presenta la información de una sesión opcional y registra el nombre de quienes aceptan participar.

Esta versión utiliza el método comprobado con `test1`:

- Apps Script se crea desde **Extensiones → Apps Script** dentro de la hoja de cálculo.
- La página envía un formulario HTML normal a Apps Script.
- Apps Script responde en una pestaña nueva con éxito o con el error completo.
- No se utiliza `fetch`, `no-cors` ni una confirmación optimista.
- El formulario utiliza `POST`, por lo que el nombre no aparece en la URL.

## Los cinco archivos

- `index.html`: página informativa y formulario.
- `styles.css`: diseño adaptable azul y blanco.
- `script.js`: validación y conexión con el despliegue `/exec`.
- `apps-script/Code.gs`: código que se pega en el proyecto vinculado a la hoja.
- `README.md`: estas instrucciones.

## 1. Preparar la hoja y Apps Script

1. Abre la hoja de cálculo que almacenará las aceptaciones.
2. Selecciona **Extensiones → Apps Script**.
3. Sustituye el contenido de `Code.gs` por el archivo `apps-script/Code.gs` de este proyecto.
4. Guarda el proyecto.
5. Selecciona la función `configureConsentSpreadsheet` y pulsa **Ejecutar**.
6. Completa la autorización de Google.

La función guarda internamente el ID de la hoja, crea la pestaña `Consentimientos` y añade sus encabezados. No añade una respuesta de estudiante. La ejecución debe aparecer en **Ejecuciones** con el mensaje `CONFIGURATION SUCCESSFUL`.

Este paso es necesario porque Google no permite utilizar `getActiveSpreadsheet()` durante una ejecución como aplicación web. La función de configuración lo utiliza desde el editor, donde sí está disponible, y `doPost` abre después esa hoja mediante el ID guardado.

## 2. Desplegar la aplicación web

1. Selecciona **Implementar → Nueva implementación**.
2. Elige **Aplicación web**.
3. En **Ejecutar como**, selecciona tu cuenta.
4. En **Quién tiene acceso**, selecciona el grupo apropiado: cualquier persona, personas con cuenta de Google o las cuentas institucionales autorizadas.
5. Implementa y copia la URL que termina en `/exec`.

Abre esa URL directamente. Después de iniciar sesión con una cuenta autorizada, debe aparecer **Conexión disponible**. Esta comprobación ejecuta `doGet`, verifica el acceso a la hoja y no añade una aceptación.

Si posteriormente modificas `Code.gs`, abre **Implementar → Administrar implementaciones**, selecciona una versión nueva y vuelve a implementar.

## 3. Conectar la página

1. Abre `script.js`.
2. Sustituye `PEGA_AQUI_LA_URL_EXEC_DEL_APPS_SCRIPT` por la URL `/exec`.
3. Sube a GitHub los cinco archivos conservando la carpeta `apps-script`.
4. Recarga la página publicada sin caché.

Cuando la URL es válida, desaparece la etiqueta `Falta conectar`.

## 4. Probar antes de compartir

1. Escribe un nombre de prueba en la página.
2. Pulsa **Acepto participar**.
3. Apps Script se abrirá en una pestaña nueva.
4. Si el despliegue requiere cuenta de Google o cuenta institucional, inicia sesión con esa cuenta antes de enviar. Un inicio de sesión iniciado después de un envío `POST` puede obligar a repetir el envío.
5. La pestaña debe mostrar **Aceptación registrada**, el ID de solicitud, el nombre de la hoja y la fila escrita.
6. Comprueba la pestaña `Consentimientos` de la hoja y la sección **Ejecuciones** de Apps Script.

Si algo falla, la pestaña de respuesta muestra `No se pudo registrar la aceptación`, el mensaje exacto, la traza técnica y el ID de solicitud. Ese mismo ID aparece en los registros de **Ejecuciones**.

## Privacidad

La página solamente solicita el nombre. También registra la fecha, el curso, semestre, grupo, actividad, versión del consentimiento, página de origen y un ID técnico de solicitud. El nombre se envía mediante `POST` y no aparece en la URL.
