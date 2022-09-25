import React from "react";
import TopNav from "../components/TopNav/TopNav";
import Footer2 from "../components/Footer2/Footer2";
import Base from "../components/Base/Base";
// import "./MainScreen.css";

export default function MainScreen() {
  return (
    <div className="main-screen-container">
      <TopNav />
      <Base />
      <Footer2 />
    </div>
  );
}
