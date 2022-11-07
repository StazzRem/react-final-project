import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <div id="main-weather-display">
            <h1>Amsterdam</h1>
            <h2>Friday, 11th November</h2>

            <div className="row justify-content-between" id="todays-weather">
              <div className="col-3">
                <span id="weather-icon" alt="weather icon"></span>
              </div>

              <div className="col-4">
                <ul>
                  <li id="current-temp">
                    <span className="temp-number"></span>
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
                    <i className="fa-solid fa-wind"></i> Wind:
                    <span id="wind-speed">2</span>km/h
                  </li>
                  <li>
                    <i className="fa-solid fa-droplet"></i> Humidity:
                    <span id="humid-percent">80</span>%
                  </li>
                </ul>
              </div>
              <span id="weather-desc"></span>
            </div>
          </div>
        </div>
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
  );
}
