import React from "react";
import styles from "./MapTest.module.css";

const MapTesting = () => {
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
    <section className={styles.kozhikodeSection}>
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
              style={{ border: "none" }}
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
    </section>
  );
};

export default MapTesting;
