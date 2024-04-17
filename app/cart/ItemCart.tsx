"use client";
import React from "react";
import { useCart } from "../components/cart/CartActions";
import AddToWishList from "../components/wishlist/AddToWishList";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "next/link";
import { Divider } from "@mui/material";
import { CartProductType } from "../components/product/ProductDetails";

interface ItemCartProps {
  item: CartProductType;
}

const ItemCart: React.FC<ItemCartProps> = ({ item }) => {
  const { handleDeleteProductFromCart } = useCart();
  return (
    <div className="cartItemMainContainer">
      <div className="subtotalDetails">
        <Link href={`/product/${item.id}`}>
          {" "}
          <img src={item.imageLink[0]} alt="placeholder" />
        </Link>

        <div className="itemCartDetails">
          <Link href={`/product/${item.id}`}>{item.name}</Link>
          <span>£{item.price}</span>
          {/* <AddToWishList/> */}
        </div>
        <DeleteOutlineIcon
          onClick={() => {
            handleDeleteProductFromCart(item);
          }}
        />
        <Divider />
      </div>
    </div>
  );
};

export default ItemCart;
