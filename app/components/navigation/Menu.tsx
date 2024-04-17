// "use client";
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { NavigationAction } from "@/app/actions/NavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
  return (
    <nav className="navbar">
      <ul className="navigationLinkContainer">
        {productTypes.map((product, index) => (
          <li className="navigationLink" key={index}>
            <Link href={`/categories/${product.name}`}>{product.name}</Link>
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
        <li className="signinLink">
          <Link href="/sign-in">Sign-In</Link>
        </li>
      </ul>
      {/* <ul className="headerIconsResponsive">
        <li className="sellLink">
          <Link href="/sell-form">Sell</Link>
        </li>
        <li>
          <Link href="/profile">
            <AccountCircleOutlinedIcon />
          </Link>
        </li>
        <li>
          <Link href="#">
            <LocalMallOutlinedIcon />
          </Link>
        </li>
        <li>
          <Link href="/favourites">
            <FavoriteBorderOutlinedIcon />
          </Link>
        </li>
        <li className="signinLink">
          <Link href="/sign-in">Sign-In</Link>
        </li>
      </ul> */}
    </nav>
  );
};
export default Menu;
