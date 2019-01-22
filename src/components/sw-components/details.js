import React from 'react'
import ItemDetails, { Record } from '../item-details/item-details';

import {SwapiServiceConsumer} from "../swapi-service-context";

const PersonDetails = ({ itemId }) => {
  return(
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};
const PlanetsDetails = ({ itemId }) => {
  return(
    <SwapiServiceConsumer>
      {
        ({ getPlanets, getPlanetImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};
const StarshipsDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarships, getStarshipsImage }) => {
          return(
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
        }
      }
    </SwapiServiceConsumer>
  )
};

export {
  PersonDetails,
  PlanetsDetails,
  StarshipsDetails
}