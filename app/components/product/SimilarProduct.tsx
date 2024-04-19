"use client";
import React, { Suspense, useEffect, useState } from "react";
import ImageHover from "../ImageHover";
import Link from "next/link";
import AddToWishList from "../wishlist/AddToWishList";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import getUser from "@/app/actions/GetUserAction";
import { fetchProducts } from "@/app/actions/ProductsActions";

interface Product {
  id: string;
  name: string;
  details: string;
  ownerId: string;
  price: number;
  discount: number | null;
  imageLink: string[];
  colour: string;
  material: string;
  type: string;
  catagory: string;
  subCatagory: string;
  sale: number;
  condition: string;
  transactionsId: string | null;
  [key: string]: any;
}
interface PContainerProps {
  pType: string;
}

const SimilarProduct = async ({ pType }: PContainerProps) => {
  //fetch data based on category
  const data: Product[] = await fetchProducts(pType);

  //check the user to update the wishlist

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
  return (
    <div className="similarProducts">
      <div className="pageContainer">
        <div className="searchResultContainer2">
          <h2>Similar Products</h2>
          <Suspense fallback={<div>Loading...</div>}>
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
              </div>
              <p className="productPrice">£{product.price}</p>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
