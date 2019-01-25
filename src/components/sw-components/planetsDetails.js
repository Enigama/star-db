import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details';
import { witchSwapiService } from '../hoc-helper';


const PlanetsDetails = ( props ) => {
  return(
    <ItemDetails { ...props }>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanets,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default witchSwapiService(mapMethodsToProps)(PlanetsDetails)