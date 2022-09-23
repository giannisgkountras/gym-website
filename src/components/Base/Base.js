import React from "react";
import "./Base.css";
import talos from "../../assets/talos.png";
export default function Base() {
  return (
    <div className="base-container">
      <img src={talos} alt="talos" className="talos" />
      <a href="/info">
        <button className="button-57">
          <span className="text">Γίνε μέλος του Talos Team!</span>
          <span>FIGHT!</span>
        </button>
      </a>
    </div>
  );
}
