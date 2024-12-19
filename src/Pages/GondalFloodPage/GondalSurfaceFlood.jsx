import React from "react";
import styles from "./GondalSurfaceFlood.module.css";
import GondalSurfaceFloodImg from "../../assets/photos/GondalSurfaceImg.jpg"
import { Link } from "react-router-dom";

const GondalSurfaceFlood = () => {
  return (
    <section className={styles.gondalSurfaceFloodSection}>
      <div className={styles.gondalSurfaceFloodBanner}>
        <div className={styles.gondalSurfaceFloodBannerLinks}>
         <Link to="/">Home </Link> <span>/</span>{" "}
          <Link to="#">Gondal Surface Flood</Link>
        </div>
        <div className={styles.gondalSurfaceFloodBannerContentColumn}>
          <div className={styles.gondalSurfaceFloodBannerContentCol_1}>
            <h1>Understanding Gondal Surface Floods</h1>
            <p>
              Explore the challenges and impacts of surface flooding in Gondal.
              Gain insights into hydrological patterns, causes, and innovative
              solutions to mitigate the risks.
            </p>
            <button>Learn More</button>
          </div>
          <div className={styles.gondalSurfaceFloodBannerContentCol_2}>
            <img
              src="https://i.pinimg.com/originals/a5/2b/23/a52b232810587be914eab7c004e9fb08.gif"
              alt="Img"
            />
          </div>
        </div>
      </div>
      <div className={styles.gondalSurfaceFloodContent}>
      <div className={styles.gondalSurfaceFloodContentImg}>
         <img src={GondalSurfaceFloodImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default GondalSurfaceFlood;
