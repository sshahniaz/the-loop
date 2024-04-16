import { Container } from "@mui/material";
import CartClient from "./CartClient";

const Cart = () => {
  return (
    <>
      <div className="productsContainer">
        <Container>
          <CartClient />
        </Container>
      </div>
    </>
  );
};
export default Cart;
