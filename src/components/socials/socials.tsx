import * as React from "react";

import Instagram from "./images/instagram.svg?react";
import X from "./images/x.svg?react";
import LinkedIn from "./images/linkedin.svg?react";

import classes from "./socials.module.css";

const Socials = () => {
  return (
    <ul className={classes.socials}>
      <li className={classes.socials__item}>
        <Instagram className={classes.socials__icon} />
      </li>
      <li className={classes.socials__item}>
        <X className={classes.socials__icon} />
      </li>

      <li className={classes.socials__item}>
        <LinkedIn className={classes.socials__icon} />
      </li>
    </ul>
  );
};

export default Socials;
