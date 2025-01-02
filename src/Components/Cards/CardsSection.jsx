// React Component
import React from "react";
import styles from "./CardsSection.module.css";
import { NavLink } from "react-router-dom";

const cardsData = [
    {
        id: 1,
        title: "Product Card",
        description: "This card showcases our main product, highlighting its features and benefits.",
        link: "/product-details",
        image: "https://via.placeholder.com/300x200.png?text=Product+Card"
    },
    {
        id: 2,
        title: "Flood Card 1",
        description: "A detailed overview of flood-related statistics and resources.",
        link: "/flood-details-1",
        image: "https://via.placeholder.com/300x200.png?text=Flood+Card+1"
    },
    {
        id: 3,
        title: "Flood Card 2",
        description: "Insights and information about flood management strategies.",
        link: "/flood-details-2",
        image: "https://via.placeholder.com/300x200.png?text=Flood+Card+2"
    },
    {
        id: 4,
        title: "Demo Card",
        description: "A demonstration card providing an example of functionality.",
        link: "/demo",
        image: "https://via.placeholder.com/300x200.png?text=Demo+Card"
    }
];

const CardsSection = () => {
    return (
        <section className={styles.cardsSection} id="cards">
            <header className={styles.sectionHeader}>
                <h3>Explore Various Topics at Your Pace</h3>
            </header>
            <div className={styles.cardsContainer}>
                {cardsData.map((card) => (
                    <div key={card.id} className={styles.cardBox} style={{ backgroundImage: `url(${card.image})` }}>
                       
                        <div className={styles.cardContent}>
                            <div className={styles.cardOverlay}>
                            <h2 className={styles.cardTitle}>{card.title}</h2>
                                <p>{card.description}</p>
                                <NavLink to={card.link}>
                                    <button className={styles.cardBtn}>Learn More</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CardsSection;

