/* debugger
const API_URL = 'https://swapi.dev/api/';
const FILMS_URL = 'films/';

let eachFilms = data => {
    data.results.map(result => {
        titlesFilms(result);
        planetsFilms(result);
    })
}

let titlesFilms = titlesResults => {
    console.log(`Title: ${titlesResults.title}`);
}

/* let dataPlanets = async urlPlanet => {
    try {
        let allPlanetInfo = await fetch(urlPlanet);
        let allPlanetInfoJson = await allPlanetInfo.json()
        return allPlanetInfoJson;
    }catch(error) {
        console.error(error);
    }
}
let planetsFilms = planetsResults => {
    let arrayPlanetsPromise = planetsResults.planets.map(planets => dataPlanets(planets))
    let arrayPlanetsInfo = Promise.all(arrayPlanetsPromise);
    let lengthPlanets = arrayPlanetsInfo.length;
    for(let i = 0; i <= lengthPlanets; i++) {
        console.log(arrayPlanetsInfo[i].name);
    }
    console.log(arrayPlanetsInfo[0]);
} */
/* let dataPlanets = async urlPlanet => {
    await fetch(urlPlanet)
    .then(res => res.json())
    .then(planets => console.log(planets.name));
}

let planetsFilms = async planetsResults => {
    await planetsResults.planets.map(planets => dataPlanets(planets));
}

fetch(`${API_URL}${FILMS_URL}`)
.then(res => res.json())
.then(dataFilms => eachFilms(dataFilms))
.catch(error => console.log(error)) */ 
/* eslint-disable*/
const fetch = require('node-fetch');
const fs = require('fs');
const API_URL = 'https://swapi.dev/api/';
const FILMS_URL = 'films/';

const films = async (url) => {
    const getFilms = await fetch(`${API_URL}${FILMS_URL}${url}`)
    const resJson = await getFilms.json()
    const planets = await Promise.all(resJson.planets.map((urlObject) => fetch(urlObject).then((res) => res.json())))
    const data = {
        title: resJson.title,
        planets: planets.map((value) => ({
            name: value.name,
            gravity: value.gravity,
            terrain: value.terrain,
            diameter: value.diameter,
            population: value.population
        }))
    }
    return data
}

const movie6 = async () =>{
    const getFilms = await fetch(`${API_URL}${FILMS_URL}`)
    const resJson = await getFilms.json()
    const mapKeys = Object.keys(resJson.results).map((i) => Number(i) +1)
    // [1,2,3,4,5,6]
    const promesaAll = await Promise.all(mapKeys.map((keyFilms) => films(keyFilms)))
    fs.writeFile(`${__dirname}/example.json`, JSON.stringify(promesaAll), (err) => console.log(err))
}
movie6()