# Consentimiento para práctica con insectos

Página estática para **Fisiología de Animales 2027-1, Grupo 5417**. Presenta la información de una sesión opcional de laboratorio y permite que quienes desean participar registren su aceptación mediante su nombre completo.

## Archivos

- `index.html`: contenido y estructura de la página.
- `styles.css`: diseño adaptable inspirado en el crucigrama del Tema 1.
- `script.js`: validación, modo de vista previa y envío de la aceptación.
- `apps-script/Code.gs`: receptor de Google Apps Script que guarda los registros en Google Sheets.

## Probar el mockup

Abre `index.html` en un navegador. Mientras `appsScriptUrl` esté vacío en `script.js`, la página funcionará en **modo de vista previa**: validará el nombre y mostrará la confirmación, pero no enviará datos.

## Conectar Google Sheets

1. Crea una hoja de cálculo nueva en Google Sheets.
2. Copia el identificador que aparece en su dirección web entre `/d/` y `/edit`.
3. En Google Apps Script, crea un proyecto y pega el contenido de `apps-script/Code.gs`.
4. Sustituye `PEGA_AQUI_EL_ID_DE_TU_HOJA_DE_CALCULO` por el identificador de la hoja.
5. Despliega el proyecto como **Aplicación web**:
   - Ejecutar como: tú.
   - Quién tiene acceso: cualquier persona que vaya a responder.
6. Copia la URL del despliegue que termina en `/exec`.
7. Pega esa URL en `CONFIG.appsScriptUrl`, al principio de `script.js`.
8. Publica la carpeta mediante GitHub Pages y realiza una prueba antes de compartirla.

La pestaña `Consentimientos` se creará automáticamente con las columnas de fecha, nombre, aceptación, curso, semestre, grupo, actividad, versión del texto y página de origen.

## Actualizaciones importantes

Si cambia el texto informado, modifica también `consentVersion` en `script.js`. Esto permite saber qué versión leyó cada estudiante. Si se modifica `Code.gs`, crea un nuevo despliegue o actualiza el despliegue existente en Apps Script.

