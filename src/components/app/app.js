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

import { BrowserRouter as Router, Route } from "react-router-dom";

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

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet/>
              <Route
                path="/"
                render={() => <h2>Welcome to StarDB</h2>}
                exact
              />
              <Route
                path="/people"
                render={() => <h2>People</h2>}
              />
              <Route
                path="/people"
                component={PeoplePage}
              />
              <Route
                path="/planets"
                render={() => <h2>Planets</h2>}
              />
              <Route
                path="/planets"
                component={PlanetsPage
                }/>
              <Route
                path="/starships"
                render={() => <h2>Starships</h2>}
              />
              <Route
                path="/starships"
                component={StarshipsPage}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
