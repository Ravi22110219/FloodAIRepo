import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/photos/logo.jpg";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";


const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [showFeeDropdown, setShowFeeDropdown] = useState(false);
  const [showCourseAndBatchDropdown, setShowCourseAndBatchDropdown] =
    useState(false);
  const [showAboutUsDropdown, setShowAboutUsDropdown] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
    if (!menuActive && window.innerWidth < 1080) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleMenuItemClick = () => {
    setMenuActive(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setHomeActive(true);
    } else {
      setHomeActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.navbarSection}>
      <div className={`${styles.home} ${homeActive ? styles.active : ""}`}>
        <nav className={styles.mainNavbar}>
          <div className={styles.navLogo}>
            <a href="/">
              {" "}
              <img src={logo} alt="Flood AI logo" className={styles.logo} />
            </a>
            <div className={styles.navText}>
              <h1>Flood AI</h1>
              {/* <h3>IIT Gandhinagar</h3> */}
            </div>
          </div>
          <ul
            className={`${styles.navList} ${menuActive ? styles.active : ""}`}
          >
            <li
              onMouseEnter={() => setShowCourseAndBatchDropdown(true)}
              onMouseLeave={() => setShowCourseAndBatchDropdown(false)}
              className="block py-2 pr-4 pl-3 duration-200 text-gray-950 border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0"
            ><a href="/">Home</a>
              
            </li>
            <li
            className="block py-2 pr-4 pl-3 duration-200 text-gray-950 border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0"
            ><a href="/HydroGNN">HydroGNN</a></li>
            <li
            className="block py-2 pr-4 pl-3 duration-200 text-gray-950 border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0"
            >
              {" "}
              <div className={styles.listDropDown}>
                {" "}
                Surat Flood{" "}
                <RiArrowDropDownLine
                  style={{ height: "25px", width: "25px" }}
                />
              </div>
            </li>
            <li 
            className="block py-2 pr-4 pl-3 duration-200 text-gray-950 border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0"
            >
              <div className={styles.listDropDown}>
                {" "}
                Kozhikode Flood
                <RiArrowDropDownLine
                  style={{ height: "25px", width: "25px" }}
                />
              </div>
            </li>
            <li
            className="block py-2 pr-4 pl-3 duration-200 text-gray-950 border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0" 
            >
              <div className={styles.listDropDown}>
                {" "}
                Gondal Flood
                <RiArrowDropDownLine
                  style={{ height: "25px", width: "25px" }}
                />
              </div>
            </li>
            <li
            className="block py-2 pr-4 pl-3 duration-200 text-gray-950 border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0"
            ><a href="/CatchmentClassification">Catchment Classification</a></li>
            <li
            className="block py-2 pr-4 pl-3 duration-200 text-gray-950 border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0"
            >Retrun Period Analysis</li>
            <li className={styles.floodAiButton}>Flood Dashboard</li>
          </ul>
          <div className={styles.menuBtn} onClick={handleMenuItemClick && handleMenuToggle}>
                    {menuActive ? (
                        <AiOutlineMenuUnfold style={{ height: "50px", width: "100px"}} />
                    ) : (
                        <AiOutlineMenuFold style={{ height: "50px", width: "100px"}} />
                    )}
                </div>
         
        </nav>
      </div>{" "}
    {/*  </section>
           <li>
                <a
                    href="#"
                    onClick={handleMenuItemClick && handleMenuToggle}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Admission
                </a>
            </li>
            <li
                onMouseEnter={() => setShowFeeDropdown(true)}
                onMouseLeave={() => setShowFeeDropdown(false)}
            >
                <a
                    href={"#"}
                 
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Fee & Scholarship
                </a>
                {showFeeDropdown && (
                    <div className={styles.dropdown}>
                        <a
                            href="#"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Fee Structure
                        </a>
                        <a
                            href="#"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Scholarship
                        </a>
                        <a
                            href="#"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Refund Rules
                        </a>
                    </div>
                )}
            </li>
            <li>
                <a
                    href="#"
                    onClick={handleMenuItemClick && handleMenuToggle}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Gallery
                </a>
            </li>

            <li  onMouseEnter={() => setShowAboutUsDropdown(true)}
                 onClick={() => setShowAboutUsDropdown(true)}
                onMouseLeave={() => setShowAboutUsDropdown(false)}>
                <a
                    href="#"
                   
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    About Us
                </a>
              
                {showAboutUsDropdown && (
                    <div className={styles.dropdown}>
                        <a
                            href="#"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b text-gray-950 font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Infinite EduVerse
                        </a>
                        <a
                            href="#"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Director's
                        </a>
                        <a
                            href="#"
                            onClick={handleMenuItemClick && handleMenuToggle}
                            className={({ isActive }) =>
                                `block py-2 p-1 pr-4 pl-3 duration-200 ${isActive ? "text-gray-950" : "text-gray-950"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                            }
                        >
                            Our Motivation
                        </a>
                        </div>
                )}
            </li>
      

            <li>
                <a
                    href="#"
                    onClick={handleMenuItemClick && handleMenuhrefggle}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Results
                </a>
            </li>
            <li>
                <a
                    href="#"
                    onClick={handleMenuItemClick && handleMenuToggle}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-950"} border-b font-medium text-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                    }
                >
                    Blogs
                </a>
            </li>
           </ul>
           <div className={styles.menuBtn} onClick={handleMenuItemClick && handleMenuToggle}>
                    {menuActive ? (
                        <AiOutlineMenuUnfold style={{ height: "50px", width: "100px"}} />
                    ) : (
                        <AiOutlineMenuFold style={{ height: "50px", width: "100px"}} />
                    )}
                </div>
              
            </nav>
        </div>  */}
    </section>
  );
};

export default NavBar;
