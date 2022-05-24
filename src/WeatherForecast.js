import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherDay from "./WeatherDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="forecast">
          <div className="row">
            <WeatherDay data={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiKey = "60596ab1e3173e7ce9d9c23e47eeae8f";
    let apiUrl = `
    https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
