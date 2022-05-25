import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherDay from "./WeatherDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="forecast">
          {forecast.map(function(dailyForecast, index) {
            if (index < 5) {
              return (
                <div key={index}>
                  <WeatherDay data={dailyForecast} />
                  <br />
                </div>
              );
            }
          })}
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
