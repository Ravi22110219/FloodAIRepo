// MIRLabNewsHomePage.jsx
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './MIRLabNewsHomePage.module.css';
import { FaCalendar, FaUser } from 'react-icons/fa';




const MIRLabNewsHomePage = () => {
   
    const [currentItem, setCurrentItem] = useState(4);
    const [searchQuery, setSearchQuery] = useState('');
    // const navigate = useNavigate();

    const newsPosts = [
        {     
            id: 1,
            image: "https://ars.els-cdn.com/content/image/1-s2.0-S002216942201188X-ga1_lrg.jpg",
            title: 'Enhancing predictive skills in physically-consistent way: Physics Informed Machine Learning for hydrological processes',
           
            author: "Pravin Bhasme, Jenil Vagadiya, Udit Bhatia",
            date: "15 December 2022",
            link: "https://www.sciencedirect.com/science/article/pii/S002216942201188X?via%3Dihub",
        },
        {
            id: 2,
            image:"https://ars.els-cdn.com/content/image/1-s2.0-S002216942301363X-ga1_lrg.jpg",
            title: 'Improving the interpretability and predictive power of hydrological models: Applications for daily streamflow in managed and unmanaged catchments',
            author: "Pravin Bhasme, Udit Bhatia",
            date: "11 January 2024",
            link: "https://www.sciencedirect.com/science/article/pii/S002216942301363X?via%3Dihub",
        },
        {
            id: 3,
            image: "https://content.cld.iop.org/journals/1748-9326/16/10/104050/revision3/erlac2d67f1_hr.jpg",
            title: "Extreme precipitation induced concurrent events trigger prolonged disruptions in regional road networks",
            author: "Raviraj Dave, Srikrishnan Siva Subramanian, Udit Bhatia",
            date: "19 October 2021",
            link: "https://iopscience.iop.org/article/10.1088/1748-9326/ac2d67",
        },
        {
            id: 4,
            image:"https://ars.els-cdn.com/content/image/1-s2.0-S2212420923005551-gr1.jpg",
            title: "Protecting heritage: Insights into effective flood management using green infrastructure in a highly urbanized environment",
            author: "Angana Borah, Ronita Bardhan, Udit Bhatia",
            date: "15 November 2023",
            link: "https://www.sciencedirect.com/science/article/abs/pii/S2212420923005551?via%3Dihub"
        },
    
        {
            id: 5,
            image:"https://ars.els-cdn.com/content/image/1-s2.0-S2212420923005551-gr1.jpg",
            title: "Protecting heritage: Insights into effective flood management using green infrastructure in a highly urbanized environment",
            author: "Angana Borah, Ronita Bardhan, Udit Bhatia",
            date: "15 November 2023",
            link: "https://www.sciencedirect.com/science/article/abs/pii/S2212420923005551?via%3Dihub"
        },
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
  <Link to="/">Home</Link> <span>/</span> 
  <Link to="/research-page">Research</Link> <span>/</span> 
  <Link to="#">Research Paper Home</Link>
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
                            <Link to={post.link} className={styles.btn} target='__main__'>Read More</Link>
                            <div className={styles.icons}>
                                <div className='flex align-middle'>
                                    <FaCalendar className='mr-2' color='orange' /> <span className='text-black'>{post.date} </span>
                                </div>
                                <div className='flex align-left'>
                                    <FaUser className='mr-2 mt-2' color='orange' /> <span className='text-black mt-2 '>{post.author} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.buttonsContainer}>
                {currentItem < filteredPosts.length && (
                    <div id="load-more" className={styles.loadMore} onClick={loadMore}>Show More</div>
                )}
                {currentItem > 4 && ( 
                    <div id="show-less" className={styles.showLess} onClick={showLess}>Show Less</div>
                )}
            </div>
        </div>
        </section>
    );
};

export default MIRLabNewsHomePage;
