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
