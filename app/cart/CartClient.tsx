"use client";
import Link from "next/link";
import { CartContext, useCart } from "../components/cart/CartActions";
import ItemCart from "./ItemCart";
import { useRouter } from "next/navigation";
import "./Cart.scss";
import { Divider } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import React, { Suspense, useEffect, useState } from "react";
import getUser from "../actions/GetUserAction";
import { useUser } from "@clerk/nextjs";

const CartClient = () => {
  const { cartProducts } = useCart();
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  const [currentUser, setCurrentUser] = useState<{
    id: string;
    email: string;
    password: string | null;
    profileId: string | null;
  } | null>(null);

  useEffect(() => {
    if (!isSignedIn) return;
    const fetchUser = async () => {
      const userProfile = await getUser(
        user?.primaryEmailAddress?.emailAddress ?? ""
      );
      setCurrentUser(userProfile);
    };
    fetchUser();
  }, [isSignedIn]);

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <>
        <div className="emptyCartMainContainer">
          <Link className="backHome" href="/">
            <span>Back To Home</span>
          </Link>
          <div className="emptyCartContainer">
            <h2>Your basket is empty!</h2>
            <ShoppingBagOutlinedIcon
              sx={{ color: "black", height: 40, width: 40 }}
            />
            <p>
              Start{" "}
              <Link href="/">
                <span>shopping</span>
              </Link>{" "}
              to fill your basket.
            </p>
          </div>
        </div>
      </>
    );
  }


  const calcTotal = cartProducts?.reduce(
    (total, cartProducts) => total + cartProducts.price,
    0
  );

  console.log(calcTotal);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
              <span>£{calcTotal}</span>
            </div>
            <Divider />

            <div className="buttons">
              <Suspense fallback={<div>Loading...</div>}>
                <button className="checkout">
                  <Link
                    className="btnLinkCheckout"
                    href={`../../shipping/${currentUser?.id}`}
                  >
                    <span>Checkout</span>
                  </Link>
                </button>
              </Suspense>

              <Suspense fallback={<div>Loading...</div>}>
                <button className="continueShopping">
                  <Link className="btnLinkContinue" href="/">
                    <span>Continue Shopping</span>
                  </Link>
                </button>
              </Suspense>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};
export default CartClient;
