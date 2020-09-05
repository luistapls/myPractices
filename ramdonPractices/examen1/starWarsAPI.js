debugger
const films = async urlFilms => {
    const allInfoFilms = await fetch(urlFilms);
    const allInfoFilmsJson = await allInfoFilms.json();
    const resultsFilms = await allInfoFilmsJson.results;
    await resultsFilms.map(movie => movieInfo(movie));
    
}

const movieInfo = async oneFilm => {
    const titlesFilms = oneFilm.title;
    const moviePlanets = oneFilm.planets;
    const moviePeople = oneFilm.characters;
    const arrayMoviePlanets = await Promise.all(moviePlanets.map(urlPlanet => fetch(urlPlanet).then(res => res.json())))
    const arrayMoviePeople = await Promise.all(moviePeople.map(urlPeople => fetch(urlPeople).then(res => res.json())))
    const data = {
        title: titlesFilms,
        planets: arrayMoviePlanets.map(infoPlanet => ({
            name: infoPlanet.name,
            terrain: infoPlanet.terrain,
            gravity: infoPlanet.gravity,
            diameter: infoPlanet.diameter,
            population: infoPlanet.population
        })),
        people: arrayMoviePeople.map(infoPeople => ({
            name: infoPeople.name,
            gender: infoPeople.gender,
            hair_color: infoPeople.hair_color,
            skin_color: infoPeople.skin_color,
            eye_color: infoPeople.eye_color,
            height: infoPeople.height,
            homeworld: fetch(infoPeople.homeworld).then(res => res.json()).then(planet => planet.name)
        }))
    }
    return data;
}
films('https://swapi.dev/api/films/');