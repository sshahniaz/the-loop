"use client";
import { CartProductType } from "../product/ProductDetails";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// export type CartProductType = {
//   id: string;
//   name: string;
//   details: string;
//   type: string;
//   imgLink: string;
//   price: number;
// };

export type CartContextType = {
  cartTotalQty: number;
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleDeleteProductFromCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    []
  );
  //storing the item so when you refresh it is still there
  useEffect(() => {
    const cartItems: any = localStorage.getItem("loopCartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);
    setCartProducts(cProducts);
  }, []);
  console.log(cartProducts);
  const calcTotal = cartProducts?.reduce(
    (total, cartProducts) => total + cartProducts.price,
    0
  );
  console.log(calcTotal);
  //calculate cart total
  // useEffect(() => {
  //   const getTotals = () => {
  //     if (cartProducts) {
  //       const { total, qty } = cartProducts?.reduce(
  //         (acc, item) => {
  //           (acc.total += item.price), acc.qty++;
  //           return acc;
  //         },
  //         {
  //           total: 0,
  //           qty: 0,
  //         }
  //       );
  //       setCartTotalQty(qty);
  //       setCartTotalAmount(total);
  //     }
  //     getTotals;
  //   };
  // }, [cartProducts]);

  console.log("qty", cartTotalQty);
  console.log("total", cartTotalAmount);

  //add product to cart
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

  //remove product from cart
  const handleDeleteProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filterProducts = cartProducts.filter((item) => {
          return item.id !== product.id;
        });

        setCartProducts(filterProducts);
        localStorage.setItem("loopCartItems", JSON.stringify(filterProducts));
      }
    },
    [cartProducts]
  );

  const value = {
    cartTotalQty,
    cartTotalAmount,
    cartProducts,
    handleAddProductToCart,
    handleDeleteProductFromCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
