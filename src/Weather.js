import React, { useState } from "react";
import axios from "axios";
import CurrentInfo from "./CurrentInfo";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.defaultCity);
  let [currentData, setcurrentData] = useState({ ready: false });
  function handleSubmit(response) {
    setcurrentData({
      ready: true,
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
            class="col-sm-8 mb-2 "
            placeholder="search for a city"
            autofocus="off"
            id="search-city"
            autocomplete="off"
            onChange={changeCity}
          />
          <input type="submit" value="search" class="btn btn-outline-light" />

          <button
            className="btn btn-outline-light col-sm-*"
            id="current-location-button"
          >
            current <i className="fa-solid fa-location-dot"></i>
          </button>
        </form>
        <CurrentInfo data={currentData} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
