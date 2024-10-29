import * as React from "react";

import classes from "./inTouch.module.css";
import { Title } from "../title/title";

export const InTouch: React.FC<{}> = () => {
  const [app, setApp]: any[] = React.useState();

  return (
    <div className={classes.inTouch}>
      <Title>Contact us</Title>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
        corrupti quae omnis earum voluptas!
      </p>

      <div
        className={`${classes.selector} ${
          app
            ? app == "tg"
              ? classes.selector_selected_telegram
              : app == "wa"
              ? classes.selector_selected_whatsapp
              : ""
            : ""
        }`}
      >
        <div className={classes.selector__wrapper}>
          <button
            onClick={() => setApp("tg")}
            className={`${classes.selector__button} ${classes.selector__button_halfround} ${classes.selector__button_halfround_left} ${classes.selector__button_type_telegram}`}
          ></button>
          <button
            onClick={() => setApp("wa")}
            className={`${classes.selector__button} ${classes.selector__button_halfround} ${classes.selector__button_halfround_right} ${classes.selector__button_type_whatsapp}`}
          ></button>
        </div>

        <form className={classes.selector__form}>
          <input className={classes.selector__input} type="text" />
          <button
            className={`${classes.selector__button} ${classes.selector__button_type_submit}`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
