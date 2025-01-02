import React from "react";
import styles from "./Navbar2.module.css";
import logo from "../../assets/photos/logo4.png";
import { NavLink } from "react-router-dom";

const NewNavbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo_img" />
        <h1>AIResq</h1>
      </div>
      <nav className={styles.navLinks}>
        <ul className={styles.Links}>
          <NavLink to="/">
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to="/hydro-gnn">
            {" "}
            <li>Product</li>
          </NavLink>
          <NavLink to="/kozhikode-urban-flood">
            {" "}
            <li>Demo</li>
          </NavLink>
          <NavLink to="/research-papers-home">
            {" "}
            <li>Research</li>
          </NavLink>
          <NavLink>
            {" "}
            <li>About Us</li>
          </NavLink>
          <NavLink>
            {" "}
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </nav>
      <div className={styles.otherOption}>
        <button className={styles.floodAiButton}>Flood Dashboard</button>
      </div>
    </header>
  );
};

export default NewNavbar;
