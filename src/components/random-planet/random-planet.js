import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';

import './random-planet.css';
import Spinner from "../spinner/spinner";
import ErrorIndicator from '../error-indicator/error-indicator'

export default class RandomPlanet extends Component {
  SwapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(() => this.updatePlanet(), updateInterval)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    })
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor((Math.random()*25) + 3);
    this.SwapiService.getPlanets(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;
    const errorMessage = error ? <ErrorIndicator/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { spinner }
        { content }
        { errorMessage }
      </div>
    );
  }
}

RandomPlanet.defaultProps = {
  updateInterval: 10000,
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
};
