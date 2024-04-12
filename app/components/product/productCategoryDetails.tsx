import React from "react";
import prisma from "@/prisma/client";
import { Product } from "@prisma/client";
import Link from "next/link";
import { ArrowDropDown } from "@mui/icons-material";
import AddToBasket from "../cart/AddToBasket";
import { ProductAction } from "@/app/actions/ProductActions";

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

export default function ProductCategoryDetails({ products }: productTypeModel) {
  return (
    <>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
        </div>
      ))}
    </>
    // <div>
    //   {data.map((product: Product) => (
    //     <div key={product.id}>
    //       <h2>{product.name}</h2>
    //       <p>Price: {product.price}</p>
    //       <div className="ownerFlex">
    //         {/* owner rating */}
    //         <span>{product.ownerId}</span>
    //         {/* owner name */}
    //         <span>{product.ownerId}</span>
    //       </div>
    //       <div className="buttonsFlex">
    //         <AddToBasket />
    //         <AddToWishlist />
    //       </div>

    //       <p>
    //         Description: <ArrowDropDown> {product.details}</ArrowDropDown>
    //       </p>
    //       <p>
    //         Details:{" "}
    //         <ArrowDropDown>
    //           <div className="detailsFlex">
    //             <p>Colour: {product.colour}</p>
    //             <p>Material: {product.material}</p>
    //             <p>Type: {product.type}</p>
    //             <p>Condition: {product.condition}</p>
    //           </div>
    //         </ArrowDropDown>
    //       </p>
    //     </div>
    //   ))}
    // </div>
  );
}
