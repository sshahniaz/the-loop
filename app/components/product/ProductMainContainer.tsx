"use client";
import React, { Suspense, useEffect, useState } from "react";

// import prisma from "@/prisma/client";
// import { Product } from "@prisma/client";
// import Link from "next/link";
// import { ArrowDropDown } from "@mui/icons-material";
//import AddToBasket from "../cart/AddToBasket";
// import { ProductAction } from "@/app/actions/ProductActions";
import { fetchProductData } from "@/app/actions/SingleProductActions";
import AddToWishList from "../wishlist/AddToWishList";
import SimilarProduct from "./SimilarProduct";

// type productTypeModel = {
//   name: string;
//   price: number;
//   condition: string;
//   material: string;
//   colour: string;
//   type: string;
//   details: string;
//   imageLink: string[];
//   ownerId: string;
// };

interface ProductData {
  name: string;
  price: number;
  condition: string;
  material: string;
  colour: string;
  type: string;
  details: string;
  imageLink: string[];
  ownerId: string;
}
interface Props {
  productId: string;
}

const ProductMainContainer = ({ productId }: Props) => {
  const [productData, setProductData] = useState<ProductData | null>(null);

  useEffect(() => {
    const getProductData = async () => {
      const { productData }: any = await fetchProductData(productId);
      setProductData(productData);
    };
    getProductData();
  }, [productId]);

  return (
    <>
      {productData != null && (
        <Suspense fallback={<div>Loading...</div>}>
          <div className="mainContainer">
            <div className="productDetails">
              <h2>{productData.name}</h2>
              <h3>£{productData.price}</h3>
              <h3>{productData.ownerId}</h3>
              <div className="buttons">
                {/* <AddToBasket />
                <AddToWishList /> */}
              </div>
              <p>Description:</p>
              <p> {productData.details}</p>
              <p>Details:</p>
              <ul>
                <li>Condition: {productData.condition}</li>
                <li>Colour: {productData.colour}</li>
                <li>Material: {productData.material}</li>
              </ul>
            </div>
          </div>
          <SimilarProduct data={productData} />
        </Suspense>
      )}
    </>
  );
};

export default ProductMainContainer;

// export default function ProductDetails({ product }: ProductProps) {
//   return (
//     <>
//       {/* {products.map((product, index) => (
//         <div key={index}> */}
//       <h2>{product.name}</h2>
//       {/* </div> */}
//       {/* ))} */}
//     </>
//     // <div>
//     //   {data.map((product: Product) => (
//     //     <div key={product.id}>
//     //       <h2>{product.name}</h2>
//     //       <p>Price: {product.price}</p>
//     //       <div className="ownerFlex">
//     //         {/* owner rating */}
//     //         <span>{product.ownerId}</span>
//     //         {/* owner name */}
//     //         <span>{product.ownerId}</span>
//     //       </div>
//     //       <div className="buttonsFlex">
//     //         <AddToBasket />
//     //         <AddToWishlist />
//     //       </div>

//     //       <p>
//     //         Description: <ArrowDropDown> {product.details}</ArrowDropDown>
//     //       </p>
//     //       <p>
//     //         Details:{" "}
//     //         <ArrowDropDown>
//     //           <div className="detailsFlex">
//     //             <p>Colour: {product.colour}</p>
//     //             <p>Material: {product.material}</p>
//     //             <p>Type: {product.type}</p>
//     //             <p>Condition: {product.condition}</p>
//     //           </div>
//     //         </ArrowDropDown>
//     //       </p>
//     //     </div>
//     //   ))}
//     // </div>
//   );
// }

// // export default ProductDetails;
