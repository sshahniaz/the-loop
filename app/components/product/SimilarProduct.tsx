"use client";
import React from "react";
import useSWR from "swr";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";

// type productTypeModel = {
//   products: {
//     name: string;
//     price: number;
//     condition: string;
//     material: string;
//     colour: string;
//     type: string;
//     details: string;
//     imageLink: string[];
//     ownerId: string;
//   }[];
// };

interface ProductCardProps {
  data: any;
}

const SimilarProduct: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className="productCard"
      onClick={() => router.push(`/components/product/${data.id}`)}
    >
      <h2>Similar Products</h2>
      <div className="othersFlex">
        <div className="images">
          <img src={data.imageLink[0]}></img>
        </div>
        <div className="othersInfoFlex">
          <div className="othersDetailsFlex">
            <h2>{data.name}</h2>
            <h3>£{data.price}</h3>
            <p>{data.details}</p>
          </div>
          {/* <AddToWishList /> */}
          {/* <AddToBasket/> */}
        </div>
      </div>
      ;
    </div>
  );
};

export default SimilarProduct;
