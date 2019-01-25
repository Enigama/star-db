import React from 'react'
import { StarshipsList } from "../sw-components";
import { withRouter} from "react-router-dom";

const StarshipsPage = ({ history, match }) =>{
  const { id } = match.params;
  return(
    <StarshipsList
      onItemSelected={(id) => history.push(id)}
    />
  )
};

export default withRouter(StarshipsPage);