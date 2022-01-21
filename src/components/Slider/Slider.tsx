import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import { SliderProp } from "../interfaces/interfaces";

export default function Slider(props: SliderProp) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== props?.recipes.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === props?.recipes.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(props?.recipes.length);
    }
  };

  const moveDot = (index: any) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {props?.recipes.map((obj: any, index: any) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <div className="slider-title">
              <h1>{obj.title}</h1>
            </div>
            <div className="slider-description">
              <h4>{obj.duration}</h4>
              <p>{obj.instruction}</p>
            </div>
            <img src={obj.image} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: props?.recipes.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
