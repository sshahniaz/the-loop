import React from "react";
import ProductDetails from "./ProductDetails";
import styles from "./ProductPageStyles.module.css";

const ProductPage = () => {
  return (
    <>
      <div className="productContainer" style={styles}>
        <div className="productGalery"></div>
        <div className="productInfo">
          {/* <ProductDetails></ProductDetails> */}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
