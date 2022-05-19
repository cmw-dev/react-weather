import React from "react";
import "./Extra.css";

export default function Extra() {
  return (
    <div className="extra-measurements">
      <div className="row">
        <div className="col-4">
          <i className="fa-solid fa-temperature-high"></i>
          <br />
          feels like <br />
          <span id="feels-like">7</span>°
        </div>
        <div className="col-4">
          <i className="fa-solid fa-wind"></i>
          <br />
          wind
          <br />
          <span className="wind">29</span>
          <small>mph</small>{" "}
        </div>
        <div className="col-4">
          <i className="fa-solid fa-water"></i>
          <br />
          humidity
          <br />
          <span className="humidity">48</span>%
        </div>
      </div>
    </div>
  );
}
