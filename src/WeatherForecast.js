import axios from "axios";
import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let latitude = props.coord.lat;
  let longitude = props.coord.lon;
  let apiKey = "60596ab1e3173e7ce9d9c23e47eeae8f";
  let apiUrl = `
    https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="container">
      <div className="forecast">
        <div className="row">
          <div className="col-4">Monday</div>
          <div className="col-4">
            <WeatherIcon code="01d" size={38} />
          </div>
          <div className="col-4">
            <span className="forecast-temperature-max">max</span> |{" "}
            <span className="forecast-temperature-min">min</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
