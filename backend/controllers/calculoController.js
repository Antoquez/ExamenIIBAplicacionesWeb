const Calculo = require('../models/calculo');


// Función para obtener todos los cálculos
const obtenerTodosLosCalculos = async (req, res) => {
  try {
    const calculos = await Calculo.find(); // Obtener todos los registros de la colección
    res.status(200).json(calculos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Función para guardar un cálculo en la base de datos
const guardarCalculo = async (operacion, resultado, res) => {
  try {
    const nuevoCalculo = new Calculo({ operacion, resultado });
    await nuevoCalculo.save(); // Usar await para guardar el documento
    res.status(402).json({ operacion, resultado });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Función para realizar una operación
const realizarOperacion = (req, res, operacion) => {
  const a = parseFloat(req.headers.a);
  const b = parseFloat(req.headers.b);
  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = a + b;
      break;
    case 'resta':
      resultado = a - b;
      break;
    case 'multiplicacion':
      resultado = a * b;
      break;
    case 'division':
      if (b === 0) return res.status(400).send('No se puede dividir por cero');
      resultado = a / b;
      break;
    case 'potencia':
      resultado = Math.pow(a, b);
      break;
    case 'raiz':
      resultado = Math.sqrt(a);
      break;
    default:
      return res.status(400).send('Operación no válida');
  }

  guardarCalculo(operacion, resultado, res);
};

module.exports = {
  realizarOperacion,
  obtenerTodosLosCalculos
};

