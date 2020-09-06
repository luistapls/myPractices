/* eslint-disable */
// Import modules
const express = require('express');
const { fetchPoke } = require('../../services/Pokemon/fetchPokemon');
const { returnStatusPoke } = require('../../services/Pokemon/statusPoke');

// Pokemon route
const pokemon = (app) => {
  const router = express.Router();
  app.use('/api/pokemon', router);

  router.get('/:poke1/:poke2', async (req, res) => {
    const { poke1, poke2 } = req.params;

    const resultsPoke = await fetchPoke(poke1, poke2);
    app.set('sendPoke', resultsPoke);

    await returnStatusPoke(resultsPoke, res);
  });
};

module.exports = pokemon;
