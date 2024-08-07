const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const calculoRoutes = require('./routes/calculoRoutes');
const app = express();
const port = 3000;

// Configuración de CORS
app.use(cors());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/calculadora')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

app.use(express.json());
app.use('/', calculoRoutes);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});


