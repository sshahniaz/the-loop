"use client";
import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { Limelight } from "next/font/google";

type ProductModel = {
  products: {
    type: string;
    catagory: string;
    subCatagory: string;
  }[];
};

const Menu = ({ products }: ProductModel) => {
  // console.log(products);

  // const getUniqueProducts = () => {
  //   const uniqueProducts: {
  //     type: string;
  //     catagory: string;
  //     subCatagory: string;
  //   }[] = [];
  //   const uniqueKey = new Set();

  //   products.forEach((product) => {
  //     const key = `${product.type}-${product.catagory}-${product.subCatagory}`;

  //     if (!uniqueKey.has(key)) {
  //       uniqueProducts.push(product);
  //       uniqueKey.add(key);
  //     }
  //   });
  //   return uniqueProducts;
  //   console.log(uniqueProducts);
  // };

  // const uniqueProducts = getUniqueProducts();

  return (
    <nav>
      <ul>
        {products.map((product, index) => (
          <li>
            {product.type}
            <ul>
              <li>
                <Link href={`categories/${product.catagory}`}>
                  {" "}
                  {product.catagory}
                </Link>
                <ul>
                  <li>
                    <Link href={`categories/category/${product.subCatagory}`}>
                      {product.subCatagory}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      {/* <ul>
        {products.map((product, index) => (
          <li>
            <Link href={`categories/${product.catagory}`}>
              {" "}
              {product.catagory}
            </Link>
            <ul>
              <li>
                <Link href={`categories/category/${product.subCatagory}`}>
                  {product.subCatagory}
                </Link>
              </li>
            </ul>
          </li>
        ))}
      </ul> */}
    </nav>
  );
};

export default Menu;
