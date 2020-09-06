/* eslint-disable */
const powerfulPoke = (pokeObj) => {
  const dataPokemon1 = pokeObj.firstPoke;
  const dataPokemon2 = pokeObj.secondPoke;

  const namePoke1 = dataPokemon1.name;
  const namePoke2 = dataPokemon2.name;

  const HP1 = dataPokemon1.stats[0].base_stat;
  const HP2 = dataPokemon2.stats[0].base_stat;

  const data = {
    nombrePokemon1: namePoke1,
    nombrePokemon2: namePoke2,
    pokemon1HP: HP1,
    pokemon2HP: HP2,
    pokemonConMasVida: HP1 > HP2 ? namePoke1 : namePoke2,
  };

  return data;
};

module.exports = {
  powerfulPoke,
};
