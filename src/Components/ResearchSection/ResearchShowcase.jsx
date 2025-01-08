import React, { useState, useEffect } from "react";
import styles from "./ResearchShowcase.module.css";
import Img1 from "../../assets/photos/research_showcase_aug_2024_Pravin _page-0001.jpg";
import Img2 from "../../assets/photos/research_showcase_aug_2024_Raviraj _page-0001.jpg";
import Img3 from "../../assets/photos/ADRIJA_RESEARCH_POSTER.jpg";

const ResearchShowcase = () => {
  const [zoomStyle, setZoomStyle] = useState({});
  const [modalImg, setModalImg] = useState(null);

  const handleMouseMove = (e, img) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomStyle({
      backgroundImage: `url(${img})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "300%",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({});
  };

  const openModal = (img) => {
    setModalImg(img);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  useEffect(() => {
    if (modalImg) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when modal is closed
      document.body.style.overflow = "";
    }
    return () => {
      // Cleanup in case of component unmount
      document.body.style.overflow = "";
    };
  }, [modalImg]);

  return (
    <section className={styles.researchShowcaseSection}>
      <div className={styles.researchHeading}>
        <h1>Research Showcase</h1>
      </div>
      <div className={styles.researchImgs}>
        {[Img1, Img2, Img3].map((img, index) => (
          <div
            key={index}
            className={styles.Img}
            style={zoomStyle.backgroundImage === `url(${img})` ? zoomStyle : { backgroundImage: `url(${img})` }}
            onMouseMove={(e) => handleMouseMove(e, img)}
            onMouseLeave={handleMouseLeave}
            onClick={() => openModal(img)}
          ></div>
        ))}
      </div>

      {modalImg && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={modalImg} alt="Research" />
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResearchShowcase;
