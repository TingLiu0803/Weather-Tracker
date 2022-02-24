import { createContext, useContext } from "react";
import { useAppContex } from "../hooks/useAppContex";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const {
    generalGlobalState,
    currentWeatherData,
    dailyDataList,
    daysOfWeek,
    weeklyDataList,
  } = useAppContex();

  return (
    <AppContext.Provider
      value={{
        generalGlobalState,
        currentWeatherData,
        dailyDataList,
        daysOfWeek,
        weeklyDataList
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useContextValue = () => useContext(AppContext);
