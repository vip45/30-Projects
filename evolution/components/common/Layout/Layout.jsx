import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className={styles.footerCopyright}>
        <div>
          <a href="#">
            <img src="/images/footer/instagram.svg" alt="Insta" />
          </a>
          <a href="#">
            <img src="/images/footer/instagram.svg" alt="Insta" />
          </a>
          <a href="#">
            <img src="/images/footer/instagram.svg" alt="Insta" />
          </a>
          <a href="#">
            <img src="/images/footer/instagram.svg" alt="Insta" />
          </a>
        </div>
        <p>© 2025— Copyright</p>
      </div>
    </div>
  );
}

export default Layout