import "./index.css";
import { cityName, celsiusSign } from "../../shared/constants/constantStrings";
import { weatherIconUrl } from "../../shared/constants/BASE_URL";

// the child component of WeeklyWeatherReport
const CurrentWeatherInfo = ({ currentWeatherData }) => {
  return (
    <div className="CurrentWeatherInfo">
      <h1>{cityName}</h1>
      <img
        src={`${weatherIconUrl}/${currentWeatherData.weather[0].icon}@2x.png`}
        alt=""
      />
      <h2>{`${currentWeatherData.temp} ${celsiusSign}`}</h2>
    </div>
  );
};

export default CurrentWeatherInfo