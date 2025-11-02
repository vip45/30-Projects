import React from 'react'
import styles from './HomeBanner.module.css'
import { motion } from 'framer-motion';

const HomeBanner = () => {
    const homeStrip = [
      {
        name: "On-Going",
        detail: "PROJECT STATUS",
      },
      {
        name: "Mohali",
        detail: "LOCATION",
      },
      {
        name: "₹3.23 Cr",
        detail: "STARTING PRICE",
      },
      {
        name: "3bhk, Villas",
        detail: "UNIT TYPE",
      },
      {
        name: "20th December",
        detail: "COMPLETION",
      },
      {
        name: "15 Acres",
        detail: "AREA",
      },
    ];
  return (
    <div className={styles.homeBanner}>
      <div
        className={
          styles.homeMain +
          " d-flex align-items-center justify-content-between pt-4"
        }
      >
        <motion.div
          className={styles.bannerData}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>Highland Mayfield</h1>
          <p>
            Highland Mayfields embodies meticulous design and a commitment to
            excellence. From the grand lobby to personalized services, every
            detail enhances your living experience. It&apos;s more than a
            residence it&apos;s a symbol of refined, functional elegance
          </p>
          <button>Enquire Now</button>
        </motion.div>
        <motion.div
          className={styles.bannerImg}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img className="img-fluid" src="/images/home/home.webp" alt="House" />
        </motion.div>
      </div>

      <div className={styles.homeStrip}>
        {homeStrip.map((item, idx) => (
          <>
            <div key={idx}>
              <p className={styles.stripName}>{item.name}</p>
              <p className={styles.stripDetail}>{item.detail}</p>
            </div>
            <div className={styles.divider}></div>
          </>
        ))}
      </div>
    </div>
  );
}

export default HomeBanner