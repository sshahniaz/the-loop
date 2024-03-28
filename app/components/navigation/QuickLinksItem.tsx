import React from "react";
import Link from "next/link";

interface LinkProps {
  href: string;
  
}

const QuickLinksItem = ({href,}:LinkProps) => {
  return (
    <>
      <li>
        <img src="" alt="" />
        <Link href={`/categories/${href}`}>{ href }</Link>
      </li>

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

export default QuickLinksItem;
