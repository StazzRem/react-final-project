import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeather] = useState({});
  const [city, setCity] = useState(props.defaultCity);

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
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: createDescription(response),
    });

    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    document.getElementById("city-search").value = "";
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "fc951b70b430c59535c6efec00d491ee";
    let APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(APIurl).then(useData);
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
                <form
                  onSubmit={handleSubmit}
                  id="search-bar"
                  autoComplete="off"
                >
                  <input type="button" value="&#9906;" id="local-button" />{" "}
                  <input
                    type="search"
                    placeholder="Enter city name"
                    id="city-search"
                    onChange={changeCity}
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

            {
              /* v FORECAST SECTION v */
              <Forecast coord={weatherData.coord} />
              /* ^ FORECAST SECTION ^ */
            }
          </div>
          {/* ^ CONTAINER AND BACKGROUND ^ */}
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
