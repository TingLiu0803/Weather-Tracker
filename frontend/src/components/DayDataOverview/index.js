import "./index.css";
import { celsiusSign } from "../../shared/constants/constantStrings";
import { weatherIconUrl } from "../../shared/constants/BASE_URL";
import { useHistory } from 'react-router-dom';
import { setSearchKey } from "../../shared/helpers/localStorageFunctions";

// the child component of WeeklyWeatherReport
const DayDataOverview = ({ daysOfWeek, dailyData, targetDay }) => {
  const history = useHistory();

  const onClick = ({ target }) => {
    setSearchKey(targetDay);
    history.push(`/days/${targetDay}`)
  }

  return (
    <div className="DayDataOverview">
      <h3>{daysOfWeek[targetDay]}</h3>
      <button onClick={onClick}>
        <img
          className="weekly_list_img"
          src={`${weatherIconUrl}/${dailyData.weather[0].icon}@2x.png`}
          alt=""
        />
        <p>{dailyData.weather[0].main}</p>
        <p className="max_temp">{`${dailyData.temp.max} ${celsiusSign}`}</p>
        <p className="min_temp">{`${dailyData.temp.min} ${celsiusSign}`}</p>
      </button>
    </div>
  );
};

export default DayDataOverview;
