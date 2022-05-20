import React from "react";

export default function Time(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  minutes = minutes <= 9 ? "0" + minutes : minutes;

  return (
    <h4>
      {day} {hours}:{minutes}
    </h4>
  );
}
