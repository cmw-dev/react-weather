import React from "react";
import "./App.css";
import Weather from "./Weather";

import Contact from "./Contact";

export default function App() {
  return (
    <div className="container" id="city-search">
      <div className="row-no-gutters">
        <div className="col">
          <Weather defaultCity="Minneapolis" />
        </div>
        <br />
        <Contact />
      </div>
    </div>
  );
}
