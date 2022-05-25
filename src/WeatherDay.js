import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="row">
        <div className="col-4">{day()}</div>
        <div className="col-4">
          <WeatherIcon code={props.data.weather[0].icon} size={28} />
        </div>
        <div className="col-4">
          <span className="forecast-temperature-max">
            {Math.round(props.data.temp.max)}°
          </span>{" "}
          |{" "}
          <span className="forecast-temperature-min">
            {Math.round(props.data.temp.min)}°
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
