const fetch = require('node-fetch');
const fs = require('fs');

const URL_API = 'https://rickandmortyapi.com/api/';
const URL_EPISODES = 'episode';

const allInfo = async () => {
  const allEpisodes = await fetch(`${URL_API}${URL_EPISODES}`);
  const allEpisodesJSON = await allEpisodes.json();

  const infoCharacters = (arrayCharactersURL) => {
    const arrayCharacters = arrayCharactersURL.map(async (characterURL) => {
      const character = await fetch(characterURL);
      const characterJSON = await character.json();
      const dataCharacter = {
        name: characterJSON.name
      };
      return dataCharacter;
    });
    return arrayCharacters;
  };
  const infoEpisode = async (episode) => {
    const data = {
      name: episode.name,
      air_date: episode.air_date,
      characters: await Promise.all(infoCharacters(episode.characters))
    };
    return data;
  };

  const arrayInfoEpisode = await Promise.all(
    allEpisodesJSON.results.map((episode) => infoEpisode(episode))
  );
  return arrayInfoEpisode;
};

fs.writeFile(
  `${__dirname}/ramNode.json`,
  JSON.stringify(allInfo()),
  (err) => err
);
