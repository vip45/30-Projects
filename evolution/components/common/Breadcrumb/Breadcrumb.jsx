import React from 'react'
import styles from './Breadcrum.module.css'
const Breadcrumb = ({breadData}) => {
  return (
    <div className={styles.breadCrumb}>
        <a href="#">Home</a>
        <img src="/images/blog/cross.svg" alt="Cross" />
        <a href="#">Insight Center</a>
        <img src="/images/blog/cross.svg" alt="Cross" />
        <a href="#">The Future of...</a>
    </div>
  )
}

export default Breadcrumb