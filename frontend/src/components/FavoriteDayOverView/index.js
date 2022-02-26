import "./index.css";
import axios from "axios";
import { BASE_URL } from "../../shared/constants/BASE_URL";
import { removeFavDay } from "../../shared/constants/constantStrings";
import { celsiusSign } from "../../shared/constants/constantStrings";
import { weatherIconUrl } from "../../shared/constants/BASE_URL";
import {
  convertToFavDayInWeek,
  convertToDataFormat
} from "../../shared/helpers/sunRiseTimeConverter";

const FavoriteDayOverView = ({
  dailyData,
  favoriteDateDb,
  setFavoriteDateDb
}) => {
  const favDayInWeek = convertToFavDayInWeek(dailyData.dt);

  const removeFavoriteDay = async () => {
    await axios
      .delete(`${BASE_URL}weatherData/saved_fav_days`, {
        data: { dt: dailyData.dt }
      })
      .then((res) => res.data.deleted)
      .then((res) =>
        setFavoriteDateDb(favoriteDateDb.filter((target) => target.dt !== res))
      )
      .catch((err) => new Error());
  };

  const onClick = () => {
    removeFavoriteDay();
  };

  return (
    <div className="FavoriteDayOverView">
      <h3>{favDayInWeek}</h3>
      <p>{convertToDataFormat(dailyData.dt)}</p>
      <img
        className="weekly_list_img"
        src={`${weatherIconUrl}/${dailyData.picture_code}@2x.png`}
        alt=""
      />
      <p className="max_temp">{`${dailyData.max_temp} ${celsiusSign}`}</p>
      <p className="min_temp">{`${dailyData.min_temp} ${celsiusSign}`}</p>
      <button className="remove_like_button" onClick={onClick}>
        {removeFavDay}
      </button>
    </div>
  );
};

export default FavoriteDayOverView;
