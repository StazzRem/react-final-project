import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeList = {
    "01d": { icon: "CLEAR_DAY", color: "#EE9513" },
    "01n": { icon: "CLEAR_NIGHT", color: "#48484A" },
    "02d": { icon: "PARTLY_CLOUDY_DAY", color: "#EE9513" },
    "02n": { icon: "PARTLY_CLOUDY_NIGHT", color: "#48484A" },
    "03d": { icon: "CLOUDY", color: "#F0F0F0" },
    "03n": { icon: "CLOUDY", color: "#48484A" },
    "04d": { icon: "CLOUDY", color: "#F0F0F0" },
    "04n": { icon: "CLOUDY", color: "#48484A" },
    "09d": { icon: "CLOUDY", color: "#F0F0F0" },
    "09n": { icon: "CLOUDY", color: "#48484A" },
    "10d": { icon: "RAIN", color: "#F0F0F0" },
    "10n": { icon: "RAIN", color: "#48484A" },
    "11d": { icon: "RAIN", color: "#F0F0F0" },
    "11n": { icon: "RAIN", color: "#48484A" },
    "13d": { icon: "SNOW", color: "#F0F0F0" },
    "13n": { icon: "SNOW", color: "#48484A" },
    "50d": { icon: "FOG", color: "#F0F0F0" },
    "50n": { icon: "FOG", color: "#48484A" },
  };

  return (
    <ReactAnimatedWeather
      icon={codeList[props.data].icon}
      color={codeList[props.data].color}
      size={props.size}
      animate={true}
    />
  );
}
