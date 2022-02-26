import "./index.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useContextValue } from "../../context/appContext";
import { useCallback } from "react";
import { weatherIconUrl, BASE_URL } from "../../shared/constants/BASE_URL";
import {
  celsiusSign,
  favoriteDay,
  humidity,
  sunrise,
  sunset
} from "../../shared/constants/constantStrings";
import LoadingPage from "../../components/LoadingPage/index";
import Animation from "../../components/Animation/index";
import { convertToDayInWeek } from "../../shared/helpers/dayInWeekConverter";
import {
  convertToSunRiseTime,
  convertoToSunsetTime
} from "../../shared/helpers/sunRiseTimeConverter";

const DailyWeatherReport = () => {
  const searchKey = localStorage.getItem("searchKey");
  const { weeklyDataList } = useContextValue();
  const dayDetail = weeklyDataList ? weeklyDataList[searchKey] : "";
  const dayInWeek = convertToDayInWeek(dayDetail.dt);
  const sunriseTime = convertToSunRiseTime(dayDetail.sunrise);
  const sunsetTime = convertoToSunsetTime(dayDetail.sunset);
  const history = useHistory();

  const addFavDates = async (dt, picture_code, min_temp, max_temp) => {
    await axios
      .post(`${BASE_URL}weatherData/saved_fav_days`, {
        dt: dt,
        picture_code: picture_code,
        min_temp: min_temp,
        max_temp: max_temp
      })
      .then((res) => res.data)
      .catch((err) => new Error());
  };

  const onClick = useCallback(() => {
    addFavDates(
      dayDetail.dt,
      dayDetail.weather[0].icon,
      dayDetail.temp.min,
      dayDetail.temp.max
    );
  }, [dayDetail]);

  return (
    <div className="DailyWeatherReport">
      {weeklyDataList ? (
        <button onClick={() => history.push("/")}>
          <h2>{dayInWeek}</h2>
          <img
            className="weekly_list_img"
            src={`${weatherIconUrl}/${dayDetail.weather[0].icon}@2x.png`}
            alt=""
          />
          <h4>{dayDetail.weather[0].main}</h4>
          <p>{dayDetail.weather[0].description}</p>
          <p className="max_temp">{`${dayDetail.temp.max} ${celsiusSign}`}</p>
          <p className="min_temp">{`${dayDetail.temp.min} ${celsiusSign}`}</p>
          <div className="day_detail_description">
            <p>{`${humidity} ${dayDetail.humidity}`}</p>
            <p>{`${sunrise} ${sunriseTime}`}</p>
            <p>{`${sunset} ${sunsetTime}`}</p>
          </div>
        </button>
      ) : (
        <LoadingPage />
      )}
      <div>
        {weeklyDataList ? (
          <button className="like_button" onClick={onClick}>
            {favoriteDay}
          </button>
        ) : (
          ""
        )}
      </div>
      <div>{weeklyDataList ? <Animation /> : ""}</div>
    </div>
  );
};

export default DailyWeatherReport;
