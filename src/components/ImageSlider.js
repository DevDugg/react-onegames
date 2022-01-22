// IMPORT MODULES
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
// IMPORT SWIPER STYLES
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// INSTALL SWIPER MODULES
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ImageSlider = ({ images, activeImageId, setActiveImageId }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper2"
            >
              {images.map((image, i) => {
                return (
                  <SwiperSlide data-key={i} key={i} className="slider-img">
                    <img src={image} alt={image} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="slider__bottom">
            {/* <div className="slider__bottom-inner"> */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={12}
              freeMode={true}
              watchSlidesProgress={true}
              className="mySwiper"
            >
              {images.map((image, i) => {
                return (
                  <SwiperSlide
                    data-active={i}
                    key={i}
                    className="slider-img-bottom"
                  >
                    <img src={image} alt={image} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
