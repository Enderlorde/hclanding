import * as React from "react";

import Chat from "./images/chat.svg?react";
import Grade from "./images/grade.svg?react";
import Hat from "./images/hat.svg?react";
import Leader from "./images/leader.svg?react";
import Verified from "./images/verified.svg?react";

import classes from "./features.module.css";

const Features = () => {
  return (
    <ul className={classes.features}>
      <li className={classes.features__feature}>
        <div className={classes.features__icon}>
          <Hat />
        </div>
        <p>Unique study experience</p>
      </li>
      <li className={classes.features__feature}>
        <div className={classes.features__icon}>
          <Chat />
        </div>
        <p>Connect with like-minded people</p>
      </li>
      <li className={classes.features__feature}>
        <div className={classes.features__icon}>
          <Grade />
        </div>
        <p>Improve your skills while proving them</p>
      </li>
      <li className={classes.features__feature}>
        <div className={classes.features__icon}>
          <Leader />
        </div>
        <p>Get rewarded for your solutions</p>
      </li>
      <li className={classes.features__feature}>
        <div className={classes.features__icon}>
          <Verified />
        </div>
        <p>Reliable Skill Testing System</p>
      </li>
    </ul>
  );
};

export default Features;
