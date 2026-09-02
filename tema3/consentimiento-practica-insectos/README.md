# Consentimiento para práctica con insectos

Página para **Fisiología de Animales 2027-1, Grupo 5417**. Registra solamente la fecha, la hora y el nombre de quienes aceptan participar.

## Configuración

1. Abre la hoja de cálculo que recibirá las respuestas.
2. Selecciona **Extensiones → Apps Script**.
3. Sustituye el contenido de `Code.gs` por el archivo `apps-script/Code.gs` de esta carpeta.
4. Guarda el proyecto. No es necesario ejecutar una función de configuración.
5. Selecciona **Implementar → Nueva implementación → Aplicación web**.
6. Elige quién puede acceder y realiza la implementación.
7. Copia la URL que termina en `/exec`.
8. Pega esa URL en `CONFIG.appsScriptUrl`, al principio de `script.js`.
9. Sube los archivos actualizados a GitHub y recarga la página sin caché.

## Cómo funciona

El formulario envía el nombre mediante `POST` a la función `doPost`. El script abre la hoja de cálculo a la que está vinculado, busca una pestaña llamada `Consentimientos` y añade una fila con:

1. Fecha y hora.
2. Nombre.

Si la pestaña `Consentimientos` no existe, el script la crea y añade esos dos encabezados.

El envío ocurre dentro de un marco oculto, sin abrir otra pestaña. Después de escribir correctamente en la hoja, Apps Script devuelve una señal a la página y el formulario se sustituye por el mensaje `Gracias, [nombre]. Tu respuesta ha quedado registrada correctamente.`

Si el despliegue está restringido a cuentas de Google o cuentas institucionales, la persona debe haber iniciado sesión antes de enviar. Si no llega confirmación en 20 segundos, la página vuelve a habilitar el formulario y muestra un error. Los detalles del servidor continúan disponibles en **Apps Script → Ejecuciones**.

## Actualizaciones

Después de modificar `Code.gs`, abre **Implementar → Administrar implementaciones**, selecciona una versión nueva y vuelve a implementar. Si Google genera una URL `/exec` diferente, actualiza también `script.js`.
