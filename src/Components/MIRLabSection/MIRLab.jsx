import React, { useEffect } from 'react';
import styles from "./MIRLab.module.css";
import { FaCalendar, FaUser } from 'react-icons/fa';

import News1 from "../../assets/photos/MIRLab-News.jpg";
import News2 from "../../assets/photos/MIRLab-News2.jpg";
import News3 from "../../assets/photos/MIRLab-News3.jpg";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { Link } from 'react-router-dom';



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
      imgSrc: "https://images.indianexpress.com/2024/08/9_ec2e52.jpg?w=640",
      title: 'Intense rainfall in Gujarat worsened by extensive urban development in flood-prone areas’: IITGN study',
      description: 'Morbi, Dwarka, and Jamnagar recorded rainfall levels that surpassed their 50-ye...',
      date: "Dec 24, 2024",
      author: "The Indian Express",
      link:"https://indianexpress.com/article/cities/ahmedabad/rainfall-floods-gujarat-urban-development-flood-prone-areas-iitgn-study-9547608/"
    },
    {
      id: 2,
      imgSrc: "https://assets.telegraphindia.com/telegraph/2024/Sep/1725421463_gujarat-floods.jpg",
      title: 'Flooding in Gujarat worsened by extensive urban development, altered elevations: IIT-GN study',
      description: "The recurrence of 'unusual weather events along India's western coast', such as the on...",
      date: "Sept 04, 2024",
      author: "The Telegraph",
      link:"https://www.telegraphindia.com/india/flooding-in-gujarat-worsened-by-extensive-urban-development-altered-elevations-indian-institute-of-technology-gandhinagar-study/cid/2045651"
    },
    { 
      id: 3,
      imgSrc: "https://img.etimg.com/thumb/msid-113049068,width-300,height-225,imgsize-154422,resizemode-75/gujarat-jul-23-ani-an-aerial-survey-is-being-conducted-by-gujarat-chief-mini-.jpg",
      title: 'Flooding in Gujarat worsened by extensive urban development, altered elevations: IIT-GN study',
      description: 'Recent flooding in Gujarat was caused by severe weather and worsened by urba...',
      date: 'Sept 04, 2024',
      author: 'The Economic Times',
      link:"https://economictimes.indiatimes.com/news/india/flooding-in-gujarat-worsened-by-extensive-urban-development-altered-elevations-iit-gn-study/articleshow/113048882.cms?from=mdr"
    },
    { 
      id: 4,
      imgSrc: "https://img.republicworld.com/tr:w-800,h-450,q-75,f-auto/rimages/m5ybyh3tm6gfplbj_1618399351_16_9.jpeg",
      title: 'IITGN’s model to accurately assess rainfall-induced damages in road networks',
      description: 'New Delhi, Oct 22 (PTI) Scientists at the Indian Institute of Technology Gandhinag....',
      date: 'Oct 22, 2021',
      author: 'Republic',
      link:"https://www.republicworld.com/education/iitgns-model-to-accurately-assess-rainfall-induced-damages-in-road-networks"
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
             <Link to={news.link} target='_main_'><li key={news.id} className={styles.card}>
                <div className={styles.newsImg}>
                  <img src={news.imgSrc} alt="news" draggable="false" />
                </div>
                <h4>{news.title}</h4>
                <p>{news.description}</p>
                <div className={styles.icons}>
                  <div className='flex align-left px-3'>
                    <FaCalendar className='mr-2' color='orange' /> <span className='text-black'>{news.date}</span>
                  </div>
                  <div className='flex align-right px-3'>
                  <BsGlobeCentralSouthAsia  style={{marginTop:"2px", marginRight:"8px"}} color='orange' />
                    <span className='text-black'>{news.author}</span>
                  </div>
                </div>
              </li></Link> 
            ))}
          </ul>
        </div>
      </div>
      {/* <div className={styles.moreBtn}><button>Click For More</button></div> */}
    </section>
  );
};

export default MIRLab;
