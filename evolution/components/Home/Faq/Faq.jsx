import React, { useState } from "react";
import styles from "./Faq.module.css";
import Container from "@/components/common/Container/Container";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "Why standards do Highland Lifespaces adhere to when building Highland Mayfield?",
      answer:
        "Highland Mayfield follows premium construction practices, sourcing high-grade materials and employing industry-certified methods to ensure durability, safety, and long-term value. Our design philosophy blends functionality, modern aesthetics, and sustainability to deliver homes that stand the test of time.",
    },
    {
      question: "How much does property in Highland Mayfield cost?",
      answer:
        "Highland Mayfield follows premium construction practices, sourcing high-grade materials and employing industry-certified methods to ensure durability, safety, and long-term value. Our design philosophy blends functionality, modern aesthetics, and sustainability to deliver homes that stand the test of time.",
    },
    {
      question: "What is the possession timeline for Highland Mayfield?",
      answer:
        "Highland Mayfield follows premium construction practices, sourcing high-grade materials and employing industry-certified methods to ensure durability, safety, and long-term value. Our design philosophy blends functionality, modern aesthetics, and sustainability to deliver homes that stand the test of time.",
    },
    {
      question:
        "What are the benefits of investing in Highland Mayfield if I am an NRI?",
      answer:
        "Highland Mayfield follows premium construction practices, sourcing high-grade materials and employing industry-certified methods to ensure durability, safety, and long-term value. Our design philosophy blends functionality, modern aesthetics, and sustainability to deliver homes that stand the test of time.",
    },
  ];

  return (
    <div className={styles.faq}>
      <Container>
        <p className={styles.subtitle}>PROJECT PROGRESS</p>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={`${styles.faqQuestion} ${
                  activeIndex === index ? styles.activeHeader : " "
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h4 className={``}>{item.question}</h4>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div
                  className={`${styles.faqAnswer} ${
                    activeIndex === index ? styles.open : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faq;
