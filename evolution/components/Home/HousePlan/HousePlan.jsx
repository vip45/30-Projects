/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './HousePlan.module.css'
import Container from '@/components/common/Container/Container'

const HousePlan = () => {
 const dataObj = [
   {
     tab: "Master plan",
     content: [
       { subTitle: "CARPET AREA", title: "1500 - 1800 Sq.Ft" },
       { subTitle: "SUPER AREA", title: "₹4.2 Cr" },
       { subTitle: "BALCONY AREA", title: "180 Sq.Ft" },
     ],
     btn: "DOWNLOAD MASTER PLAN",
     bgImage: "/images/home/homeSlider/slide.png",
   },
   {
     tab: "Floor plan",
     content: [
       { subTitle: "CARPET AREA", title: "950 - 1050 Sq.Ft" },
       { subTitle: "SUPER AREA", title: "₹2.7 Cr" },
       { subTitle: "BALCONY AREA", title: "120 Sq.Ft" },
     ],
     btn: "DOWNLOAD FLOOR PLAN",
     bgImage: "/images/home/homeSlider/slide.png",
   },
   {
     tab: "1 BHK",
     content: [
       { subTitle: "CARPET AREA", title: "650 Sq.Ft" },
       { subTitle: "SUPER AREA", title: "₹1.3 Cr" },
       { subTitle: "BALCONY AREA", title: "80 Sq.Ft" },
     ],
     btn: "DOWNLOAD 1 BHK PLAN",
     bgImage: "/images/home/homeSlider/slide.png",
   },
   {
     tab: "2 BHK",
     content: [
       { subTitle: "CARPET AREA", title: "980 - 1100 Sq.Ft" },
       { subTitle: "SUPER AREA", title: "₹2.15 Cr" },
       { subTitle: "BALCONY AREA", title: "150 Sq.Ft" },
     ],
     btn: "DOWNLOAD 2 BHK PLAN",
     bgImage: "/images/home/homeSlider/slide.png",
   },
   {
     tab: "3 BHK",
     content: [
       { subTitle: "CARPET AREA", title: "1350 - 1500 Sq.Ft" },
       { subTitle: "SUPER AREA", title: "₹3.05 Cr" },
       { subTitle: "BALCONY AREA", title: "200 Sq.Ft" },
     ],
     btn: "DOWNLOAD 3 BHK PLAN",
     bgImage: "/images/home/homeSlider/slide.png",
   },
 ];

    const [activeIndex , setActiveIndex] = useState(0);
    const activeTab = dataObj[activeIndex];
    console.log(activeTab)
  return (
    <div className={styles.housePlan}>
      <Container>
        <div className={styles.housePlanNav}>
          <div className={styles.navigations}>
            {dataObj.map((item, index) => (
              <button
                key={index}
                className={`${activeIndex === index ? styles.active : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {item.tab}
              </button>
            ))}
          </div>
          <div className={styles.navtabs}>
            <div className={styles.mainTab}>
              <div className={styles.mainTabLeft}>
                <div>
                {activeTab.content.map((data,id)=>(
                    <div key={id} className={styles.mainTabLeftDiv}>
                    <p>{data.subTitle}</p>
                    <h3>{data.title}</h3>
                  </div>
                ))}
                </div>
                <button>{activeTab.btn}</button>
              </div>
              <div className={styles.mainTabRight}>
                <img
                  className="img-fluid"
                  src={activeTab.bgImage}
                  alt={activeTab.tab}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HousePlan