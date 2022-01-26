// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Breadcrumb";
import Grid from "../components/Grid";
import ImageSlider from "../components/ImageSlider";

// IMPORT IMAGES
import Video from "../images/game-video.jpg";
import Img_1 from "../images/game-img-1.jpg";
import Img_2 from "../images/game-img-2.jpg";
import Img_3 from "../images/game-img-3.jpg";
import Img_4 from "../images/game-img-4.jpg";

const GameDescription = () => {
  const images = [
    Img_1,
    Img_2,
    Img_3,
    Img_4,
    Img_1,
    Img_2,
    Img_3,
    Img_4,
    Img_1,
    Img_2,
    Img_3,
    Img_4,
  ];
  const [isActiveSlider, setIsActiveSlider] = useState(false);
  const [activeImageId, setActiveImageId] = useState(0);

  useEffect(() => {
    if (isActiveSlider) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isActiveSlider]);

  return (
    <section className="game-desc">
      <ImageSlider
        images={images}
        activeImageId={activeImageId}
        isActiveSlider={isActiveSlider}
        setIsActiveSlider={setIsActiveSlider}
      />
      <div className="bg"></div>
      <div className="container">
        <div className="game-desc-inner">
          <div className="game-info">
            <div className="game-info__left__top">
              <Breadcrumb
                linkTitles={["the last of us part ii"]}
                linkTargets={["/game"]}
              />
              <div className="game-info__left-meta">
                <h3 className="release">june 19, 2020</h3>
                <h4 className="score">95</h4>
              </div>
              <h1 className="game-name">The last of us part ii</h1>
            </div>
            <div className="game-info__left__middle">
              <h3>About</h3>
              <h5 className="game-about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                etiam dignissim diam quis enim lobortis scelerisque fermentum
                dui faucibus in ornare quam viverrah
              </h5>
            </div>
            <div className="game-info__left__bottom">
              <div className="game-char-block plat-block">
                <h6>Platforms</h6>
                <ul>
                  <li>
                    <h3>PlayStation 4</h3>
                  </li>
                  <li>
                    <h3>PlayStation 5</h3>
                  </li>
                </ul>
              </div>
              <div className="game-char-block release-block">
                <h6>Release Date</h6>
                <ul>
                  <li>
                    <h3>june 19, 2020</h3>
                  </li>
                </ul>
              </div>
              <div className="game-char-block score-block">
                <h6>Rating</h6>
                <ul>
                  <li>
                    <h4 className="score">95</h4>
                  </li>
                </ul>
              </div>
              <div className="game-char-block genre-block">
                <h6>Genre</h6>
                <ul>
                  <li>
                    <h3>Action</h3>
                  </li>
                  <li>
                    <h3>Shooter</h3>
                  </li>
                  <li>
                    <h3>Adventure</h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="game-images">
              <div className="game-video">
                <img src={Video} alt="game" />
              </div>
              <div className="game-img-block">
                <div className="game-img">
                  <img
                    src={Img_1}
                    alt="screen 1"
                    onClick={() => {
                      setIsActiveSlider(true);
                      setActiveImageId(0);
                    }}
                  />
                </div>
                <div className="game-img">
                  <img
                    src={Img_2}
                    alt="screen 2"
                    onClick={() => {
                      setIsActiveSlider(true);
                      setActiveImageId(1);
                    }}
                  />
                </div>
                <div className="game-img">
                  <img
                    src={Img_3}
                    alt="screen 3"
                    onClick={() => {
                      setIsActiveSlider(true);
                      setActiveImageId(2);
                    }}
                  />
                </div>
                <div className="game-img">
                  <img
                    src={Img_4}
                    alt="screen 4"
                    onClick={() => {
                      setIsActiveSlider(true);
                      setActiveImageId(3);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="game-desc-inner-2">
          <h2 className="game-desc-title">Games like The last of us part II</h2>
          <Grid grid={true} />
        </div>
      </div>
    </section>
  );
};

export default GameDescription;
