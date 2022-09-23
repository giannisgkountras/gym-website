import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import Contact from "./screens/Contact";
import Photos from "./screens/Photos";
import InfoScreen from "./screens/InfoScreen";
import PriceScreen from "./screens/PriceScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<InfoScreen />} />
        <Route path="/pricing" element={<PriceScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
