import React from "react";
import styles from "./CardsSection.module.css";
import { NavLink } from "react-router-dom";
import Img1 from "../../assets/photos/logo6.png";
import Img2 from "../../assets/photos/Card-2.jpg";
import Img3 from "../../assets/photos/Card-3.jpg";
import Img4 from "../../assets/photos/Card-4.jpg";
const cardsData = [
  {
    id: 1,
    title: "River Flooding",
    description:
      "Explore our innovative products designed to address real-world challenges with AI-powered solutions.",
    link: "/riverine-flood",
    image: Img1
  },
  {
    id: 2,
    title: "Compound Flooding",
    description:
      "Gain insights into flood prediction technologies and how we are making communities more resilient.",
    link: "/urban-flood",
    image: Img1
},
  {
    id: 3,
    title: "Hyperlocal Flood Remediation",
    description:
      "Learn more about our advanced flood modeling and simulation tools for effective disaster management.",
    link: "/surface-flood",
    image:  Img1
  },
  {
    id: 4,
    title: "Integrated Recovery and Resilience Design",
    description:
      "Experience our solutions in action. Check out live demos showcasing their real-world applications.",
    link: "/",
    image:  Img1
  }
];

const CardSection = () => {
  return (
    <section className={styles.cards} id="cards">
      <header className={styles.sectionHeader}>
        
       
      </header>
      <div className={styles.cardsContents}>
        {cardsData.map((card) => (
          <div key={card.id} className={styles.cardBox}>
            <div className={styles.cardBoxTop}>
              <img src={card.image} alt={card.title} />
            </div>
            <div className={styles.cardDesc}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
             </div>
             <div className={styles.btnDiv}> 
             <NavLink to={card.id === 4 ? "#" : card.link}>
  <button 
    className={styles.cardBtn} 
    disabled={card.id === 4}
  >
    {card.id === 4 ? "Coming Soon" : "Learn More"}
  </button>
</NavLink>
</div>
            </div>
          
        ))}
      </div>
    </section>
  );
};

export default CardSection;
