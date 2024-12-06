import React from "react";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerText}>
        <div>
          <h1>Welcome Into Flood AI</h1>
          <button>Coming Soon...</button>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
