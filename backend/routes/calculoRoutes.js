const express = require('express');
const router = express.Router();
const calculoController = require('../controllers/calculoController');


router.get('/suma', (req, res) => calculoController.realizarOperacion(req, res, 'suma'));
router.post('/resta', (req, res) => calculoController.realizarOperacion(req, res, 'resta'));
router.put('/multiplicacion', (req, res) => calculoController.realizarOperacion(req, res, 'multiplicacion'));
router.delete('/division', (req, res) => calculoController.realizarOperacion(req, res, 'division'));
router.patch('/potencia', (req, res) => calculoController.realizarOperacion(req, res, 'potencia'));
router.options('/raiz', (req, res) => calculoController.realizarOperacion(req, res, 'raiz'));
router.get('/calculos', calculoController.obtenerTodosLosCalculos);

module.exports = router;
