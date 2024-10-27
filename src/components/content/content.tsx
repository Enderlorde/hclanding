import * as React from "react";
import { useOutlet } from "react-router-dom";

import Header from "../header/header";

import classes from "./content.module.css";

const Content = () => {
  return (
    <div className={classes.content}>
      <Header />

      {useOutlet()}
    </div>
  );
};

export default Content;
