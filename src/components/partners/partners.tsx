import * as React from "react";

import classes from "./partners.module.css";

export const Partners: React.FC<{}> = () => {
  return (
    <ul className={classes.partners}>
      <li>SparC</li>
      <li>Omega-bank</li>
    </ul>
  );
};
