import React from "react";
import "./App.css";
import NavBar from "./Components/NavbarSection/Navbar";
import MainPage from "./Components/FirstSection/MainPage";
import Map from "./Components/MapSection/Map";
import ResearchShowcase from "./Components/ResearchSection/ResearchShowcase";
import Publication from "./Components/PublicationSection/Publication.jsx";
import MIRLab from "./Components/MIRLabSection/MIRLab";
import Footer from "./Components/FooterSection/Footer";
import RiverineFlood from "./Pages/SuratFloodPage/RiverineFlood";
import HydroGNN from "./Pages/HydroGNNPage/HydroGNN.jsx";
import MapTesting from "./Components/MapTestingSection/MapTesting.jsx";

// import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <NavBar /> 
      <MainPage />
      <Map />
      <HydroGNN />
     <MapTesting />
      <RiverineFlood />
      <ResearchShowcase />
      <Publication />
      <MIRLab />
      <Footer />
    </div>
  );
}

export default App;
