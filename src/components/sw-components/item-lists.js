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

const PersonList = witchData(ItemList, getAllPeople);
const PlanetList = witchData(ItemList, getAllPlanets);
const StarshipsList = witchData(ItemList, getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipsList
}