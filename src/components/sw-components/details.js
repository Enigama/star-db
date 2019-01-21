import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details';
import SwapiService from '../../services/swapi-services';

const swapiService = new SwapiService();
const {
  getPerson,
  getPlanet,
  getStarships,
  getPersonImage,
  getPlanetImage,
  getStarshipsImage,
} = swapiService;

const PersonDetails = ({ itemId }) => {
  return(
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
};
const PlanetDetails = () => {};
const StarshipsDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarships}
      getImageUrl={getStarshipsImage}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipsDetails
}