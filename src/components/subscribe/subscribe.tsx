import * as React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../buttons/buttons";

import classes from "./subscribe.module.css";

const Subscribe = () => {
  const [selectedApp, setSelectedApp]: any[] = React.useState();
  const navigate = useNavigate();

  return (
    <form action="" className={classes.subscribe}>
      <h1>Leave you information</h1>
      <p>Select your preferred method</p>
      <fieldset className={classes.subscribe__fieldset}>
        <input
          className={`${classes.subscribe__button} ${classes.subscribe__button_type_telegram}`}
          type="radio"
          id="telegram"
          name="app"
          value="telegram"
          onChange={(e) => setSelectedApp(e.target.value)}
        />
        <input
          className={`${classes.subscribe__button} ${classes.subscribe__button_type_whatsapp}`}
          type="radio"
          id="whatsapp"
          name="app"
          value="whatsapp"
          onChange={(e) => setSelectedApp(e.target.value)}
        />
      </fieldset>
      {selectedApp ? (
        <input
          className={classes.subscribe__address}
          type="text"
          placeholder="Write you account name here"
        />
      ) : (
        ""
      )}
      <Button type="submit">Inform me about the news</Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          navigate("/features");
        }}
        type="reset"
      >
        I want to see some features first
      </Button>
    </form>
  );
};

export default Subscribe;
