import React, { useEffect, useState } from "react";
import styles from "./HomeSlider.module.css";

const HomeSlider = () => {
  const dataObj = [
    {
      text: "Clubhouse",
      svg: "/images/home/homeSlider/1.svg",
      bg: "/images/home/homeSlider/img1.png",
    },
    {
      text: "Sports Hub",
      svg: "/images/home/homeSlider/2.svg",
      bg: "/images/home/homeSlider/img2.png",
    },
    {
      text: "Ballroom",
      svg: "/images/home/homeSlider/3.svg",
      bg: "/images/home/homeSlider/img3.png",
    },
    {
      text: "Co-working Space",
      svg: "/images/home/homeSlider/4.svg",
      bg: "/images/home/homeSlider/img1.png",
    },
    {
      text: "Kids Play Area",
      svg: "/images/home/homeSlider/5.svg",
      bg: "/images/home/homeSlider/img2.png",
    },
    {
      text: "Fitness Centre",
      svg: "/images/home/homeSlider/6.svg",
      bg: "/images/home/homeSlider/img3.png",
    },
    {
      text: "Hostings",
      svg: "/images/home/homeSlider/7.svg",
      bg: "/images/home/homeSlider/img1.png",
    },
    {
      text: "Pools & Leisure",
      svg: "/images/home/homeSlider/8.svg",
      bg: "/images/home/homeSlider/img2.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.homeSlider}>
      <div className={styles.homeSliderMain}>
        {/* Background Image */}
        <div className={styles.sliderBgImage}>
          <img src={dataObj[activeIndex].bg} alt={dataObj[activeIndex].text} />
        </div>

        {/* Navigation Tabs */}

        <div className={styles.sliderTabs}>
          {dataObj.map((item, index) => (
            <>
              <div
              key={index}
              className={`${styles.tabItem} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
                >
              <img src={item.svg} alt={item.text} />
              <p>{item.text}</p>
            </div>
            <div className={styles.divider}></div>
            </>
          ))}
          </div>
        </div>
    </div>
  );
};

export default HomeSlider;
