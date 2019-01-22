import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details';
import SwapiService from '../../services/swapi-services';

const swapiService = new SwapiService();
const {
  getPerson,
  getPlanets,
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
const PlanetsDetails = ({ itemId }) => {
  return(
    <ItemDetails
      itemId={itemId}
      getData={getPlanets}
      getImageUrl={getPlanetImage}
    >
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
};
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
  PlanetsDetails,
  StarshipsDetails
}