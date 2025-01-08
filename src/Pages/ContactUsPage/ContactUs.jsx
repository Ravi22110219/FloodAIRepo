import React, { useRef } from "react";
import styles from "./ContactUs.module.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gcqtbld", // Replace with your Email.js service ID
        "template_16kukl2", // Replace with your Email.js template ID
        form.current,
        "em7z6sDqcxCGKB88W" // Replace with your Email.js public key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Failed to send the email.", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );

    e.target.reset(); // Reset the form fields
  };

  return (
    <section>
      <div className={styles.contactUsBanner}>
        <div className={styles.contactUsBannerLinks}>
          <Link to="/">Home</Link> <span>/</span>{" "}
          <Link to="#">Contact Us</Link>
        </div>
        <div className={styles.contactUsBannerContentColumn}>
          <div className={styles.contactUsBannerContentCol_1}>
            <h1>Get in Touch with Us</h1>
            <p>
              Have questions or need assistance? Reach out to our team for
              support, inquiries, or feedback. We’re here to help!
            </p>
            <Link to="/contact-us">
              <button>Contact Now</button>
            </Link>
          </div>
          <div className={styles.contactUsBannerContentCol_2}>
            <img
              src=" https://i.pinimg.com/originals/a5/2b/23/a52b232810587be914eab7c004e9fb08.gif"
              alt="Contact Us Image"
            />
          </div>
        </div>
      </div>

      <div className={styles.contactDetails}>
        <div className={styles.contactCard}>
          <h2>Email</h2>
          <p>itsupport@airesqclimsols.com</p>
        </div>
        <div className={styles.contactCard}>
          <h2>Address</h2>
          <p>Research Park, Indian Institute of Technology Gandhinagar</p>
        </div>
      </div>

      <div className={styles.newsletterSection}>
        <div className={styles.imageContainer}>
          <img
            src="https://www.freeiconspng.com/uploads/help-desk-png-31.png"
            alt="Help Desk"
            className={styles.helpDeskImage}
          />
        </div>
        <div className={styles.formContainer}>
          <form
            ref={form}
            className={styles.newsletterForm}
            onSubmit={sendEmail}
          >
            <div className={styles.row}>
              <input
                type="text"
                name="first_name"
                placeholder="First name *"
                className={styles.inputField}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name *"
                className={styles.inputField}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className={styles.inputField}
              required
            />
            <input
              type="text"
              name="job_title"
              placeholder="Job title *"
              className={styles.inputField}
              required
            />
            <input
              type="text"
              name="company_name"
              placeholder="Company name *"
              className={styles.inputField}
              required
            />
            <select
              name="industry"
              className={styles.inputField}
              required
              defaultValue=""
            >
              <option value="" disabled>
                Industry *
              </option>
              <option value="tech">Government</option>
              <option value="tech">Tech</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Insurance</option>
              <option value="other">Other</option>
            </select>

            <div className={styles.checkboxGroup}>
              <div>
                <label>
                  <input type="checkbox" required /> I consent to receive
                  marketing communications from AIResq.*
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" required /> I consent to my data being
                  stored and processed by AIResq, in line with their privacy
                  policy.*
                </label>
              </div>
            </div>
            <p className={styles.privacyPolicy}>
              For more information, please review our Privacy Policy.
            </p>
            <button type="submit" className={styles.submitButton}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
