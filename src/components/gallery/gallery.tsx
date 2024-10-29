import * as React from "react";
import Slider from "react-slick";

import Community from "./images/Community.png";
import Frontend from "./images/Frontend.png";
import Profile from "./images/Profile.png";
import Python from "./images/Python.png";
import Specialist from "./images/Specialists.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./gallery.module.css";

export const Gallery = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: classes.gallery__slider,
    accessibility: false,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className={classes.gallery}>
      <Slider {...settings}>
        <div className={classes.gallery__card}>
          <img src={Community} alt="" />
        </div>

        <div className={classes.gallery__card}>
          <img src={Profile} alt="" />
        </div>

        <div className={classes.gallery__card}>
          <img src={Specialist} alt="" />
        </div>
        <div className={classes.gallery__card}>
          <img src={Frontend} alt="" />
        </div>
        <div className={classes.gallery__card}>
          <img src={Python} alt="" />
        </div>
      </Slider>
    </div>
  );
};
