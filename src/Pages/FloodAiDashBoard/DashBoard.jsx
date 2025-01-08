import React from "react";
import styles from "./DashBoard.module.css"
import { NavLink } from "react-router-dom";

const DashBoard = () =>{
  return(
    <div className={styles.dashBoardPage}>
      <h1>Coming Soon...</h1>
     <NavLink to="/contact-us"><button>Contact Us</button></NavLink> 
    </div>
  )
}

export default DashBoard;