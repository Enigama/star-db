export default class SwapiService {
  _apiBase = 'https://swapi.co/api';

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`)
    }
    return await response.json();
  }

  getAllPeople = async () => {
    const resolve = await this.getResource(`/people/`);
    return resolve.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person)
  }

  getAllStarships = async () => {
    const resolve = await this.getResource(`/starships/`);
    return resolve.results.map(this._transformStarship);
  }

  getStarships = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship)
  }

  getAllPlanets = async () => {
    const resolve = await this.getResource(`/planets/`);
    return resolve.results.map(this._transformPlanet);
  }

  getPlanets = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship = (starship) => {
    return{
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoOapacity: starship.cargo_capacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year ,
      eyeColor: person.eye_color,
    }
  }
}

// const swapi = new SwapiService();
// swapi.getPlanets(8).then(body => {
  // console.log(body.name);

  //each names
  // body.forEach((v) => {
  //   console.log(v.name);
  // });
// });
