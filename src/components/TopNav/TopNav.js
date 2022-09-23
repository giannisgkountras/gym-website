import React from "react";
import "./TopNav.css";
import { FaBars } from "react-icons/fa";

export default function TopNav() {
  return (
    <div className="nav-container">
      <div className="link-container">
        <a href="/" className="talos-link">
          TALOS
        </a>
        <a href="/photos">Φωτογραφίες</a>
        <a href="/info">Πληροφορίες</a>
        <i class="fa fa-bars" aria-hidden="true"></i>
        <a href="/pricing">Προσφορές</a>
        <a href="/contact">Επικοινωνία</a>

        <div className="selector" id="selector">
          <button
            className="selector-button"
            onClick={() =>
              document.getElementById("dropdown").style.display === "none" ? (document.getElementById("dropdown").style.display = "flex") : (document.getElementById("dropdown").style.display = "none")
            }
          >
            <FaBars className="bars" />
          </button>

          <ul id="dropdown">
            <li>
              <a href="/" className="talos-link" onClick={() => (document.getElementById("dropdown").style.display = "none")}>
                TALOS
              </a>
            </li>
            <li>
              <a href="/photos" onClick={() => (document.getElementById("dropdown").style.display = "none")}>
                Φωτογραφίες
              </a>
            </li>
            <li>
              <a href="/info" onClick={() => (document.getElementById("dropdown").style.display = "none")}>
                Πληροφορίες
              </a>
            </li>
            <li>
              <a href="/pricing" onClick={() => (document.getElementById("dropdown").style.display = "none")}>
                Προσφορές
              </a>
            </li>
            <li>
              <a href="/contact" onClick={() => (document.getElementById("dropdown").style.display = "none")}>
                Επικοινωνία
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
