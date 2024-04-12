"use client";
import React, { useState } from "react";
import styles from "./FAQ.module.scss";

interface FAQItem {
  question: string;
  answer: string;
}

type Props = {
  data: FAQItem[];
};

const FAQ: React.FC<Props> = ({ data }) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIdx(index === expandedIdx ? null : index);
  };

  const getIcon = (index: number) => (expandedIdx === index ? "-" : "+");

  return (
    <div className={styles.faq}>
      <h1 className={styles.faqHeading}>Frequently Asked Questions</h1>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.accordion}>
            <button
              className={
                expandedIdx === index ? styles.expanded : styles.collapsed
              }
              onClick={() => handleToggle(index)}
            >
              {getIcon(index)} {item.question}
            </button>
            {expandedIdx === index && (
              <div className={styles.content}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
