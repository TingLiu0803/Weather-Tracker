import "./index.css";
import { useHistory } from "react-router-dom";
import { useContextValue } from "../../context/appContext";
import { backHome } from "../../shared/constants/constantStrings";
import FavoriteDayOverView from "../../components/FavoriteDayOverView/index";
import { favoritedPageTitle } from "../../shared/constants/constantStrings";

// the child component of WeeklyWeatherReport
const FavoriteDays = () => {
  const history = useHistory();
  const { globalFavoriteDays } = useContextValue();

  return (
    <div className="FavoriteDays">
      <h1>{favoritedPageTitle}</h1>
      {globalFavoriteDays
        ? globalFavoriteDays.map((dailyData, key) => (
            <FavoriteDayOverView
              key={dailyData.dt}
              dailyData={dailyData}
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
