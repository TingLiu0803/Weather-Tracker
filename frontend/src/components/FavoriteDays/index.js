import "./index.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { backHome } from "../../shared/constants/constantStrings";
import FavoriteDayOverView from "../../components/FavoriteDayOverView/index";
import { favoritedPageTitle } from "../../shared/constants/constantStrings";
import { BASE_URL } from "../../shared/constants/BASE_URL";

// the child component of WeeklyWeatherReport
const FavoriteDays = () => {
  const history = useHistory();
  const [favoriteDateDb, setFavoriteDateDb] = useState([]);

  const getFavoriteDaysFromDb = useCallback(async () => {
    await axios
      .get(`${BASE_URL}weatherData/saved_fav_days`)
      .then((res) => setFavoriteDateDb(res.data.favDaysInfo))
      .catch((err) => new Error());
  }, []);

  useEffect(() => {
    getFavoriteDaysFromDb();
  }, [getFavoriteDaysFromDb]);

  return (
    <div className="FavoriteDays">
      <h1>{favoritedPageTitle}</h1>
      {favoriteDateDb
        ? favoriteDateDb.map((dailyData, key) => (
            <FavoriteDayOverView
              key={dailyData.dt}
              dailyData={dailyData}
              favoriteDateDb={favoriteDateDb}
              setFavoriteDateDb={setFavoriteDateDb}
            />
          ))
        : ""}
      <div>
        <button
          onClick={() => history.push("/")}
          className="go_back_to_home_button"
        >
          {backHome}
        </button>
      </div>
    </div>
  );
};

export default FavoriteDays;
