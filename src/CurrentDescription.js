import React from "react";

export default function CurrentDescription() {
  let currentDescriptionData = {
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };
  return (
    <div className="CurrentDescription">
      <h3>
        <span>{currentDescriptionData.description} </span>
        <img
          src={currentDescriptionData.imgUrl}
          alt={currentDescriptionData.description}
        />
      </h3>
    </div>
  );
}
