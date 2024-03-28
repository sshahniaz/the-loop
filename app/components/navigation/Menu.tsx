"use client";
import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { Limelight } from "next/font/google";

type ProductTypesModel = {
  productTypes: {
    name: string;
    catagory: ({
        name: string;
    } & {
        subCatagory: {
            name: string;
        }[];
    })[]
    // subCatagory: string;
  }[];
};

const Menu = ({ productTypes }: ProductTypesModel) => {

  // console.log(productTypes)
  return (
    <nav className="navbar">
      <ul className="navigationLinkContainer">
        {productTypes.map((product, index) => (
          <li className="navigationLink" key={index}>
            <Link href={`/categories/${product.name}`}>{product.name}</Link>
            <ul className="menuLv2">
              <li>
                <MenuItem catagory={product.catagory} />
              </li>
            </ul>
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
