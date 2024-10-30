import * as React from "react";

import classes from "./toggle.module.css";

export const Toggle: React.FC<{}> = (props) => {
  return (
    <ul className={classes.toggle}>
      <li
        onClick={() => props.onclick("montly")}
        className={`${classes.toggle__position} ${
          props.current == "montly" ? classes.toggle__position_state_active : ""
        }`}
      >
        Montly
      </li>
      <li
        onClick={() => props.onclick("yearly")}
        className={`${classes.toggle__position} ${
          props.current == "yearly" ? classes.toggle__position_state_active : ""
        }`}
      >
        Yearly
      </li>
    </ul>
  );
};
