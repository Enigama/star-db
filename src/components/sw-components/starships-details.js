import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details';
import { witchSwapiService } from '../hoc-helper'

const StarshipsDetails = ( props ) => {
  return(
    <ItemDetails { ...props} >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarships,
    getImageUrl: swapiService.getStarshipsImage
  }
}

export default witchSwapiService(StarshipsDetails, mapMethodsToProps);