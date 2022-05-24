import React from "react";
import "./App.css";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="container" id="city-search">
      <div className="row-no-gutters">
        <div className="col">
          <Weather defaultCity="Minneapolis" />
        </div>
        <div className="container">
          <WeatherForecast />
        </div>
        <br />
        <Contact />
      </div>
    </div>
  );
}
