import React, {Component} from "react";
import Row from '../row';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorBoundry from "../error-boundry";

import SwapiService from "../../services/swapi-services";


export default class PeoplePage extends Component{
  swapiService = new SwapiService();

  state = {
    selectedPerson: 5,
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id})
  };

  render(){
    const  { selectedPerson } = this.state;

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
      />
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={selectedPerson} />
      </ErrorBoundry>
    );

    return(
      <Row left={itemList} right={personDetails}/>
    )
  }
}
