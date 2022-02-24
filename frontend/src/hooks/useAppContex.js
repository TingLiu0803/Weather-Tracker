import { useState } from "react";
import { useModifiedData } from "./useModifiedData";

export const useAppContex = () => {
  const [globalFavoriteDays, setGlobalFavoriteDays] = useState([]);
  const { currentWeatherData, dailyDataList, daysOfWeek, weeklyDataList } = useModifiedData()

  return {
    globalFavoriteDays,
    weeklyDataList,
    currentWeatherData,
    daysOfWeek,
    dailyDataList,
    setGlobalFavoriteDays
  };
};
