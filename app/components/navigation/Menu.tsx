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
    <nav className="navbar">
      <ul className="navigationLinkContainer">
        {products.map((product, index) => (
          <li className="navigationLink" key={index}>
            <Link href="#">{product.type}</Link>
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
