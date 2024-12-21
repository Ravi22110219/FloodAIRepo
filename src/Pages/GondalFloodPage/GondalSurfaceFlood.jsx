import React from "react";
import styles from "./GondalSurfaceFlood.module.css";
import GondalSurfaceFloodImg_1 from "../../assets/photos/GondalSurfaceImg1.jpg";
import GondalSurfaceFloodImg_2 from "../../assets/photos/GondalSurfaceImg2.jpg"; // Example image
import GondalSurfaceFloodImg_3 from "../../assets/photos/GondalSurfaceImg3.jpg"; // Example image
import { Link } from "react-router-dom";

const GondalSurfaceFlood = () => {
  const floodData = [
    {
      imgSrc: GondalSurfaceFloodImg_1,
      title: "Surface Flood",
      description:
        "Flooding Scenario in subway with precipitation intensity of 25 mm/hr and without usage of Pump.",
    },
    {
      imgSrc: GondalSurfaceFloodImg_2,
      title: "Surface Flood",
      description:
        "Flooding Scenario in subway with precipitation intensity of 25 mm/hr and with usage of Pump capacity of 0.05 cumecs.",
    },
    {
      imgSrc: GondalSurfaceFloodImg_3,
      title: "Surface Flood",
      description:
        "Flooding Scenario in subway with precipitation intensity of 25 mm/hr and with usage of Pump capacity of 0.3 cumecs.",
    },
  ];

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

      {floodData.map((data, index) => (
        <div
          key={index}
          className={styles.gondalSurfaceFloodContent}
          style={{ padding: "none" }}
        >
          <div className={styles.gondalSurfaceFloodContentImg}>
            <img src={data.imgSrc} alt={`${data.title} Image`} />
          </div>
          <div className={styles.gondalSurfaceFloodContentText}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GondalSurfaceFlood;
