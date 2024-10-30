import * as React from "react";
import { createRoot } from "react-dom/client";

import { Banner } from "./components/banner/banner";
import { Highlight } from "./components/highlight/highlight";
import Band from "./components/band/band";

import classes from "./app.module.css";
import { Partners } from "./components/partners/partners";
import { InTouch } from "./components/inTouch/inTouch";
import { Team } from "./components/team/team";
import Header from "./components/header/header";
import { Up } from "./components/up/up";
import { Gallery } from "./components/gallery/gallery";
import { Prices } from "./components/prices/prices";

const App = () => {
  return (
    <div className={classes.app}>
      <Band />
      <Up />
      <div
        id="promo"
        className={`${classes.app__wrapper} ${classes.app__wrapper_type_banner}`}
      >
        <Header />
        <Banner />
      </div>
      <div id="partners" className={`${classes.app__wrapper}`}>
        <Partners />
      </div>
      <div
        id="features"
        className={`${classes.app__wrapper} ${classes.app__wrapper_type_highlight}`}
      >
        <Highlight />
      </div>
      <div
        id="gallery"
        className={`${classes.app__wrapper} ${classes.app__wrapper_type_screenshot}`}
      >
        <Gallery />
      </div>
      <div
        id="prices"
        className={`${classes.app__wrapper} ${classes.app__wrapper_type_prices}`}
      >
        <Prices />
      </div>
      <div id="team" className={`${classes.app__wrapper}`}>
        <Team />
      </div>

      <div
        id="intouch"
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
