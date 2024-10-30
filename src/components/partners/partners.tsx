import * as React from "react";

import Cloudwatch from "./images/cloudwatch.svg";
import Luminous from "./images/luminous.svg";

import classes from "./partners.module.css";

export const Partners: React.FC<{}> = () => {
  return (
    <ul className={classes.partners}>
      <li className={classes.partners__partner}>
        <img src={Cloudwatch} alt="" />
      </li>
      <li className={classes.partners__partner}>
        <img src={Luminous} alt="" />
      </li>
    </ul>
  );
};
