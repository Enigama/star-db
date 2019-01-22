import React from 'react'
import ItemList from '../item-list';
import { witchData, witchSwapiService } from '../hoc-helper';

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
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}
const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}


const PersonList = witchSwapiService(
  witchData(
    withChildFunction(ItemList, renderName)
  ),
  mapPersonMethodsToProps
);

const PlanetsList = witchSwapiService(
  witchData(
    withChildFunction(ItemList, renderName)
  ),
  mapPlanetMethodsToProps
);

const StarshipsList = witchSwapiService(
  witchData(
    withChildFunction(ItemList, renderModelAndName)
  ),
  mapStarshipsMethodsToProps
);

export {
  PersonList,
  PlanetsList,
  StarshipsList
}