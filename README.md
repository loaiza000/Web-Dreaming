# Dreaming Website

Sitio web corporativo para Dreaming - "Vivir para soñar, soñar para vivir"

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar el servidor:
```bash
npm start
```

3. Para desarrollo (con recarga automática):
```bash
npm run dev
```

El sitio web estará disponible en http://localhost:3000

## Tecnologías

- Node.js
- Express
- EJS
- Tailwind CSS
- AOS (Animate On Scroll)

## Despliegue en Vercel

1. Instalar Vercel CLI globalmente:
```bash
npm install -g vercel
```

2. Iniciar sesión en Vercel:
```bash
vercel login
```

3. Desplegar el proyecto:
```bash
vercel
```

4. Para desplegar a producción:
```bash
vercel --prod
```

### Notas de despliegue
- El archivo `vercel.json` ya está configurado para el despliegue
- Asegúrate de tener una cuenta en [Vercel](https://vercel.com)
- El despliegue se realizará automáticamente cada vez que hagas push a la rama principal si conectas el repositorio con Vercel
