import React, { useState } from "react";
import styles from "./HydroGNN.module.css";
import IndianRiverBasinImg from "../../assets/photos/IndianRiverBasin.jpg";

const data = [
  {
    title: "Indian River Basins",
    content: (
      <div className={styles.dropdownContentWrapper}>
        <img
          src={IndianRiverBasinImg}
          alt="Indian River Basins"
          className={styles.contentImage}
          loading="lazy"
          onError={(e) => (e.target.src = "path/to/fallback-image.jpg")}
        />
        <p>
          Indian River Basins are categorized based on various geographical and
          hydrological factors. Below is a graph illustrating the distribution.
        </p>
        <div className={styles.graph}>
          <p>Graph Component Placeholder for Indian River Basins</p>
        </div>
      </div>
    ),
  },
  {
    title: "Indian Rivers as a Graph",
    content: (
      <div className={styles.dropdownContentWrapper}>
        <img
          src="path/to/indian-rivers-graph-image.jpg"
          alt="Indian Rivers Graph"
          className={styles.contentImage}
          loading="lazy"
          onError={(e) => (e.target.src = "path/to/fallback-image.jpg")}
        />
        <p>
          Indian rivers can be represented as a network graph. This helps in
          understanding the flow paths and connections.
        </p>
        <div className={styles.graph}>
          <p>Graph Component Placeholder for Indian Rivers</p>
        </div>
      </div>
    ),
  },
  {
    title: "Mahanadi River Basin as a Graph",
    content: (
      <div className={styles.dropdownContentWrapper}>
        <img
          src="path/to/mahanadi-river-basin-image.jpg"
          alt="Mahanadi River Basin"
          className={styles.contentImage}
          loading="lazy"
          onError={(e) => (e.target.src = "path/to/fallback-image.jpg")}
        />
        <p>
          The Mahanadi River Basin is one of the major basins in India. Below is
          a graph representing its hydrological data.
        </p>
        <div className={styles.graph}>
          <p>Graph Component Placeholder for Mahanadi River Basin</p>
        </div>
      </div>
    ),
  },
];

const HydroGNN = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.hydroGNNSection}>
      <div className={styles.hydroGNNDiv}>
        <div className={styles.hydroGNNBanner}>
          <div className={styles.hydroGNNBannerLinks}>
            <a href="#">Home</a> <span>/</span> <a href="#">HydroGNN</a>
          </div>
          <div className={styles.hydroGNNBannerContentColumn}>
            <div className={styles.hydroGNNBannerContentCol_1}>
              <h1>HydroGNN: Revolutionizing Hydrological Predictions</h1>
              <p>
                Dive into the power of Graph Neural Networks (GNNs) in
                hydrological modeling. Understand how HydroGNN enhances flood
                predictions and water resource management through advanced data
                analytics.
              </p>
              <button>Learn More</button>
            </div>
            <div className={styles.hydroGNNBannerContentCol_2}>
              <img src="https://i.pinimg.com/originals/a5/2b/23/a52b232810587be914eab7c004e9fb08.gif" alt="Img" />
            </div>
          </div>
        </div>

        <div className={styles.dropdownContainer}>
          {data.map((item, index) => (
            <div
              key={index}
              className={`${styles.dropdownItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <div
                className={styles.dropdownHeader}
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`dropdown-content-${index}`}
              >
                <span>{item.title}</span>
                <span>{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              {activeIndex === index && (
                <div
                  id={`dropdown-content-${index}`}
                  className={styles.dropdownContent}
                >
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HydroGNN;
