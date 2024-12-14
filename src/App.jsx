import React from "react";
import "./App.css";
import NavBar from "./Components/NavbarSection/Navbar.jsx";
import MainPage from "./Components/FirstSection/MainPage.jsx";
import Map from "./Components/MapSection/Map.jsx";
import ResearchShowcase from "./Components/ResearchSection/ResearchShowcase.jsx";
import Publication from "./Components/PublicationSection/Publication.jsx";
import MIRLab from "./Components/MIRLabSection/MIRLab.jsx";
import Footer from "./Components/FooterSection/Footer.jsx";
import RiverineFlood from "./Pages/SuratFloodPage/RiverineFlood.jsx";
import HydroGNN from "./Pages/HydroGNNPage/HydroGNN.jsx";
import MapTesting from "./Components/MapTestingSection/MapTesting.jsx";
import CatchmentClassification from "./Pages/CatchmentPage/CatchmentClassification.jsx";
import ReturnPeriodAnalysis from "./Pages/ReturnPeriodAnalysisPage/ReturnPeriodAnalysis.jsx";
import UrbanFlood from "./Pages/KozhikodeFloodPage/UrbanFlood.jsx";
import GondalSubSurfaceFlood from "./Pages/GondalFloodPage/GondalSubSurfaceFlood.jsx";
import GondalSurfaceFlood from "./Pages/GondalFloodPage/GondalSurfaceFlood.jsx";
import MIRLabNewsHomePage from "./Pages/MIRLabNewsPage/MIRLabNewsHomePage.jsx";
import ResearchShowCaseHomePage from "./Pages/ResearchShowCasePage/ResearchShowCaseHomePage.jsx";
import Try from "./Try.jsx";

// import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
       <NavBar /> 
    {/*  <CatchmentClassification />
      <ReturnPeriodAnalysis />*/}
      {/* <UrbanFlood /> */}
      {/* <GondalSubSurfaceFlood />  */}
      {/* <GondalSurfaceFlood /> */}
      {/* <Try /> */}
     
      <HydroGNN />
      {/* <MIRLabNewsHomePage /> */}
      {/* <MainPage />
      <Map /> */}
      {/* <ResearchShowCaseHomePage /> */}
     
      {/* <MapTesting />  */}
      <RiverineFlood />
      <ResearchShowcase />
      <Publication />
      <MIRLab />{/**/}
      <Footer /> 
    </div>
  );
}

export default App;
