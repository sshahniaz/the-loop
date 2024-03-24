"use client";

import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import React from "react";

interface Product {
  name: string;
  details: string;
  image: string;
}

const fetchProducts = async (url: string) => {
  const searchResponse = await fetch(url);
  // console.log(searchResponse);
  if (!searchResponse.ok) throw new Error("Failed to fetch");
  return searchResponse.json();
};

const page = () => {
  const search = useSearchParams();
  const searchQuery = search ? search?.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");
  const { data, isLoading } = useSWR<{ products: Product[] }>(
    `/api/search?q=${encodedSearchQuery}`,
    fetchProducts
  );

  if (data && data.products && data.products.length > 0) {
    console.log(data.products);
  }

  return (
    <>
      {data?.products?.map((product, index) => (
        <div key={index}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.details}</p>
        </div>
      ))}
    </>
  );
};

export default page;
