import React,{useState} from "react";
import Images from "./Helpers/Images";
// import   "../Slider/SliderContent.scss"
import { Link } from "react-router-dom";



function SliderContent(props) {
  return (
    <section>
      {Images.map((slide,index)=>(
        <div className={index === props.activeIndex ? "slides active" : "inactive" }>
          <img className="slide-image" src={slide.img} alt="" />
          <h3 className="slide-title">{slide.title}</h3>
          <Link className="slide-link" to={slide.link}>{slide.button}</Link>
          <p className="slide-subtitle">{slide.subtitle}</p>
        </div>
      )
      )}
    </section>
  )
}

export default SliderContent


// function SliderContent() {

// //  const [currImg, setCurrImg] = useState(0);

//   return (
//     <div
//       className="sliderContent"
      
//     >
// {/*       
//       <div
//         className="left"
//         onClick={() => {
//           currImg > 0 && setCurrImg(currImg - 1);
//         }}
//       >
//           {"<"}
//         {/* <ArrowBackIosIcon style={{ fontSize: 30 }} /> */}
//       </div>

//       <div className="center">
//         <h1>{images[currImg].title}</h1>
//         <button >{images[currImg].button}</button>
//         <p>{images[currImg].subtitle}</p>
//       </div>

//       <div
//         className="right"
//         onClick={() => {
//           currImg < images.length - 1 && setCurrImg(currImg + 1);
//         }}
//       >
//           {">"}
//         {/* <ArrowForwardIosIcon style={{ fontSize: 30 }} /> */}
//       </div> */}
//     </div>
//   );
// }

// export default SliderContent;
