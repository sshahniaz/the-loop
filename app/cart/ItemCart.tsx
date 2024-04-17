"use client";
import React from "react";
import { useCart } from "../components/cart/CartActions";
import AddToWishList from "../components/wishlist/AddToWishList";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "next/link";
import { Divider } from "@mui/material";
import { CartProductType } from "../components/product/ProductDetails";
import "./Cart.scss";
interface ItemCartProps {
  item: CartProductType;
}

const ItemCart: React.FC<ItemCartProps> = ({ item }) => {
  const { handleDeleteProductFromCart } = useCart();
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
              <AddToWishList productId={item.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
