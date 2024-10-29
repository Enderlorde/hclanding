import * as React from "react";

import classes from "./team.module.css";
import { Title } from "../title/title";

export const Team: React.FC = () => {
  return (
    <div className={classes.team}>
      <Title>Our team</Title>

      <ul>
        <li>
          <div className={classes.team__avatar}>
            <img src="" alt="" />
          </div>
          <h4>Haizenberg</h4>
          <span>Teacher</span>
        </li>
        <li>
          <div className={classes.team__avatar}>
            <img src="" alt="" />
          </div>
          <h4>Haizenberg</h4>
          <span>Teacher</span>
        </li>
        <li>
          <div className={classes.team__avatar}>
            <img src="" alt="" />
          </div>
          <h4>Haizenberg</h4>
          <span>Teacher</span>
        </li>
      </ul>
    </div>
  );
};
