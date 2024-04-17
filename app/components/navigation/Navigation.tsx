
import Menu from "./Menu";
import prisma from "@/prisma/client";
import Input from "./Input";
import "./Navigation.scss";
import { NavigateAction } from "next/dist/client/components/router-reducer/router-reducer-types";
import { NavigationAction } from "@/app/actions/NavigationAction";
import React,{useState, useEffect, Suspense} from "react";
export default async function Navigation() {
  const navType = await NavigationAction();

  

  return (
    <>
      <div className="menu">
        <div className="navigationContainer">
          <Input />
          <Suspense fallback={<div>Loading...</div>}>

          <Menu productTypes={navType} />
          </Suspense>
          {/* <Menu /> */}
        </div>
      </div>
    </>
  );
}
