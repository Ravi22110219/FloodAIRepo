import React from "react";
import NavBar from "./Components/NavbarSection/Navbar";
import Footer from "./Components/FooterSection/Footer";
import { Outlet } from "react-router-dom";
import NewNavbar from "./Components/NavbarSection/Navbar2";
import HeaderBg from "./Components/HeaderBg/HeaderBg";

function Layout() {
  return(
    <>
    <NavBar />
    <HeaderBg />
    <Outlet />
    <Footer /> 

    </>
  )
};

export default Layout;