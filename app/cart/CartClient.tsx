"use client";
import Link from "next/link";
import { useCart } from "../components/cart/CartActions";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/cart/CartActions";
import { CartContextType } from "../components/cart/CartActions";
import ItemCart from "./ItemCart";
import { useRouter } from "next/navigation";
import "./Cart.scss";

// const { isSignedIn, user } = useUser();

// useEffect(() => {
//   if (isSignedIn && user.primaryEmailAddress) {
//   }
// }, [isSignedIn, user]);

const CartClient = () => {
  const { cartProducts, cartTotalAmount } = useCart();
  const router = useRouter();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <>
        <Link href={"../page.tsx"}>Back to home</Link>
        <div className="emptCartContainer">
          <h2>Your bascket is empty!</h2>
          <ShoppingBasketOutlinedIcon sx={{ color: "black" }} />
          <p>
            Start <Link href={"../page.tsx"}>shopping</Link> to fill your
            basket.
          </p>
        </div>
      </>
    );
  }

  const handleCheckout = () => {
    const { cartProducts } = useCart(); //getting the cart products from context
    router.push(
      `../shipping/page.tsx?cartProducts=${JSON.stringify(cartProducts)}`
    );
  };

  return (
    <>
      <div className="CartProductsContainer">
        <div className="CartProduct">
          {cartProducts &&
            cartProducts.map((item) => {
              return <ItemCart key={item.id} item={item} />;
            })}
        </div>

        <div className="subtotal">
          {cartProducts &&
            cartProducts.map((item) => {
              return (
                <div>
                  <span>{item.name}</span>
                  <span>£{item.price}</span>
                </div>
              );
            })}
          <div className="subtotalDetails">
            <span>Total</span>
            <span>£{cartTotalAmount}</span>
          </div>
          {/* <Checkout products={cartProducts} /> */}
          <button onClick={handleCheckout}>
            <Link href={"../shipping/page.tsx"}>Checkout</Link>
          </button>
          <button>
            <Link href={"../app/page.tsx"}>Continue Shopping</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default CartClient;
