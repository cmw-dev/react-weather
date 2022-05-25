import React from "react";
import Time from "./Time";
import "./CurrentInfo.css";
import WeatherIcon from "./WeatherIcon";
import CurrentWeatherTemp from "./CurrentWeatherTemp";

export default function CurrentInfo(props) {
  return (
    <div>
      <div className="container mt-3 mb-3">
        <div className="current-city">
          <h1>{props.data.city}</h1>
        </div>

        <div className="currentMeasurements">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={58}
          />
          <CurrentWeatherTemp fahrenheit={props.data.temp} />
        </div>
        <div className="writtenDescription"> {props.data.description}</div>
        <div></div>
        <Time date={props.data.date} />
      </div>

      <div>
        <hr />
      </div>
      <div className="extra-measurements">
        <div className="row">
          <div className="col-4">
            <i className="fa-solid fa-temperature-high"></i>
            <br />
            feels like <br />
            <span>{Math.round(props.data.feels)}</span>°
          </div>
          <div className="col-4">
            <i className="fa-solid fa-wind"></i>
            <br />
            wind
            <br />
            <span>{Math.round(props.data.wind)} mph</span>{" "}
          </div>
          <div className="col-4">
            <i className="fa-solid fa-water"></i>
            <br />
            humidity
            <br />
            <span>{props.data.humidity}</span>%
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}
