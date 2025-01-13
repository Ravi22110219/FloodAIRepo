import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./Navbar.module.css";
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/photos/logo1.png";

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
            src={logo}
            className={styles.logoImg}
          />
          <h1>AIResQ</h1>
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
  <NavLink 
    to="/" 
    onClick={handleMenuItemClick} 
    className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
  >
    <li>Home</li>
  </NavLink>
  <NavLink 
    to="/hydro-pinn" 
    onClick={handleMenuItemClick} 
    className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
  >
    <li>Product</li>
  </NavLink>
  {/* <NavLink 
    to="/kozhikode-urban-flood" 
    onClick={handleMenuItemClick} 
    className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
  >
    <li>Demo</li>
  </NavLink> */}
  <NavLink 
    to="/urban-flood" 
    onClick={handleMenuItemClick} 
    className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
  >
    <li>Services</li>
  </NavLink>
  <NavLink 
    to="/research-page" 
    onClick={handleMenuItemClick} 
    className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
  >
    <li>Research</li>
  </NavLink>

  <NavLink 
    to="/about-us" 
    onClick={handleMenuItemClick} 
    className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
  >
    <li>Company</li>
  </NavLink>
  <NavLink 
    to="/contact-us" 
    onClick={handleMenuItemClick} 
    className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
  >
    <li>Contact Us</li>
  </NavLink>
  {/* <li className={styles.menuItem}>
    <label>
      Surat Flood
      <input type="checkbox" />
      <RiArrowDropDownLine className={styles.dropdownIcon} />
    </label>
    <ul>
      <NavLink 
        to="/surat-riverine-flood" 
        onClick={handleMenuItemClick} 
        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
      >
        <li>Riverine Flood</li>
      </NavLink>
      <li className={styles.menuItem}>
        <label>
          Surat Flood 2006
          <input type="checkbox" />
          <RiArrowDropDownLine className={styles.dropdownIcon} />
        </label>
        <ul>
          <NavLink 
            to="/surat-flood-2006/urban" 
            onClick={handleMenuItemClick} 
            className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
          >
            <li>Urban</li>
          </NavLink>
          <NavLink 
            to="/surat-flood-2006/rural" 
            onClick={handleMenuItemClick} 
            className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
          >
            <li>Rural</li>
          </NavLink>
        </ul>
      </li>
      <NavLink 
        to="/research-papers-home" 
        onClick={handleMenuItemClick} 
        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
      >
        <li>Surat Flood Articles</li>
      </NavLink>
    </ul>
  </li>
  <li className={styles.menuItem}>
    <label>
      Kozhikode Flood
      <input type="checkbox" />
      <RiArrowDropDownLine className={styles.dropdownIcon} />
    </label>
    <ul>
      <NavLink 
        to="/kozhikode-urban-flood" 
        onClick={handleMenuItemClick} 
        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
      >
        <li>Urban</li>
      </NavLink>
      <NavLink 
        to="/kozhikode-urban-flood" 
        onClick={handleMenuItemClick} 
        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
      >
        <li>Rural</li>
      </NavLink>
      <NavLink 
        to="/research-papers-home" 
        onClick={handleMenuItemClick} 
        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
      >
        <li>Kozhikode Flood Articles</li>
      </NavLink>
    </ul>
  </li>
  <li className={styles.menuItem}>
    <label>
      Gondal Flood
      <input type="checkbox" />
      <RiArrowDropDownLine className={styles.dropdownIcon} />
    </label>
    <ul>
      <NavLink 
        to="/gondal-surface-flood" 
        onClick={handleMenuItemClick} 
        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
      >
        <li>Surface</li>
      </NavLink>
      <NavLink 
        to="/gondal-sub-surface-flood" 
        onClick={handleMenuItemClick} 
        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
      >
        <li>Subsurface</li>
      </NavLink>
      <NavLink 
        to="/research-papers-home" 
        onClick={handleMenuItemClick} 
        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
      >
        <li>Gondal Flood Articles</li>
      </NavLink>
    </ul>
  </li> */}
  {/* <NavLink 
    to="/catchment-classification" 
    onClick={handleMenuItemClick} 
    className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
  >
    <li>Catchment Classification</li>
  </NavLink>
  <NavLink 
    to="/return-period-analysis" 
    onClick={handleMenuItemClick} 
    className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
  >
    <li>Return Period Analysis</li>
  </NavLink> */}
</ul>

          <ul className={styles.otherOption}>
            <li>
             <NavLink to="/Flood-ai-DashBoard"
               onClick={handleMenuItemClick} 
             ><button className={styles.floodAiButton}>Flood Dashboard</button></NavLink> 
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
