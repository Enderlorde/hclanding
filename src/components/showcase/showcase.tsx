import * as React from "react";
import { motion } from "framer-motion";

import Mobile from "./images/mobile.png";
import Tablet from "./images/tablet.png";
import Desktop from "./images/desktop.png";

import classes from "./showcase.module.css";

const Showcase = () => {
  const [currentDevice, setDevice] = React.useState(Desktop);

  return (
    <div className={classes.showcase}>
      <div className={classes.showcase__wrapper}>
        <div className={classes.showcase__window}>
          <img src={currentDevice} alt="" className={classes.showcase__image} />
        </div>

        <ul className={classes.showcase__switcher}>
          <li
            className={`${classes.showcase__switch} ${classes.showcase__switch_color_red}`}
          ></li>
          <li
            className={`${classes.showcase__switch} ${classes.showcase__switch_color_green}`}
          ></li>
          <li
            className={`${classes.showcase__switch} ${classes.showcase__switch_color_blue}`}
          ></li>
          <li
            className={`${classes.showcase__switch} ${classes.showcase__switch_color_yellow}`}
          ></li>
        </ul>
      </div>

      <ul className={classes.showcase__devices}>
        <motion.li
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
          onClick={() => setDevice(Mobile)}
          className={`${classes.showcase__device} ${classes.showcase__device_mobile}`}
        >
          <img src={Mobile} alt="" className={classes.showcase__deviceIcon} />
        </motion.li>

        <motion.li
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
          onClick={() => setDevice(Tablet)}
          className={`${classes.showcase__device} ${classes.showcase__device_tablet}`}
        >
          <img src={Tablet} alt="" className={classes.showcase__deviceIcon} />
        </motion.li>

        <motion.li
          whileHover={{ scale: [null, 1.2, 1.1] }}
          transition={{ duration: 0.3 }}
          onClick={() => setDevice(Desktop)}
          className={`${classes.showcase__device} ${classes.showcase__device_desktop}`}
        >
          <img src={Desktop} alt="" className={classes.showcase__deviceIcon} />
        </motion.li>
      </ul>
    </div>
  );
};

export default Showcase;
