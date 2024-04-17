"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useCart } from "../components/cart/CartActions";
import LocalMallOutlined from "@mui/icons-material/LocalMallOutlined";

const CartCount = () => {
  const { cartTotalQty } = useCart();
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.push("./page.tsx")}>
        <LocalMallOutlined />
      </div>
      <span>{cartTotalQty}</span>
    </>
  );
};

export default CartCount;
