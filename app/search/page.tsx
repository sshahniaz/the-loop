"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import React from "react";
import "./SearchResults.scss";
import AddToWishList from "../components/wishlist/AddToWishList";
import ImageHover from "../components/ImageHover";
import { updateWithlist } from "../actions/WishlistActions";

interface Product {
  id: string;
  name: string;
  price: number;
  imageLink: string;
}

interface AddToWishlistProps {
  productId: string;
  userId?: string; // Optional user ID
  onUpdateWishlist?: () => void; // Optional callback to update wishlist state in parent component
}

const fetchProducts = async (url: string) => {
  const searchResponse = await fetch(url);
  // console.log(searchResponse);
  if (!searchResponse.ok) throw new Error("Failed to fetch");
  return searchResponse.json();
};

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search?.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");
  const { data, isLoading } = useSWR<{ products: Product[] }>(
    `/api/search?q=${encodedSearchQuery}`,
    fetchProducts
  );

  if (data && data.products && data.products.length > 0) {
  }

  const handlwWishlistupdate = async () => {
    console.log("wishlist updated");
  };

  return (
    <>
      <div className="pageContainer">
        {/* need to add filter here */}
        <div className="searchResultContainer">
          {data?.products?.map((product, index) => (
            <div className="searchResultCard" key={index}>
              <p>{product.imageLink}</p>
              <ImageHover image={product.imageLink} alt={product.name} />
              <div className="iconFloat">
                <h3 className="productHeading">{product.name}</h3>
                <AddToWishList
                  productId={product.id}
                  userId="65fc1d82bffb6b8984064dd3"
                  onUpdateWishlist={handlwWishlistupdate}
                />
              </div>
              <p>£{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
