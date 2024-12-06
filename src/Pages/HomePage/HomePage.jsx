import React from "react";
import NavBar from "../../Components/NavbarSection/Navbar";

const HomePage = () =>
  {
      return(
        <>
        <NavBar />
        <section className={styles.bannerSection}>
      <div className={styles.bannerText}>
        <div>
          <h1>Welcome Into Flood AI</h1>
          <button>Click For Demo</button>
        </div>
      </div>
    </section>


        </>
      )
};
export default HomePage;