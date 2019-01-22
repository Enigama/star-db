import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import './app.css';
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorButton from "../error-button/error-button";
import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-services";
import Row from "../row";

import { SwapiServiceProvider} from "../swapi-service-context";

import {
  PersonList,
  PlanetsList,
  StarshipsList,
  PersonDetails,
  PlanetsDetails,
  StarshipsDetails,
} from '../sw-components';
import ErrorBoundry from "../error-boundry";

class App extends React.Component{
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true})
  }

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
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
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
