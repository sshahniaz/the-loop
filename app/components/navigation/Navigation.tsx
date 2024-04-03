"use client";
import Menu from "./Menu";
import prisma from "@/prisma/client";
import Link from "next/link";
import Input from "./Input";
import "./Navigation.scss";
import { useState } from "react";

export default async function Navigation() {
  const navType = await prisma.nav.findMany({
    select: {
      name: true,
      catagory: true,
    },
  });

  return (
    <>
      <div className="menu">
        <div className="navigationContainer">
          <button id="hamburger">
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
          </button>

          <Input />
          <Menu productTypes={navType} />
        </div>
      </div>
    </>
  );
}
