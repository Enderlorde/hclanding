import * as React from "react";

import classes from "./prices.module.css";
import { Title } from "../title/title";
import { Toggle } from "../toggle/toggle";

export const Prices: React.FC<{}> = () => {
  const [selected, setSelected] = React.useState();
  const [period, setPeriod] = React.useState("montly");

  const chooseHandler = function (index) {
    setSelected(index);
    document.getElementById("intouch").scrollIntoView();
  };

  const plans = [
    {
      price: { montly: 0, yearly: 0 },
      title: "Free",
      message: "Lorem ipsum dolor sit amet consectetur.",
      points: [
        "Lorem ipsum dolor sit amet.",
        "Quod molestiae nobis nam voluptatum!",
        "Vitae labore non veritatis fugit.",
        "Itaque culpa consequatur eveniet et.",
        "Dolores ducimus cupiditate deleniti cum!",
      ],
    },
    {
      price: { montly: 20, yearly: 200 },
      title: "Base",
      message: "Lorem ipsum dolor sit amet consectetur.",
      points: [
        "Lorem ipsum dolor sit amet.",
        "Quod molestiae nobis nam voluptatum!",
        "Vitae labore non veritatis fugit.",
        "Itaque culpa consequatur eveniet et.",
        "Dolores ducimus cupiditate deleniti cum!",
      ],
    },
    {
      price: { montly: 100, yearly: 999 },
      title: "Premium",
      message: "Lorem ipsum dolor sit amet consectetur.",
      points: [
        "Lorem ipsum dolor sit amet.",
        "Quod molestiae nobis nam voluptatum!",
        "Vitae labore non veritatis fugit.",
        "Itaque culpa consequatur eveniet et.",
        "Dolores ducimus cupiditate deleniti cum!",
      ],
      bonus: true,
    },
  ];

  const clickHandler = function (e) {
    setPeriod(e);
  };

  return (
    <div className={classes.prices}>
      <Title>Pricing</Title>

      <p>Our plans prices</p>

      <Toggle current={period} onclick={clickHandler} />

      <ul className={classes.prices__list}>
        {plans.map((plan, index) => {
          const element = (
            <li
              key={index}
              className={`${classes.prices__price} ${classes.price} ${
                selected === index ? classes.price_state_active : ""
              }`}
            >
              <span
                className={`${classes.price__value}  ${
                  period == "montly"
                    ? classes.price__value_style_montly
                    : classes.price__value_style_yearly
                } ${plan.bonus ? classes.price__value_style_free : ""}`}
              >
                ${plan.price[period]}
              </span>

              <h5 className={`${classes.price__title}`}>${plan.title}</h5>

              <p className={`${classes.price__message}`}>{plan.message}</p>

              <ul className={`${classes.price__points}`}>
                {plan.points.map((point, index) => {
                  return (
                    <li key={index} className={`${classes.price__point}`}>
                      {point}
                    </li>
                  );
                })}
              </ul>

              <button
                onClick={() => chooseHandler(index)}
                className={`${classes.price__button}`}
              >
                Choose
              </button>
            </li>
          );
          return element;
        })}
      </ul>
    </div>
  );
};
