# Ascensores de Valparaíso — aplicación web completa

Proyecto educativo e independiente. **Versión del catálogo: 2 de noviembre de 2026.**

Esta aplicación no utiliza Thunkable, licencias premium, claves de pago ni una base de datos. Funciona en el navegador de un celular, tablet o computador. Se puede agregar a la pantalla de inicio del teléfono como PWA al publicarla por HTTPS. **No es una aplicación Android APK ni una app iOS IPA**: es una web instalable.

## 1. ¿Qué corrige?

| Problema original | Solución incluida |
|---|---|
| Ascensores dibujados en el mar | Coordenadas de estaciones o puntos de referencia contrastados con OpenStreetMap/Mapcarta y Wikiviajes. Los ascensores sin dato geográfico verificable no reciben un marcador inventado. |
| La ruta era una línea recta | Solicitud a **Valhalla**, motor de rutas con modo `pedestrian` y geometría real de caminos. Si el servicio falla, **no dibuja ningún segmento falso**. |
| Cambiar de idioma no modificaba el texto | Traducción funcional de interfaz a **español, inglés, portugués, alemán e italiano**, almacenada en el navegador. |
| Imágenes artificiales incorrectas | Fotografías obtenidas de la página del ascensor en **Wikipedia / Wikimedia Commons**. Si no existe imagen identificable, se muestra un recuadro sin fotografía. |
| Ayuda y comentarios sin destino | Correo público y verificado de **Ascenval** para consultas sobre ascensores. Comentarios sobre esta aplicación: formulario con copia del texto y posibilidad de configurar tu correo real. |
| Catálogo incompleto | **30 ascensores históricos**, incluyendo operativos, fuera de servicio, restringidos y registros históricos. |
| No se guardaban favoritos | Guardado local en el dispositivo. |
| Rutas era una pantalla independiente | Se incluye una pantalla **Rutas** con selección de ascensor y GPS. |
| Las calificaciones eran simuladas | El formulario permite elegir entre 1 y 5 estrellas y preparar un mensaje para un destinatario real. |

## Novedades de la versión 2

- **Diseño parecido a una aplicación móvil:** menú inferior fijo en celular, botones grandes, azul marino, coral y blanco.
- **Galerías de fotografías reales:** 15 ascensores tienen cuatro archivos identificados de Wikimedia Commons, con flechas, miniaturas y vínculo al archivo original para consultar créditos/licencia. Para los registros sin galería se mantiene el intento de una imagen de Wikipedia, sin inventar fotos.
- **Comentarios por correo:** formulario preparado para enviar a Formspree una vez que pegues tu enlace real en `config.js`. Lee **`CONFIGURAR_CORREO.md`**.
- Las fotos se descargan desde Wikimedia al abrir la página: **necesitas Internet**; no se incluyen copias de los archivos fotográficos en el ZIP.

## 2. Estructura del proyecto

```text
ascensores-valparaiso/
├── index.html            # Pantallas y estructura
├── styles.css            # Diseño responsivo, modo claro/oscuro y estilo app
├── app.js                # Idiomas, fotos, mapa, rutas, ayuda, favoritos
├── data.js               # Catálogo y coordenadas de 30 ascensores
├── photos.js             # Galerías reales con enlaces de Wikimedia Commons
├── config.js             # Pega aquí el endpoint de Formspree
├── CONFIGURAR_CORREO.md  # Guía paso a paso para recibir avisos
├── translations-extra.js # Traducciones al alemán y al italiano
├── icon.svg              # Icono vectorial decorativo (no es una foto)
├── icon-192.png / icon-512.png # Iconos de instalación PWA
├── manifest.webmanifest  # Instalación PWA
├── sw.js                 # Caché solo de archivos locales
├── package.json          # Para ejecutar pruebas sin dependencias
└── tests/data.test.mjs   # Pruebas del catálogo
```

## 3. Ejecutarla paso a paso

**Opción A: Visual Studio Code**

1. Descomprime el ZIP en una carpeta.
2. Abre esa carpeta en Visual Studio Code.
3. Si tienes instalada la extensión **Live Server**, abre `index.html` con **Open with Live Server**.
4. Se abrirá en `http://127.0.0.1:5500` o un puerto parecido.

**Opción B: con Python**

1. Instala Python 3 si aún no lo tienes.
2. Abre una consola o terminal dentro de `ascensores-valparaiso`.
3. Ejecuta:

   ```bash
   python -m http.server 8000
   ```

   En macOS/Linux también puedes usar `python3 -m http.server 8000`.
