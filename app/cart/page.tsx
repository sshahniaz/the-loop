import { Container } from "@mui/material";
import CartClient from "./CartClient";

const Cart = () => {
  return (
    <>
      <div className="productsContainer">
        <CartClient />
      </div>
    </>
  );
};
export default Cart;
