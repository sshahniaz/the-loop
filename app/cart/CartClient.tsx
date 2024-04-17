"use client";
import Link from "next/link";
import { useCart } from "../components/cart/CartActions";
import ItemCart from "./ItemCart";
import { useRouter } from "next/navigation";
import "./Cart.scss";
import { Divider } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import React, { Suspense, useEffect, useState } from "react";
import getUser from "../actions/GetUserAction";
import { useUser } from "@clerk/nextjs";
// const { isSignedIn, user } = useUser();

// useEffect(() => {
//   if (isSignedIn && user.primaryEmailAddress) {
//   }
// }, [isSignedIn, user]);

const CartClient = () => {
  const { cartProducts } = useCart();
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  const [currentUser, setCurrentUser] = useState<{ id: string; email: string; password: string | null; profileId: string | null; } | null>(null);

  useEffect(() => {
    if(!isSignedIn) return;
    const fetchUser = async () => {
      const userProfile = await getUser(user?.primaryEmailAddress?.emailAddress ?? '');
      setCurrentUser(userProfile);
    }
    fetchUser();
  }, [isSignedIn]);


  if (!cartProducts || cartProducts.length === 0) {
    return (
      <>
        <div className="emptyCartMainContainer">
          <Link className="backHome" href={"../page.tsx"}>
            <span>Back To Home</span>
          </Link>
          <div className="emptyCartContainer">
            <h2>Your basket is empty!</h2>
            <ShoppingBagOutlinedIcon
              sx={{ color: "black", height: 40, width: 40 }}
            />
            <p>
              Start <Link href={"/"}>shopping</Link> to fill your basket.
            </p>
          </div>
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

  const cartTotalAmount = cartProducts.reduce( (acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="CartProductsContainer">
        <div className="CartProduct">
          {cartProducts &&
            cartProducts.map((item) => {
              return (
                <>
                  <ItemCart key={item.id} item={item} />
                  <Divider />
                </>
              );
            })}
        </div>

        <div className="subtotal">
          {cartProducts &&
            cartProducts.map((item) => {
              return (
                <div className="flex-row">
                  <span>{item.name}</span>
                  <span>£{item.price}</span>
                </div>
              );
            })}
          <Divider />
          <div className="flex-row">
            <span id="total">Total</span>
            <span>£{cartTotalAmount}</span>
          </div>
          <Divider />
          {/* <Checkout products={cartProducts} /> */}
          <div className="buttons">
            <button className="checkout">
              <Suspense fallback={<div>Loading...</div>}>

              <Link className="btnLinkCheckout" href={`../../shipping/${currentUser?.id}`}>
                <span>Checkout</span>
              </Link>
              </Suspense>
            </button>
              <Link className="btnLinkContinue" href={"../app/page.tsx"}>
            <button className="continueShopping">
                <span>Continue Shopping</span>
            </button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartClient;
