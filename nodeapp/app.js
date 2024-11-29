const express = require('express');
const path = require('path');
const { connectDB } = require('./api/db');
const todoRoutes = require('./api/endpoints/todo');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectar a la base de datos
connectDB();

// Rutas de la API
app.use('/api', todoRoutes);

// Servir los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, 'app/pages')));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});