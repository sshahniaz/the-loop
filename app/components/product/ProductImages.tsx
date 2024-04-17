import React from "react";
import { CartProductType } from "./ProductDetails";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleFocusedImage: (value: CartProductType) => void;
}
const ProductImages: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleFocusedImage,
}) => {
  return (
    <div>
      {product.imageLink.map((imageLink: CartProductType) => {
        return (
          <div onClick={() => handleFocusedImage(imageLink)}>
            <img src={imageLink.imageLink[0]} alt="image placeholder" />;
          </div>
        );
      })}
    </div>
  );
};

export default ProductImages;
