"use client";
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { NavigationAction } from "@/app/actions/NavigationAction";

type ProductTypesModel = {
  productTypes: {
    name: string;
    catagory: ({
      name: string;
    } & {
      subCatagory: {
        name: string;
      }[];
    })[];
    // subCatagory: string;
  }[];
};

const Menu = ({ productTypes }: ProductTypesModel) => {
  // const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   setIsHovered(false);
  // }, []);

  return (
    <nav className="navbar">
      <ul className="navigationLinkContainer">
        {productTypes.map((product, index) => (
          <li className="navigationLink" key={index}>
            <Link
              href={`/categories/${product.name}`}
              // onMouseEnter={() => setIsHovered(true)}
              // onMouseLeave={() => setIsHovered(false)}
            >
              {product.name}
            </Link>
            <div className="menuLevel2">
              <ul className="menuLv2">
                <li>
                  <MenuItem catagory={product.catagory} />
                </li>
              </ul>
            </div>
          </li>
        ))}
        <li className="navigationLink">
          <Link href="#">New Arrivals</Link>
        </li>
        <li className="navigationLink">
          <Link className="saleLink" href="#">
            Sale
          </Link>
        </li>
        <li className="navigationLink">
          <Link href="#">Contact Us </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
