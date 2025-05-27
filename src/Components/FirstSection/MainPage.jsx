import React, { useEffect } from 'react'
import Typed from 'typed.js'
import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'
import CardSection from '../Cards/CardsSection'
import UrbanFlood from '../../Pages/KozhikodeFloodPage/UrbanFlood'
// import SuratProductMap from '../SuratProductMapPage/SuratProductMap'
import WeAreHiring from '../WeAreHiring/WeAreHiring'
import mainPageSidePhoto from '../../assets/photos/mainside.png'

import TowerLoader from '../RubiksCube/TowerLoader'
import Loader from '../RubiksCube/Loader'

const MainPage = () => {
  useEffect(() => {
    // Initialize the typing effect
    const typed = new Typed('.typing', {
      strings: ['Predicting Floods', 'Mitigating Risks', 'Building Resilience'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    })

    // Cleanup Typed.js instance on component unmount
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section>
      <div className={styles.LandingPage}>
        <div className={styles.TypingEffect}>
          <p>
            {' '}
            <span></span>
            <span className="typing"></span>
          </p>
        </div>
        <div className={styles.LandingPageContentColumn}>
          <div className={styles.LandingPageContentCol_1}>
            <h1>AI-Powered Flood Resilience </h1>

            <p>
              Unlock the potential of cutting-edge AI solutions to tackle flood
              risks and build resilient communities. Stay tuned for
              groundbreaking innovations and comprehensive strategies that
              leverage artificial intelligence to predict, mitigate, and manage
              flooding at an unprecedented scale.
            </p>
          </div>
          <div className={styles.LandingPageContentCol_2}>
            <div className="LandingPageContentCol_2 img">
              {/* <TowerLoader /> */}
              {/* <Loader /> */}
              <img src={mainPageSidePhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section>
        {' '}
        <CardSection />
        <WeAreHiring />
        <UrbanFlood />
        {/* <SuratProductMap /> */}
      </section>
      <section>
        <div className={styles.gondalSurfaceFloodBanner}>
          <div className={styles.gondalSurfaceFloodBannerContentColumn}>
            <div className={styles.gondalSurfaceFloodBannerContentCol_1}>
              <h1>Data-driven Decision Support System</h1>
              <p>
                Understand the impact of every flood mitigation measure before
                you act. Our decision support system models real-world
                scenarios, helping you compare options, anticipate outcomes, and
                move forward with clarity and confidence.
              </p>
              <Link to="/surface-flood">
                {' '}
                <button>Learn More</button>
              </Link>
            </div>
            <div className={styles.gondalSurfaceFloodBannerContentCol_2}>
              <img
                src="https://i.pinimg.com/originals/a5/2b/23/a52b232810587be914eab7c004e9fb08.gif"
                alt="Img"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default MainPage
