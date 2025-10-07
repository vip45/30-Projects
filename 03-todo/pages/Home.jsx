import React, { useState } from 'react'
import Search from '../src/components/Search'
import Modal from '../src/components/Modal'

const Home = () => {
    const [openMod, setopenMod] = useState(false);

    const handleModal = () =>{
        setopenMod(openMod ? false : true);
    } 
  return (
    <>
    <Search/>
    {openMod && ( <Modal closeMod={()=>setopenMod(false)}/>)}
   
    <button className={`${openMod ? "cross" : ""} add-btn`}onClick={handleModal}><img src="../src/assets/add.svg" alt="" /></button>
    </>
  )
}

export default Home