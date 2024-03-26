import Menu from "./Menu";
// import getAllCategoriesAndSubCategories from "@/app/api/database";
import prisma from "@/prisma/client";
import Link from "next/link";
import Input from "../Input";
// import products, { ProductModel } from "./Menu";

export default async function Navigation() {
  const products = await prisma.product.findMany({
    select: {
      type: true,
      catagory: true,
      subCatagory: true,
    },
    distinct: ["catagory"],
  });

  // console.log(products);
  // const categories = products.map((product) => product.catagory);
  // console.log("Categories:", categories);
  // const subcategories = products.map((product) => product.subCatagory);
  // console.log("Subcategories:", subcategories);

  return (
    <>
      <Input />
      {/* <Menu products={products} /> */}
    </>
  );
}
