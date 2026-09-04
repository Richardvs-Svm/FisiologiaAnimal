# test.version2 · Consentimiento para sesión de electrofisiología

Versión independiente para la sesión de electrofisiología en insectos. No modifica `consentimiento-practica-insectos` ni `test.version1`.

Conserva exactamente el flujo de envío y autenticación de `test.version1`, que utiliza:

- Un formulario HTML con `GET`.
- Navegación visible de nivel superior mediante `target="_blank"`.
- Una aplicación web de Apps Script que recibe el nombre mediante `doGet(e)`.
- La pantalla de inicio de sesión o el selector de cuentas de Google, cuando la configuración de acceso lo requiere.
- Una confirmación de Apps Script únicamente después de añadir la fila.
- Dos datos en la hoja: fecha/hora y nombre.

## Configuración

Para no mezclar este consentimiento con los registros de otras prácticas, se recomienda usar una hoja de cálculo independiente para esta sesión.

1. Crea o abre la hoja de cálculo que recibirá los registros.
2. Selecciona **Extensiones → Apps Script**.
3. Sustituye el contenido del editor por el de `apps-script/Code.gs` y guarda.
4. Selecciona **Implementar → Nueva implementación → Aplicación web**.
5. En **Ejecutar como**, selecciona tu cuenta.
6. En **Quién tiene acceso**, elige la opción que quieras probar. La disponibilidad de las opciones institucionales depende de la configuración de Google Workspace de la universidad.
7. Implementa y copia la URL terminada en `/exec`.
8. Pega esa URL en `CONFIG.appsScriptUrl`, al principio de `script.js`.
9. Publica `index.html`, `styles.css` y `script.js` en GitHub Pages.

Después de cambiar `Code.gs`, crea una versión nueva en **Implementar → Administrar implementaciones**. Si solo cambias el HTML, el CSS o `script.js` en GitHub, no es necesario volver a implementar Apps Script.

## Prueba recomendada

1. Abre la página publicada en una ventana privada.
2. Escribe un nombre de prueba y selecciona **Acepto participar**.
3. Se abrirá una pestaña visible de Apps Script.
4. Si Google lo solicita, inicia sesión con una cuenta autorizada.
5. Apps Script debe mostrar `Gracias, [nombre]. Tu respuesta ha quedado registrada correctamente.`
6. Comprueba que se añadió una fila en la pestaña `Consentimientos` de la hoja.

## Privacidad y comportamiento

El nombre viaja temporalmente como parámetro `nombre` en la URL de Apps Script para que Google pueda conservarlo durante el inicio de sesión. La página de confirmación intenta limpiar los parámetros visibles mediante `google.script.history.replace`. La página original de GitHub no incluye el nombre en su propia URL.

El acceso de Google puede limitar qué cuentas llegan a Apps Script, pero este código no comprueba que el nombre escrito coincida con el nombre del propietario de la cuenta.
