import React, { useState, useEffect } from "react";
import axios from "axios";

import ForecastData from "./ForecastData";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coord]);

  function makeForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <div className="row justify-content-center">
          {forecast.map(function (forecastDays, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col-2" key={index}>
                  <ForecastData data={forecastDays} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "fc951b70b430c59535c6efec00d491ee";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let unit = "metric";
    let forecastAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=${unit}`;
    axios.get(forecastAPI).then(makeForecast);

    return null;
  }
}
