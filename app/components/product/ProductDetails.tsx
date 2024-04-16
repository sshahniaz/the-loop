// // import OthersBoughtProduct from "../components/product/OthersBoughtProduct";
// import React from "react";
"use client";
import { CartProductType, useCart } from "@/app/components/cart/CartActions";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// import ProductMainContainer from "./ProductDetails";
// import ProductImages from "./ProductImages";
// // import SimilarProduct from "../components/product/SimilarProduct";

// import { fetchProductData} from "@/app/actions/SingleProductActions";

// // export default async function ProductLayout() {
// //   const getData = await fetchProductData();
// //   console.log(getData);
// //   return (
// //     <>
// //       <div className="productContainer">
// //         <ProductImages />
// //         <ProductMainContainer/>
// //       </div>
// //     </>
// //   );
// // }
interface ProductDetailsProps {
  product: any;
}
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>();

  const router = useRouter();
  //check if you have the item in cart or not
  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);
  return;
  <>
    <div>
      <div className="images"></div>
      <div className="details">
        <h1>{product.name}</h1>
        <h2>£{product.price}</h2>
        <button>add to cart</button>
        {isProductInCart ? (
          <>
            <span>Product added to cart</span>{" "}
            <button onClick={() => router.push("/cart")}>View Cart</button>
          </>
        ) : (
          <>
            <span>Product already in cart</span>
          </>
        )}
      </div>
    </div>
  </>;
};
export default ProductDetails;
