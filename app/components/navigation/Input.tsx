"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./Input.scss";
import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Image from "next/image";
import { SignIn } from "@clerk/nextjs";
const Input = () => {
  const [searchQuery, setSearchQuery] = useState("");
  //
  const router = useRouter();
  //
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);

    // console.log("current query", encodedSearchQuery);
  };

  return (
    <>
      <div className="headerFlex">
        <form action="" onSubmit={onSearch}>
          <div className="searchForm">
            <div className="searchIcon">
              <SearchOutlinedIcon />
            </div>
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              type={"search"}
              name={"search"}
              placeholder={"Search for a product"}
            />
          </div>
        </form>
        <Link href="/">
          {" "}
          <Image
            className="headerLogo"
            src="/assets/logored.svg"
            height={100}
            width={150}
            alt="main logo"
          />
        </Link>

        <ul className="headerIcons">
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
            <Link href="/sign-in">
              Sign-In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Input;
