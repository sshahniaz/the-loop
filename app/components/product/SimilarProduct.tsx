import axios from "axios";
import React from "react";
import useSWR from "swr";
import { Product } from "@prisma/client";

type productTypeModel = {
  products: {
    name: string;
    price: number;
    condition: string;
    material: string;
    colour: string;
    type: string;
    details: string;
    imageLink: string[];
    ownerId: string;
  }[];
};

const SimilarProduct = () => {
  return (
    <div className="productSmallFlex">
      <h2>Similar Products</h2>
      {data.map((product: Product) => (
        <div className="othersFlex">
          <div className="images">
            <img src={product.imageLink[0]}></img>
          </div>
          <div className="othersInfoFlex">
            <div className="othersDetailsFlex">
              <h2>{product.name}</h2>
              <h3>£{product.price}</h3>
              <p>{product.details}</p>
            </div>
            {/* <AddToWishList /> */}
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default SimilarProduct;
