"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useCart } from "../components/cart/CartActions";
import LocalMallOutlined from "@mui/icons-material/LocalMallOutlined";

const CartCount = () => {
  const { cartProducts } = useCart();
  const calcQty = cartProducts?.length;
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.push("./page.tsx")}>
        <LocalMallOutlined />
      </div>
      <span>{calcQty}</span>
    </>
  );
};

export default CartCount;
