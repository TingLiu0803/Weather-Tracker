import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../shared/constants/BASE_URL.js";

export const useDataApi = (param) => {
  const [weatherData, setWeatherData] = useState({});

  const fetchData = async (param) => {
    switch (param) {
      case "weatherData":
        await axios
          .get(`${BASE_URL}weatherData`)
          .then((res) => setWeatherData(res.data.weeklyWeatherData))
          .catch((err) => new Error());
        break;
      default:
        console.log(`Sorry, this param is invalid`);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    weatherData,
    setWeatherData
  };
};
