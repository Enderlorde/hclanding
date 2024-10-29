import * as React from "react";
import { createRoot } from "react-dom/client";

import { Banner } from "./components/banner/banner";
import { Highlight } from "./components/highlight/highlight";
import Band from "./components/band/band";

import classes from "./app.module.css";
import { Partners } from "./components/partners/partners";
import { InTouch } from "./components/inTouch/inTouch";

const App = () => {
  return (
    <div className={classes.app}>
      <Band />
      <div
        className={`${classes.app__wrapper} ${classes.app__wrapper_type_banner}`}
      >
        <Banner />
      </div>
      <div className={`${classes.app__wrapper}`}>
        <Partners />
      </div>
      <div
        className={`${classes.app__wrapper} ${classes.app__wrapper_type_highlight}`}
      >
        <Highlight />
      </div>

      <div
        className={`${classes.app__wrapper} ${classes.app__wrapper_type_inTouch}`}
      >
        <InTouch />
      </div>
      <div
        className={`${classes.app__wrapper} ${classes.app__wrapper_type_footer}`}
      ></div>
    </div>
  );
};

const rootElement = document.querySelector("#root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  alert("Cannot find root element");
  console.error("Cannot find root element");
}
