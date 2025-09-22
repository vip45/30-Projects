import React from 'react'
import notiImage from "../assets/images/notifications.svg"
import arrow from "../assets/images/arrow.svg"
import CommonPopup from '../components/CommonPopup'
const Home = () => {
  return (
    <div className='home-container'>

        <div className="home-top-container">
            <div className='home-top-left'>
                <p className=' fw-bolder fs-5 mb-0'>Good Afternoon</p>
                <p className='fw-bold fs-2'>Enjelina Jolie</p>
            </div>
            <div>
                <img src={notiImage} alt="" />
            </div>
        </div>
        <div className='home-expense-balance text-white'>
            <div>
                <p className='mb-0 fs-5'>Total Balance</p>
                <p className='fw-bold fs-2'>$2454.00</p>
            </div>
            <div className='home-income-main'>
                <div className='home-income'>
                    <p><span><img src={arrow} alt="" /></span> Income</p>
                    <p>$1840</p>
                </div>
                <div className='home-income'>
                    <p><span><img src={arrow} alt="" /></span> Expense</p>
                    <p>$1840</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Home