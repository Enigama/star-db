import React from 'react'
import { withRouter } from "react-router-dom";
import { PlanetsList, PlanetsDetails } from "../sw-components";
import Row from "../row";

const PlanetsPage = ({history, match}) =>{
  const { id } = match.params;
  return(
    <Row
      left={<PlanetsList  onItemSelected={(id) => history.push(id)}/>}
      right={<PlanetsDetails itemId={id}/>}
    />
  )
};

export default withRouter(PlanetsPage)