/* eslint-disable */
const fetch = require('node-fetch');
const ALL_URL = require('../../url.json');

const URL_API = ALL_URL.URL_API_CALCULADORA;

const returnStatusPoke = async (resultsFetchPoke, res) => {
  if (resultsFetchPoke.status === 404) {
    return res.status(404).json(resultsFetchPoke);
  } else {
    const pokeCalculator = await fetch(URL_API);
    const pokeCalculatorJSON = await pokeCalculator.json();
    return res.status(200).json(pokeCalculatorJSON);
  }
};

module.exports = {
  returnStatusPoke,
};
