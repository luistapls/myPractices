/* eslint-disable */
// Import modules
const express = require('express');
const { operaciones } = require('../../../services/calculadora/math');
const { powerfulPoke } = require('../../../services/calculadora/powerfulPoke');

// Middlewares
const {
  isNumeroCalculadora,
} = require('../../../utils/middleware/calculadora');

// Calculadora route
const calculadora = (app) => {
  const router = express.Router();
  app.use('/api/calculadora', router);

  router.get('/pokemon', (req, res) => {
    res.json(powerfulPoke(app.get('sendPoke')));
  });

  router.get(
    '/:value1/:operator/:value2',
    isNumeroCalculadora(),
    (req, res) => {
      const { value1, value2, operator } = req.params;
      res.status(200).json(operaciones(value1, value2, operator));
    },
  );
};

module.exports = calculadora;
