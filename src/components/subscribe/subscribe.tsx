import * as React from "react";

import Button from "../buttons/buttons";

import classes from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <form action="" className={classes.subscribe}>
      <input type="text" />
      <Button>Subscribe me</Button>
    </form>
  );
};

export default Subscribe;
