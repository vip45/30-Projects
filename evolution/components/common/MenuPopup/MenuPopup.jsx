import React from 'react'
import styles from './MenuPopup.module.css'
import Link from 'next/link'
const MenuPopup = ({toggle}) => {
  return (
    <div className={styles.menuPopup}>
        <div className={styles.menu}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
        </div>
        <div onClick={toggle} className={styles.close}><img src="/images/header/close.svg" alt="" /></div>
    </div>
  )
}

export default MenuPopup