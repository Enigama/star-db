import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';

import './random-planet.css';
import Spinner from "../spinner/spinner";

export default class RandomPlanet extends Component {
  constructor() {
    super()
    this.updatePlanet();
  }

  SwapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    })
  }

  updatePlanet() {
    const id = 4;
    this.SwapiService.getPlanets(id)
      .then(this.onPlanetLoaded)
  }

  render() {
    const { planet, loading } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        { loading ? <Spinner/> : <PlanetView planet={planet}/> }
      </div>
    );
  }
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
