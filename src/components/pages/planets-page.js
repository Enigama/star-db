import React, { Component } from 'react'
import { PlanetsList, PlanetsDetails } from "../sw-components";
import Row from "../row";

export default class PlanetsPage extends Component{
  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem});
  };

  render() {
    const { selectedItem } = this.state;

    return(
      <Row
        left={<PlanetsList  onItemSelected={this.onItemSelected}/>}
        right={<PlanetsDetails itemId={selectedItem}/>}
      />
    )
  }

}