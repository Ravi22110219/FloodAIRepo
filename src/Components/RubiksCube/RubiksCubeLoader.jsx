import React from 'react'
import styles from './RubiksCubeLoader.module.css'

const RubiksCubeLoader = () => {
  return (
    <div className={styles.myLoader}>
      <div className={styles.rubiksCube}>
        <div className={styles.face + ' ' + styles.front}></div>
        <div className={styles.face + ' ' + styles.back}></div>
        <div className={styles.face + ' ' + styles.left}></div>
        <div className={styles.face + ' ' + styles.right}></div>
        <div className={styles.face + ' ' + styles.top}></div>
        <div className={styles.face + ' ' + styles.bottom}></div>
      </div>
    </div>
  )
}

export default RubiksCubeLoader
