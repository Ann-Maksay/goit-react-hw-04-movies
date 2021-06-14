import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../../routes";

const Navigation = () => {
  return (
    <ul className="nav_list--main">
      <li className="nav_list_item--main">
        <NavLink
          exact
          to={routes.home}
          className="nav_link"
          activeClassName="nav_link--active"
        >
          Home
        </NavLink>
      </li>
      <li className="nav_list_item--main">
        <NavLink
          exact
          to={routes.movies}
          className="nav_link"
          activeClassName="nav_link--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
