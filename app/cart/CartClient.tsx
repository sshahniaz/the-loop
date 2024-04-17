"use client";
import Link from "next/link";
import { useCart } from "../components/cart/CartActions";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useContext } from "react";
import { CartContext } from "../components/cart/CartActions";
import { CartContextType } from "../components/cart/CartActions";
import ItemCart from "./ItemCart";
import { useRouter } from "next/router";

const CartClient = () => {
  const { cartProducts } = useCart();

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

  return (
    <>
      <div className="CartProductsContainer">
        <div className="CartProduct">
          {cartProducts &&
            cartProducts.map((item) => {
              return <div key={item.id}>{item.name}</div>;
            })}
        </div>
        <div>
          <button onClick={() => {}}>Clear Cart</button>{" "}
        </div>
        <div className="subtotal">
          {cartProducts &&
            cartProducts.map((item) => {
              return <ItemCart key={item.id} item={item} />;
            })}
          <div className="subtotalDetails">
            <span>Total</span>
            <span></span>
          </div>
          <button>
            <Link href={"../shipping/page.tsx"}> Checkout</Link>
          </button>
          <button>
            <Link href={"../page.tsx"}>Continue Shopping</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default CartClient;
