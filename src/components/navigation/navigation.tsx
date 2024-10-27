import * as React from "react";
import { NavLink } from "react-router-dom";

import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.navigation__list}>
        <li className={classes.navigation__item}>
          <NavLink
            to={`/features`}
            className={({ isActive, isPending }) =>
              isPending
                ? `${classes.navigation__link} ${classes.navigation__link_state_pending}`
                : isActive
                ? `${classes.navigation__link} ${classes.navigation__link_state_active}`
                : `${classes.navigation__link}`
            }
          >
            Features
          </NavLink>
        </li>
        <li className={classes.navigation__item}>
          <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
              isPending
                ? `${classes.navigation__link} ${classes.navigation__link_state_pending}`
                : isActive
                ? `${classes.navigation__link} ${classes.navigation__link_state_active}`
                : `${classes.navigation__link}`
            }
          >
            Showcase
          </NavLink>
        </li>
        <li className={classes.navigation__item}>
          <NavLink
            to={`/subscribe/`}
            className={({ isActive, isPending }) =>
              isPending
                ? `${classes.navigation__link} ${classes.navigation__link_state_pending}`
                : isActive
                ? `${classes.navigation__link} ${classes.navigation__link_state_active}`
                : `${classes.navigation__link}`
            }
          >
            Subscribe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
