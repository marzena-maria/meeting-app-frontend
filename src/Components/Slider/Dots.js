import React from "react";
import Images from "./Helpers/Images";
import "./Slider.scss"

function Dots(props) {
  return (
    <div className="all-dots">
      {Images.map((slide, index) => (
        <span
          key={index}
          className={`${
            props.activeIndex === index ? "dot active-dot" : "dot"
          }`}
          onClick={(e) => props.onclick((e.target.value = index))}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
