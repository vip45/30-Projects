import React from 'react'
import styles from './Planet.module.css'
import Container from '@/components/common/Container/Container'

const Planet = () => {
  return (
    <div className={styles.planet}>
      <p>SUSTAINABILITY</p>
      <h2>Built to respect the Planet</h2>
      <Container>
        <div className={styles.planetMain}>
          <div className={styles.leftImage}>
            <img className='img-fluid' src="/images/home/build.png" alt="" />
          </div>
          <div className={styles.rightData}>
            <div>
              <img src="/images/home/1.svg" alt="" />
              <p>Rainwater harvesting</p>
            </div>
            <div>
              <img src="/images/home/2.svg" alt="" />
              <p>Solar facilities</p>
            </div>
            <div>
              <img src="/images/home/3.svg" alt="" />
              <p>High-efficiency HVAC systems</p>
            </div>
            <div>
              <img src="/images/home/4.svg" alt="" />
              <p>Natural ventilation interior design</p>
            </div>
            <div>
              <img src="/images/home/5.svg" alt="" />
              <p>Water-saving fixtures and appliances</p>
            </div>
          </div>
        </div>
        <div className={styles.planetCard}>
          <div className={styles.mainCard}>
            <div>
              <p>Certificate</p>
              <p>2024</p>
            </div>
            <div>
              <p>IGBC Net Zero Waste</p>
              <img src="/images/home/download.svg" alt="" />
            </div>
          </div>
          <div className={styles.mainCard}>
            <div>
              <p>Certificate</p>
              <p>2024</p>
            </div>
            <div>
              <p>Zero Waste + Energy Homes</p>
              <img src="/images/home/download.svg" alt="" />
            </div>
          </div>
          <div className={styles.mainCard}>
            <div>
              <p>Certificate</p>
              <p>2024</p>
            </div>
            <div>
              <p>Environmental Clearance</p>
              <img src="/images/home/download.svg" alt="" />
            </div>
          </div>
          <div className={styles.mainCard}>
            <div>
              <p>Certificate</p>
              <p>2024</p>
            </div>
            <div>
              <p>Zero Waste + Energy Homes</p>
              <img src="/images/home/download.svg" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Planet