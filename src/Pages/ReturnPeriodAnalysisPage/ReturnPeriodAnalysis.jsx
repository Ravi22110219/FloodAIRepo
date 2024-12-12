import React, { useState, useEffect, useRef } from 'react';
import styles from './ReturnPeriodAnalysis.module.css';
import Example1 from '../../assets/photos/DayOneRain.jpg';
import Example2 from '../../assets/photos/DayOneRain.jpg';
import Example3 from '../../assets/photos/DayOneRain.jpg';
import Example4 from '../../assets/photos/DayOneRain.jpg';
import Example5 from '../../assets/photos/DayOneRain.jpg';

const ReturnPeriodAnalysis = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const analysisRefs = useRef([]);

  const toggleExpanded = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    analysisRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      analysisRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const analyses = [
    {
      title: '1 day rainfall',
      subtitle: 'Data Insights',
      image: Example1,
      description: [
        'We analyzed the extreme precipitation event that occurred between August 21 and August 29, 2024, and compared it with the regions return period values. The resulting maps classify the 1-day rainfall during this event relative to the expected return period values, providing insight into the severity of the event in the context of historical patterns.',
      ],
    },
    {
      title: '2 day cumulative rainfall',
      subtitle: 'Predicting Extreme Events',
      image: Example2,
      description: [
        'We analyzed the extreme precipitation event that occurred between August 21 and August 29, 2024, and compared it with the regions return period values. The resulting maps classify the 2-day cumulative rainfall during this event relative to the expected return period values, providing insight into the severity of the event in the context of historical patterns.',
      ],
    },
    {
      title: '3 day cumulative rainfall',
      subtitle: 'Assessing Dry Periods',
      image: Example3,
      description: [
        'We analyzed the extreme precipitation event that occurred between August 21 and August 29, 2024, and compared it with the region','s return period values. The resulting maps classify the 3-day cumulative rainfall during this event relative to the expected return period values, providing insight into the severity of the event in the context of historical patterns.',
      ],
    },
    {
      title: 'Climate Change Impact',
      subtitle: 'Future Projections',
      image: Example4,
      description: [
        'Analyze how climate change affects precipitation patterns.',
        'Incorporating climate models into return period studies.',
      ],
    },
    {
      title: 'Risk Mitigation Strategies',
      subtitle: 'Planning for the Future',
      image: Example5,
      description: [
        'Develop actionable strategies based on return period analysis.',
        'Integrate risk management into infrastructure planning.',
      ],
    },
  ];

  return (
    <section className={styles.analysisSection}>
      <div className={styles.returnPeriodAnalysisBanner}>
      <div className={styles.returnPeriodAnalysisBannerLinks}>
        <a href="#">Home</a> <span>/</span> <a href="#">ReturnPeriodAnalysis</a>
      </div>
      <div className={styles.returnPeriodAnalysisBannerContentColumn}>
        <div className={styles.returnPeriodAnalysisBannerContentCol_1}>
          <h1>Discover Return Period Analysis</h1>
          <p>
            Unravel extreme event patterns through statistical insights. Our analysis bridges the past and future, offering tools to predict floods, droughts, and more.
          </p>
          <button>Learn More</button>
        </div>
        <div className={styles.returnPeriodAnalysisBannerContentCol_2}>
          {/* You can add an illustration or an image */}
        </div>
      </div>
    </div>
      <div id="analysis" className={styles.analysisContent}>
        {analyses.map((analysis, index) => (
          <div
            key={index}
            className={`${styles.row} ${index % 2 === 0 ? styles.rowEven : styles.rowOdd}`}
            ref={(el) => (analysisRefs.current[index] = el)}
          >
            <div className={styles.imageContainer}>
              <img src={analysis.image} alt="Analysis" />
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>{analysis.title}</h1>
              <h3 className={styles.subtitle}>{analysis.subtitle}</h3>
              {analysis.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              {expandedIndex === index && (
                <div className={styles.expandedContent}>
                  <p>Additional content related to {analysis.title}.</p>
                  <p>Include detailed analysis or further insights here.</p>
                </div>
              )}
              <div className={styles.buttonsContainer}>
                <button className={styles.toggleButton} onClick={() => toggleExpanded(index)}>
                  {expandedIndex === index ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReturnPeriodAnalysis;
