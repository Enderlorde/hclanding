import * as React from "react";

import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
