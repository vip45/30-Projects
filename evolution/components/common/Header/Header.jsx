import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Container from '../Container/Container'
import CommonPopup from '../CommonPopup/CommonPopup'
import MenuPopup from '../MenuPopup/MenuPopup'
const Header = () => {
  // const [isPopup, setisPopup] = useState(false)
  // const togglePopup = () =>{
  //   setisPopup(!isPopup);
  // }

  const [scroll , setScroll] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 0) {
          // Scrolling down
          setScroll(true);
        } else {
          // Scrolling up or at top
          setScroll(false);
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

  const [openMenu , setOpenMenu] = useState(false);
  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  }
  return (
    <>
    <div className={`${styles.header} ${scroll ? styles.headerNone : ""}`}>
      <Container>
        <img src="/images/header/logo.svg" alt="Logo" />
        <img onClick={toggleMenu} src="/images/header/menu.svg" alt="Menu" />
      {openMenu && <div className={styles.menu}><MenuPopup toggle={toggleMenu}/></div>}
      </Container>
    </div>
    </>
  )
}

export default Header