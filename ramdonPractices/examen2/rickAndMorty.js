const fetch = require('node-fetch');
const fs = require('fs');

const basicInfo = async (urlMaster) => {
  const cle = await fetch(urlMaster);

  const cleJson = await cle.json();

  const episodesURL1 = cleJson.episodes;
  const infoEpisodes1 = await fetch(episodesURL1);
  const infoEpisodes1Json = await infoEpisodes1.json();
  const array1 = infoEpisodes1Json.results;

  const episodesURL2 = infoEpisodes1Json.info.next;
  const infoEpisodes2 = await fetch(episodesURL2);
  const infoEpisodes2Json = await infoEpisodes2.json();

  const array2 = infoEpisodes2Json.results;

  const arrayEpisodes = array1.concat(array2);

  const allEpisodes = async (results) => {
    const arrayData = await results.map(async (episode) => {
      const data = {
        name: episode.name,
        air_date: episode.air_date,
        characters: await Promise.all(
          episode.characters.map(async (urlCharacter) => {
            const infoCharacter = await fetch(urlCharacter);
            const infoCharacterJson = await infoCharacter.json();
            const dataCharacter = {
              name: infoCharacterJson.name,
            };
            return dataCharacter;
          })
        ),
      };
      return data;
    });
    return arrayData;
  };

  const results = allEpisodes(arrayEpisodes);

  const resultsReady = await Promise.resolve(results);
  fs.writeFile(`${__dirname}/example.json`, JSON.stringify(results), (err) =>
    console.log(err)
  );
};
basicInfo('https://rickandmortyapi.com/api/');
