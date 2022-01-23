// IMPORT MODULES
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// IMPORT SWIPER STYLES
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react/cjs/react.development";

// IMPORT CUSTOM HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

// INSTALL SWIPER MODULES
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ImageSlider = ({
  images,
  activeImageId,
  isActiveSlider,
  setIsActiveSlider,
}) => {
  // SWIPER STATE
  const [swiper, setSwiper] = useState(null);
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

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activeImageId);
    }
  }, [swiper, activeImageId]);

  return (
    <section className={isActiveSlider ? "slider active" : "slider"}>
      <div className="slider-container">
        <div className="slider-inner">
          <div className="slider__top">
            <div
              className="quit"
              onClick={() => {
                setIsActiveSlider(false);
              }}
            >
              <div className="before"></div>
              <div className="after"></div>
            </div>
          </div>
          <div className="slider__middle">
            <div className="slider__middle__left">
              <div className="prev">
                <div className="icons-prev"></div>
              </div>
            </div>
            <div className="slider__middle__middle">
              <div className="slider__middle__middle-inner">
                <Swiper
                  onSwiper={setSwiper}
                  spaceBetween={0}
                  navigation={{
                    nextEl: ".next",
                    prevEl: ".prev",
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  className="mySwiper2"
                >
                  {images.map((image, i) => {
                    return (
                      <SwiperSlide key={i} className="slider-img">
                        <img src={image} alt={image} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className="slider__middle__right">
              <div className="next">
                <div className="icons-next"></div>
              </div>
            </div>
          </div>
          <div className="slider__bottom">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={16}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
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
                  <SwiperSlide key={i}>
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
