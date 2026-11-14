# END Auto-Linker — PWA de prueba

Esta carpeta contiene una primera reconstrucción instalable de la plantilla, basada en `templatelinks.html` de `main`.

## Archivos

- `index.html`: plantilla editorial original, conservando sus funciones y su diseño.
- `manifest.webmanifest`: identidad y configuración de instalación.
- `service-worker.js`: caché de la aplicación y de bibliotecas/estilos externos para uso posterior sin conexión.
- `offline.html`: página de respaldo.
- `assets/icon.svg`: icono local.
  
## Comportamiento offline incorporado

- Guarda en el navegador copias de Tópicos, Anglicismos y Autocorrector cuando Supabase responde correctamente.
- Si Supabase no está disponible, intenta cargar esas copias locales.
- Conserva el borrador mediante el autoguardado local que ya tenía la plantilla.
- El service worker almacena los recursos estáticos externos después de la primera visita conectada.

## Importante para la instalación y las pruebas

Un service worker no puede funcionar abriendo el archivo con doble clic (`file://`). La aplicación debe servirse desde HTTPS o desde `localhost`. La primera visita debe hacerse con internet para que el navegador descargue y almacene los recursos externos; después se prueba desconectando la red y recargando.

La autenticación y las operaciones de escritura/lectura en Supabase siguen requiriendo conexión. La copia local de los diccionarios permite procesar texto sin conexión, pero no administrar esos diccionarios offline.

## Estado

Esta es una primera versión técnica en una rama separada. Se validó la sintaxis de los scripts y el formato del manifiesto, pero todavía falta la prueba real en navegador (instalación, caché de estilos/iconos, recarga offline, autoguardado y reconexión). No debe sustituir la plantilla pública ni considerarse lista para uso diario hasta completar esas pruebas.
