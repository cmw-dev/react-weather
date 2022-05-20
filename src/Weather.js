import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Time from "./Time";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [currentData, setcurrentData] = useState({ ready: false });
  function handleSubmit(response) {
    setcurrentData({
      ready: true,
      temp: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feels: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (currentData.ready) {
    return (
      <div className="Search">
        <form id="search-form">
          <input
            type="text"
            class="col-sm-8 mb-2 "
            placeholder="search for a city"
            autofocus="off"
            id="search-city"
            autocomplete="off"
          />
          <input type="submit" value="search" class="btn btn-outline-light" />

          <button
            className="btn btn-outline-light col-sm-*"
            id="current-location-button"
          >
            current <i className="fa-solid fa-location-dot"></i>
          </button>
        </form>
        <div className="container mt-3 mb-2">
          <div className="current-city">
            <h1>{currentData.city}</h1>
            <h2 className="current-temp">
              {Math.round(currentData.temp)}°{" "}
              <span className="units">F | C </span>
            </h2>
            <div className="current-description">
              <h3>
                <span>{currentData.description} </span>
                <img src={currentData.iconUrl} alt={currentData.description} />
              </h3>
            </div>
            <Time date={currentData.date} />
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
              <span>{Math.round(currentData.feels)}</span>°
            </div>
            <div className="col-4">
              <i className="fa-solid fa-wind"></i>
              <br />
              wind
              <br />
              <span>{Math.round(currentData.wind)} mph</span>{" "}
            </div>
            <div className="col-4">
              <i className="fa-solid fa-water"></i>
              <br />
              humidity
              <br />
              <span>{currentData.humidity}</span>%
            </div>
          </div>
        </div>
        <div>
          <hr />
        </div>
      </div>
    );
  } else {
    let apiKey = "60596ab1e3173e7ce9d9c23e47eeae8f";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleSubmit);

    return "Loading..";
  }
}
