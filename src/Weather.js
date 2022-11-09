import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeather] = useState({});

  function createDescription(response) {
    let warmth = "";
    if (response.data.main.temp <= 0) {
      warmth = "freezing";
    } else if (response.data.main.temp > 0 && response.data.main.temp <= 10) {
      warmth = "cold";
    } else if (response.data.main.temp > 10 && response.data.main.temp <= 15) {
      warmth = "cool";
    } else if (response.data.main.temp > 15 && response.data.main.temp <= 25) {
      warmth = "warm";
    } else {
      warmth = "hot";
    }

    let clouds = response.data.weather[0].description;

    return `Today's weather is ${warmth} with ${clouds}`;
  }

  function useData(response) {
    setWeather({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: createDescription(response),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        {/* v CONTAINER AND BACKGROUND v */}
        <div className="container" id="main-container">
          <div id="background">
            {/* v NAVBAR v */}
            <nav className="navbar navbar-light bg-transparent">
              <div className="container-fluid">
                <form id="search-bar" autocomplete="off">
                  <input type="button" value="&#9906;" id="local-button" />{" "}
                  <input
                    type="search"
                    placeholder="Enter city name"
                    id="city-search"
                  />{" "}
                  <input type="submit" value="Search" id="search-button" />
                </form>
                <ul className="nav justify-content-end" id="nav-bar-cities">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/"
                      id="ams-link"
                      rel="noreferrer"
                    >
                      Amsterdam
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/"
                      id="ldn-link"
                      rel="noreferrer"
                    >
                      London
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/"
                      id="tky-link"
                      rel="noreferrer"
                    >
                      Tokyo
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/"
                      id="syd-link"
                      rel="noreferrer"
                    >
                      Sydney
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/"
                      id="nyk-link"
                      rel="noreferrer"
                    >
                      New York
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* ^ NAVBAR ^ */}
            {/* v CURRENT WEATHER SECTION v */}
            <WeatherInfo data={weatherData} />
            {/* ^ CURRENT WEATHER SECTION ^ */}

            {/* v FORECAST SECTION v */}
            <div id="next-five-days">
              <div className="row justify-content-center">
                <div className="col-2">
                  <h5 className="forecast-day">Wed</h5>
                  <img
                    src="images/cloud.png"
                    alt="weather-icon"
                    id="forecast-w-icon"
                  />
                  <p className="minmax-text">
                    <strong>Low / High</strong> <br />
                    <span id="forecast-min">12</span>
                    <span id="forecast-degrees">°C</span> /
                    <span id="forecast-max">16</span>
                    <span id="forecast-degrees">°C</span>
                  </p>
                </div>
              </div>
              {/* ^ FORECAST SECTION ^ */}
            </div>
          </div>
          {/* ^ CONTAINER AND BACKGROUND ^ */}
        </div>
      </div>
    );
  } else {
    const apiKey = "fc951b70b430c59535c6efec00d491ee";
    let defaultCity = "Amsterdam";
    let APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(APIurl).then(useData);

    return "Loading...";
  }
}
