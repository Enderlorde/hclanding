import * as React from "react";

import classes from "./buttons.module.css";

const Button = (props) => {
  return (
    <button
      onClick={(e) => {
        props.onClick ? props.onClick(e) : "";
      }}
      className={`${classes.button} ${
        props.type
          ? props.type == "submit"
            ? classes.button_type_submit
            : props.type == "reset"
            ? classes.button_type_reset
            : ""
          : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
