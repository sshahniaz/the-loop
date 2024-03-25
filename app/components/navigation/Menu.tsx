"use client";
import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { Limelight } from "next/font/google";

type ProductModel = {
  products: {
    catagory: string;
    subCatagory: string;
  }[];
};

const Menu = ({ products }: ProductModel) => {
  console.log(products);
  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  );
  //   return (
  //     <nav>
  //       <ul>
  //         <li>
  //           {categories.map((category, index) => (
  //             <MenuItem label={category} href={`/${category}`} />
  //           ))}
  //           <ul>
  //             <li>
  //               <MenuItem
  //                 label={subcategories}
  //                 href={`/${categories}/${subcategories}`}
  //               />
  //             </li>
  //           </ul>
  //         </li>
  //       </ul>
  //       <ul>
  //         {subcategories.map((subcategory, index) => (
  //           <li key={index}>
  //             <MenuItem
  //               label={categories[index]}
  //               href={`/${categories[index]}/${subcategory}`}
  //             />
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>
  //   );
};

export default Menu;
