/* Importando las dos librerías que se van a usar en el codigo */

const fetch = require('node-fetch');
const fs = require('fs');

/* Las URL que se van a usar para la lectura de la API */

const URL_API = 'https://rickandmortyapi.com/api/';
const URL_EPISODES = 'episode';

/* Bloque de codigo principal, el cual se encarga de obtener toda la información
que se requiere de la API */

const allInfo = async () => {
  const allEpisodes = await fetch(`${URL_API}${URL_EPISODES}`);
  const allEpisodesJSON = await allEpisodes.json();

  /* Bloque de codigo donde se obtiene el nombre del capitulo donde salen los residentes
  del lugar de origen del personaje.  */

  const titleArrayEpisode = (arrayEpisodeURL) => {
    const arrayTitle = arrayEpisodeURL.map(async (urlEpisode) => {
      const chapter = await fetch(urlEpisode);
      const chapterJSON = await chapter.json();
      const dataChapter = {
        name: chapterJSON.name
      };
      return dataChapter;
    });
    return arrayTitle;
  };

  /* Bloque de codigo donde se obtiene el nombre, especie y episodio de los residentes
   del lugar de origen del personaje. */

  const infoResidents = (arrayResidentsURL) => {
    const arrayResidents = arrayResidentsURL.map(async (residentURL) => {
      const resident = await fetch(residentURL);
      const residentJSON = await resident.json();
      const dataResident = {
        name: residentJSON.name,
        species: residentJSON.species,
        episode: await Promise.all(titleArrayEpisode(residentJSON.episode))
      };
      return dataResident;
    });
    return arrayResidents;
  };

  /* Bloque de codigo donde se obtiene el nombre y la dimension de la localización del personaje. */

  const infoLocation = async (objectLocation) => {
    const locationURL = await fetch(objectLocation.url);
    const locationURLJSON = await locationURL.json();
    const dataLocation = {
      name: objectLocation.name,
      dimension: locationURLJSON.dimension
    };
    return dataLocation;
  };

  /* Bloque de codigo donde se obtiene el nombre, dimension y los residentes del
  lugar de origen del personaje. */

  const infoOrigin = async (objectOrigin) => {
    const originURL = await fetch(objectOrigin.url);
    const originURLJSON = await originURL.json();
    const dataOrigin = {
      name: objectOrigin.name,
      dimension: originURLJSON.dimension,
      residents: await Promise.all(infoResidents(originURLJSON.residents))
    };
    return dataOrigin;
  };

  /* Bloque de codigo donde se obtiene el nombre, especie, genero, origen y la
  localización de cada personaje. */

  const infoCharacters = (arrayCharactersURL) => {
    const arrayCharacters = arrayCharactersURL.map(async (characterURL) => {
      const character = await fetch(characterURL);
      const characterJSON = await character.json();
      const dataCharacter = {
        name: characterJSON.name,
        species: characterJSON.species,
        gender: characterJSON.gender,
        origin:
          characterJSON.origin.url === ''
            ? 'unknown'
            : await infoOrigin(characterJSON.origin),
        location:
          characterJSON.location.url === ''
            ? 'unknown'
            : await infoLocation(characterJSON.location)
      };
      return dataCharacter;
    });
    return arrayCharacters;
  };

  /* Bloque de codigo donde se obtiene el nombre, la fecha de emision y la información de los
  personajes que salen del episodio. */

  const infoEpisode = async (episode) => {
    const data = {
      name: episode.name,
      air_date: episode.air_date,
      characters: await Promise.all(infoCharacters(episode.characters))
    };
    return data;
  };

  /* Acá se crea un array con toda la información requerida de cada episodio que fue
  extraida de la API */

  const arrayInfoEpisode = await Promise.all(
    allEpisodesJSON.results.map((episode) => infoEpisode(episode))
  );

  /* Este bloque de codigo crea un archivo .json donde se muestran los datos
  que han sido extraidos de la API */

  fs.writeFile(
    `${__dirname}/ramNode.json`,
    JSON.stringify(arrayInfoEpisode),
    (error) => error
  );
};

allInfo();
