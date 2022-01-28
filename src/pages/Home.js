// IMPORT MODULES
import React, { useState, useEffect } from "react";
// Importing components
import Header from "../components/Header";
import Grid from "../components/Grid";
import axios from "axios";

const Home = () => {
  // API
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
  const lastYear = `${currentYear - 1}-${currentMont}-${currentDay}`;
  const nextYear = `${currentYear + 1}-${currentMont}-${currentDay}`;

  // Base link
  const base_url = "https://api.rawg.io/api/";

  // Key
  const authKey = "20d39cf47c3f4163b64e141b002c2db3";

  // Popular games
  const popular_games = `games?key=${authKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=40`;

  // Popular games URL
  const popularGamesURL = `${base_url}${popular_games}`;

  useEffect(() => {
    const fetchData = (link1, link2, link3, link4) => {
      axios
        .get(link1)
        .then((data) => {
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

    fetchData(
      popularGamesURL + "&page=1",
      popularGamesURL + "&page=2",
      popularGamesURL + "&page=3",
      popularGamesURL + "&page=4"
    );
  }, []);

  // ================================

  const [grid, setGrid] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <Header setGrid={setGrid} grid={grid} />
      <Grid grid={grid} data={[apiData1, apiData2, apiData3, apiData4]} />
    </div>
  );
};

export default Home;
