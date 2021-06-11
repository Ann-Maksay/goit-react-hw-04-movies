import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const MovieNavigation = ({ match }) => {
  return (
    <ul>
      <li>
        <NavLink to={`${match.url}/cast`}>Cast</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
      </li>
    </ul>
  );
};

export default withRouter(MovieNavigation);
