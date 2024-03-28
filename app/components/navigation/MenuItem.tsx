import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
interface MenuItemProps {
  catagory: ({
    name: string;
  } & {
    subCatagory: {
      name: string;
    }[];
  })[];
}

const MenuItem = async ({ catagory }: MenuItemProps) => {
  // console.log(navCats)

  return (
    <div className="menuItem">
      {catagory.map((menuCats, index) => (
        <span className="heading">
          <Link key={index} href={`/categories/${menuCats.name}`}>
            {menuCats.name}
          </Link>
          <ul>
            {menuCats.subCatagory.map((subCat, index) => (
              <li key={index}>
                <Link href={`/categories/${subCat.name}`}>{subCat.name}</Link>
              </li>
            ))}
          </ul>
        </span>
      ))}
    </div>
  );
};

export default MenuItem;
