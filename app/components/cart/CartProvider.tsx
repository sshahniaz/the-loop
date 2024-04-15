"use client";

import { CartContextProvider } from "@/app/actions/CartActions";

interface CartProviderProps {
  children: React.ReactNode;
}
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};
export default CartProvider;
