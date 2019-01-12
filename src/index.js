class SwapiService {
  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
      const response = await fetch(`${this._apiBase}${url}`);
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, received ${response.status}`)
      }
      return await response.json();
  }

  getAllPeople() {
    const resolve =  this.getResource(`/people/`);
    return resolve.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`)
  }

  getAllStarships() {
    const resolve = this.getResource(`/starships/`);
    return resolve.results;
  }

  getStarships(id) {
    return this.getResource(`/starships/${id}/`)
  }

  getAllPlanets() {
    const resolve = this.getResource(`/planets/`)
    return resolve.results;
  }

  getPlanets(id) {
    return this.getResource(`/planets/${id}/`)
  }
}

const swapi = new SwapiService();
swapi.getPlanets(8).then(body => {
  console.log(body.name);

  //each names
  // body.forEach((v) => {
  //   console.log(v.name);
  // });
})


// getResource('https://swapi.co/api/people/1/')
//   .then( body => {
//     console.log(body);
//   })
// .catch(reject => {
//   console.log(reject);
// })
