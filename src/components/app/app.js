import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import './app.css';
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorButton from "../error-button/error-button";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-services";

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
      <div>
        <Header />
        { planet }
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton/>
        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={({name, diameter}) => `${name} (${diameter})`}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.selectedPerson}/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={({name, model}) => `${name} (${model})`}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.selectedPerson}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
