import * as React from "react";

import classes from "./features.module.css";

const Features = () => {
  return (
    <ul className={classes.features}>
      <li className={classes.features__feature}>
        <div className={classes.feature__icon}>
          <img src="" alt="" />
        </div>
        <p>Unique study experience</p>
      </li>
      <li className={classes.features__feature}>
        <div className={classes.feature__icon}>
          <img src="" alt="" />
        </div>
        <p>Unique study experience</p>
      </li>
      <li className={classes.features__feature}>
        <div className={classes.feature__icon}>
          <img src="" alt="" />
        </div>
        <p>Unique study experience</p>
      </li>
      <li className={classes.features__feature}>
        <div className={classes.feature__icon}>
          <img src="" alt="" />
        </div>
        <p>Unique study experience</p>
      </li>
      <li className={classes.features__feature}>
        <div className={classes.feature__icon}>
          <img src="" alt="" />
        </div>
        <p>Unique study experience</p>
      </li>
    </ul>
  );
};

export default Features;
