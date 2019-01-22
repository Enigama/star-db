import React from 'react'
import ItemList from '../item-list';
import { witchData } from '../hoc-helper';
import SwapiService from '../../services/swapi-services';

const swapiService = new SwapiService();
const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { fn }
      </Wrapped>
    )
  }
};

// const listWithChildren = withChildFunction(ItemList, ({name}) => <span>{name}</span>)
const renderName = ({name}) => <span>{name}</span>;
const renderModelAndNmae = ({model, name}) => <span>{name} ({model})</span>;

const PersonList = witchData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);

const PlanetsList = witchData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);

const StarshipsList = witchData(
  withChildFunction(ItemList, renderModelAndNmae),
  getAllStarships
);

export {
  PersonList,
  PlanetsList,
  StarshipsList
}