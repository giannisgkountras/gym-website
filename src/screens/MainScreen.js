import React from "react";
import TopNav from "../components/TopNav/TopNav";
import Footer from "../components/Footer/Footer";
import Base from "../components/Base/Base";
import "./MainScreen.css";

export default function MainScreen() {
  return (
    <div className="main-screen-container">
      <TopNav />
      <Base />
      <Footer />
    </div>
  );
}
