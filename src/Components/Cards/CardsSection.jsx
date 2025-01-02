import React from "react";
import styles from "./CardsSection.module.css";
import { NavLink } from "react-router-dom";
import Img3 from "../../assets/photos/palsar_inundation_gif.gif";

const cardsData = [
  {
    id: 1,
    title: "Product Card",
    description:
      "Explore our innovative products designed to address real-world challenges with AI-powered solutions.",
    link: "/product",
    image: Img3
  },
  {
    id: 2,
    title: "Flood Card 1",
    description:
      "Gain insights into flood prediction technologies and how we are making communities more resilient.",
    link: "/flood1",
    image: Img3
},
  {
    id: 3,
    title: "Flood Card 2",
    description:
      "Learn more about our advanced flood modeling and simulation tools for effective disaster management.",
    link: "/flood2",
    image:  Img3
  },
  {
    id: 4,
    title: "Demo Card",
    description:
      "Experience our solutions in action. Check out live demos showcasing their real-world applications.",
    link: "/demo",
    image:  Img3
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
              <NavLink to={card.link}>
                <button className={styles.cardBtn}>Learn More</button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
