/* eslint-disable*/

// Import modules
const express = require('express');

// middleware
const {
  isNumeroCalculadora,
} = require('../../../utils/middleware/calculadora');

// Service Calculadora
const { operaciones } = require('../../../services/calculadora/math');
const { powerfulPoke } = require('../../../services/calculadora/powerfulPoke');

const calculadora = (app) => {
  const router = express.Router();
  app.use('/api/calculadora', router);
  // Pokemon
  router.get('/pokemon', (req, res) => {
    res.json(powerfulPoke(app.get('sendPoke')));
  });

  // Calculadora
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
