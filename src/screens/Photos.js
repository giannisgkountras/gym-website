import React from "react";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import TopNav from "../components/TopNav/TopNav";
import Footer from "../components/Footer/Footer";

export default function Photos() {
  return (
    <div>
      <TopNav />
      <PhotoGallery />
      {/* <Footer /> */}
    </div>
  );
}
