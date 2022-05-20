import React from "react";
import Time from "./Time";
import "./CurrentInfo.css";

export default function CurrentInfo(props) {
  return (
    <div>
      <div className="container mt-3 mb-2">
        <div className="current-city">
          <h1>{props.data.city}</h1>
          <h2 className="current-temp">
            {Math.round(props.data.temp)}° <span className="units">F | C </span>
          </h2>
          <div className="current-description">
            <h3>
              <span>{props.data.description} </span>
              <img src={props.data.iconUrl} alt={props.data.description} />
            </h3>
          </div>
          <Time date={props.data.date} />
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
    </div>
  );
}
