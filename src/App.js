import React from "react";
import "./App.css";
import Weather from "./Weather";

import Contact from "./Contact";

export default function App() {
  let time = new Date();
  let hour = time.getHours();

  return (
    <div
      className={
        hour > 4 && hour < 12 ? "morning" : hour < 20 ? "afternoon" : "night"
      }
    >
      <div className="container">
        <div className="d flex col">
          <Weather defaultCity="Minneapolis" />
        </div>
        <br />
        <Contact />
      </div>
    </div>
  );
}
