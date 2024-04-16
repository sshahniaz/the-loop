"use client";
import React from "react";
import { CartProductType } from "../product/[producId]/page";

interface ItemCartProps {
  item: CartProductType;
}

const ItemCart: React.FC<ItemCartProps> = ({ item }) => {
  return;
  <div className="subtotalDetails">
    <span>{item.name}</span>
    <span>£{item.price}</span>
  </div>;
};
export default ItemCart;
