import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorBoundry from "../error-boundry";

import SwapiService from "../../services/swapi-services";
import DummySwapiService from "../../services/dummy-swapi-service";

import { SwapiServiceProvider} from "../swapi-service-context";

import './app.css';

import StarshipsDetails from "../sw-components/starships-details";
import LoginPage from "../pages/login";
import SecretPage from "../pages/secret-page";

class App extends React.Component{
  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true})
  }

  onLogin = () => {
    this.setState({isLoggedIn: true});
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
    const { isLoggedIn } = this.state;
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Switch/>
                <Header onServiceChange={this.onServiceChange}/>
                <RandomPlanet/>
                <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact
                />
                <Route path="/people" render={() => <h2>People</h2>}
                />
                <Route
                  path="/people/:id?"
                  component={PeoplePage}
                />
                <Route path="/planets" render={() => <h2>Planets</h2>}
                />
                <Route
                  path="/planets/:id?"
                  component={PlanetsPage}
                />
                <Route path="/starships" render={() => <h2>Starships</h2>}
                />
                <Route
                  path="/starships/"
                  exact
                  component={StarshipsPage}
                />
                <Route
                  path="/starships/:id"
                  render={({match}) => {
                    const {id} = match.params;
                    return <StarshipsDetails itemId={id}/>
                }}/>
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin}
                    />
                  )}
                />
                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn}/>
                  )}
                />
                {/*<Route render={() => <h2>Page not found</h2>}/>*/}
              <Switch/>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
