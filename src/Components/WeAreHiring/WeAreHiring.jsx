// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import styles from './WeAreHiring.module.css'
import { Link } from 'react-router-dom'

const WeAreHiring = () => {
  // State to track the remaining time until the deadline
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // State to determine if the deadline has passed
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false)

  // Deadline date for applications
  const deadlineDate = new Date('2025-05-30T00:00:00')

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const difference = deadlineDate - now

      if (difference <= 0) {
        if (!isDeadlinePassed) {
          // Guard to prevent unnecessary state updates
          setIsDeadlinePassed(true)
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        }
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft((prev) => {
        // Only update state if the timer values have actually changed
        if (
          prev.days !== days ||
          prev.hours !== hours ||
          prev.minutes !== minutes ||
          prev.seconds !== seconds
        ) {
          return { days, hours, minutes, seconds }
        }
        return prev
      })
    }

    updateTimer() // Initial call
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval) // Cleanup
  }, [deadlineDate, isDeadlinePassed]) // Controlled dependencies
  // Dependency array ensures this effect runs only when `deadlineDate` changes

  // If the deadline has passed, display a message
  if (isDeadlinePassed) {
    return (
      <section className={styles.hiringBanner}>
        <div className={styles.hiringBannerContentColumn}>
          <h1>Applications Are Now Closed</h1>
          <p>
            Thank you for your interest in joining our team. Please check back
            later for future opportunities.
          </p>
        </div>
      </section>
    )
  }

  // Render the hiring banner with the countdown timer
  return (
    <section>
      <div className={styles.hiringBanner}>
        <div className={styles.hiringBannerContentColumn}>
          {/* Left Column: Heading and Job Description */}
          <div className={styles.hiringBannerContentCol_1}>
            <h1>Join Our Team</h1>
            <p>
              Explore exciting career opportunities with us! We are hiring
              interns for a two-month journey to collaborate and innovate on
              real-world challenges. We are looking for talented individuals in
              the following roles:
            </p>
            <ul>
              <li
                style={{
                  listStyleType: 'square',
                  marginLeft: '20px',
                  marginBottom: '10px',
                }}
              >
                <strong>Graphic Designers</strong>: Bring creativity to life
                with visually appealing designs and engaging content.
              </li>
              <li
                style={{
                  listStyleType: 'square',
                  marginLeft: '20px',
                  marginBottom: '10px',
                }}
              >
                <strong>ML/DL Developers</strong>: Dive into cutting-edge
                machine learning and deep learning projects to create impactful
                solutions.
              </li>
              <li
                style={{
                  listStyleType: 'square',
                  marginLeft: '20px',
                  marginBottom: '10px',
                }}
              >
                <strong>Software Developers</strong>: Build robust, efficient,
                and scalable software that drives innovation.
              </li>
            </ul>

            <Link to="/job-roles">
              <button>View Jobs</button>
            </Link>
          </div>

          {/* Right Column: Countdown Timer */}
          <div className={styles.hiringBannerContentCol_2}>
            <h2>Application Deadline</h2>
            <div className={styles.timer}>
              <div>
                <span>{timeLeft.days}</span>
                <p>Days</p>
              </div>
              <div>
                <span>{timeLeft.hours}</span>
                <p>Hours</p>
              </div>
              <div>
                <span>{timeLeft.minutes}</span>
                <p>Minutes</p>
              </div>
              <div>
                <span>{timeLeft.seconds}</span>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeAreHiring
