import React, { useState } from 'react'
import styles from './Header.module.css'
import Container from '../Container/Container'
import CommonPopup from '../CommonPopup/CommonPopup'
import MenuPopup from '../MenuPopup/MenuPopup'
const Header = () => {
  // const [isPopup, setisPopup] = useState(false)
  // const togglePopup = () =>{
  //   setisPopup(!isPopup);
  // }

  const [openMenu , setOpenMenu] = useState(false);
  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  }
  return (
    <>
    <div className={styles.header}>
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