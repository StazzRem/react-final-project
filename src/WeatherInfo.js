import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div id="main-weather-display">
        <h1>{props.data.city}</h1>
        <h2>
          <FormattedDate date={props.data.date} />
        </h2>

        <div className="row justify-content-between" id="todays-weather">
          <div className="col-3">
            <WeatherIcon data={props.data.icon} />
          </div>

          <div className="col-4">
            <ul>
              <li id="current-temp">
                <span className="temp-number">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="temp-unit">°C</span>
              </li>
              <div className="form-check form-switch" id="temp-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                >
                  °F
                </label>
              </div>

              <li>
                <FontAwesomeIcon icon={faWind} /> Wind:{" "}
                <span id="wind-speed">{Math.round(props.data.wind)}</span>
                km/h
              </li>
              <li>
                <FontAwesomeIcon icon={faDroplet} /> Humidity:{" "}
                <span id="humid-percent">{props.data.humidity}</span>%
              </li>
            </ul>
          </div>
          <span id="weather-desc">{props.data.description}</span>
        </div>
      </div>
    </div>
  );
}
