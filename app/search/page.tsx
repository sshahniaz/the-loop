"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const search = useSearchParams();
  const searchQuery = search ? search?.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");
  //
  console.log("search params", encodedSearchQuery);
  return <div>page</div>;
};

export default page;
