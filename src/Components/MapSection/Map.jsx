import React from "react";
import MapTop from '../../assets/photos/MapTop.jpg'
import MapImg from '../../assets/photos/Map.jpg'
import Maptwo from '../../assets/photos/Maptwo.gif'
import styles from './Map.module.css'


const Map = () => {

  const data = [
    {
      time: "Apr – 10 8 AM",
      area: "V K Road",
      waterLevel: "8'",
      direction: "Increasing",
    },
    {
      time: "Apr – 10 9 AM",
      area: "V K Road",
      waterLevel: "10'",
      direction: "Increasing",
    },
    {
      time: "Apr – 10 11 AM",
      area: "V K Road",
      waterLevel: "9'",
      direction: "Decreasing",
    },
  ];
  return (
    <>
    <section className={styles.mapSection}>
    
      <div className={styles.mapTop}>
        <img src= {MapTop} alt="MapTop" />

      </div>
      <div className={styles.interactiveMap}>
        <div className={styles.mapSectionHeading}>
          <h1> Make AI in India, Make AI for India </h1>
        </div>
        <div className={styles.kozhikodeMapBox}>
        <div className={styles.mapColumn}>
          <div className={styles.mapHeading}>
            <h1>Kozhikode - Aug 14 - Aug 16</h1>
          </div>
          <div className={styles.kozhikodeMap}>
            <iframe
              src="https://ravi22110219.github.io/KozhikodeFloodMap/"
              title="Kozhikode Flood Map"
              width="100%"
              height="500px"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>

        <div className={styles.tableColumn}>
          <table className={styles.impactedAreasTable}>
            <thead>
              <tr>
                <th colSpan="4">Impacted Areas</th>
              </tr>
              <tr>
                <th>Time</th>
                <th>Area</th>
                <th>Water Level</th>
                <th>Direction</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.time}</td>
                  <td>{row.area}</td>
                  <td>{row.waterLevel}</td>
                  <td>{row.direction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        <div className={styles.mapText}>
          <h3>FloodAI</h3>
          <p>Our transition from proof-of-concept to deployment is driven by FloodResQ, a cutting-edge platform that bridges the gap between flood mapping, resilience quantification, and enhancement. FloodResQ integrates advanced flood emulators, physics-guided machine learning, and coupled hydrodynamical models to deliver precise and dynamic flood risk assessments across diverse environments. Leveraging physics-guided machine learning, the platform achieves superior predictive accuracy for streamflow and flood events in both managed and unmanaged basins. Coupled hydrodynamical models add a layer of detail by simulating interactions between surface water and critical infrastructure, producing high-resolution flood maps that capture the complexities of individual and compound flood scenarios.</p>
        </div>
        <div className={styles.midLine}></div>
        <div className={styles.Maptwo}>
          <img src={Maptwo} alt="Maptwo" />
          <p>Sustainable cities face a multitude of challenges, calling for fast-acting, out-of-the-box, and interdisciplinary solutions. Our proposal aims to create such solutions under three AI-powered thematic areas: (i) Environmental Resilience, (ii) Smart Mobility, and (iii) Smart physical and digital infrastructure.</p>
        </div>
      </div>
    </section>

    </>
  )
};

export default Map;