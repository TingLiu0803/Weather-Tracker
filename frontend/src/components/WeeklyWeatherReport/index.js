import "./index.css";
import * as React from "react";
import CurrentWeatherInfo from "../CurrentWeatherInfo/index";
import CurrentSubDescription from "../CurrentSubDescription/index";
import LoadingPage from "../LoadingPage/index";
import DayDataOverview from "../DayDataOverview/index";
import { useContextValue } from "../../context/appContext.js";

const WeeklyWeatherReport = () => {
  const { currentWeatherData, daysOfWeek, weeklyDataList } = useContextValue();
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
    </div>
  );
};

export default WeeklyWeatherReport;
