// IMPORT MODULES
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// IMPORT CUSTOM HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

// IMPORT SWIPER STYLES
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react/cjs/react.development";

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

  useEffect(() => {
    if (swiper) {
      setTimeout(() => {
        swiper.slideTo(activeImageId);
      }, 1);
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
              breakpoints={{
                420: {
                  slidesPerView: 3,
                },
                590: {
                  slidesPerView: 4,
                },
                710: {
                  slidesPerView: 5,
                },
                850: {
                  slidesPerView: 6,
                },
                990: {
                  slidesPerView: 7,
                },
                1130: {
                  slidesPerView: 8,
                },
                1270: {
                  slidesPerView: 9,
                },
                1410: {
                  slidesPerView: 10,
                },
                1530: {
                  slidesPerView: 11,
                },
              }}
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
