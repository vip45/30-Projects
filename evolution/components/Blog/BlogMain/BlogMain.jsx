import React from 'react'
import styles from './BlogMain.module.css'
import Container from '@/components/common/Container/Container'
import NewChapter from '../BlogsComponents/NewChapter'
import Infra from '../BlogsComponents/Infra'
import Comfort from '../BlogsComponents/Comfort'
import Ahead from '../BlogsComponents/Ahead'
import Invest from '../BlogsComponents/Invest'
import Listen from '../BlogsComponents/Listen'
import Trending from '../BlogsComponents/Trending'
import Related from '../BlogsComponents/Related'

const BlogMain = () => {
  return (
    <section className={styles.blogMain}> 
        <Container>
            <div className={styles.blogDetail}>
                <NewChapter/>   
                <Infra/>
                <Comfort/>
                <Invest/>
                <Ahead/>
            </div>
            <div className={styles.moreblogs}>
                <div className={styles.moreDetails}>
                    <Listen/>
                    <Trending/>
                    <Related/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default BlogMain