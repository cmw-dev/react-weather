import React from "react";
import Time from "./Time";
import "./CurrentInfo.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentInfo(props) {
  return (
    <div>
      <div className="container mt-3 mb-2">
        <div className="current-city">
          <h1>{props.data.city}</h1>
        </div>
        <Time date={props.data.date} />
        <h2 className="current-temp">
          {Math.round(props.data.temp)}° <span className="units">F | C </span>
        </h2>
        <div className="current-description">
          {" "}
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <span class="writtenDescription"> {props.data.description}</span>
        </div>
        <div className="highLowCurrent">
          <i className="fa-solid fa-temperature-arrow-up"></i>
          <span className="currentHigh"> 55°</span> <hr />
          <i class="fa-solid fa-temperature-arrow-down"></i>
          <span className="currentLow"> 44°</span>
        </div>
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
