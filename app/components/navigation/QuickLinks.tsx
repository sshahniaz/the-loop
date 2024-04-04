import React from "react";
import prisma from "@/prisma/client";
import Link from "next/link";
import QuickLinksItem from "./QuickLinksItem";
import "./QuickLinks.scss";

interface QuickLinksModel {
  quicklinks: quickLinksProduct[];
}

interface quickLinksProduct {
  image: string;
  quickLink: string;
}

const QuickLinks = () => {
  const links = [
    { image: "/assets/lighting_quicklink.jpg", quickLink: "Lighting" },
    {
      image: "/assets/chair_quicklink.jpg",
      quickLink: "Chairs",
    },
    {
      image: "/assets/poster_quicklink.jpg",
      quickLink: "Posters",
    },
    { image: "/assets/sofas_quicklink.jpg", quickLink: "Sofas" },
    { image: "/assets/furniture_quicklink.jpg", quickLink: "Furniture" },
  ];

  return (
    <>
      <div className="quickLinksMaster">
        <h2 className="homepageQuickLinkHeading">Popular Categories</h2>
        <ul className="quickLinkContainer">
          <QuickLinksItem linkItems={links} />
        </ul>
      </div>
    </>
  );
};

export default QuickLinks;
