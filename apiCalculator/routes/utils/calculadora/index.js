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
  router.get('/pokemon/:poke1/:poke2', async (req, res) => {
    const { poke1, poke2 } = req.params;
    const resultsPoke = await powerfulPoke(poke1, poke2);
    resultsPoke.status === 404
      ? res.status(404).json(resultsPoke)
      : res.status(200).json(resultsPoke);
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
