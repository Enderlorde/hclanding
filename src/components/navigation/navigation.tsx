import * as React from "react";

import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.navigation__list}>
        <li className={classes.navigation__item}>
          <a className={classes.navigation__link} href={`#promo`}>
            Features
          </a>
        </li>
        <li className={classes.navigation__item}>
          <a className={classes.navigation__link} href={`#partners`}>
            Partners
          </a>
        </li>
        <li className={classes.navigation__item}>
          <a className={classes.navigation__link} href={`#features`}>
            Features
          </a>
        </li>
        <li className={classes.navigation__item}>
          <a className={classes.navigation__link} href={`#team`}>
            Our team
          </a>
        </li>
        <li className={classes.navigation__item}>
          <a className={classes.navigation__link} href={`#intouch`}>
            Get in touch
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
