import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <span className="contact">
      <a
        className="contact-link"
        href="https://github.com/cmw-dev/react-weather"
        target="_blank"
        rel="noopener noreferrer"
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
        rel="noopener noreferrer"
      >
        justicon - Flaticon
      </a>{" "}
    </span>
  );
}
