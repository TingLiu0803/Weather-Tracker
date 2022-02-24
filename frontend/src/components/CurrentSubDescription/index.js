import "./index.css";
import { celsiusSign, feelsLike, humidity, mph, weather, wind } from "../../shared/constants/constantStrings";

// the child component of WeeklyWeatherReport
const CurrentSubDescription = ({ currentWeatherData }) => {
  return (
    <div className="CurrentSubDescription">
      <p className="description">{`${weather} ${currentWeatherData.weather[0].description}`}</p>
      <p className="description">{`${humidity} ${currentWeatherData.humidity}`}%</p>
      <p className="description">{`${wind} ${currentWeatherData.wind_speed} ${mph}`}</p>
      <p className="description">{`${feelsLike} ${currentWeatherData.feels_like} ${celsiusSign}`}</p>
    </div>
  );
};

export default CurrentSubDescription;
