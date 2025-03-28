const express = require('express');
const path = require('path');
const app = express();

// Función para manejar rutas
app.locals.url = function(path) {
    return path;
};

// Configuración de EJS y archivos estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas principales
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/products', (req, res) => {
    res.render('products');
});

app.get('/policies', (req, res) => {
    res.render('policies');
});

// Manejo de archivos estáticos adicionales
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).render('index');
});

// Puerto para Vercel o desarrollo local
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});

// Exportar para Vercel
module.exports = app;
