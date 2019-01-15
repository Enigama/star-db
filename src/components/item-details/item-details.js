import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-services";
import Spinner from "../spinner/spinner";
import ErrorButton from "../error-button/error-button";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    hasError: false,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
     .then( item => {
       this.setState({
         item,
         loading: false,
         image: getImageUrl(item)
       });
     })

  }

  render() {
    const { item, loading, image } = this.state;

    if (loading) {
      return  <Spinner/>
    }

    if (!item) {
      return <span>Select a person from a list</span>;
    }
    const content = <PersonView item={item} image={image}/>;

    return (
      <div className="person-details card">
        {content}
      </div>
    )
  }
}

const PersonView = ({ item, image },) => {
  const { name, gender, birthYear, eyeColor} = item;
  console.log(image, 'test');
  return(
    <React.Fragment>
      <img className="person-image"
           src={image} alt='person-image'/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton/>
      </div>
    </React.Fragment>
  )
};
