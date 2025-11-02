import React from 'react'
import styles from './Explore.module.css'
const Explore = () => {
  return (
    <div className={styles.explore}>
      <div className={styles.exploreHeadings}>
        <p>Location</p>
        <h2>
          Explore your <br /> neighborhood
        </h2>
      </div>
      <div className={styles.mapContainer}>
        <div>
          <img src="/images/home/explore.png" alt="" />
        </div>
        <div className={styles.exploreList}>
          <div>
            <img src="/images/home/e1.svg" alt="" />
            <p> Schools</p>
          </div>
          <div>
            <img src="/images/home/e2.svg" alt="" />
            <p> Hospitals</p>
          </div>
          <div>
            <img src="/images/home/e3.svg" alt="" />
            <p> Restaurants</p>
          </div>
          <div>
            <img src="/images/home/e4.svg" alt="" />
            <p> Parks</p>
          </div>
          <div>
            <img src="/images/home/e5.svg" alt="" />
            <p> Railway Station</p>
          </div>
        </div>
        <div className={styles.markers + " position-absolute"}>
            <div className='position-relative'>
             <div><img src="/images/home/circle.png" alt="" /></div>
             <div className={styles.randomMarker}>
                 <img src="/images/home/mark.svg" alt="" />
                 <img src="/images/home/mark.svg" alt="" />
                 <img src="/images/home/mark.svg" alt="" />
                 <img src="/images/home/mark.svg" alt="" />
                 <img src="/images/home/mark.svg" alt="" />
             </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Explore