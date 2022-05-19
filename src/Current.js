import React from "react";
import CurrentDescription from "./CurrentDescription";
import "./Current.css";
import Time from "./Time";

export default function Current() {
  let currentData = {
    city: "Sioux Falls",
    temp: 53,
  };
  return (
    <div className="current-city">
      <h1>{currentData.city}</h1>
      <h2 className="current-temp">{currentData.temp}° </h2>
      <span className="units" />
      <span className="fahrenheit-current"> F</span> |{" "}
      <span className="celsius-current"> C</span>
      <CurrentDescription />
      <Time />
    </div>
  );
}
