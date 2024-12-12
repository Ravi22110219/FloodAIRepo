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
import CatchmentClassification from "./Pages/CatchmentPage/catchmentClassification.jsx";
import ReturnPeriodAnalysis from "./Pages/ReturnPeriodAnalysisPage/ReturnPeriodAnalysis.jsx";
import UrbanFlood from "./Pages/KozhikodeFloodPage/UrbanFlood.jsx";
import GondalSubSurfaceFlood from "./Pages/GondalFloodPage/GondalSubSurfaceFlood.jsx";
import GondalSurfaceFlood from "./Pages/GondalFloodPage/GondalSurfaceFlood.jsx";
import MIRLabNewsHomePage from "./Pages/MIRLabNewsPage/MIRLabNewsHomePage.jsx";

// import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
       <NavBar /> 
    {/*  <CatchmentClassification />
      <ReturnPeriodAnalysis />
      <UrbanFlood />*/}
      {/* <GondalSubSurfaceFlood />  */}
      {/* <GondalSurfaceFlood /> */}
     
      {/* <HydroGNN /> */}
      <MIRLabNewsHomePage />
      {/*<MainPage />
      <Map />
     
      <MapTesting /> 
      <RiverineFlood />
      <ResearchShowcase />
      <Publication />
      <MIRLab />*/}
      <Footer /> 
    </div>
  );
}

export default App;
