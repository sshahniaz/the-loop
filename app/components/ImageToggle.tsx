"use client";
import React from "react";
import { useState } from "react";

interface ImageProps {
  firstImage: string;
  secondImage: string;
}

const ImageToggle = ({ firstImage, secondImage }: ImageProps) => {
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
