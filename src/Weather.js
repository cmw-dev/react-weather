import React, { useState } from "react";
import axios from "axios";
import CurrentInfo from "./CurrentInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [currentData, setcurrentData] = useState({ ready: false });
  function handleSubmit(response) {
    setcurrentData({
      ready: true,
      coord: response.data.coord,
      temp: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feels: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "60596ab1e3173e7ce9d9c23e47eeae8f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleSubmit);
  }

  if (currentData.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="col-sm-8 mb-2 "
            placeholder="search for a city"
            autoFocus="off"
            id="search-city"
            autoComplete="off"
            onChange={changeCity}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-outline-light"
          />

          <button
            className="btn btn-outline-light col-sm-*"
            id="current-location-button"
          >
            current <i className="fa-solid fa-location-dot"></i>
          </button>
        </form>
        <CurrentInfo data={currentData} />
        <WeatherForecast coord={currentData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
