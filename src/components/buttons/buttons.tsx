import * as React from "react";

import classes from "./buttons.module.css";

const Button = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default Button;
