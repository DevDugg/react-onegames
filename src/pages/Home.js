// IMPORT MODULES
import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing components
import Header from "../components/Header";
import Grid from "../components/Grid";

import Loader from "../components/Loader";

// AUTH
import { auth } from "../auth";

const Home = () => {
  // API
  const [pageSize, setPageSize] = useState(20);
  const [loading, setLoading] = useState(false);
  const [apiData1, setApiData1] = useState();
  const [apiData2, setApiData2] = useState();
  const [apiData3, setApiData3] = useState();
  const [apiData4, setApiData4] = useState();

  // Get the date
  const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
      return `0${month}`;
    } else {
      return month;
    }
  };

  const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
      return `0${day}`;
    } else {
      return day;
    }
  };

  // Current day month and year
  const currentYear = new Date().getFullYear();
  const currentMont = getCurrentMonth();
  const currentDay = getCurrentDay();
  const currentDate = `${currentYear}-${currentMont}-${currentDay}`;
  const lastYear = `${currentYear - 10}-${currentMont}-${currentDay}`;

  // Base link
  const base_url = "https://api.rawg.io/api/";

  // Key
  const authKey = auth;

  // Popular games
  const popular_games = `games?key=${authKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=${pageSize}`;

  // Popular games URL
  const popularGamesURL = `${base_url}${popular_games}`;

  const fetchData = (link1, link2, link3, link4) => {
    setLoading(true);
    axios
      .get(link1)
      .then((data) => {
        setLoading(false);
        setApiData1(data.data.results);
      })
      .catch((err) => console.log(err));

    axios
      .get(link2)
      .then((data) => {
        setApiData2(data.data.results);
      })
      .catch((err) => console.log(err));

    axios
      .get(link3)
      .then((data) => {
        setApiData3(data.data.results);
      })
      .catch((err) => console.log(err));

    axios
      .get(link4)
      .then((data) => {
        setApiData4(data.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData(
      popularGamesURL + "&page=1",
      popularGamesURL + "&page=2",
      popularGamesURL + "&page=3",
      popularGamesURL + "&page=4"
    );
  }, [popularGamesURL]);

  // ================================

  const [grid, setGrid] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <Header setGrid={setGrid} grid={grid} />
      {!apiData1 ? (
        <Loader width={"20rem"} height={"20rem"} />
      ) : (
        <Grid grid={grid} data={[apiData1, apiData2, apiData3, apiData4]} />
      )}

      <div className="more">
        <button
          type="button"
          onClick={() => {
            setPageSize(pageSize + 5);
            fetchData(
              popularGamesURL + "&page=1",
              popularGamesURL + "&page=2",
              popularGamesURL + "&page=3",
              popularGamesURL + "&page=4"
            );
          }}
        >
          {loading ? <Loader width={"5rem"} height={"5rem"} /> : "More"}
        </button>
      </div>
    </div>
  );
};

export default Home;
