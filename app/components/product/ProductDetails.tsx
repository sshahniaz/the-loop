"use client";

import AddToWishList from "../wishlist/AddToWishList";
import "../../product/[producId]/Product.scss";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import { useEffect, useState } from "react";
import AddToBasket from "./AddToBasket";
import { useCart } from "../cart/CartActions";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  details: string;
  colour: string;
  material: string;
  condition: string;
  price: number;
  imageLink: string[];
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    details: product.details,
    colour: product.colour,
    material: product.material,
    condition: product.condition,
    price: product.price,
    imageLink: product.imageLink[0],
  });

  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductinCart, setIsProductInCart] = useState(false);

  console.log(cartProducts);

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  return (
    <div className="productContainer">
      <div className="imagesContainer">img</div>
      <div className="detailsContainer">
        <h1>{product.name}</h1>
        <span>£{product.price}</span>
        <br />
        <span>Sold by: {product.ownerId}</span>
        <br />
        {isProductinCart ? (
          <>
            <span>Product already in cart</span>
          </>
        ) : (
          <>
            <div className="buttons">
              <AddToBasket
                onClick={() => {
                  handleAddProductToCart(cartProduct);
                }}
              />
              <AddToWishList productId={product.id} />
            </div>
          </>
        )}

        <Accordion>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            Descpription
          </AccordionSummary>
          <AccordionDetails>
            <span>{product.details}</span>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            Details
          </AccordionSummary>
          <AccordionDetails>
            <span>Colour: {product.colour}</span>
            <span>Material: {product.material}</span>
            <span>Condition: {product.condition}</span>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default ProductDetails;
