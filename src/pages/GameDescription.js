// IMPORT MODULES
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import axios from "axios";

// IMPORT COMPONENTS
import Breadcrumb from "../components/Breadcrumb";
// import GridRelated from "../components/GridRelated";
import ImageSlider from "../components/ImageSlider";

// AUTH
import { auth } from "../auth";

const GameDescription = () => {
  const gameId = useParams();
  const [apiData, setApiData] = useState();

  const [gameScreens, setGameScreens] = useState();

  const [isActiveSlider, setIsActiveSlider] = useState(false);
  const [activeImageId, setActiveImageId] = useState(0);

  // API
  useEffect(() => {
    const url = `https://api.rawg.io/api/games/${gameId.id}`;
    const imgUrl = `https://api.rawg.io/api/games/${gameId.id}/screenshots`;
    const authKey = auth;
    const makeRequest = (url, imgUrl) => {
      axios
        .get(url + "?key=" + authKey)
        .then((res) => {
          setApiData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(imgUrl + "?key=" + authKey)
        .then((res) => {
          setGameScreens(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    makeRequest(url, imgUrl);
  }, [gameId.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isActiveSlider) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isActiveSlider]);

  if (gameScreens) {
  }
  return (
    <section className="game-desc">
      <ImageSlider
        images={gameScreens ? gameScreens : []}
        activeImageId={activeImageId}
        isActiveSlider={isActiveSlider}
        setIsActiveSlider={setIsActiveSlider}
      />
      <div
        className="bg"
        style={
          apiData
            ? {
                backgroundImage: `linear-gradient(360deg,#151515 3.11%,rgba(21, 21, 21, 0.33) 100%),url(${apiData.background_image})`,
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
                linkTitles={apiData ? [apiData.name] : [""]}
                linkTargets={[`/game/${gameId.id}`]}
              />
              <div className="game-info__left-meta">
                <h3 className="release">{apiData ? apiData.released : ""}</h3>
                {apiData ? (
                  apiData.metacritic ? (
                    <h4
                      className={
                        apiData.metacritic >= 75
                          ? "score score-high"
                          : 50 < apiData.metacritic < 75
                          ? "score score-mid"
                          : "score score-low"
                      }
                    >
                      {apiData.metacritic}
                    </h4>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
              <h1 className="game-name">{apiData ? apiData.name : ""}</h1>
            </div>
            <div className="game-info__left__middle">
              <h3>About</h3>
              <h5 className="game-about">
                {apiData ? apiData.description_raw : ""}
              </h5>
            </div>
            <div className="game-info__left__bottom">
              <div className="game-char-block plat-block">
                <h6>Platforms</h6>
                <ul>
                  {apiData
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
                    <h3>{apiData ? apiData.released : ""}</h3>
                  </li>
                </ul>
              </div>
              {apiData ? (
                apiData.metacritic ? (
                  <div className="game-char-block score-block">
                    <h6>Rating</h6>
                    <ul>
                      <li>
                        {apiData ? (
                          apiData.metacritic ? (
                            <h4
                              className={
                                apiData.metacritic >= 75
                                  ? "score score-high"
                                  : 50 < apiData.metacritic < 75
                                  ? "score score-mid"
                                  : "score score-low"
                              }
                            >
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
                ) : (
                  ""
                )
              ) : (
                ""
              )}

              <div className="game-char-block genre-block">
                <h6>Genre</h6>

                <ul>
                  {apiData
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
              {gameScreens
                ? gameScreens.map((el, i) => {
                    if (i === 0) {
                      return (
                        <div className="game-video" key={i}>
                          <img src={el.image} alt={el.image} />
                        </div>
                      );
                    } else {
                      return "";
                    }
                  })
                : ""}
              <div className="game-img-block">
                {gameScreens
                  ? gameScreens.map((el, i) => {
                      if (i < 7) {
                        return (
                          <div
                            key={el.id}
                            className="game-img"
                            onClick={() => {
                              setIsActiveSlider(true);
                              setActiveImageId(i);
                            }}
                          >
                            <img src={el.image} alt={el.id} />
                          </div>
                        );
                      } else return "";
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDescription;
