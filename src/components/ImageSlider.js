// IMPORT MODULES
import React, { useEffect, useRef } from "react";

const ImageSlider = ({ images, activeImageId, setActiveImageId }) => {
  return (
    <section className="slider">
      <div className="slider-container">
        <div className="slider-inner">
          <div className="slider__top">
            <div className="quit">
              <div className="before"></div>
              <div className="after"></div>
            </div>
          </div>
          <div className="slider__middle">
            {images.map((image, i) => {
              return (
                <div data-key={i} key={i} className="slider-img">
                  <img src={image} alt={image} />
                </div>
              );
            })}
          </div>
          <div className="slider__bottom">
            <div className="slider__bottom-inner">
              {images.map((image, i) => {
                return (
                  <div data-active={i} key={i} className="slider-img-bottom">
                    <img src={image} alt={image} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
