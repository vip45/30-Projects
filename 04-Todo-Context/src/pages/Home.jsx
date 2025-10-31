import {React ,useState} from 'react'
import List from '../component/List'

const Home = () => {
  
  return (
    <div className='main-page-container w-100 position-relative '>
        <List/>

        <button></button>

        <button className='add-btn'><img src="../src/assets/add.svg" alt="" /></button>
    </div>
  )
}

export default Home