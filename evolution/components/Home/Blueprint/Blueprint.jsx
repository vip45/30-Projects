import React from 'react'
import styles from './Blueprint.module.css'
const Blueprint = () => {
  return (
    <div className={styles.blueprint}>
      <p>CONSTRUCTION PROGRESS</p>
      <h2>From Blueprint to Reality</h2>
      <div className={styles.blueprint_slide}>
        <div className={styles.blueprintVideoCard}>
          <video
            className={styles.video}
            src="/video/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <p>Basement completed</p>
          <h4>Mayfield&apos;s C pocket </h4>
        </div>
        <div className={styles.blueprintVideoCard}>
          <video
            className={styles.video}
            src="/video/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <p>Basement completed</p>
          <h4>Mayfield&apos;s C pocket </h4>
        </div>
        <div className={styles.blueprintVideoCard}>
          <video
            className={styles.video}
            src="/video/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <p>Basement completed</p>
          <h4>Mayfield&apos;s C pocket </h4>
        </div>
      </div>
    </div>
  );
}

export default Blueprint