// IMPORT MODULES
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// IMPORT CUSTOM HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

// IMPORT SWIPER STYLES
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// INSTALL SWIPER MODULES
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ImageSlider = ({ images, activeImageId, setActiveImageId }) => {
  // SWIPER STATE
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // ====================

  // SHIT CODE
  const m1530 = useMediaQuery("(min-width: 1530px)");
  const m1410 = useMediaQuery("(min-width: 1410px)");
  const m1270 = useMediaQuery("(min-width: 1270px)");
  const m1130 = useMediaQuery("(min-width: 1130px)");
  const m990 = useMediaQuery("(min-width: 990px)");
  const m850 = useMediaQuery("(min-width: 850px)");
  const m710 = useMediaQuery("(min-width: 710px)");
  const m590 = useMediaQuery("(min-width: 590px)");
  const m430 = useMediaQuery("(min-width: 430px)");
  // ===================
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
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={16}
              slidesPerView={
                // ANOTHER SHIT CODE
                m1530
                  ? 10
                  : m1410
                  ? 9
                  : m1270
                  ? 8
                  : m1130
                  ? 7
                  : m990
                  ? 6
                  : m850
                  ? 5
                  : m710
                  ? 4
                  : m590
                  ? 3
                  : m430
                  ? 2
                  : 3
                // ================
              }
              freeMode={true}
              watchSlidesProgress={true}
              className="mySwiper"
            >
              {images.map((image, i) => {
                return (
                  <SwiperSlide data-active={i} key={i}>
                    <div className="slider-img-bottom">
                      <img src={image} alt={image} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
