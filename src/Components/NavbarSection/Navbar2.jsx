import React, { useState, useEffect } from "react";
import styles from "./Navbar2.module.css";
import logo from "../../assets/photos/logo4.png";
import { NavLink } from "react-router-dom";

const NewNavbar = () => {
  const [homeActive, setHomeActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setHomeActive(true);
    } else {
      setHomeActive(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${homeActive ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo_img" />
        <h1>AIResq</h1>
      </div>

      {/* Menu Button for smaller screens */}
      <button
        className={`${styles.menuButton} ${
          menuOpen ? styles.hideMenuButton : ""
        }`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation Bar */}
      <nav
        className={`${styles.navLinks} ${
          menuOpen || window.innerWidth > 1000 ? styles.showMenu : ""
        }`}
      >
        <ul className={styles.Links}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/hydro-gnn" onClick={() => setMenuOpen(false)}>
            <li>Product</li>
          </NavLink>
          <NavLink to="/kozhikode-urban-flood" onClick={() => setMenuOpen(false)}>
            <li>Demo</li>
          </NavLink>
          <NavLink to="/research-papers-home" onClick={() => setMenuOpen(false)}>
            <li>Research</li>
          </NavLink>
          <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
            <li>About Us</li>
          </NavLink>
          <NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>
            <li>Contact Us</li>
          </NavLink>
          {/* Add Flood Dashboard as a menu item */}
          <div className={styles.menuFooter}>
            <button
              className={styles.floodAiButton}
              onClick={() => setMenuOpen(false)}
            >
              Flood Dashboard
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default NewNavbar;
