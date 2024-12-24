import React, { useState, useEffect } from "react";
import styles from "./Publication.module.css"; // Import the CSS module
import Img1 from "../../assets/photos/Publication1.jpg";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { Link } from "react-router-dom";

const Publication = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      Img: "https://ars.els-cdn.com/content/image/1-s2.0-S002216942201188X-ga1_lrg.jpg",
      title: "Enhancing predictive skills in physically-consistent way: Physics Informed Machine Learning for hydrological processes",
      Journal:"Journal of Hydrology",
      author: "Pravin Bhasme, Jenil Vagadiya, Udit Bhatia",
      date: "15 December 2022",
      link: "https://www.sciencedirect.com/science/article/pii/S002216942201188X?via%3Dihub",
    },
    {
      Img: "https://ars.els-cdn.com/content/image/1-s2.0-S002216942301363X-ga1_lrg.jpg",
      title: "Improving the interpretability and predictive power of hydrological models: Applications for daily streamflow in managed and unmanaged catchments",
      Journal:"Journal of Hydrology",
      author: "Pravin Bhasme, Udit Bhatia",
      date: "11 January 2024",
      link: "https://www.sciencedirect.com/science/article/pii/S002216942301363X?via%3Dihub",
    },
    {
      Img: "https://content.cld.iop.org/journals/1748-9326/16/10/104050/revision3/erlac2d67f1_hr.jpg",
      title: "Extreme precipitation induced concurrent events trigger prolonged disruptions in regional road networks",
      Journal:"Journal of Hydrology",
      author: "Raviraj Dave, Srikrishnan Siva Subramanian, Udit Bhatia",
      date: "19 October 2021",
      link: "https://iopscience.iop.org/article/10.1088/1748-9326/ac2d67",
    },
    {
      Img: "https://ars.els-cdn.com/content/image/1-s2.0-S2212420923005551-gr1.jpg",
      title: "Protecting heritage: Insights into effective flood management using green infrastructure in a highly urbanized environment",
      Journal:"Journal of Hydrology",
      author: "Angana Borah, Ronita Bardhan, Udit Bhatia",
      date: "15 November 2023",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S2212420923005551?via%3Dihub",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000); // Auto-scroll every 4 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section className={styles.publicationSection}>
      <div className={styles.publicationDiv}>
        <div className={styles.publicationHeading}>
          <h1>Publication</h1>
        </div>
        <div className={styles.publicationButton}>
          <button className={styles.prev} onClick={prevSlide}>
            <FaLeftLong />
          </button>
          <button className={styles.next} onClick={nextSlide}>
            <FaRightLong />
          </button>
        </div>
        <div
          className={styles.slider}
          onMouseEnter={() => setIsPaused(true)} // Pause sliding on hover
          onMouseLeave={() => setIsPaused(false)} // Resume sliding on mouse leave
        >
          <div className={styles.slidesContainer}>
            {slides.map((slide, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index === (currentIndex - 1 + slides.length) % slides.length;
              const isNext = index === (currentIndex + 1) % slides.length;

              let slideClass = "";
              if (isActive) slideClass = styles.activeSlide;
              else if (isPrev) slideClass = styles.prevSlide;
              else if (isNext) slideClass = styles.nextSlide;

              return (
                <div key={index} className={`${styles.slide} ${slideClass}`}>
                  <div className={styles.publicationBox}>
                    <div className={styles.publicationImg}>
                      <img src={slide.Img} alt={slide.title} />
                    </div>
                    <div className={styles.publicationContent}>
                      <div className={styles.newSticker}>
                        <div className={styles.newBtn}>New</div>
                        <h3>Research Paper</h3>
                      </div>
                      <h3 className={styles.title}>{slide.title}</h3>
                      <p className={styles.author}><IoBook style={{ marginTop: "6px" }} />{slide.Journal}</p>
                      <p className={styles.author}>
                        <FaUserFriends style={{ marginTop: "6px" }} />
                        {slide.author}
                      </p>
                      <p className={styles.date}>
                        <MdCalendarMonth style={{ marginTop: "6px" }} />
                        {slide.date}
                      </p>
                      <a
                        href={slide.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      <button className={styles.goButton}>Read the case study</button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.publicationHomePageButton}>
          <Link to="/research-papers-home"><button>Show More Research Paper<FaRightLong style={{marginLeft:"10px",marginTop:"7px"}} /></button></Link>
        </div>
      </div>
    </section>
  );
};

export default Publication;
