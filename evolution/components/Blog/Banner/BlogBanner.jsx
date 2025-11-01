import React from 'react'
import styles from './BlogBanner.module.css'
import { Container } from 'reactstrap'
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb'
const BlogBanner = () => {
  return (
    <div className={styles.blogBanner}>
        <img src="/images/blog/banner.png" className={styles.blogBannerImg} alt="" />
        <div className={styles.banner_content}>
            <Breadcrumb/>
            <h1 >The Future of Urban Living <br />in Tier 2 Cities</h1>
            <ul>
                <li>3 Min Read</li>
                <li> 04 May 2020</li>
                <li>Updated On: 12 Jan 2024</li>
            </ul>
            <div className={styles.social}>
                <a href="#"><img src="/images/blog/wa.svg" alt="" /></a>
                <a href="#"><img src="/images/blog/fb.svg" alt="" /></a>
                <a href="#"><img src="/images/blog/x.svg" alt="" /></a>
                <a href="#"><img src="/images/blog/link.svg" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default BlogBanner