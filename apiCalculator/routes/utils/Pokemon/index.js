/* eslint-disable*/
const fetch = require('node-fetch');
// Import modules
const express = require('express');

// Service Pokemon
const { fetchPoke } = require('../../../services/Pokemon/fetchPokemon');

const pokemon = (app) => {
  const router = express.Router();
  app.use('/api/pokemon', router);

  router.get('/:poke1/:poke2', async (req, res) => {
    const { poke1, poke2 } = req.params;

    const resultsPoke = await fetchPoke(poke1, poke2);
    app.set('sendPoke', resultsPoke);

    if (resultsPoke.status === 404) {
      res.status(404).json(resultsPoke);
    } else {
      const pokeCalculator = await fetch(
        'http://localhost:3000/api/calculadora/pokemon',
      );
      const pokeCalculatorJSON = await pokeCalculator.json();
      res.status(200).json(pokeCalculatorJSON);
    }
  });
};

module.exports = pokemon;
