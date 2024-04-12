"use client";
import React from "react";
import { useState } from "react";

interface ImageProps {
  firstImage: string;
  secondImage: string;
}

const ImageToggle = ({ firstImage, secondImage }: ImageProps) => {
  //   first image by default
  const placeHolder = "assets/placeholder.jpeg";
  // const handleImage = () => {
  //     if (firstImage) {
  //         setCurrentImage(firstImage)
  //     } else {
  //         setCurrentImage(placeHolder)
  //     }
  // }
  const [currentImage, setCurrentImage] = useState(
    firstImage ? firstImage : placeHolder
  );

  const handleMouseOver = () => {
    if (secondImage) {
      setCurrentImage(secondImage);
    } else {
      setCurrentImage(placeHolder);
    }
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
