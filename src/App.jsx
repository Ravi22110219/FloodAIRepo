import React from "react";
// import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import RiverineFlood from "./Pages/SuratFloodPage/RiverineFlood.jsx";
import HydroGNN from "./Pages/HydroGNNPage/HydroGNN.jsx";

import CatchmentClassification from "./Pages/CatchmentPage/CatchmentClassification.jsx";
import ReturnPeriodAnalysis from "./Pages/ReturnPeriodAnalysisPage/ReturnPeriodAnalysis.jsx";
import UrbanFlood from "./Pages/KozhikodeFloodPage/UrbanFlood.jsx";
import GondalSubSurfaceFlood from "./Pages/GondalFloodPage/GondalSubSurfaceFlood.jsx";
import GondalSurfaceFlood from "./Pages/GondalFloodPage/GondalSurfaceFlood.jsx";
import MIRLabNewsHomePage from "./Pages/MIRLabNewsPage/MIRLabNewsHomePage.jsx";
import ResearchShowCaseHomePage from "./Pages/ResearchShowCasePage/ResearchShowCaseHomePage.jsx";
import Try from "./Try.jsx";

import HomePage from "./Pages/HomePage/HomePage";
import ScrollToTop from "./ScrollToTop.jsx";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<HomePage />} />
       <Route path="hydro-gnn" element={<HydroGNN />} />
        <Route path="surat-flood" element={<RiverineFlood />} />
        <Route path="surat-riverine-flood" element={<RiverineFlood />} />
        <Route path="surat-flood-2006/urban" element={<RiverineFlood />} />
        <Route path="surat-flood-2006/rural" element={<RiverineFlood />} />
        <Route path="surat-flood-articles" element={<RiverineFlood />} />

        <Route path="kozhikode-urban-flood" element={<UrbanFlood/>} />

        
        <Route path="research-papers-home" element={<MIRLabNewsHomePage/>} />
        <Route path="gondal-surface-flood" element={<GondalSurfaceFlood/>} />
        <Route path="gondal-sub-surface-flood" element={<GondalSubSurfaceFlood/>} />
        <Route path="catchment-classification" element={<CatchmentClassification />} />
        <Route path="return-period-analysis" element={<ReturnPeriodAnalysis />} />
     
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
