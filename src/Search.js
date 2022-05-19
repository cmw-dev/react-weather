import React from "react";

export default function Search() {
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
    </div>
  );
}
