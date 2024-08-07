const mongoose = require('mongoose');

//Se almacenan los resultados y operación realizados
const calculoSchema = new mongoose.Schema({
  operacion: String,
  resultado: Number,
  fecha: { type: Date, default: Date.now }
});

const Calculo = mongoose.model('Calculo', calculoSchema);

module.exports = Calculo;
