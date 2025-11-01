import React from 'react'
import styles from './Blog.module.css'

const NewChapter = () => {
  return (
    <div className={styles.blogDetails}>
      <h2>A New Chapter in Indian Real Estate</h2>
      <div className={styles.para}>
        <p>
          India’s property narrative is evolving. While metro cities once held
          the spotlight, tier 2 cities in India are now commanding national
          attention. Driven by infrastructure upgrades, decentralised
          development, and a shift toward balanced living, smaller urban centres
          like Mohali and Zirakpur have become prime destinations for both
          investors and families.
        </p>
        <p>
          In fact, according to JLL’s 2024 land acquisition report, 91% of the
          2,335 acres bought by developers were outside tier‑1 cities. A signal
          that India’s real estate landscape is rapidly changing.
            <br />
          What makes these cities attractive is their ability to blend premium
          homes with open space, connectivity, and affordability. With projects
          like Highland Lifespaces shaping the skyline, residents no longer need
          to choose between aspiration and accessibility.
        </p>
      </div>
      <div className={styles.blogImage}><img className='img-fluid w-100' src="/images/blog/blogImage.png" alt="Image" /></div>
    </div>
  );
}

export default NewChapter