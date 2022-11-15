import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastData(props) {
  let temperature = {
    minimum: Math.round(props.data.temp.min),
    maximum: Math.round(props.data.temp.max),
  };

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastData">
      <h5 className="forecast-day">{day()}</h5>
      <WeatherIcon data={props.data.weather[0].icon} size={40} />
      <p className="minmax-text">
        <strong>Low / High</strong> <br />
        <span className="forecast-min">{temperature.minimum}</span>
        <span className="forecast-degrees">°C</span> /
        <span className="forecast-max">{temperature.maximum}</span>
        <span className="forecast-degrees">°C</span>
      </p>
    </div>
  );
}
