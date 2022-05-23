import React, { useState } from "react";
import "./CurrentWeatherTemp.css";

export default function CurrentWeatherTemp(props) {
  let [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <h2 className="current-temp">
        {Math.round(props.fahrenheit)}°{" "}
        <span className="units">
          F | {""}
          <a href="/" onClick={convertToCelsius}>
            C{" "}
          </a>
        </span>
      </h2>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <h2 className="current-temp">
        {Math.round(celsius)}°{" "}
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            F {""}
          </a>
          | C{" "}
        </span>
      </h2>
    );
  }
}
