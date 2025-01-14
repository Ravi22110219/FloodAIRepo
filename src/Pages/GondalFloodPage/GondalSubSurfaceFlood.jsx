import React from "react";
import styles from "./GondalSubSurfaceFlood.module.css";
import BannerGif from "../../assets/photos/BannerGif.gif";
import { Link } from "react-router-dom";

const GondalSubSurfaceFlood = () =>{
   
  
  return(
    <section className={styles.gondalSubSurfaceFloodSection}>
    <div className={styles.gondalSubSurfaceFloodBanner}>
  <div className={styles.gondalSubSurfaceFloodBannerLinks}>
  <Link to="/">Home</Link><span>/</span> <Link to="#">Gondal Subsurface Flood</Link>
  </div>
  <div className={styles.gondalSubSurfaceFloodBannerContentColumn}>
    <div className={styles.gondalSubSurfaceFloodBannerContentCol_1}>
      <h1>Insights into Gondal Subsurface Floods</h1>
      <p>
        Dive into the dynamics of subsurface flooding in Gondal and its surrounding areas. Learn about the unique hydrological challenges and mitigation strategies tailored to the region.
      </p>
      <button>Learn More</button>
    </div>
    <div className={styles.gondalSubSurfaceFloodBannerContentCol_2}>
      <img src={BannerGif} alt="" />
    </div>
  </div>
</div>
</section>
  )
};

export default GondalSubSurfaceFlood;