4. Abre **http://localhost:8000** en el computador.

**Importante:** no abras `index.html` con doble clic utilizando `file://`. Los módulos JavaScript, el service worker y la geolocalización pueden fallar en ese modo.

## 4. Usarla desde el celular

La manera más sencilla es publicar los archivos por HTTPS, por ejemplo mediante GitHub Pages, Netlify o Cloudflare Pages. Después, abre la URL desde Chrome o Safari y usa **Agregar a pantalla de inicio**.

Si quieres usarla desde tu red local con un servidor Python, podrás explorar el catálogo, pero normalmente **el GPS del celular no funcionará por HTTP**: se exige un contexto seguro (`https://` o `localhost`). Para probar navegación real desde tu teléfono, publica en HTTPS.

## 5. Publicación gratuita en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `ascensores-valparaiso`.
2. Sube los archivos de la carpeta **a la raíz del repositorio** (no el ZIP).
3. Entra a **Settings → Pages**.
4. Selecciona **Deploy from a branch** → `main` → `/ (root)` y guarda.
5. Cuando se publique, abre la URL HTTPS que GitHub Pages muestra.

No necesitas modificar rutas: todos los archivos locales utilizan rutas relativas.

## 6. Contacto y comentarios: ¿a dónde se envían?

La aplicación mantiene dos tipos de contacto separados:

- **Información de ascensores:** correo externo publicado de Ascenval, una agrupación independiente. No es el soporte de tu aplicación.
- **Comentarios de la aplicación:** formulario real conectado a **Formspree** cuando configures el enlace. Los visitantes rellenan correo, nombre opcional, motivo, ascensor, valoración y mensaje. La aplicación **solo muestra éxito después de recibir confirmación de Formspree**.

**Pasos detallados en `CONFIGURAR_CORREO.md`.** En resumen:

1. Regístrate en https://formspree.io/ con el correo que quieres usar.
2. Confirma tu correo, crea un formulario y copia su endpoint.
3. En `config.js` coloca `export const FORM_ENDPOINT = 'https://formspree.io/f/TU_ID_REAL';` sustituyendo `TU_ID_REAL` por el identificador de tu formulario.
4. Guarda, recarga Live Server y envía un comentario de prueba.
5. Revisa el panel de Formspree y comprueba que llega el email de notificación.

Mientras no configures Formspree **no hay envío automático**. El usuario puede copiar el mensaje o puedes configurar de forma opcional `SUPPORT_EMAIL` para abrir su propio cliente de correo.

## 7. Cómo se calculan las rutas

`app.js` pide permiso de GPS y envía las coordenadas al servidor público de pruebas **Valhalla** (`https://valhalla1.openstreetmap.de/route`) con:

```js
{
  locations: [
    { lat: origenLatitud, lon: origenLongitud },
    { lat: destinoLatitud, lon: destinoLongitud }
  ],
  costing: 'pedestrian',
  format: 'osrm',
  shape_format: 'geojson'
}
```

Luego dibuja en Leaflet **únicamente la geometría de la ruta recibida**, no una línea desde la ubicación del usuario al destino. Muestra metros y tiempo según ese cálculo. Se incluye un enlace a **Google Maps con modo `walking`** como alternativa.

**Limitaciones reales:**

- Valhalla es un servicio público de demostración sujeto a disponibilidad y límites de uso. Para una aplicación abierta a muchos turistas, contrata o instala un servicio de rutas con SLA.
- No se ha hecho una prueba presencial ni de calles, accesos, escaleras o accesibilidad universal. La red peatonal puede contener errores cartográficos. Por eso el destino es un punto publicado y se recomienda revisar la entrada exacta.
- El GPS puede fallar, no tener permiso o estar lejos de Valparaíso. En ese caso no se fabrican rutas.
- La ruta requiere conexión a Internet; el servicio worker solo conserva los archivos locales, no los mapas o rutas de terceros.
- No es navegación turn-by-turn continuamente actualizada: calcula una ruta inicial y muestra sus instrucciones cuando el proveedor las entrega. Google Maps ofrece una alternativa para navegación guiada.

## 8. Fotos auténticas

Se configuraron **60 archivos fotográficos identificados de Wikimedia Commons**: cuatro por cada uno de los 15 ascensores del listado `PHOTO_FILES` en `photos.js`. El catálogo usa la primera foto como portada, y en la ficha se incluyen una galería de cuatro fotos, flechas para pasar imágenes, miniaturas y enlace al **archivo específico en Wikimedia**, donde constan el autor y las condiciones de licencia. Se incluyeron fotos de los siete ascensores con servicio referencial y de Polanco, Artillería, Villaseca, Mariposas, Florida, Lecheros, Larraín y Monjas.

