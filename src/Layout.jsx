import React from "react";
import NavBar from "./Components/NavbarSection/Navbar";
import Footer from "./Components/FooterSection/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return(
    <>
    <NavBar />
    <Outlet />
    <Footer />

    </>
  )
};

export default Layout;