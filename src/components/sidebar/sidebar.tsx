import * as React from "react";

import Socials from "../socials/socials";

import classes from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Socials />
    </div>
  );
};

export default Sidebar;
