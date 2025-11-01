import React from 'react'
import styles from './Blog.module.css'
import Slider from 'react-slick';

const Related = () => {
    const settings = {
      autoplay: true,
      infinite:true,
      arrows: false,
      dots: false,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
    };
  return (
    <div className={styles.relatedBlogs}>
      <h4>Related Article</h4>
      <Slider {...settings} className={styles.relatedBlogs_slider}>
        <div className={styles.slidePar}>
          <div className={styles.slideMain}>
            <div>
              <img className='w-100 img-fluid' src="/images/blog/related.png" alt="Related Blogs" />
            </div>
            <a href="#">Highland’s Approach to Lifestyle-Centric Design</a>
            <p className={styles.relatedLoc}>
              <span>
                <img src="/images/blog/location.svg" alt="Location" />
              </span>
              Delhi NCR
            </p>
            <p className={styles.relatedBlogPara}>
              This mixed-use development in Dwarka was inspired by a lotus
              flower and won the Asia Pacific Property Award for best mixed-use
              architecture in India
            </p>
          </div>
        </div>
        <div className={styles.slidePar}>
          <div className={styles.slideMain}>
            <div>
              <img className='w-100 img-fluid' src="/images/blog/related.png" alt="Related Blogs" />
            </div>
            <a href="#">Highland’s Approach to Lifestyle-Centric Design</a>
            <p className={styles.relatedLoc}>
              <span>
                <img src="/images/blog/location.svg" alt="Location" />
              </span>
              Delhi NCR
            </p>
            <p className={styles.relatedBlogPara}>
              This mixed-use development in Dwarka was inspired by a lotus
              flower and won the Asia Pacific Property Award for best mixed-use
              architecture in India
            </p>
          </div>
        </div>
        <div className={styles.slidePar}>
          <div className={styles.slideMain}>
            <div>
              <img className='w-100 img-fluid' src="/images/blog/related.png" alt="Related Blogs" />
            </div>
            <a href="#">Highland’s Approach to Lifestyle-Centric Design</a>
            <p className={styles.relatedLoc}>
              <span>
                <img src="/images/blog/location.svg" alt="Location" />
              </span>
              Delhi NCR
            </p>
            <p className={styles.relatedBlogPara}>
              This mixed-use development in Dwarka was inspired by a lotus
              flower and won the Asia Pacific Property Award for best mixed-use
              architecture in India
            </p>
          </div>
        </div>
      </Slider>
      <a className={styles.common_a} href="#"> See more </a>
    </div>
  );
}

export default Related