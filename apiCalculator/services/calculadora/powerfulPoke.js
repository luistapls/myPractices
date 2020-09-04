const fetch = require('node-fetch');

const URL_API = 'https://pokeapi.co/api/v2/pokemon/';

const powerfulPoke = async (pokemon1, pokemon2) => {
  try {
    // Pokemon1
    const infoPokemon1 = await fetch(`${URL_API}${pokemon1}`);
    const infoPokemon1JSON = await infoPokemon1.json();

    // Pokemon2
    const infoPokemon2 = await fetch(`${URL_API}${pokemon2}`);
    const infoPokemon2JSON = await infoPokemon2.json();

    // Vida de ambos pokemones
    const HP1 = infoPokemon1JSON.stats[0].base_stat;
    const HP2 = infoPokemon2JSON.stats[0].base_stat;

    // Datos de los pokemones
    const data = {
      status: 200,
      nombrePokemon1: pokemon1,
      nombrePokemon2: pokemon2,
      pokemon1HP: HP1,
      pokemon2HP: HP2,
      pokemonConMasVida: HP1 > HP2 ? pokemon1 : pokemon2,
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
  powerfulPoke,
};
