import React, { useState } from "react";


const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    
    <div className="carousel" style={{gridArea:"1 / 1 / 2 / span 4"}}>
      {/* Previous button */}
      <a onClick={prevSlide} className="carousel__btn carousel__btn--prev"  style={{cursor:"pointer",position:"absolute",top:"50%",
        width:"auto",marginTop:"-172px",padding:"16px",color:"white",fontWeight:"bold",fontSize:"18px",
        transition:"0.6s ease",borderRadius:"0 3px 3px 0",userSelect:"none"}}>
        &lt;
      </a>

      {/* Image container */}
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"  style={{width:"100%",height:"350px",overflow:"hidden",margin: 0}}
      />

      {/* Next button */}
      <a onClick={nextSlide} className="carousel__btn carousel__btn--next" style={{cursor:"pointer",position:"absolute",top:"50%",
        width:"auto",marginTop:"-172px",padding:"16px",color:"white",fontWeight:"bold",fontSize:"18px",
        transition:"0.6s ease",userSelect:"none",right:0,borderRadius:"3px 0 0 3px"}}>
        &gt;
      </a>
    </div>
  );
};

export default Carousel;

