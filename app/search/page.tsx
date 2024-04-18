"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import React from "react";
import "./SearchResults.scss";
import AddToWishList from "../components/wishlist/AddToWishList";
import ImageHover from "../components/ImageHover";
import { updateWithlist } from "../actions/WishlistActions";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import getUser from "../actions/GetUserAction";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  imageLink: string;
}
interface User {
  id: string;
  email: string;
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
  const { isSignedIn, user } = useUser();

  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    if (isSignedIn && user.primaryEmailAddress && userInfo === null) {
      const checkUserId = async () => {
        try {
          const referenceUser = await getUser(
            user.primaryEmailAddress?.emailAddress ?? ""
          );
          if (referenceUser) {
            setUserInfo(referenceUser);
          }
        } catch (error) {
          console.log(error);
        }
      };
      checkUserId();
    }
  });

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
    <div className="pageContainer">
      {/* need to add filter here */}
      <div className="searchResultContainer">
        {data?.products?.map((product, index) => (
          <div className="searchResultCard" key={index}>
            <ImageHover image={product.imageLink} alt={product.name} />
            <div className="iconFloat">
              <Link key={product.id} href={`../../product/${product.id}`}>
                <h3 className="productHeading">{product.name}</h3>
              </Link>
              <AddToWishList
                productId={product.id}
                userId={userInfo?.id}
                onUpdateWishlist={handlwWishlistupdate}
              />
            </div>
            <p>£{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
