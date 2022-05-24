import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col-4">Monday</div>
        <div className="col-4">
          <WeatherIcon code="01d" size={38} />
        </div>
        <div className="col-4">
          <span className="forecast-temperature-max">max</span> |{" "}
          <span className="forecast-temperature-min">min</span>{" "}
        </div>
      </div>
    </div>
  );
}
