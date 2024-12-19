import React from "react";

import styles from "./RiverineFlood.module.css";
import FIY250 from "../../assets/photos/FIY250.jpg"


const RiverineFlood = () => {


      return(
        <section className={styles.riverineSection}>
          <div className={styles.headingBanner}>
            <h1>Riverine Flood</h1>
          </div>
          <div className={styles.floodMapSection}>
            <div className={styles.floodMapPart}>
              <div className={styles.mapHeading}>
                <h2>250 Year Flooding</h2>
              </div>
              <div className={styles.floodVideo}>
             
              <iframe src="https://drive.google.com/file/d/1eQzchSdVgUyA2vchjIrf8c8QwkJxTHRx/preview" width="100%" height="400" allow="autoplay"></iframe>
              </div>
            </div>
            <div className={styles.depthImg}>
              <img src={FIY250} alt="FIY250" />
            </div>
          </div>

        </section>

      )
};

export default RiverineFlood;