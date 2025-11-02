import React, { useState } from 'react'
import styles from './Glance.module.css'
const Glance = () => {
    const dataObj = [
      {
        tab: "Exterior",
        images: [
          { img: "/images/home/g1.png" },
          { img: "/images/home/g2.png" },
          { img: "/images/home/g3.png" },
        ],
      },
      {
        tab: "Interior",
        images: [
          { img: "/images/home/g1.png" },
          { img: "/images/home/g3.png" },
          { img: "/images/home/g2.png" },
        ],
      },
      {
        tab: "Virtual tour",
        images: [
            { img: "/images/home/g1.png" },
            { img: "/images/home/g2.png" },
            { img: "/images/home/g3.png" },
        ],
      },
    ];
      const handlePrev = () => {
        if (isActive > 0) setisActive((prev) => prev - 1);
      };

      const handleNext = () => {
        if (isActive < dataObj.length - 1) setisActive((prev) => prev + 1);
      };

    const [isActive , setisActive] = useState(0);
    const activeTab = dataObj[isActive];
    // console.log(activeTab)


  return (
    <div className={styles.glance}>
      <p>GALLERY</p>
      <h2>Take a glance at our craft</h2>

      <div className={styles.glanceSlider}>
        <div className={styles.navTabs}>
          {dataObj.map((item, index) => (
            <button
              key={index}
              onClick={() => setisActive(index)}
              className={isActive === index ? styles.activeBtn : ""}
            >
              {item.tab}
            </button>
          ))}
        </div>
        <div className={styles.tabItem}>
          <div className={styles.tabImages}>
            <div className={styles.leftImage}>
              <img src={activeTab.images[0].img} alt="" />
            </div>
            <div className={styles.rightImage}>
              {activeTab.images.slice(1, 3).map((imgObj, index) => (
                <div key={index}>
                  <img src={imgObj.img} alt="Image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <button
          onClick={handlePrev}
          className={isActive === 0 ? styles.inActive : ""}
          disabled={isActive === 0}
        >
          <img src="/images/home/arrow.svg" alt="prev" />
        </button>

        <button
          onClick={handleNext}
          className={isActive === dataObj.length - 1 ? styles.inActive : ""}
          disabled={isActive === dataObj.length - 1}
        >
          <img src="/images/home/arrow.svg" alt="next" />
        </button>
      </div>
    </div>
  );
}

export default Glance