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
        Our platform may surprise you with its wide functionality, but there are
        basics we rely on.
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
            <h3>Large database of tasks</h3>
            <p>
              Challenges created by experienced users of our platform and large
              companies reflect relevant industry issues.
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
            <h3>Large list of programming languages.</h3>
            <p>
              Users are provided with a wide selection of languages to practice
              approaches and find new ones.
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
            <h3>Gamification.</h3>
            <p>
              Tournaments and competitions make learning more exciting and
              motivating
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
            <h3>Feedback and discussions.</h3>
            <p>
              Discussing issues with the community helps to better understand
              the material and find solutions to non-standard problems.
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
            <h3>Real tasks.</h3>
            <p>
              Tests based on real cases allow users to prepare for technical
              interviews.
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
            <h3>Adaptive progression system.</h3>
            <p>Tasks for users are selected based on their experience.</p>
          </div>
          <div className={`${classes.features__icon}`}>
            <Chat />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
