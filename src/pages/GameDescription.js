// IMPORT MODULES
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Breadcrumb";
import Grid from "../components/Grid";
import ImageSlider from "../components/ImageSlider";
// import Skeleton from "../components/Skeleton";

const GameDescription = () => {
    const gameId = useParams();

    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState();

    const [gameVideo, setGameVideo] = useState();
    const [videoLoaded, setVideoLoaded] = useState(false);

    const [gameScreens, setGameScreens] = useState();
    const [imgLoaded, setImgLoaded] = useState(false);

    const [isActiveSlider, setIsActiveSlider] = useState(false);
    const [activeImageId, setActiveImageId] = useState(0);

    // API
    useEffect(() => {
        const url = "https://api.rawg.io/api/games/senuas-saga-hellblade-ii";
        const imgUrl = `https://api.rawg.io/api/games/senuas-saga-hellblade-ii/screenshots`;
        const trailerUrl = `https://api.rawg.io/api/games/senuas-saga-hellblade-ii/movies`;
        const authKey = "20d39cf47c3f4163b64e141b002c2db3";
        const makeRequest = (url, imgUrl, trailerUrl) => {
            axios
                .get(url + "?key=" + authKey)
                .then((res) => {
                    setApiData(res.data);
                    setIsLoaded(true);
                })
                .catch((err) => {
                    console.log(err);
                });
            axios
                .get(imgUrl + "?key=" + authKey)
                .then((res) => {
                    setGameScreens(res.data.results);
                    setImgLoaded(true);
                })
                .catch((err) => {
                    console.log(err);
                });

            axios
                .get(trailerUrl + "?key=" + authKey)
                .then((res) => {
                    setGameVideo(res.data.results);
                    setVideoLoaded(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        makeRequest(url, imgUrl, trailerUrl);
    }, [isLoaded, imgLoaded, videoLoaded]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (isActiveSlider) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [isActiveSlider]);

    return (
        <section className="game-desc">
            <ImageSlider
                images={imgLoaded ? gameScreens : []}
                activeImageId={activeImageId}
                isActiveSlider={isActiveSlider}
                setIsActiveSlider={setIsActiveSlider}
            />
            <div
                className="bg"
                style={
                    isLoaded
                        ? {
                              background: `linear-gradient(360deg,#151515 3.11%,rgba(21, 21, 21, 0.33) 100%),url(${apiData.background_image})`,
                              backgroundClip: "border-box",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                          }
                        : {}
                }
            ></div>
            <div className="container">
                <div className="game-desc-inner">
                    <div className="game-info">
                        <div className="game-info__left__top">
                            <Breadcrumb
                                linkTitles={isLoaded ? [apiData.name] : [""]}
                                linkTargets={[`/game/${gameId.id}`]}
                            />
                            <div className="game-info__left-meta">
                                <h3 className="release">
                                    {isLoaded ? apiData.released : ""}
                                </h3>
                                {isLoaded ? (
                                    apiData.metacritic ? (
                                        <h4 className="score">
                                            {apiData.metacritic}
                                        </h4>
                                    ) : (
                                        ""
                                    )
                                ) : (
                                    ""
                                )}
                            </div>
                            <h1 className="game-name">
                                {isLoaded ? apiData.name : ""}
                            </h1>
                        </div>
                        <div className="game-info__left__middle">
                            <h3>About</h3>
                            <h5 className="game-about">
                                {isLoaded ? apiData.description_raw : ""}
                            </h5>
                        </div>
                        <div className="game-info__left__bottom">
                            <div className="game-char-block plat-block">
                                <h6>Platforms</h6>
                                <ul>
                                    {isLoaded
                                        ? apiData.platforms.map((el, i) => (
                                              <li key={i}>
                                                  <h3>{el.platform.name}</h3>
                                              </li>
                                          ))
                                        : ""}
                                </ul>
                            </div>
                            <div className="game-char-block release-block">
                                <h6>Release Date</h6>
                                <ul>
                                    <li>
                                        <h3>
                                            {isLoaded ? apiData.released : ""}
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                            {isLoaded ? (
                                apiData.metacritic ? (
                                    <div className="game-char-block score-block">
                                        <h6>Rating</h6>
                                        <ul>
                                            <li>
                                                {isLoaded ? (
                                                    apiData.metacritic ? (
                                                        <h4 className="score">
                                                            {apiData.metacritic}
                                                        </h4>
                                                    ) : (
                                                        ""
                                                    )
                                                ) : (
                                                    ""
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                ) : null
                            ) : null}

                            <div className="game-char-block genre-block">
                                <h6>Genre</h6>

                                <ul>
                                    {isLoaded
                                        ? apiData.genres.map((el, i) => (
                                              <li key={i}>
                                                  <h3>{el.name}</h3>
                                              </li>
                                          ))
                                        : ""}
                                </ul>
                            </div>
                        </div>
                        <div className="game-images">
                            {videoLoaded & imgLoaded ? (
                                gameVideo[0] ? (
                                    <div className="game-video">
                                        <video src={gameVideo} autoPlay muted />
                                    </div>
                                ) : (
                                    <div className="game-video">
                                        <img
                                            src={gameScreens[0].image}
                                            style={{ objectFit: "cover" }}
                                            alt={gameScreens[0].id}
                                        />
                                    </div>
                                )
                            ) : (
                                ""
                            )}
                            <div className="game-img-block">
                                {imgLoaded
                                    ? gameScreens.map((el, i) => {
                                          if (i < 7) {
                                              return (
                                                  <div
                                                      key={el.id}
                                                      className="game-img"
                                                      onClick={() => {
                                                          setIsActiveSlider(
                                                              true
                                                          );
                                                          setActiveImageId(i);
                                                      }}
                                                  >
                                                      <img
                                                          src={el.image}
                                                          alt={el.id}
                                                      />
                                                  </div>
                                              );
                                          } else return "";
                                      })
                                    : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-desc-inner-2">
                    <h2 className="game-desc-title">
                        Games like The last of us part II
                    </h2>
                    {/* <Grid grid={true} /> */}
                </div>
            </div>
        </section>
    );
};

export default GameDescription;
