import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorButton from "../error-button/error-button";
import ErrorBoundry from "../error-boundry";

import SwapiService from "../../services/swapi-services";

import { SwapiServiceProvider} from "../swapi-service-context";
import {
  PersonList,
  PlanetsList,
  StarshipsList,
  PersonDetails,
  PlanetsDetails,
  StarshipsDetails,
} from '../sw-components';

import './app.css';
import DummySwapiService from "../swapi-service-context/dummy-swapi-service";

class App extends React.Component{
  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService()
  };

  componentDidCatch() {
    this.setState({ hasError: true})
  }

  onServiceChange = () => {
    console.log('click');
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      console.log(Service.name, 'switched');
      return {
        swapiService: new Service()
      }
    })
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const { showRandomPlanet } = this.state;
    const planet = showRandomPlanet ? <RandomPlanet/> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            { planet }
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>
            <ErrorButton />

            <PersonDetails itemId={11}/>
            <PlanetsDetails itemId={5}/>
            <StarshipsDetails itemId={9}/>

            <PersonList />
            <PlanetsList />
            <StarshipsList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
