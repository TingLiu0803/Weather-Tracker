import "./index.css";
import { useHistory } from "react-router-dom";
import { useContextValue } from "../../context/appContext";
import { backHome } from "../../shared/constants/constantStrings";
import DayDataOverView from "../../components/DayDataOverview/index";
import { favoritedPageTitle } from "../../shared/constants/constantStrings";

// the child component of WeeklyWeatherReport
const FavoriteDays = () => {
  const history = useHistory();
  const { daysOfWeek, globalFavoriteDays } = useContextValue();

  return (
    <div className="FavoriteDays">
      <h1>{favoritedPageTitle}</h1>
      {globalFavoriteDays
        ? globalFavoriteDays.map((dailyData, key) => (
            <DayDataOverView
              key={dailyData.dt}
              targetDay={key}
              dailyData={dailyData}
              daysOfWeek={daysOfWeek}
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
