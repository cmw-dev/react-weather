import React from "react";
import "./App.css";
import Search from "./Search";
import Current from "./Current";
import Extra from "./Extra";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="container" id="city-search">
      <div className="row-no-gutters">
        <div className="col">
          <Search />
        </div>
        <div className="container">
          <Current />
        </div>
        <hr />
        <div>
          <Extra />
        </div>
        <hr />
        <div className="container" id="forecast"></div>
        <br />
        <Contact />
      </div>
    </div>
  );
}
