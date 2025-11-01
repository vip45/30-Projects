import React from 'react'
import styles from './Blog.module.css'
const Invest = () => {
  return (
    <div className={styles.blogDetails}>
      <h2>Mohali or Zirakpur: Where Should You Invest?</h2>
      <div className={styles.para}>
        <p>
          Mohali is ideal for those seeking long-term stability, supported by
          strong IT infrastructure and steady commercial growth.
          <br />
          Zirakpur, on the other hand, offers faster appreciation and greater
          affordability—making it attractive for first-time buyers and
          professionals working in nearby Chandigarh.
        </p>
        <p>
          Both cities present excellent investment potential. The best choice
          ultimately depends on your budget, lifestyle priorities, and intended
          investment horizon.
        </p>
      </div>
    </div>
  );
}

export default Invest