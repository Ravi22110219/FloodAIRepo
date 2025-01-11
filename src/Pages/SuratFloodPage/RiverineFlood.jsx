import React from "react";
import { Link } from "react-router-dom";
import styles from "./RiverineFlood.module.css";
import FIY250 from "../../assets/photos/FIY250.jpg";

const RiverineFlood = () => {
  const floodData = [
    {
      title: "250-Year Flooding Scenario",
      iframeSrc: "https://drive.google.com/file/d/1eQzchSdVgUyA2vchjIrf8c8QwkJxTHRx/preview",
      description: "An overview of a 250-year return period flood scenario.",
      imgSrc: FIY250,
    },
    {
      title: "100-Year Flooding Scenario",
      iframeSrc: "https://drive.google.com/file/d/17qoWpEsmirU8KyKp6aiKUvsXx_BoffRL/preview",
      description: "Details of a 100-year return period flood scenario.",
      imgSrc: FIY250,
    },
    {
      title: "50-Year Flooding Scenario",
      iframeSrc: "https://drive.google.com/file/d/1nY3WIjQcp1G8R8ePwTJPIPC_Ub7sojBE/preview",
      description: "Insights into a 50-year return period flood scenario.",
      imgSrc: FIY250, 
    },
  ];

  return (
    <section className={styles.riverineSection}>
      {/* Banner Section */}
      <div className={styles.riverineFloodBanner}>
        <div className={styles.riverineFloodBannerLinks}>
          <Link to="/">Home</Link> <span>/</span> <Link to="#">Riverine Flood</Link>
        </div>
        <div className={styles.riverineFloodBannerContentColumn}>
          <div className={styles.riverineFloodBannerContentCol_1}>
            <h1>Understanding Riverine Floods</h1>
            <p>
            Explore highly accurate, ground-validated models predicting river flooding dynamics under diverse scenarios. This page features flood videos from various years, showcasing the impact and progression of river flooding over time.
            </p>
            <Link to="/riverine-flood">
              <button>Learn More</button>
            </Link>
          </div>
          <div className={styles.riverineFloodBannerContentCol_2}>
            <img
              src="https://i.pinimg.com/originals/a5/2b/23/a52b232810587be914eab7c004e9fb08.gif"
              alt="Riverine Flood Animation"
            />
          </div>
        </div>
      </div>

      {/* Flood Data Section */}
      {floodData.map((data, index) => (
        <div key={index} className={styles.floodMapSection}>
          <div className={styles.floodMapPart}>
            <div className={styles.mapHeading}>
              <h2>{data.title}</h2>
            </div>
            <div className={styles.floodVideo}>
              <iframe
                src={data.iframeSrc}
                width="100%"
                height="450"
                allow="autoplay"
                title={data.title}
              ></iframe>
            </div>
            <p className={styles.description}>{data.description}</p>
          </div>
          <div className={styles.depthImg}>
            <img src={data.imgSrc} alt={data.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default RiverineFlood;
