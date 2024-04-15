"use server";

import { error } from "console";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// import prisma from "@/prisma/client";

// export const fetchProfileData = async (userId: string) => {
//   const profileData = await prisma.profile.findUnique({
//     where: {
//       customerId: userId,
//     },
//   });
// };

// export const updateCart=async (updatedCart:any,  userId:string) => {

// }
export type CartProductType = {
  id: string;
  name: string;
  details: string;
  type: string;
  imgLink: string[];
  price: number;
}[];

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
};
export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  //storing the item so when you refresh it is still there
  useEffect(() => {
    const cartItems: any = localStorage.getItem("loopCartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);
    setCartProducts(cProducts);
  }, []);
  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      //storing the item so when you refresh it is still there
      localStorage.setItem("loopCartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);
  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null)
    return console.error("useCart must be used within a CartContextProvider");
  return context;
};
