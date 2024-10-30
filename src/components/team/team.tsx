import * as React from "react";
import Slider from "react-slick";

import classes from "./team.module.css";
import { Title } from "../title/title";

import JaneDoe from "./images/Avatar20.svg";
import JohnDoe from "./images/Avatar19.svg";
import JoeSmith from "./images/Avatar18.svg";
import JoahnneSmith from "./images/Vector.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Team: React.FC = () => {
  const company = [
    {
      avatar: JaneDoe,
      name: "Jane Doe",
      occupacy: "Lead Designer",
    },
    {
      avatar: JohnDoe,
      name: "John Doe",
      occupacy: "CEO",
    },
    {
      avatar: JoahnneSmith,
      name: "Joahnne Smith",
      occupacy: "Staff Manager",
    },
    {
      avatar: JoeSmith,
      name: "Joe Smith",
      occupacy: "Lead Developer",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: classes.team__slider,
    accessibility: false,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className={classes.team}>
      <Title>Our team</Title>

      <Slider {...settings}>
        {company.map((teammate, index) => {
          return (
            <div>
              <div key={index} className={classes.team__slide}>
                <div className={classes.team__avatar}>
                  <img src={teammate.avatar} alt="" />
                </div>
                <h4>{teammate.name}</h4>
                <span>{teammate.occupacy}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
