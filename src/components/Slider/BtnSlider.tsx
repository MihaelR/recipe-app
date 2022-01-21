import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import { BtnSliderProp } from "../interfaces/interfaces";

export default function BtnSlider(props: BtnSliderProp) {
  return (
    <button
      onClick={props?.moveSlide}
      className={
        props?.direction === "next" ? "btn-slide next" : "btn-slide prev"
      }
    >
      <img src={props?.direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
