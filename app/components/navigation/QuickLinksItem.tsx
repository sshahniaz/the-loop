import React from "react";
import Link from "next/link";

type LinkProps = {
  linkItems: {
    quickLink: string;
    image: string;
  }[];
};

const QuickLinksItem = ({ linkItems }: LinkProps) => {
  return (
    <>
      <div className="quickLinkContainer">
        {linkItems.map((item, index) => (
          <li key={index} className="quickLinkItem">
            <img
              src={item.image}
              className="quickLinkImg"
              alt="quick link image"
              width={150}
            />
            <p className="quickLinkText">
              <Link href={`/categories/${item.quickLink}`}>
                {item.quickLink}
              </Link>
            </p>
          </li>
        ))}
      </div>
      {/* <li>
        <img src={} alt="" />
        <Link href={`/categories/${href}`}>{href}</Link>
      </li> */}
    </>
  );
};

export default QuickLinksItem;
