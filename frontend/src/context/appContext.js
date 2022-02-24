import { createContext, useContext } from "react";
import { useAppContex } from "../hooks/useAppContex";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const {
    globalFavoriteDays,
    currentWeatherData,
    dailyDataList,
    daysOfWeek,
    weeklyDataList,
    setGlobalFavoriteDays
  } = useAppContex();

  return (
    <AppContext.Provider
      value={{
        globalFavoriteDays,
        currentWeatherData,
        dailyDataList,
        daysOfWeek,
        weeklyDataList,
        setGlobalFavoriteDays
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useContextValue = () => useContext(AppContext);
