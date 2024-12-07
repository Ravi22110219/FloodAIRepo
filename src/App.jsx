import React from "react";
import "./App.css";
import NavBar from "./Components/NavbarSection/Navbar";
import MainPage from "./Components/FirstSection/MainPage";
import Map from "./Components/MapSection/Map";
import ResearchShowcase from "./Components/ResearchSection/ResearchShowcase";
import Publication from "./Components/PublicationSection/Publication";
import MIRLab from "./Components/MIRLabSection/MIRLab";
import Footer from "./Components/FooterSection/Footer";
import RiverineFlood from "./Pages/SuratFloodPage/RiverineFlood";

// import MapComponent from "./Components/MapTestingSection/MapTest";
// import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <NavBar /> 
      <MainPage />
      <Map />
      {/* <MapComponent />  */}
      <RiverineFlood />
      <ResearchShowcase />
      <Publication />
      <MIRLab />
      <Footer />
    </div>
  );
}

export default App;
