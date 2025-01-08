import React from "react";
import styles from "./Research.module.css";
import { Link } from "react-router-dom";
import Publication from "../../Components/PublicationSection/Publication";
import ResearchShowcase from "../../Components/ResearchSection/ResearchShowcase";

const ResearchPage = () => {
  return (
    <section className={styles.researchPageSection}>
      <div className={styles.researchPageBanner}>
        <div className={styles.researchPageLinks}>
          <Link to="/">Home</Link> <span>/</span> <Link to="#">Research</Link>
        </div>

        <div className={styles.researchPageContentColumn}>
          <div className={styles.researchPageContentCol_1}>
            <h1>Advancing Resilience Through Innovation</h1>
            <ul className={styles.bulletPoints}>
              <li>
                <strong>
                  Physics-Guided AI for Urban and peri-urban Hydrology:
                </strong>{" "}
                Cutting-edge solutions for urban flooding.
              </li>
              <li>
                <strong>
                  Climate Variability and Infrastructure Resilience:
                </strong>{" "}
                Designing solutions to mitigate impacts of climate extremes.
              </li>
              <li>
                <strong>System Recovery Modeling:</strong> Proprietary
                algorithms for large-scale system recovery post-flooding.
              </li>
            </ul>
            <button>Read More</button>
          </div>

          <div className={styles.researchPageContentCol_2}>
            <img
              src="https://i.pinimg.com/originals/a5/2b/23/a52b232810587be914eab7c004e9fb08.gif"
              alt="AI Research"
            />
          </div>
        </div>
      </div>

      <Publication />
      <ResearchShowcase />
    </section>
  );
};

export default ResearchPage;
