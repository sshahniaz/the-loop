"use client";
// components/Carousel.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Carousel.module.scss';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

interface Image {
  url: string;
  alt: string;
}

interface CarouselProps {
  images: Image[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, autoplay = true, autoplayInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const slideRef = useRef(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [currentSlide, images.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(nextSlide, autoplayInterval);
  
      return () => clearInterval(intervalId);
    }
  }, [autoplay, autoplayInterval, images.length, nextSlide]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const transform = `translateX(-${currentSlide * 100}%)`;

  return (
    <div className={styles.carousel}>
      <div className={styles.slides} ref={slideRef} style={{ transform }}>
        {images.map((image, index) => (
          <div key={image.url} className={styles.slide}>
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
      <button className={`${styles.arrows} ${styles.prev}`} onClick={prevSlide}>
          <ArrowBackIosNew />
        </button>
      <button className={`${styles.arrows} ${styles.next}`} onClick={nextSlide}>
          <ArrowForwardIos />
        </button>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;


