# Cómo recibir comentarios de la aplicación en tu correo

La app ahora incluye un formulario con nombre opcional, correo del visitante, motivo, ascensor, valoración y comentario. **Para que funcione el botón Enviar comentario necesitas configurar Formspree.** No requiere programar un servidor y evita hacer público tu correo en el código de la web.

## Paso 1: Crea tu cuenta

1. Abre https://formspree.io/.
2. Selecciona la opción de registro (*Get Started* / *Sign Up*) y crea una cuenta con **el correo en el que quieres recibir las notificaciones**.
3. Revisa tu bandeja de entrada (y Spam si no aparece) y confirma el correo si el servicio lo solicita.

## Paso 2: Crea un formulario

1. En el panel de Formspree busca **New Form** (puede mostrarse mediante el botón `+`).
2. Nómbralo **Comentarios Ascensores**.
3. Selecciona o confirma el correo de destino que usará Formspree.
4. Abre el formulario y busca la sección **Integration** (Integración).
5. Copia la URL que te muestran como *Form Endpoint*. Tendrá este aspecto:

   `https://formspree.io/f/xxxxxxxx`

   Es un ejemplo: **no copies esta URL como si fuera tuya**.

## Paso 3: Activa el formulario en tu proyecto

1. En Visual Studio Code abre la carpeta `ascensores-valparaiso`.
2. Abre el archivo **`config.js`**.
3. Busca esta línea:

   ```js
   export const FORM_ENDPOINT = '';
   ```

4. Cambia solamente las comillas vacías por **tu enlace real**, así:

   ```js
   export const FORM_ENDPOINT = 'https://formspree.io/f/TU_ID_REAL';
   ```

5. Guarda el archivo con **Ctrl + S**.
6. Recarga la página que abrió Live Server; si sigues viendo la versión antigua, usa **Ctrl + Shift + R**. La versión anterior podía quedar en caché por su instalación como app web.

**No pegues contraseñas, accesos de Gmail ni claves API privadas en `config.js`.**

## Paso 4: Prueba que llegan las notificaciones

1. Entra a tu aplicación y pulsa **Más → Ayuda y comentarios**.
2. Ingresa un **correo de prueba válido**, un motivo y un comentario de más de ocho caracteres.
3. Pulsa **Enviar comentario**.
4. La app debería mostrar **«¡Comentario enviado correctamente!»** únicamente si Formspree respondió con un estado de éxito.
5. En el panel de Formspree confirma que apareció la respuesta, y revisa tu correo y Spam para comprobar la notificación. En algunos casos debes habilitar **Email Notifications** (Notificaciones por correo) dentro de los ajustes del formulario.

**Importante:** el envío exitoso indica que Formspree recibió los datos, **no prueba por sí mismo** que llegó un correo a tu bandeja. Compruébalo con el paso 5.

## Si el formulario no envía

- Si dice «activar Formspree», no guardaste un enlace válido en `config.js` o estás viendo la versión antigua en caché.
- Si dice «No se pudo enviar», comprueba tu conexión y el enlace del formulario, revisa el panel de Formspree y que el formulario esté habilitado.
- Si el envío aparece en Formspree pero no llega correo, revisa la carpeta de spam y las opciones de notificación y correo de destino.
- Verifica las cuotas y condiciones del plan que elijas antes de recibir muchos mensajes.

## Qué pasa con los datos

El visitante decide enviar su correo, que se usa para responderle. La información se procesa en los servidores de Formspree. Antes de publicar oficialmente la web, agrega una política de privacidad breve que identifique al responsable, finalidad y periodo de conservación de esos datos.

Documentación oficial: https://help.formspree.io/articles/building-your-form/building-an-html-form
