fetch("http://swapi.dev/api/planets/1/")
.then(res => res.json())
.then(dataFilms => console.log(dataFilms.name))
.catch(err => console.log('ERRROR!1'))