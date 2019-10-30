import React, { useState, useEffect } from "react";
import Current from "./Current";
import Forecast from "./Forecast";

const App = () => {
  const APPID = "988033fdda81ccb3fa6a02cb6dab9c85";
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const getLocation = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getTemp = async coords => {};
  const getHourlyTemp = async coords => {};

  const getAll = async () => {
    try {
      const { coords } = await getLocation();
      await getTemp(coords);
      await getHourlyTemp(coords);
    } catch (error) {
      alert("위치 제발 동의해주세요ㅠㅠ");
    }
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <header>
        <h1>일기예보</h1>
      </header>
      <main>
        <Current />
        <Forecast />
      </main>
    </>
  );
};

export default App;
