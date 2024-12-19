import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./Navbar.module.css";
import {Link, NavLink} from "react-router-dom"

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
            <li><Link to="/" onClick={handleMenuItemClick}>Home</Link></li>
            <NavLink to="/hydro-gnn" onClick={handleMenuItemClick}><li>HydroGNN</li></NavLink>
            <li>
              Surat Flood
              <label>
                <input type="checkbox" />
                <RiArrowDropDownLine className={styles.dropdownIcon} />
              </label>
              <ul>
                <Link to="/surat-riverine-flood" onClick={handleMenuItemClick}><li>Riverine Flood</li></Link>
                <li>
                  Surat Flood 2006
                  <label>
                    <input type="checkbox" />
                    <RiArrowDropDownLine className={styles.dropdownIcon} />
                  </label>
                  <ul>
                   <Link to="/surat-flood-2006/urban" onClick={handleMenuItemClick}> <li>Urban</li></Link>
                    <Link to="/surat-flood-2006/rural" onClick={handleMenuItemClick}><li>Rural</li></Link>
                  </ul>
                </li>
                <Link to="/research-papers-home" onClick={handleMenuItemClick}><li>Surat Flood Articles</li></Link>
              </ul>
            </li>
            <li>
              Kozhikode Flood
              <label>
                <input type="checkbox" />
                <RiArrowDropDownLine className={styles.dropdownIcon} />
              </label>
              <ul>
                <Link to="/kozhikode-urban-flood" onClick={handleMenuItemClick}><li>Urban</li></Link>
                <Link to="/kozhikode-urban-flood" onClick={handleMenuItemClick}><li>Rural</li></Link>
                <Link to="/research-papers-home" onClick={handleMenuItemClick}><li>Kozhikode Flood Articles</li></Link>
              </ul>
            </li>
            <li>
              Gondal Flood
              <label>
                <input type="checkbox" />
                <RiArrowDropDownLine className={styles.dropdownIcon} />
              </label>
              <ul>
                <Link to="/gondal-surface-flood" onClick={handleMenuItemClick}><li>Surface</li></Link>
               <Link to="/gondal-sub-surface-flood" onClick={handleMenuItemClick}> <li>Subsurface</li></Link>
               <Link to="/research-papers-home" onClick={handleMenuItemClick}> <li>Gondal Flood Articles</li></Link>
              </ul>
            </li>
            <li><Link to="/catchment-classification" onClick={handleMenuItemClick}> Catchment Classification</Link></li>
            <li><Link to="/return-period-analysis" onClick={handleMenuItemClick}>Return Period Analysis</Link></li>
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
