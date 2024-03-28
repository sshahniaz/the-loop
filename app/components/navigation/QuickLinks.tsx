import React from "react";
import prisma from "@/prisma/client";
import Link from "next/link";
import QuickLinksItem from "./QuickLinksItem";

const QuickLinks = () => {
  const links = ["Lighting", "Chairs", "Posters", "Sofas", "Bedroom Furniture"];

  return (
    <>
      {/* <QuickLinksItem LinkProps={links[0]} /> */}

      <ul>
      {links.map((pageR, index) => (
        <QuickLinksItem href={pageR}/>
      ))}
        {/* <li>
          <Link href={`/categories/${pageR}`}> lighting </Link>
        </li> */}
      </ul>
      {/* <ul>
        <li>
          <img src="" alt="" />
          <Link href="#">Lighting</Link>
        </li>
        <li>
          <img src="" alt="" />
          <Link href="#">Chairs</Link>
        </li>
        <li>
          <img src="" alt="" />
          <Link href="#">Posters</Link>
        </li>
        <li>
          <img src="" alt="" />
          <Link href="#">Sofas</Link>
        </li>
        <li>
          <img src="" alt="" />
          <Link href="#">Bedroom Furniture</Link>
        </li>
      </ul> */}
    </>
  );
};

export default QuickLinks;
