import * as React from "react";
import { motion, Variants } from "framer-motion";
import { isMobile } from "react-device-detect";

import Chat from "./images/chat.svg?react";
import Mobile from "./images/mobile.png";

import classes from "./highlight.module.css";
import { Title } from "../title/title";

export const Highlight: React.FC<{}> = () => {
  const cardVariants: Variants = {
    offscreen_left: {
      x: -100,
      opacity: 0,
    },
    offscreen_right: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <div className={classes.highlight}>
      <Title>Features</Title>

      <p className={classes.highlight__message}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sunt illum
        veniam libero sapiente modi?
      </p>

      <div className={`${classes.highlight__features} ${classes.features}`}>
        <motion.div
          initial="offscreen_left"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className={`${classes.features__feature}`}
        >
          <div className={`${classes.features__wrapper}`}>
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              animi!
            </p>
          </div>
          <div className={`${classes.features__icon}`}>
            <Chat />
          </div>
        </motion.div>

        <motion.div
          initial="offscreen_left"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className={`${classes.features__feature}`}
        >
          <div className={`${classes.features__wrapper}`}>
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              animi!
            </p>
          </div>
          <div className={`${classes.features__icon}`}>
            <Chat />
          </div>
        </motion.div>

        <motion.div
          initial="offscreen_left"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className={`${classes.features__feature}`}
        >
          <div className={`${classes.features__wrapper}`}>
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              animi!
            </p>
          </div>

          <div className={`${classes.features__icon}`}>
            <Chat />
          </div>
        </motion.div>

        {isMobile ? (
          ""
        ) : (
          <div
            className={`${classes.features__feature} ${classes.features__feature_type_image}`}
          >
            <img src={Mobile} alt="" />
          </div>
        )}

        <motion.div
          initial="offscreen_right"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className={`${classes.features__feature} ${classes.features__feature_type_reverse}`}
        >
          <div className={`${classes.features__wrapper}`}>
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              animi!
            </p>
          </div>
          <div className={`${classes.features__icon}`}>
            <Chat />
          </div>
        </motion.div>

        <motion.div
          initial="offscreen_right"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className={`${classes.features__feature} ${classes.features__feature_type_reverse}`}
        >
          <div className={`${classes.features__wrapper}`}>
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              animi!
            </p>
          </div>
          <div className={`${classes.features__icon}`}>
            <Chat />
          </div>
        </motion.div>

        <motion.div
          initial="offscreen_right"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className={`${classes.features__feature} ${classes.features__feature_type_reverse}`}
        >
          <div className={`${classes.features__wrapper}`}>
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              animi!
            </p>
          </div>
          <div className={`${classes.features__icon}`}>
            <Chat />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
