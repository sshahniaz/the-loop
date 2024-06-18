"use client";
import React, { useState, useEffect, Suspense } from "react";
import ImageHover from "../ImageHover";
import AddToWishList from "../wishlist/AddToWishList";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import "../../search/SearchResults.scss";
import Link from "next/link";
import getUser from "@/app/actions/GetUserAction";
interface Product {
  id: string;
  name: string;
  price: number;
  colour: string;
  material: string;
  condition: string;
  imageLink: string[];
}

const Products = ({ products }: { products: Product[] }) => {
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    email: string;
    password: string | null;
    profileId: string | null;
  } | null>(null);
  const router = useRouter();

  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      fetchUser();
    }
  }, [isSignedIn]);

  const fetchUser = async () => {
    const userDb = await getUser(user?.primaryEmailAddress?.emailAddress ?? "");
    setCurrentUser(userDb);
  };
  console.log(currentUser);

  const handlwWishlistupdate = async () => {
    if (isSignedIn) {
      console.log("updating wishlist");
    } else {
      router.push("../../sign-in");
    }

    console.log("wishlist updated");
  };

  // console.log(products);

  return (
    <div className="pageContainer">
      <div className="searchResultContainer2">
        {/* <h2>Products</h2> */}
        <Suspense fallback={<div>Loading...</div>}>
          {products.map((product) => (
            <div className="searchResultCard" key={product.id}>
              <ImageHover image={product.imageLink} alt={product.name} />

              <div className="iconFloat">
                <Link key={product.id} href={`../../product/${product.id}`}>
                  <h3 className="productHeading">{product.name}</h3>
                </Link>

                <AddToWishList
                  productId={product.id}
                  userId={currentUser?.id}
                  onUpdateWishlist={handlwWishlistupdate}
                />
                {/* {isSignedIn ? (
                 
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )} */}
              </div>
              <p className="productPrice">£{product.price}</p>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
