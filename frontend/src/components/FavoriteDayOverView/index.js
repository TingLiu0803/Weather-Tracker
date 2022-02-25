import "./index.css";
import { celsiusSign } from "../../shared/constants/constantStrings";
import { weatherIconUrl } from "../../shared/constants/BASE_URL";
import { convertToFavDayInWeek } from "../../shared/helpers/sunRiseTimeConverter";

const FavoriteDayOverView = ({ dailyData }) => {
  const favDayInWeek = convertToFavDayInWeek(dailyData.dt);

  return (
    <div className="FavoriteDayOverView">
      <h3>{favDayInWeek}</h3>
      <img
        className="weekly_list_img"
        src={`${weatherIconUrl}/${dailyData.weather[0].icon}@2x.png`}
        alt=""
      />
      <p>{dailyData.weather[0].main}</p>
      <p className="max_temp">{`${dailyData.temp.max} ${celsiusSign}`}</p>
      <p className="min_temp">{`${dailyData.temp.min} ${celsiusSign}`}</p>
    </div>
  );
};

export default FavoriteDayOverView;
