import { useState } from "react";
import { useModifiedData } from "./useModifiedData";

export const useAppContex = () => {
  const [generalGlobalState, setGeneralGlobalState] = useState({});
  const { currentWeatherData, dailyDataList, daysOfWeek, weeklyDataList } = useModifiedData()

  return {
    generalGlobalState,
    weeklyDataList,
    currentWeatherData,
    daysOfWeek,
    dailyDataList,
    setGeneralGlobalState
  };
};
