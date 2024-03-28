import Menu from "./Menu";
import prisma from "@/prisma/client";
import Link from "next/link";
import Input from "./Input";
import "./Navigation.scss";

export default async function Navigation() {
  const products = await prisma.product.findMany({
    select: {
      type: true,
      catagory: true,
      subCatagory: true,
    },
    distinct: ["type"],
  });

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
          <Menu products={products} />
        </div>
      </div>
    </>
  );
}
