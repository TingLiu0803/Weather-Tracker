import "./index.css";
import * as React from "react";
import CurrentWeatherInfo from "../CurrentWeatherInfo/index";
import CurrentSubDescription from "../CurrentSubDescription/index";
import LoadingPage from "../LoadingPage/index";
import DayDataOverview from "../DayDataOverview/index";
import { useHistory } from "react-router-dom";
import { useContextValue } from "../../context/appContext.js";

const WeeklyWeatherReport = () => {
  const { currentWeatherData, daysOfWeek, weeklyDataList } = useContextValue();
  const history = useHistory();
  return (
    <div className="WeeklyWeatherReport">
      {currentWeatherData ? (
        <CurrentWeatherInfo currentWeatherData={currentWeatherData} />
      ) : (
        <LoadingPage />
      )}
      {currentWeatherData ? (
        <CurrentSubDescription currentWeatherData={currentWeatherData} />
      ) : (
        ""
      )}
      <div className="cards_container">
        {weeklyDataList
          ? weeklyDataList.map((dailyData, key) => (
              <DayDataOverview
                key={dailyData.dt}
                targetDay={key}
                dailyData={dailyData}
                daysOfWeek={daysOfWeek}
              />
            ))
          : ""}
      </div>
      {currentWeatherData ? (
        <div>
          <button 
            className="favorite_list_access_button"
            onClick={() => history.push("/favorite")}
          >
            Access To Favorite Days
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WeeklyWeatherReport;
