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
        src={`${weatherIconUrl}/${dailyData.picture_code}@2x.png`}
        alt=""
      />
      <p className="max_temp">{`${dailyData.max_temp} ${celsiusSign}`}</p>
      <p className="min_temp">{`${dailyData.min_temp} ${celsiusSign}`}</p>
    </div>
  );
};

export default FavoriteDayOverView;
