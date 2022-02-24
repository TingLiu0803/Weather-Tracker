import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContextProvider } from "./context/index";
import WeeklyWeatherReport from "./components/WeeklyWeatherReport/index.js";
import DailyWeatherReport from "./components/DailyWeatherReport/index.js";
import FavoriteDays from "./components/FavoriteDays/index";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="app_container">
          <Switch>
            <Route exact path="/">
              <WeeklyWeatherReport />
            </Route>
            <Route exact path="/days/:dt">
              <DailyWeatherReport />
            </Route>
            <Route exact path="/favorite">
              <FavoriteDays />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;
