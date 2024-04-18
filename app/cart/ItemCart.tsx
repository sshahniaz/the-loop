"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../components/cart/CartActions";
import AddToWishList from "../components/wishlist/AddToWishList";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "next/link";
import { Divider } from "@mui/material";
import { CartProductType } from "../components/product/ProductDetails";
import "./Cart.scss";
import { useUser } from "@clerk/nextjs";
import getUser from "../actions/GetUserAction";
import { useRouter } from "next/navigation";
interface ItemCartProps {
  item: CartProductType;
}

const ItemCart: React.FC<ItemCartProps> = ({ item }) => {
  const { handleDeleteProductFromCart } = useCart();
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
    <div className="cartItemMainContainer">
      <div className="subtotalDetails">
        <Link href={`/product/${item.id}`}>
          <img src={item.imageLink[0]} alt="placeholder" />
        </Link>

        <div className="itemCartDetails">
          <div className="cartHeadingButton">
            <Link className="links" href={`/product/${item.id}`}>
              <span id="heading">{item.name}</span>
            </Link>
            <DeleteOutlineIcon
              onClick={() => {
                handleDeleteProductFromCart(item);
              }}
            />
          </div>

          <div className="flex-column">
            <span>£{item.price}</span>
            <div className="moveToWishlist">
              <Link href="../profile">Move to wishlist</Link>
              <AddToWishList
                productId={item.id}
                userId={currentUser?.id}
                onUpdateWishlist={handlwWishlistupdate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
