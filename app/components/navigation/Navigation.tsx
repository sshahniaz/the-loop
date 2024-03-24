import Menu from "./Menu";
// import getAllCategoriesAndSubCategories from "@/app/api/database";
import prisma from "@/prisma/client";
import Link from "next/link";
import Input from "../Input";
export default async function Navigation() {
  const products = await prisma.product.findMany({
    where: {},
    distinct: ["catagory"],
  });
  const categories = products.map((product) => product.catagory);
  console.log("Categories:", categories);
  const subcategories = products.map((product) => product.subCatagory);
  console.log("Subcategories:", subcategories);

  return (
    <>
      <Input />
      <Menu categories={categories} subcategories={subcategories} />
      {/* <Menu categories={categories} /> */}
    </>
  );
}
