import React from "react";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";

import CardsSection from "../Cards/CardsSection";

const MainPage = () => {
  return (<section>
    <div className={styles.LandingPage}>
    {/* <div className={styles.LandingPageLinks}>
        <Link to="/">Home</Link> <span>/</span> <Link to="#">MIRLabNews</Link>
    </div> */}

    <div className={styles.LandingPageContentColumn}>
        <div className={styles.LandingPageContentCol_1}>
        <h1>AI-Powered Flood Resilience at Scale</h1>
    <p>
        Unlock the potential of cutting-edge AI solutions to tackle flood risks and build resilient communities. 
        Stay tuned for groundbreaking innovations and comprehensive strategies that leverage artificial intelligence 
        to predict, mitigate, and manage flooding at an unprecedented scale.
    </p>
            <button>Read More</button>
        </div>
        <div className={styles.LandingPageContentCol_2}>
            {/* <img src="https://i.pinimg.com/originals/a5/2b/23/a52b232810587be914eab7c004e9fb08.gif" alt="AI Research" /> */}
        </div>
    </div>
   
</div> <CardsSection / > </section>

  );
};

export default MainPage;
