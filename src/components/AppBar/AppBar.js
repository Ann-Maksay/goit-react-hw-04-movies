import React from "react";
import AppBarWrapper from "./AppBarStyled";
import Navigation from "./Navigation/Navigation";

const AppBar = () => {
  return (
    <header>
      <AppBarWrapper>
        <Navigation />
      </AppBarWrapper>
    </header>
  );
};

export default AppBar;
