import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertCelsius() {
    setUnit("fahrenheit");
    document.querySelector("#flexSwitchCheckDefault").checked = true;
  }

  function convertFahrenheit() {
    setUnit("celsius");
    document.querySelector("#flexSwitchCheckChecked").checked = false;
  }

  if (unit === "celsius") {
    return (
      <div className="CurrentTemperature">
        <span className="temp-number">{Math.round(props.celsius)}</span>
        <span className="temp-unit">°C</span>
        <div className="form-check form-switch" id="temp-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={convertCelsius}
          />
          <label>°F</label>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="CurrentTemperature">
        <span className="temp-number">{Math.round(fahrenheit)}</span>
        <span className="temp-unit">°F</span>
        <div className="form-check form-switch" id="temp-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onClick={convertFahrenheit}
          />
          <label>°F</label>
        </div>
      </div>
    );
  }
}
