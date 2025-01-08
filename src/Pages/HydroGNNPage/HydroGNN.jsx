import React, { useState } from "react";
import styles from "./HydroGNN.module.css";
import IndianRiverBasinImg from "../../assets/photos/IndianRiverBasin.jpg";
import Compound_Flood_100 from "../../assets/photos/Compound_Flood_100_with_nodes_modified.png"
import Resiience from "../../assets/photos/resiience.JPG"
import ResilienceRecovery from "../../assets/photos/ResilienceRecovery.png"
import GondalSurfaceImg from "../../assets/photos/GondalSurfaceImg1.jpg"
import { Link } from "react-router-dom";

const data = [
  {
    title: " Flood Modeling Suite",
    content: (
      <div className={styles.dropdownContentWrapper}>
         <iframe
              src="https://ravi22110219.github.io/KozhikodeFloodMap/"
              title="Kozhikode Flood Map"
              width="100%"
              height="500px"
              style={{ border: "1px solid black" }}
            ></iframe>
        <div>
          <p>
            <strong style={{ fontSize: "25px" }}>
              Precision at Every Scale
            </strong>
            <br />
            Flooding doesn’t happen in isolation—it’s dynamic, and so are our
            models. Our Flood Modeling Suite uses AI, physics-based simulations,
            and real-time data to predict flooding with stunning accuracy.
            Whether it’s urban stormwater or large river basins, we deliver
            insights you can trust to plan, prepare, and protect.
          </p>
          <div className={styles.graph}>
            <p>
              <strong style={{ fontSize: "25px" }}>What It Offers:</strong>{" "}
              <br /><li> Pinpoint predictions validated by real-world data.</li>
               
             <li>Tailored assessments for communities, businesses, and
              infrastructure. </li>  
             <li> Easy integration with smart city platforms for real-time
              decision-making.</li>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: " Resilience Recovery Algorithms",
    content: (
      <div className={styles.dropdownContentWrapper}>
        <img
          src={ResilienceRecovery}
          alt="Indian Rivers Graph"
          className={styles.contentImage}
          loading="lazy"
          onError={(e) => (e.target.src = "path/to/fallback-image.jpg")}
        />
        <div>
        <p>
          <strong style={{ fontSize: "25px" }}>
            Faster Recovery, Smarter Planning
          </strong>{" "}
          <br /> Disasters don’t wait, and neither should recovery. Our
          proprietary algorithms streamline recovery efforts by prioritizing
          what matters most—critical infrastructure, safe evacuation, and
          efficient resource allocation. By focusing on what’s urgent, we help
          you bounce back quicker and stronger. .
        </p>
        <div className={styles.graph}>
          <p>
            <strong style={{ fontSize: "25px" }}> What It Offers:</strong>
            <br /><li>Smart recovery pathways for complex infrastructure systems.</li> {" "}
             <li>
            Integration with mobility networks for seamless evacuations.</li>  
            <li>Custom strategies for governments, cities, and private enterprises.</li>
          </p>
        </div>
        </div>
      </div>
    ),
  },
  {
    title: "Hyperlocal Flood Remediation Solutions",
    content: (
      <div className={styles.dropdownContentWrapper}>
        <img
          src={GondalSurfaceImg}
          alt="Mahanadi River Basin"
          className={styles.contentImage}
          loading="lazy"
          onError={(e) => (e.target.src = "path/to/fallback-image.jpg")}
        />
        <div>
        <p>
          <strong style={{ fontSize: "25px" }}>
            {" "}
            Big Ideas for Small-Scale Challenges
          </strong>{" "}
          <br />
          Urban neighborhoods and peri-urban areas often bear the brunt of
          localized flooding. Our tailored solutions are designed for these
          hyperlocal challenges, combining advanced drainage systems with
          automated operation to ensure efficiency and energy savings. Whether
          it’s keeping subways dry or streets safe, we’re ready to help.
        </p>
        <div className={styles.graph}>
          <p>
            <strong style={{ fontSize: "25px" }}> What It Offers:</strong>
            <br /> <li>Block-by-block flood models for targeted solutions. </li> 
           <li> Vertical and horizontal drainage systems that adapt in real time.</li>{" "}
             
           <li> Reliable designs tested and validated on the ground.</li>
          </p>
        </div>
        </div>
      </div>
    ),
  },
  ,
  {
    title: "Compound Risk Assessment Toolkit",
    content: (
      <div className={styles.dropdownContentWrapper}>
        <img
          src={Compound_Flood_100}
          alt="Mahanadi River Basin"
          className={styles.contentImage}
          loading="lazy"
          onError={(e) => (e.target.src = "path/to/fallback-image.jpg")}
        />
        <div>
        <p>
          <strong style={{ fontSize: "25px" }}>
            When Risks Collide, Be Prepared
          </strong>{" "}
          <br />
          In today’s world, risks rarely come one at a time. Our toolkit helps
          you understand and manage the cascading impacts of multihazard
          scenarios—like floods, storms, and infrastructure failures happening
          all at once. We make it easier to plan for the unexpected and stay
          ahead of the curve.
        </p>
        <div className={styles.graph}>
          <p>
            <strong style={{ fontSize: "25px" }}>What It Offers:</strong> <br />
          <li> Tools to predict and mitigate interconnected risks.</li>   
            <li>Clear insights into cascading failures and their consequences.</li>{" "}
             
           <li>Cost-benefit analysis to ensure every strategy adds value.</li> 
          </p>
        </div>
        </div>
      </div>
    ),
  },
  {
    title: "Watershed Resilience Planner",
    content: (
      <div className={styles.dropdownContentWrapper}>
        <img
          src={Resiience}
          alt="Mahanadi River Basin"
          className={styles.contentImage}
          loading="lazy"
          onError={(e) => (e.target.src = "path/to/fallback-image.jpg")}
        />
        <div>
        <p>
          <strong style={{ fontSize: "25px" }}>
            Water Management for a Sustainable Future
          </strong>{" "}
          <br />
          Balancing development with sustainability isn’t easy, but our
          Watershed Resilience Planner makes it possible. From urban areas to
          peri-urban and rural interfaces, this tool provides data-driven
          strategies to optimize water use while preserving ecosystems.
        </p>
        <div className={styles.graph}>
          <p>
            <strong style={{ fontSize: "25px" }}>What It Offers:</strong> <br />
           <li> Sophisticated hydrological modeling for better planning. </li> 
            <li>Solutions that bridge urban needs with ecological priorities.</li>  
            <li>Strategies for long-term sustainability and water security.</li>
          </p>
        </div>
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
            <Link to="/">Home</Link> <span>/</span> <Link to="#">HydroPinn</Link>
          </div>
          <div className={styles.hydroGNNBannerContentColumn}>
            <div className={styles.hydroGNNBannerContentCol_1}>
              <h1>HydroPinn: Revolutionizing Hydrological Predictions</h1>
              <p>
                Dive into the power of Graph Neural Networks (GNNs) in
                hydrological modeling. Understand how HydroPinn enhances flood
                predictions and water resource management through advanced data
                analytics.
              </p>
              <button>Learn More</button>
            </div>
            <div className={styles.hydroGNNBannerContentCol_2}>
              <img
                src="https://i.pinimg.com/originals/bb/19/f6/bb19f656b76867d1a39d56c755495458.gif"
                alt="Img"
              />
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
