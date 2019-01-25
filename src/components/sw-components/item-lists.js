import React from 'react'
import ItemList from '../item-list';
import { witchData,
  witchSwapiService,
  withChildFunction,
  compose,
} from '../hoc-helper';

// const listWithChildren = withChildFunction(ItemList, ({name}) => <span>{name}</span>)
const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};
const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};

const PersonList = compose(
  witchSwapiService(mapPersonMethodsToProps),
  witchData,
  withChildFunction(renderName),
)(ItemList);

const PlanetsList = compose(
  witchSwapiService(mapPlanetMethodsToProps),
  witchData,
  withChildFunction(renderName),
)((ItemList));

const StarshipsList = compose(
  witchSwapiService(mapStarshipsMethodsToProps),
  witchData,
  withChildFunction(renderModelAndName),
)(ItemList);

export {
  PersonList,
  PlanetsList,
  StarshipsList
}