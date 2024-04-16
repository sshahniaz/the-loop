import React from "react";
import ImageToggle from "./ImageToggle";

interface Props {
  image: string;
  alt: string;
}

interface ImageProps {
  firstImage: string;
  secondImage: string;
}

// const ImageToggle = ({firstImage, secondImage} : ImageProps)

const ImageHover = ({ image, alt }: Props) => {
  //   console.log(image[0], image[1]);
  return (
    // <div className="imageReturn">
    //   <img src={image[0]} alt={alt} />
    //   <img src={image[1]} alt={alt} />
    // </div>
    <div>
      <ImageToggle firstImage={image[0]} secondImage={image[1]} />
    </div>
  );
};

export default ImageHover;
