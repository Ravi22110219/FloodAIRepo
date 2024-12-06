import React from "react";
import MapTop from '../../assets/photos/MapTop.jpg'
import MapImg from '../../assets/photos/Map.jpg'
import Maptwo from '../../assets/photos/Maptwo.jpg'
import Styles from './Map.module.css'


const Map = () => {
  return (
    <>
    <section className={Styles.mapSection}>
      <div className={Styles.mapTop}>
        <img src= {MapTop} alt="MapTop" />

      </div>
      <div className={Styles.interactiveMap}>
        <div className={Styles.mapHeading}>
          <h1> Make AI in India, Make AI for India </h1>
        </div>
        <div className={Styles.map}>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1S-dh5OWwXUJQxnfCHlwmwW57pPdGh2c&ehbc=2E312F" style={{minWidth:"300px",width:"70%", minHeight:"500px",height:"80vh"}}></iframe>
          
        </div>
        <div className={Styles.mapText}>
          <h3>FloodAI</h3>
          <p>Our transition from proof-of-concept to deployment is driven by FloodResQ, a cutting-edge platform that bridges the gap between flood mapping, resilience quantification, and enhancement. FloodResQ integrates advanced flood emulators, physics-guided machine learning, and coupled hydrodynamical models to deliver precise and dynamic flood risk assessments across diverse environments. Leveraging physics-guided machine learning, the platform achieves superior predictive accuracy for streamflow and flood events in both managed and unmanaged basins. Coupled hydrodynamical models add a layer of detail by simulating interactions between surface water and critical infrastructure, producing high-resolution flood maps that capture the complexities of individual and compound flood scenarios.</p>
        </div>
        <div className={Styles.midLine}></div>
        <div className={Styles.Maptwo}>
          <img src={Maptwo} alt="Maptwo" />
          <p>Sustainable cities face a multitude of challenges, calling for fast-acting, out-of-the-box, and interdisciplinary solutions. Our proposal aims to create such solutions under three AI-powered thematic areas: (i) Environmental Resilience, (ii) Smart Mobility, and (iii) Smart physical and digital infrastructure.</p>
        </div>
      </div>
    </section>

    </>
  )
};

export default Map;