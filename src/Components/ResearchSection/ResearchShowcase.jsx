import React, { useState } from "react";
import Styles from "./ResearchShowcase.module.css";
import Img1 from "../../assets/photos/Research-Img1.jpg";
import Img2 from "../../assets/photos/Research-Img2.jpg";
import Img3 from "../../assets/photos/palsar_inundation_gif.gif";

const ResearchShowcase = () => {
  const [zoomStyle, setZoomStyle] = useState({});

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

  return (
    <section className={Styles.researchShowcaseSection}>
      <div className={Styles.researchHeading}>
        <h1>Research Showcase</h1>
      </div>
      <div className={Styles.researchImgs}>
        {[Img1, Img2, Img3].map((img, index) => (
          <div
            key={index}
            className={Styles.Img}
            style={zoomStyle.backgroundImage === `url(${img})` ? zoomStyle : { backgroundImage: `url(${img})` }}
            onMouseMove={(e) => handleMouseMove(e, img)}
            onMouseLeave={handleMouseLeave}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ResearchShowcase;
