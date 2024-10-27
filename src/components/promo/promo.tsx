import * as React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../buttons/buttons";
import Showcase from "../showcase/showcase";

import classes from "./promo.module.css";

const Promo = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.promo}>
      <div className={classes.promo__info}>
        <h1>
          Perfect moment to reserve a place in the amazing community for geeks
        </h1>

        <span>
          First 1000 users will get full acces to our platform for free
        </span>

        <Button
          onClick={(e) => {
            navigate("/subscribe/");
          }}
        >
          Subscribe
        </Button>
      </div>
      <Showcase />
    </div>
  );
};

export default Promo;
