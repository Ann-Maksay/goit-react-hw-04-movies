import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import MovieNavigationWrapper from "./MovieNavigatinStyled";

const MovieNavigation = ({ match }) => {
  return (
    <MovieNavigationWrapper>
      <h2 className="subtitle">Adittional information</h2>
      <ul className="sub-nav-list">
        <li className="sub-nav-list-item">
          <NavLink
            to={`${match.url}/cast`}
            className="sub-nav_link"
            activeClassName="sub-nav_link--active"
          >
            Cast
          </NavLink>
        </li>
        <li className="sub-nav-list-item">
          <NavLink
            to={`${match.url}/reviews`}
            className="sub-nav_link"
            activeClassName="sub-nav_link--active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </MovieNavigationWrapper>
  );
};

export default withRouter(MovieNavigation);
