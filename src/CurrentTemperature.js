import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [tempUnit, setTempUnit] = useState({
    temp: Math.round(props.data),
    currentUnit: "C",
    swapUnit: "F",
    useFNext: true,
  });

  function convertTemperature() {
    if (tempUnit.useFNext) {
      setTempUnit({
        temp: Math.round((props.data * 9) / 5 + 32),
        currentUnit: "F",
        swapUnit: "C",
        useFNext: false,
      });
    } else {
      setTempUnit({
        temp: Math.round(props.data),
        currentUnit: "C",
        swapUnit: "F",
        useFNext: true,
      });
    }
  }

  return (
    <div className="CurrentTemperature">
      <span className="temp-number">{tempUnit.temp}</span>
      <span className="temp-unit">°{tempUnit.currentUnit}</span>
      <div className="form-check form-switch" id="temp-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={convertTemperature}
        />
        <label>°{tempUnit.swapUnit}</label>
      </div>
    </div>
  );
}
