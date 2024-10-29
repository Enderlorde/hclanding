import * as React from "react";

import classes from "./title.module.css";

export const Title = (props: any) => {
  return (
    <h2
      className={`${classes.title} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </h2>
  );
};
