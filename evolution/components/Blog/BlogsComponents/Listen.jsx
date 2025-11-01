import React from 'react'
import styles from './Blog.module.css'
const Listen = () => {
  return (
    <div className={styles.listenMain}>
      <p>
        <span>Listen to</span> &quot;The Future of Urban Living in Tier 2
        Cities&quot;
      </p>

      <div>
        <img className={styles.gif} src="/images/blog/gif.gif" alt="Gif" />
        <img src="/images/blog/demo.png" alt="Gif" />
      </div>
    </div>
  );
}

export default Listen