import React from "react";
import MainPage from "../../Components/FirstSection/MainPage";
import Map from "../../Components/MapSection/Map";
import ResearchShowcase from "../../Components/ResearchSection/ResearchShowcase";
import Publication from "../../Components/PublicationSection/Publication";
import MIRLab from "../../Components/MIRLabSection/MIRLab";

const HomePage = () =>
  {
      return(
        <>
       <MainPage />
       <Map />
       <ResearchShowcase />
       <Publication />
       <MIRLab />
      



        </>
      )
};
export default HomePage;