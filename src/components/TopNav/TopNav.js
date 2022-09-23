import React from "react";
import "./TopNav.css";

export default function TopNav() {
  return (
    <div className="nav-container">
      <div className="link-container">
        <a href="/" className="talos-link">
          TALOS
        </a>
        <a href="/photos">Φωτογραφίες</a>
        <a href="/info">Πληροφορίες</a>
        <a href="/pricing">Προσφορές</a>
        <a href="/contact">Επικοινωνία</a>
      </div>
    </div>
  );
}
