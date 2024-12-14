import React, { useEffect } from 'react';
import styles from "./MIRLab.module.css";
import { FaCalendar, FaUser } from 'react-icons/fa';

import News1 from "../../assets/photos/MIRLab-News.jpg";
import News2 from "../../assets/photos/MIRLab-News2.jpg";
import News3 from "../../assets/photos/MIRLab-News3.jpg";

const MIRLab = () => {
  useEffect(() => {
    const wrapper = document.querySelector(`.${styles.wrapper}`);
    const carousel = document.querySelector(`.${styles.carousel}`);
    const firstCardWidth = carousel.querySelector(`.${styles.card}`).offsetWidth;
    const arrowBtns = document.querySelectorAll(`.${styles.wrapper} i`);
    const carouselChildren = [...carousel.children];

    let isDragging = false,
      isAutoPlay = true,
      startX,
      startScrollLeft,
      timeoutId;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildren.slice(-cardPerView).reverse().forEach((card) => {
      carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
    });

    carouselChildren.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML('beforeend', card.outerHTML);
    });

    carousel.classList.add(styles.noTransition);
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove(styles.noTransition);

    arrowBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.id === 'left') {
          carousel.scrollLeft -= firstCardWidth;
        } else {
          carousel.scrollLeft += firstCardWidth;
        }
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add(styles.dragging);
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove(styles.dragging);
    };

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add(styles.noTransition);
        carousel.scrollLeft = carousel.scrollWidth - 4 * carousel.offsetWidth;
        carousel.classList.remove(styles.noTransition);
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add(styles.noTransition);
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove(styles.noTransition);
      }
      clearTimeout(timeoutId);
      if (!wrapper.matches(':hover')) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 40 || !isAutoPlay) return;
      timeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
        infiniteScroll();
      }, 3000);
    };
    autoPlay();

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragging);
    carousel.addEventListener('mouseup', dragStop);
    carousel.addEventListener('mouseleave', dragStop);
    carousel.addEventListener('scroll', infiniteScroll);

    wrapper.addEventListener('mouseover', () => clearTimeout(timeoutId));
    wrapper.addEventListener('mouseout', autoPlay);

    return () => {
      carousel.removeEventListener('mousedown', dragStart);
      carousel.removeEventListener('mousemove', dragging);
      carousel.removeEventListener('mouseup', dragStop);
      carousel.removeEventListener('mouseleave', dragStop);
      carousel.removeEventListener('scroll', infiniteScroll);
      wrapper.removeEventListener('mouseover', () => clearTimeout(timeoutId));
      wrapper.removeEventListener('mouseout', autoPlay);
    };
  }, []);

  const newsItems = [
    {
      id: 1,
      imgSrc: News1,
      title: 'Inspiring Success: The Journey From A Small Village to IIT Roorkee',
      description: 'The journey to IIT Roorkee begins with the dream of countless JEE aspirants across India...',
      date: "28th July",
      author: "Lakhveer Singh",
    },
    {
      id: 2,
      imgSrc: News2,
      title: 'The NEET Scam 2024: Uncovering the Truth Behind the Controversy',
      description: 'The year 2024 has added a dire chapter to the annals of Indian education: the NEET Scam...',
      date: "20th June",
      author: "Bidsuk CEO",
    },
    { 
      id: 3,
      imgSrc: News3,
      title: 'Why Infinite EduVerse is the Best Choice for NEET and JEE Preparation',
      description: 'Infinite EduVerse stands out as a premier institute for NEET and JEE preparation...',
      date: '29th May, 2022',
      author: 'Naushad Khan',
    }
  ];

  return (
    <section className={styles.news} id="news">
      <header className={styles.sectionHeader}>
        <h3>MIR Lab In News</h3>
        <h1>Explore how MIR Lab is making headlines with groundbreaking innovations and research.</h1>
      </header>
      <div className={styles.newsBox}>
        <div className={styles.wrapper}>
          <ul className={styles.carousel}>
            {newsItems.map((news) => (
              <li key={news.id} className={styles.card}>
                <div className={styles.newsImg}>
                  <img src={news.imgSrc} alt="news" draggable="false" />
                </div>
                <h4>{news.title}</h4>
                <p>{news.description}</p>
                <div className={styles.icons}>
                  <div className='flex align-middle px-3'>
                    <FaCalendar className='mr-2' color='crimson' /> <span className='text-black'>{news.date}</span>
                  </div>
                  <div className='flex align-middle px-3'>
                    <FaUser className='mr-2' color='crimson' /> <span className='text-black'>{news.author}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div><button>Click For More</button></div>
    </section>
  );
};

export default MIRLab;
