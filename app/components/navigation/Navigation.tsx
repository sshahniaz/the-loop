import Menu from "./Menu";
import prisma from "@/prisma/client";
import Link from "next/link";
import Input from "./Input";
import "./Navigation.scss";

export default async function Navigation() {
  const navType = await prisma.nav.findMany({
    select: {
      name: true,
      catagory: true,
    },
    
  });

  // console.log(navType);
  
  // navType[0].catagory[0].subCatagory[0].name

  // // console.log(products);
  // const categories = products.map((product) => product.catagory);
  // console.log("Categories:", categories);
  // const subcategories = products.map((product) => product.subCatagory);
  // console.log("Subcategories:", subcategories);

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
