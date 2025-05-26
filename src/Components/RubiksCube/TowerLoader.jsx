import React from 'react'
import styles from './TowerLoader.module.css'

const TowerLoader = () => {
  return (
    <div className={styles.loader}>
      {[...Array(4)].map((_, index) => (
        <div
          className={`${styles.box} ${styles[`box${index + 1}`]}`}
          key={index}
        >
          <div className={styles.sideLeft}></div>
          <div className={styles.sideRight}></div>
          <div className={styles.sideTop}></div>
        </div>
      ))}
    </div>
  )
}

export default TowerLoader
