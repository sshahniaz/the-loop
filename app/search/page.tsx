"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import React from "react";
import "./SearchResults.scss";

interface Product {
  name: string;
  price: number;
  imageLink: string;
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
    // console.log(data.products);
  }

  return (
    <>
      <div className="searchResultContainer">
        {data?.products?.map((product, index) => (
          <div className="searchResultCard" key={index}>
            <img src={product.imageLink[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      .
    </>
  );
};

export default page;
