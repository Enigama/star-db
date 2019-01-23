import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorBoundry from "../error-boundry";

import SwapiService from "../../services/swapi-services";
import DummySwapiService from "../../services/dummy-swapi-service";

import { SwapiServiceProvider} from "../swapi-service-context";

import './app.css';

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
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      }
    })
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
            <ErrorBoundry>
              <Header onServiceChange={this.onServiceChange}/>
            </ErrorBoundry>
            { planet }
            <ErrorBoundry>
              <PeoplePage/>
              {/*<Row left={<PersonList />} right={<PersonDetails itemId={11}/>}/>*/}
            </ErrorBoundry>
            <ErrorBoundry>
              <PlanetsPage />
              {/*<Row left={<PlanetsList />} right={<PlanetsDetails itemId={5}/> }/>*/}
            </ErrorBoundry>
            <ErrorBoundry>
              <StarshipsPage />
              {/*<Row left={<StarshipsList />} right={<StarshipsDetails itemId={9}/>}/>*/}
            </ErrorBoundry>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
