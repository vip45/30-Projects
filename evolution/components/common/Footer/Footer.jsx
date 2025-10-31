import React from 'react'
import styles from './Footer.module.css'
import Container from '../Container/Container'
const Footer = () => {
  return (
    <section className={styles.footerMain}>
      <Container>
        <div className={styles.footer_container}>
          <div className={styles.footer_top}>
            <div className={styles.logo}>
              <img src="/images/footer/highland.svg" alt="Highland Logo" />
            </div>
            <p>
              Explore how Highland Lifespaces can transform your residential,
              commercial, or industrial aspirations into reality.
            </p>
            <div className={styles.footerContact}>
              <p>Contact us</p>
              <div className={styles.footerLinks}>
                <a href="https://highlandlifespaces.com/" target="_blank">
                  <span>
                    <img src="/images/footer/globe.svg" alt="Globe" />
                  </span>{" "}
                  https://highlandlifespaces.com/
                </a>
                <a href="#">
                  <span>
                    <img src="/images/footer/mail.svg" alt="" />
                  </span>{" "}
                  marketing@highlandlifespaces.com
                </a>
                <a href="#">
                  <span>
                    <img src="/images/footer/call.svg" alt="" />
                  </span>{" "}
                  90720-90720
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div className={styles.footerBottomMain}>
              <div>
                <p>Project</p>
                <div>
                  <a href="#">Residential</a>
                  <a href="#">Commercial</a>
                  <a href="#">Industrial</a>
                  <a href="#">Hospitality</a>
                </div>
              </div>
              <div>
                <p>Links</p>
                <div>
                  <a href="#">About us</a>
                  <a href="#">Insight Center</a>
                  <a href="#">Newsletter</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
            </div>
            <div className={styles.footerInput}>
              <p>Subscribe for our newsletters</p>
              <div>
                <input type="text" placeholder="E-mail" />
                <button>
                  <img src="/images/footer/arrow.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer   