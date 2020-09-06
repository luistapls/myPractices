/* eslint-disable */
const fetch = require('node-fetch');

const URL_API = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPoke = async (pokemon1, pokemon2) => {
  try {
    // Pokemon1
    const infoPokemon1 = await fetch(`${URL_API}${pokemon1}`);
    const infoPokemon1JSON = await infoPokemon1.json();

    // Pokemon2
    const infoPokemon2 = await fetch(`${URL_API}${pokemon2}`);
    const infoPokemon2JSON = await infoPokemon2.json();

    // Datos de los pokemones
    const data = {
      status: 200,
      firstPoke: infoPokemon1JSON,
      secondPoke: infoPokemon2JSON,
    };

    // Retornando datos
    return data;

    // Si un usuario coloca un nombre de pokemon incorrecto.
  } catch (err) {
    const data = {
      status: 404,
      poke1: pokemon1,
      poke2: pokemon2,
      mensaje: 'No se han encontrado los pokemones suministrados.',
      error: err,
    };
    return data;
  }
};

module.exports = {
  fetchPoke,
};
