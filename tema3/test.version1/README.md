# test.version1 · Consentimiento con acceso institucional

Versión de prueba independiente. No modifica `consentimiento-practica-insectos`.

Mantiene el diseño completo de la página final, pero recupera el flujo de autenticación que funcionó en la prueba original:

- Formulario HTML con `GET`.
- Navegación visible de nivel superior mediante `target="_blank"`.
- Apps Script recibe la respuesta mediante `doGet(e)`.
- Google puede mostrar el selector de cuentas o el inicio de sesión antes de ejecutar el script.
- Apps Script muestra la confirmación solamente después de añadir la fila.
- La hoja recibe únicamente la fecha/hora y el nombre.

## Configuración

1. Abre la hoja de cálculo que recibirá los registros.
2. Selecciona **Extensiones → Apps Script**.
3. Copia el contenido de `apps-script/Code.gs` en el editor y guarda.
4. Selecciona **Implementar → Nueva implementación → Aplicación web**.
5. En **Ejecutar como**, selecciona tu cuenta.
6. En **Quién tiene acceso**, selecciona los usuarios del dominio de tu universidad.
7. Implementa y copia la URL terminada en `/exec`.
8. Pega esa URL en `CONFIG.appsScriptUrl`, al principio de `script.js`.
9. Publica `index.html`, `styles.css` y `script.js` en GitHub Pages.

Después de cambiar `Code.gs`, crea una versión nueva en **Implementar → Administrar implementaciones**.

## Prueba recomendada

1. Abre la página publicada en una ventana privada.
2. Escribe un nombre de prueba y selecciona **Acepto participar**.
3. Se abrirá una pestaña visible de Apps Script.
4. Inicia sesión con una cuenta institucional autorizada.
5. Apps Script debe mostrar `Gracias, [nombre]. Tu respuesta ha quedado registrada correctamente.`
6. Comprueba la pestaña `Consentimientos` y la sección **Ejecuciones**.
7. Repite la prueba con una cuenta no autorizada; Google debe impedir el acceso antes de ejecutar `doGet`.

## Privacidad y comportamiento

El nombre viaja temporalmente como parámetro `nombre` en la URL de Apps Script para que Google pueda conservarlo durante el inicio de sesión. La página de confirmación intenta limpiar los parámetros visibles mediante `google.script.history.replace`. Como medida fiable adicional, la confirmación se abre en una pestaña separada que el estudiante puede cerrar; la página original de GitHub nunca contiene el nombre en su URL.

El control del dominio limita qué cuentas pueden alcanzar Apps Script, pero no verifica que el nombre escrito corresponda al propietario de esa cuenta.

