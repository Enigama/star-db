import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details';
import { witchSwapiService } from '../hoc-helper';

const PersonDetails = (props) => {
  return(
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
};

const  mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

export default witchSwapiService(mapMethodsToProps)(PersonDetails);