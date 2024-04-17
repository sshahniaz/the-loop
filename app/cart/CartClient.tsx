"use client";
import Link from "next/link";
import { useCart } from "../components/cart/CartActions";
import ItemCart from "./ItemCart";
import { useRouter } from "next/navigation";
import "./Cart.scss";
import { Divider } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

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
              Start <Link href={"../page.tsx"}>shopping</Link> to fill your
              basket.
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
            <button className="checkout" onClick={handleCheckout}>
              <Link className="btnLinkCheckout" href={"../shipping/page.tsx"}>
                <span>Checkout</span>
              </Link>
            </button>
            <button className="continueShopping">
              <Link className="btnLinkContinue" href={"../app/page.tsx"}>
                <span>Continue Shopping</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartClient;
