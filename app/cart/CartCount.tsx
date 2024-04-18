"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useCart } from "../components/cart/CartActions";
import LocalMallOutlined from "@mui/icons-material/LocalMallOutlined";
import "./Cart.scss";
const CartCount = () => {
  const { cartProducts } = useCart();
  const calcQty = cartProducts?.length;
  const router = useRouter();
  return (
    <>
      <div className="countIcon" onClick={() => router.push("./page.tsx")}>
        <LocalMallOutlined />
        <span>{calcQty}</span>
      </div>
    </>
  );
};

export default CartCount;
