import React from "react";
import NavBar from "./Components/NavbarSection/Navbar";
import Footer from "./Components/FooterSection/Footer";
import { Outlet } from "react-router-dom";
import NewNavbar from "./Components/NavbarSection/Nvabar2";

function Layout() {
  return(
    <>
    <NewNavbar />
    <Outlet />
    {/* <Footer /> */}

    </>
  )
};

export default Layout;