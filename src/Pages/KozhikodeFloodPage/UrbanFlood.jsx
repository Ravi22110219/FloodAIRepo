import React from "react";
import styles from "./UrbanFlood.module.css";
import { Link } from "react-router-dom";
import RealTimeChart from "../RealTimeChart/RealTimeChart";

const UrbanFlood = () => {

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
    <section>
      {/* <div className={styles.urbanFloodBanner}>
        <div className={styles.urbanFloodBannerLinks}>
          <Link to="/">Home</Link> <span>/</span> <Link to="#">Urban Flood</Link>
        </div>
        <div className={styles.urbanFloodBannerContentColumn}>
          <div className={styles.urbanFloodBannerContentCol_1}>
            <h1>Understanding Urban Floods</h1>
            <p>
              Discover the causes, impacts, and strategies to manage urban
              flooding effectively. Explore key insights into flood-prone zones
              and their sustainable solutions.
            </p>
            <button>Learn More</button>
          </div>
          <div className={styles.urbanFloodBannerContentCol_2}>
           
          </div>
        </div>
      </div> */}

      <div className={styles.kozhikodeMapBox}>
        <div className={styles.mapColumn}>
          <div className={styles.mapHeading}>
            <h1>3 Days Flood Map </h1>
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
          <RealTimeChart />
          {/* <table className={styles.impactedAreasTable}>
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
          </table> */}
        </div>
      </div>
    </section>
  );
};


export default UrbanFlood;