Las fotos se consultan en línea con `Special:FilePath` de Wikimedia Commons. La carga puede demorar o fallar por conectividad, límites o cambios de archivos. No se generan imágenes con IA ni se sustituye la foto de un ascensor por otra cualquiera.

Para los otros registros del catálogo se intenta obtener una imagen identificada de Wikipedia; si no existe, se muestra un aviso de falta de fotografía. **No todas las fotos se pudieron probar descargándolas desde este entorno**: prueba las galerías con Internet en tu navegador. Comprueba los créditos y licencias individualmente antes de redistribuir fotografías fuera de Wikimedia.

## 9. Estados y coordenadas

La base `data.js` distingue:

- `operativo`: siete ascensores que Ascenval identifica como operativos en la consulta de referencia de 2026.
- `cerrado`: sin servicio público confirmado, con estructura o ubicación referencial documentada.
- `restringido`: Hospital Van Buren, institucional y no turístico.
- `historico`: registros antiguos sin servicio confirmado, algunos desaparecidos. No se inventan coordenadas.

**Caso Polanco:** un reportaje del 16 de octubre de 2026 lo incluyó entre ocho ascensores en funcionamiento, pero la ficha específica de Ascenval sigue indicando fuera de servicio desde el 5 de septiembre de 2024. Se priorizó la ficha de Ascenval, con advertencia visible. **Hay que confirmar antes de modificarlo.**

Las coordenadas provienen principalmente de registros de estaciones publicados en Mapcarta/OSM y de Wikiviajes. **No equivalen a validación puerta a puerta en terreno**. Puedes corregir un punto en `data.js` luego de visitarlo o verificar en cartografía.

## 10. Fuentes consultadas

1. Agrupación de Usuarios y Usuarias de Ascensores de Valparaíso: https://www.ascenval.cl/ascensores
2. Ficha específica Polanco: https://www.ascenval.cl/ascensores/polanco
3. Museo de Historia Natural de Valparaíso (enero de 2026): https://www.mhnv.gob.cl/noticias/el-latido-de-los-cerros-un-viaje-al-corazon-de-los-ascensores-de-valparaiso
4. Universidad Técnica Federico Santa María, registro histórico de ascensores: https://repositorio.usm.cl/bitstreams/2fd4eabd-0497-4220-9270-50bfd02eca8c/download
5. Ubicaciones: https://es.wikivoyage.org/wiki/Ascensores_de_Valpara%C3%ADso y https://mapcarta.com/
6. Reportaje 16 octubre 2026 con clasificación distinta de Polanco: https://www.poderyliderazgo.cl/valparaiso-ascensores-cerrados-movilidad-comercio-turismo/
7. Valhalla (API peatonal): https://valhalla.github.io/valhalla/api/route/api-reference/
8. Licencias de mapa: https://www.openstreetmap.org/copyright

## 11. Pruebas

Con Node.js instalado, en la carpeta raíz ejecuta:

```bash
npm test
```

Esto valida que hay 30 ascensores, IDs únicos, 7 estados operativos de referencia, Polanco cerrado y que los marcadores documentados estén dentro de Valparaíso.

También se recomienda verificar manualmente en un celular real: permisos GPS, rutas por calle, idiomas, conexión a Internet, fotos, comentarios y favoritos.

---

Este proyecto es educativo, no oficial ni afiliado a la Municipalidad de Valparaíso, Ascenval, Wikipedia u OpenStreetMap. No reemplaza fuentes oficiales de horarios, tarifas, accesos ni disponibilidad en tiempo real.

## Actualización versión 4 - imágenes de Santo Domingo, Ramaditas y Delicias

Se incorporó una fotografía enlazada de **Santo Domingo** al catálogo y a la galería de detalle. Su origen aparece en `FUENTES_VISUALES_V4.md`.

Para **Ramaditas** y **Delicias** se añadieron accesos a archivos patrimoniales externos desde las fichas. No se simula una foto: sus archivos de imagen originales están alojados en servidores antiguos que ya no entregan los archivos. Antes de publicar imágenes descargadas de esos archivos hay que verificar autor y permiso.

Si ves una versión antigua al abrir con Live Server, presiona Ctrl+Shift+R. La PWA usa una caché actualizada `ascensores-valparaiso-v4`.
