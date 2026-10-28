# Sitio personal — Angel Villanueva

Sitio estático bilingüe (español / inglés) con CV, experiencia, proyectos e investigación.
No necesita compilación: es HTML, CSS y JavaScript plano.

## Editar el contenido

Todo el texto está en [`assets/content.js`](assets/content.js). Cada texto tiene
versión `es` y `en`. Para sumar un trabajo o un proyecto, copiá un bloque de la
lista `experience` o `projects` y editalo. Las fechas van como `"AAAA-MM"`, y
`end: null` significa "actualidad".

Cada proyecto tiene `category`: `"work"` aparece en la pestaña **Ciencia y datos**
y `"hobby"` en **Hobbies** (el enlace `#hobbies` abre esa pestaña). `image` apunta
a una captura en [`assets/projects/`](assets/projects/) (800 × 500, JPEG); sin
imagen, la tarjeta muestra `glyph`.

Los textos fijos de la interfaz (títulos de secciones, botones) están en `UI`
dentro de [`assets/main.js`](assets/main.js).

## Verlo localmente

```sh
python3 -m http.server 8080
```

y abrir http://localhost:8080. Con `?lang=en` o `?lang=es` se fuerza el idioma.
Si no, se usa el último elegido o el idioma del navegador.

## Publicarlo gratis con GitHub Pages

1. Subir esta carpeta a un repo **público** llamado `angelmza1990.github.io`.
2. En GitHub: **Settings → Pages → Branch: main / root**.
3. En unos minutos queda en https://angelmza1990.github.io
