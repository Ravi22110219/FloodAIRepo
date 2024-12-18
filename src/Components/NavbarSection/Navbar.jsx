import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const navbarRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
    if (!menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleMenuItemClick = () => {
    setMenuActive(false);
    document.body.style.overflow = "auto";
  };
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setHomeActive(true);
    } else {
      setHomeActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setMenuActive(false);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    if (menuActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuActive]);

  return (
    <>
      <header className={`${styles.header} ${homeActive ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
          <img
            src="https://practice-oz2i-git-main-ravi-kumawats-projects.vercel.app/assets/logonew-DHxoMsjw.png"
            alt="Flood AI Logo"
            className={styles.logoImg}
          />
          <h1>Flood AI</h1>
        </div>
        <div ref={navbarRef} className={`${styles.navbar} ${menuActive ? styles.active : ""}`}>
          <input
            type="checkbox"
            id="openNav"
            className={styles.navToggle}
            checked={menuActive}
            onChange={handleMenuToggle}
          />
          <label htmlFor="openNav" className={styles.openNav}>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul className={styles.menu}>
            <li>Home</li>
            <li>HydroGNN</li>
            <li>
              <a href="">Surat Flood</a>
              <label>
                <input type="checkbox" />
                <RiArrowDropDownLine className={styles.dropdownIcon} />
              </label>
              <ul>
                <li>Riverine Flood</li>
                <li>
                  Surat Flood 2006
                  <label>
                    <input type="checkbox" />
                    <RiArrowDropDownLine className={styles.dropdownIcon} />
                  </label>
                  <ul>
                    <li>Urban</li>
                    <li>Rural</li>
                  </ul>
                </li>
                <li>Surat Flood Articles</li>
              </ul>
            </li>
            <li>
              Kozhikode Flood
              <label>
                <input type="checkbox" />
                <RiArrowDropDownLine className={styles.dropdownIcon} />
              </label>
              <ul>
                <li>Urban</li>
                <li>Rural</li>
                <li>Kozhikode Flood Articles</li>
              </ul>
            </li>
            <li>
              Gondal Flood
              <label>
                <input type="checkbox" />
                <RiArrowDropDownLine className={styles.dropdownIcon} />
              </label>
              <ul>
                <li>Surface</li>
                <li>Subsurface</li>
                <li>Gondal Flood Articles</li>
              </ul>
            </li>
            <li>Catchment Classification</li>
            <li>Return Period Analysis</li>
          </ul>
          <ul className={styles.otherOption}>
            <li>
              <button className={styles.floodAiButton}>Flood Dashboard</button>
            </li>
          </ul>
        </div>
      </header>

      {/* Dark Overlay */}
      {menuActive && <div className={styles.overlay}></div>}
    </>
  );
};

export default Navbar;
