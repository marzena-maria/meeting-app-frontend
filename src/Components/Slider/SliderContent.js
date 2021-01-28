import React,{useState} from "react";
import images from "./Helpers/Images";
import   "../Slider/SliderContent.scss"


function SliderContent() {

 const [currImg, setCurrImg] = useState(0);

  return (
    <div
      className="sliderContent"
      style={{ backgroundImage: `url(${images[currImg].img})` }}
    >
      
      <div
        className="left"
        onClick={() => {
          currImg > 0 && setCurrImg(currImg - 1);
        }}
      >
          {"<"}
        {/* <ArrowBackIosIcon style={{ fontSize: 30 }} /> */}
      </div>

      <div className="center">
        <h1>{images[currImg].title}</h1>
        <button >{images[currImg].button}</button>
        <p>{images[currImg].subtitle}</p>
      </div>

      <div
        className="right"
        onClick={() => {
          currImg < images.length - 1 && setCurrImg(currImg + 1);
        }}
      >
          {">"}
        {/* <ArrowForwardIosIcon style={{ fontSize: 30 }} /> */}
      </div>
    </div>
  );
}

export default SliderContent;
