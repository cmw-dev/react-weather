import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <span className="contact">
      <a
        className="contact-link"
        href="https://github.com/cmw-dev/weather-app"
        target="_blank"
      >
        open-source code
      </a>{" "}
      by Chelsea Weber
      <br />
      icons created by{" "}
      <a
        className="icon-link"
        href="https://www.flaticon.com/free-icons/weather"
        target="_blank"
      >
        justicon - Flaticon
      </a>{" "}
    </span>
  );
}