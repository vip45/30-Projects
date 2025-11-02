import React from 'react'
import styles from './Map.module.css'
import Container from '../Container/Container'
import Form from '../Form/Form'

const Map = () => {
  return (
    <div className={styles.map_main}>
        <div className={styles.map_img}><img className='w-100' src="/images/blog/map.png" alt="" /></div>

        <div className={styles.mainMap + " d-flex  gap-3 align-items-end"}>
            <Form/> 
            <div className={styles.click}><img src="/images/home/click.png" alt="" /></div>
        </div>
    </div>
  )
}

export default Map