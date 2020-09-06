/* eslint-disable */
const fetch = require('node-fetch');

const URL_API_CALCULADORA = 'http://localhost:3000/api/calculadora/pokemon';

const returnStatusPoke = async (resultsFetchPoke, res) => {
  if (resultsFetchPoke.status === 404) {
    return res.status(404).json(resultsFetchPoke);
  } else {
    const pokeCalculator = await fetch(URL_API_CALCULADORA);
    const pokeCalculatorJSON = await pokeCalculator.json();
    return res.status(200).json(pokeCalculatorJSON);
  }
};

module.exports = {
  returnStatusPoke,
};
