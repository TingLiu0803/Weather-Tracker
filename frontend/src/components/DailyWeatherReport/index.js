import "./index.css";
import { useHistory } from "react-router-dom";
import { useContextValue } from "../../context/appContext";
import { weatherIconUrl } from "../../shared/constants/BASE_URL";
import {
  celsiusSign,
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
  return (
    <div className="DailyWeatherReport">
      {weeklyDataList ? (
        <button onClick={() => history.push("./")}>
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
      <div>{weeklyDataList ? <Animation /> : ""}</div>
    </div>
  );
};

export default DailyWeatherReport;
