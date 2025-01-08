import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";

const SidebarPage = () => {
  const [activeSection, setActiveSection] = useState("section1");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = activeSection;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <ul className={styles.treeNav}>
          <li
            className={`${styles.treeLink} ${
              activeSection === "section1" ? styles.active : ""
            }`}
            onClick={() => handleNavigation("section1")}
          >
            Section 1
          </li>
          <li
            className={`${styles.treeLink} ${
              activeSection === "section2" ? styles.active : ""
            }`}
            onClick={() => handleNavigation("section2")}
          >
            Section 2
          </li>
          <li
            className={`${styles.treeLink} ${
              activeSection === "section3" ? styles.active : ""
            }`}
            onClick={() => handleNavigation("section3")}
          >
            Section 3
          </li>
        </ul>
      </aside>
      <main className={styles.content}>
        <section id="section1" className={styles.section}>
          <h2>Section 1</h2>
          {/* Paste the Urban Flood content for Section 1 here */}
        </section>
        <section id="section2" className={styles.section}>
          <h2>Section 2</h2>
          {/* Paste similar content for Section 2 */}
        </section>
        <section id="section3" className={styles.section}>
          <h2>Section 3</h2>
          {/* Paste similar content for Section 3 */}
        </section>
      </main>
    </div>
  );
};

export default SidebarPage;
