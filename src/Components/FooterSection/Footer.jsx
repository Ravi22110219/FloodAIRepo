import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaYoutube,  FaLinkedinIn  } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter Section */}
        <div className={styles.newsletterSection}>
          <h2>Newsletter</h2>
          <p>Sign up for periodic updates from our team</p>
          <form className={styles.newsletterForm}>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="First name *"
                className={styles.inputField}
                required
              />
              <input
                type="text"
                placeholder="Last name *"
                className={styles.inputField}
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email *"
              className={styles.inputField}
              required
            />
            <input
              type="text"
              placeholder="Job title*"
              className={styles.inputField}
              required
            />
            <input
              type="text"
              placeholder="Company name *"
              className={styles.inputField}
              required
            />
       <select className={styles.inputField} required defaultValue="">
  <option value="" disabled>
    Industry*
  </option>
  <option value="tech">Tech</option>
  <option value="finance">Finance</option>
  <option value="healthcare">Healthcare</option>
  <option value="other">Other</option>
</select>

            <div className={styles.checkboxGroup}>
              <label>
                <input type="checkbox" required /> I consent to receive
                marketing communications from AIResQ.*
              </label>
              <label>
                <input type="checkbox" required /> I consent to my data being
                stored and processed by AIResQ, in line with their privacy
                policy.*
              </label>
            </div>
            <p className={styles.privacyPolicy}>
              For more information please review our Privacy Policy.
            </p>
            <button type="submit" className={styles.submitButton}>
              Sign up
            </button>
          </form>
        </div>

        {/* More Section */}
        <div className={styles.moreSection}>
          <h2>More</h2>
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Customize consent preferences</a></li>
          </ul>
          <div className={styles.socialMediaSection}> <h2>Visit Our Social Media</h2>
          <div className={styles.footerLogo}>
            <div className={styles.socialMediaAccounts}>
              <ul className={styles.socialUl}>
                <li><a href="#" target="main" className={styles.telegram}><FaLinkedinIn className="fab fa-telegram" style={{color:"#0077B5",marginLeft:"5px",marginTop:"5px"}}/>
               </a></li>
                <li><a href="#" target="main" className={styles.facebook}><FaFacebook className="fab fa-facebook" style={{color:"#316FF6",marginLeft:"5px",marginTop:"5px"}}/></a></li>
                <li><a href="#" target="main" className={styles.instagram}><FaSquareInstagram className="fab fa-instagram" style={{color:"#ee2a7b",marginLeft:"5px",marginTop:"5px"}} /></a></li>
                <li><a href="#" target="main" className={styles.twitter}><FaSquareXTwitter className="fab fa-twitter" style={{color:"#ffffff",marginLeft:"5px",marginTop:"5px"}} />
                </a></li>
                <li><a href="#" target="main" className={styles.youtube}><FaYoutube className="fab fa-youtube" style={{color:"#ff0000",marginLeft:"5px",marginTop:"5px"}} />
                </a></li>
              </ul>
            </div>
          </div>
          </div>
        </div>

        {/* HQ Section */}
        <div className={styles.hqSection}>
          <h2>Address</h2>
          <p>IIT Gandhinagar</p>
          <p>Palaj, Gandhinagar</p>
          <p>Gujarat</p>
          <p>India</p>
        </div>
      </div>
      <div className={styles.rightSection}>
      <div className={styles.copyRights}>
          <p><a href="#">Terms of Use | Privacy Policy </a></p>
          <p><span className="far fa-copyright"><FaRegCopyright /></span> AIResQ 2024, All Rights Reserved<span className="far fa-copyright" style={{marginLeft:"5px"}}><GoArrowUpRight  /></span> </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
