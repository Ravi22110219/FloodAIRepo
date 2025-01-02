import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./Navbar.module.css";
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/photos/MIRLOGO.png";

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
            <NavLink to="/" onClick={handleMenuItemClick}  className={({ isActive }) =>
                        `block duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }><li>Home</li></NavLink>
            <NavLink to="/hydro-gnn" onClick={handleMenuItemClick}
             className={({ isActive }) =>
              `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
          }><li>Product</li></NavLink>
           <NavLink to="/hydro-gnn" onClick={handleMenuItemClick}
             className={({ isActive }) =>
              `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
          }><li>Demo</li></NavLink>
           <NavLink to="/hydro-gnn" onClick={handleMenuItemClick}
             className={({ isActive }) =>
              `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
          }><li>Research</li></NavLink>
           <NavLink to="/hydro-gnn" onClick={handleMenuItemClick}
             className={({ isActive }) =>
              `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
          }><li>About Us</li></NavLink>
           <NavLink to="/hydro-gnn" onClick={handleMenuItemClick}
             className={({ isActive }) =>
              `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
          }><li>Contact Us</li></NavLink>
            {/* <li className="font-medium text-sm mt-1">
             <label> Surat Flood
              
                <input type="checkbox" 
                  
                   
                />
                <RiArrowDropDownLine className={styles.dropdownIcon} />
              </label>
              <ul>
                <NavLink to="/surat-riverine-flood" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }><li>Riverine Flood</li></NavLink>
                <li className="font-medium text-sm ">
                 <label> Surat Flood 2006
                  
                    <input type="checkbox" />
                    <RiArrowDropDownLine className={styles.dropdownIcon} />
                  </label>
                  <ul>
                   <NavLink to="/surat-flood-2006/urban" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }> <li>Urban</li></NavLink>
                    <NavLink to="/surat-flood-2006/rural" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }><li>Rural</li></NavLink>
                  </ul>
                </li>
                <NavLink to="/research-papers-home" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }><li>Surat Flood Articles</li></NavLink>
              </ul>
            </li>
            <li className="font-medium text-sm mt-1">
             <label> Kozhikode Flood
              
                <input type="checkbox" />
                <RiArrowDropDownLine className={styles.dropdownIcon} />
              </label>
              <ul>
                <NavLink to="/kozhikode-urban-flood" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }><li>Urban</li></NavLink>
                <NavLink to="/kozhikode-urban-flood" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }><li>Rural</li></NavLink>
                <NavLink to="/research-papers-home" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }><li>Kozhikode Flood Articles</li></NavLink>
              </ul>
            </li>
            <li className="font-medium text-sm mt-1">
             <label> Gondal Flood
              
                <input type="checkbox" />
                <RiArrowDropDownLine className={styles.dropdownIcon} />
              </label>
              <ul>
                <NavLink to="/gondal-surface-flood" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }><li>Surface</li></NavLink>
               <NavLink to="/gondal-sub-surface-flood" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }> <li>Subsurface</li></NavLink>
               <NavLink to="/research-papers-home" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }> <li>Gondal Flood Articles</li></NavLink>
              </ul>
            </li> */}
            {/* <NavLink to="/catchment-classification" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }><li> Catchment Classification</li></NavLink>
           <NavLink to="/return-period-analysis" onClick={handleMenuItemClick}
                 className={({ isActive }) =>
                  `block  duration-100 ${isActive ? "text-orange-600" : "text-black-900"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
              }> <li>Return Period Analysis</li></NavLink> */}
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
