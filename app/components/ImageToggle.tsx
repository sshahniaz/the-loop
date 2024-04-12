"use client";
import React from "react";
import { useState } from "react";

interface ImageProps {
  firstImage: string;
  secondImage: string;
}

const ImageToggle = ({ firstImage, secondImage }: ImageProps) => {
  //   const imageRef = useRef<HTMLImageElement | null>();
  //   console.log(firstImage);
  //   first image by default

  const [currentImage, setCurrentImage] = useState(firstImage);

  const handleMouseOver = () => {
    setCurrentImage(secondImage);
  };

  const handleMouseOut = () => {
    setCurrentImage(firstImage);
  };

  return (
    <img
      src={currentImage}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default ImageToggle;

// onMouseOver={() => {
//     const imageElement = imageRef.current;
//     console.log(imageRef.current);
//     if (imageElement) {
//       imageElement.src = secondImage;
//     }
//   }}
//   onMouseOut={() => {
//     const imageElement = imageRef.current;
//     console.log(imageElement);
//     if (imageElement) {
//       imageElement.src = firstImage;
//     }
//   }}
//   src={firstImage}
//   alt=""
