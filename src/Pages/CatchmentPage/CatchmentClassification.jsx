import React from "react";
import styles from "./CatchmentClassification.module.css";
import CatchmentClassificationImg from "../../assets/photos/CatchmentClassificationImg.jpg"
import { Link } from "react-router-dom";

const CatchmentClassification = () => {
  return (
    <section className={styles.catchmentClassificationSection}>
      {/* <div className={styles.catchmentClassificationBanner}>
        <div className={styles.catchmentClassificationBannerLinks}>
          <Link to="/">Home </Link><span>/</span> <Link to="#">CatchmentClassification</Link>
        </div>
        <div className={styles.catchmentClassificationBannerContentColumn}>
          <div className={styles.catchmentClassificationBannerContentCol_1}>
            <h1>Explore Catchment Classification</h1>
            <p>
            Hydrological similarities between catchments in the USA and India! Using  k-means clustering, we've grouped catchments with similar climate and geographic features. 
            </p>
            <button>Learn More</button>
          </div>
          <div className={styles.catchmentClassificationBannerContentCol_2}>
          <img src="https://i.pinimg.com/originals/a5/2b/23/a52b232810587be914eab7c004e9fb08.gif" alt="Catchment Classification" />
          </div>
        </div>
      </div> */}

      <div className={styles.catchmentClassificationContent}>
      <div className={styles.catchmentClassificationContentImg}>
                  <img src={CatchmentClassificationImg} alt="CatchmentClassificationImg" />
        </div>
      </div>
    </section>
  );
};

export default CatchmentClassification;
