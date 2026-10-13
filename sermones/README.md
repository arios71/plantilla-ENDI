# Biblioteca en línea de apuntes de sermón

Esta carpeta está separada de las plantillas deportivas. No modifica `index.html` ni `templatelinks.html`.

## Instalación controlada

1. En el proyecto Supabase ya utilizado por la plantilla ENDI, abre **SQL Editor** y ejecuta `supabase_setup.sql`.
2. Copia la plantilla HTML preparada a `sermones/index.html` en este repositorio.
3. Prueba la página antes de anunciarla: inicia sesión con el usuario existente de Supabase, sincroniza y verifica la tabla `public.sermon_notes`.
4. Solo después de comprobarlo, integra la carpeta en `main`. La URL prevista será `https://arios71.github.io/plantilla-ENDI/sermones/` si GitHub Pages está publicado desde la raíz de `main`.

## Seguridad y datos

- La página usa la clave publicable de Supabase; esa clave no sustituye la seguridad. El acceso depende de iniciar sesión y de las políticas RLS de la tabla.
- Cada fila se limita al usuario autenticado mediante `auth.uid() = user_id`.
- No habilites lectura ni escritura anónima.
- La plantilla conserva almacenamiento local. Para mover borradores existentes desde el archivo abierto como `file://`, exporta un respaldo JSON desde ese archivo e impórtalo en la página publicada.
- No se cambia ni se elimina ninguna tabla del diccionario deportivo.
