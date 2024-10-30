import * as React from "react";

import classes from "./band.module.css";

const Band = () => {
  return (
    <div className={classes.band__wrapper}>
      <a href="#prices" className={classes.band}>
        Claim your free premium!
      </a>
    </div>
  );
};

export default Band;
