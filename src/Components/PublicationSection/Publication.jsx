import React from "react";
import styles from "./Publication.module.css"

import { IoIosArrowRoundForward } from "react-icons/io";
import PaperImg from "../../assets/photos/Publication1.jpg"

const Publication = () => {

  return(
    <section className={styles.publicationSection}>
      <div className={styles.publicationBox}>
      <div className={styles.publicationHeading}>
                <h1>Publication</h1>
        
        </div>
        <div className={styles.publicationPapers}>
           <div className={styles.paper}>
            <div className={styles.paperImg}>
              <img src={PaperImg} alt="" />
              <div className={styles.overlay}>
                  <div className={styles.text}>Highlights</div>
              </div>
            </div>
            <div className={styles.paperButton}>
              <button>Read the case study </button>
              <IoIosArrowRoundForward style={{ height: "45px", width: "45px" }}/>
            </div>
            
           </div>
           <div className={styles.paper}>
            <div className={styles.paperImg}>
              <img src={PaperImg} alt="" />
              <div className={styles.overlay}>
                  <div className={styles.text}>Highlights</div>
              </div>
            </div>
            <div className={styles.paperButton}>
              <button>Read the case study </button>
              <IoIosArrowRoundForward style={{ height: "45px", width: "45px" }}/>
            </div>
            
           </div>
           <div className={styles.paper}>
            <div className={styles.paperImg}>
              <img src={PaperImg} alt="" />
              <div className={styles.overlay}>
                  <div className={styles.text}>Highlights</div>
              </div>
            </div>
            <div className={styles.paperButton}>
              <button>Read the case study </button>
              <IoIosArrowRoundForward style={{ height: "45px", width: "45px" }}/>
            </div>
            
           </div>

           
         
        
        </div>
      </div>



    </section>
  )
};

export default Publication;