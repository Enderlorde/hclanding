import * as React from "react";

import classes from "./band.module.css";

const Band = () => {
  return (
    <div className={classes.band__wrapper}>
      <div className={classes.band}> Only first 1000 users</div>
    </div>
  );
};

export default Band;
