// MIRLabNewsHomePage.jsx
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './MIRLabNewsHomePage.module.css';
import { FaCalendar, FaUser } from 'react-icons/fa';
import News1 from "../../assets/photos/MIRLab-News.jpg";
import News2 from "../../assets/photos/MIRLab-News2.jpg";
import News3 from "../../assets/photos/MIRLab-News3.jpg";
import CatchmentClassification from '../CatchmentPage/CatchmentClassification';
import UrbanFlood from '../KozhikodeFloodPage/UrbanFlood';
import GondalSurfaceFlood from '../GondalFloodPage/GondalSurfaceFlood';

const MIRLabNewsHomePage = () => {
   
    const [currentItem, setCurrentItem] = useState(4);
    const [searchQuery, setSearchQuery] = useState('');
    // const navigate = useNavigate();

    const newsPosts = [
        {     
            id: 1,
            image: News1,
            title: 'Breakthrough in AI: MIRLab Develops New Algorithm',
            description: 'The MIRLab team has developed a novel algorithm that enhances image recognition accuracy...',
            date: '10th December, 2024',
            author: 'Dr. John Doe',
            content: 'The MIRLab team has developed...'
        },
        {
            id: 2,
            image: News2,
            title: 'Upcoming Workshop on Machine Learning Basics',
            description: 'MIRLab is hosting a workshop to introduce students to the basics of machine learning.',
            date: '15th November, 2024',
            author: 'Jane Smith',
            content: 'Full content of the news post...'
        },
        {
            id: 3,
            image: News3,
            title: 'MIRLab Welcomes New Research Scholars',
            description: 'This semester, MIRLab is proud to welcome six new research scholars to the team...',
            date: '1st November, 2024',
            author: 'Prof. Emily Brown',
            content: 'Full content of the news post...'
        },
        {
            id: 4,
            image: News3,
            title: 'MIRLab Welcomes New Research Scholars',
            description: 'This semester, MIRLab is proud to welcome six new research scholars to the team...',
            date: '1st November, 2024',
            author: 'Prof. Emily Brown',
            content: 'Full content of the news post...'
        },
        {
            id: 5,
            image: News3,
            title: 'MIRLab Welcomes New Research Scholars',
            description: 'This semester, MIRLab is proud to welcome six new research scholars to the team...',
            date: '1st November, 2024',
            author: 'Prof. Emily Brown',
            content: 'Full content of the news post...'
        }
    ];

    const filteredPosts = newsPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const loadMore = () => {
        setCurrentItem(prev => prev + 4);
    };

    const showLess = () => {
        setCurrentItem(4);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCardClick = (postId) => {
        navigate(`/news/${postId}`);
    };

    return (
          <section className={styles.mirLabNewsHomePageSection}>
              <div className={styles.mirLabBanner}>
              <div className={styles.mirLabBannerLinks}>
    <Link to="/">Home</Link> <span>/</span> <Link to="#">Research papers</Link>
</div>

        <div className={styles.mirLabBannerContentColumn}>
            
            <div className={styles.mirLabBannerContentCol_1}>
                <h1>MIRLab Research: Pioneering Research in AI and Flooding</h1>
                <p>
                    Explore groundbreaking advancements in AI and Flooding. Learn how MIRLabNews highlights
                    innovative research and cutting-edge technologies driving the future.
                </p>
                <button>Read More</button>
            </div>
            <div className={styles.mirLabBannerContentCol_2}>
                <img src="https://i.pinimg.com/originals/a5/2b/23/a52b232810587be914eab7c004e9fb08.gif" alt="AI Research" />
            </div>
        </div>
    </div>
    {/* <CatchmentClassification />
    <GondalSurfaceFlood /> */}

        <div className={styles.container}>
           <header className={styles.sectionHeader}>
                <h1>Explore MIRLab Research Paper</h1>
            </header>
            <input
                type="text"
                placeholder="Search news posts..."
                value={searchQuery}
                onChange={handleSearch}
                className={styles.searchBar}
            />

            <div className={styles.boxContainer}>
                {filteredPosts.slice(0, currentItem).map((post) => (
                    <div className={styles.box} key={post.id} onClick={() => handleCardClick(post.id)}>
                        <div className={styles.image}>
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className={styles.content}>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <a href="#" className={styles.btn}>read more</a>
                            <div className={styles.icons}>
                                <div className='flex align-middle'>
                                    <FaCalendar className='mr-2' color='crimson' /> <span className='text-black'>{post.date} </span>
                                </div>
                                <div className='flex align-middle'>
                                    <FaUser className='mr-2' color='crimson' /> <span className='text-black'>{post.author} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.buttonsContainer}>
                {currentItem < filteredPosts.length && (
                    <div id="load-more" className={styles.loadMore} onClick={loadMore}>load more</div>
                )}
                {currentItem > 4 && (
                    <div id="show-less" className={styles.showLess} onClick={showLess}>show less</div>
                )}
            </div>
        </div> 
        </section>
    );
};

export default MIRLabNewsHomePage;
