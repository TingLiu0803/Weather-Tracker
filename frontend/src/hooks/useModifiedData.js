import { useDataApi } from "./useDataApi";

export const useModifiedData = () => {
  const { weatherData } = useDataApi("weatherData");
  // weather data for 8 days
  const weeklyDataList = weatherData.daily?.slice(0, 7);
  // weather data for 48 hours
  const dailyDataList = weatherData.hourly;
  // weather data now
  const currentWeatherData = weatherData.current;
  // current day of the week
  const daysOfWeek = new Array(7)
    .fill("*")
    .map((day, index) =>
      new Date(
        currentWeatherData?.dt * 1000 + index * 86400000
      ).toLocaleString("en-US", { weekday: "long", timeZone: "America/Toronto" })
    );

  return {
    currentWeatherData,
    dailyDataList,
    daysOfWeek,
    weeklyDataList
  };
};
