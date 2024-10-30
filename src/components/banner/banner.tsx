import * as React from "react";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";

import classes from "./banner.module.css";
import Desktop from "./images/desktop.png";
import Mobile from "./images/mobile.png";

export const Banner: React.FC<{}> = () => {
  return (
    <div className={classes.banner}>
      <h1 className={classes.banner__title}>Inspiration through learning</h1>
      <p className={classes.banner__message}>
        An innovative platform that turns experience into a resource
      </p>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={classes.banner__imageWrapper}
      >
        <img src={isMobile ? Mobile : Desktop} alt="" />
      </motion.div>
    </div>
  );
};
