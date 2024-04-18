"use client";

import AddToWishList from "../wishlist/AddToWishList";
import "../../product/[producId]/Product.scss";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import { useEffect, useState } from "react";
import AddToBasket from "./AddToBasket";
import { useCart } from "../cart/CartActions";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import getUser from "@/app/actions/GetUserAction";

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
  category: string;
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
    imageLink: product.imageLink,
    category: product.category,
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

  //focused image
  const [imagePath, setImagePath] = useState(product.imageLink[0]);
  const handleImagePath = () => {
    if (imagePath === product.imageLink[0]) {
      setImagePath(product.imageLink[1]);
    } else {
      setImagePath(product.imageLink[0]);
    }
  };
  const [imageThumbnailOne, setImageThumbnailOne] = useState(
    product.imageLink[0]
  );
  const handleImageThumbnailOne = () => {
    if (imageThumbnailOne === product.imageLink[0]) {
      setImagePath(product.imageLink[0]);
    }
  };
  const [imageThumbnailTwo, setImageThumbnailTwo] = useState(
    product.imageLink[1]
  );
  const handleImageThumbnailTwo = () => {
    if (imageThumbnailTwo === product.imageLink[1]) {
      setImagePath(product.imageLink[1]);
    }
  };

  //check user to update the wishlist
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    email: string;
    password: string | null;
    profileId: string | null;
  } | null>(null);
  const router = useRouter();

  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      fetchUser();
    }
  }, [isSignedIn]);

  const fetchUser = async () => {
    const userDb = await getUser(user?.primaryEmailAddress?.emailAddress ?? "");
    setCurrentUser(userDb);
  };
  console.log(currentUser);

  const handlwWishlistupdate = async () => {
    if (isSignedIn) {
      console.log("updating wishlist");
    } else {
      router.push("../../sign-in");
    }

    console.log("wishlist updated");
  };

  return (
    <div className="productContainer">
      <div className="imagesContainer">
        <div className="thumbnails">
          <img
            onClick={handleImageThumbnailOne}
            src={imageThumbnailOne}
            alt={product.name}
          />
          <img
            onClick={handleImageThumbnailTwo}
            src={imageThumbnailTwo}
            alt={product.name}
          />
        </div>
        <img onClick={handleImagePath} src={imagePath} alt={product.name}></img>
      </div>
      <div className="detailsContainer">
        <div className="productHeading">
          <h1>{product.name}</h1>
          <span>£{product.price}</span>
        </div>
        {isProductinCart ? (
          <>
            <span id="addedToCart">
              Product added to{" "}
              <Link href={"../../cart"}>
                <span>Cart</span>
              </Link>
              !
            </span>
          </>
        ) : (
          <>
            <div className="buttons">
              <AddToBasket
                onClick={() => {
                  handleAddProductToCart(cartProduct);
                }}
              />
              <AddToWishList
                productId={product.id}
                userId={currentUser?.id}
                onUpdateWishlist={handlwWishlistupdate}
              />
            </div>
          </>
        )}

        <div className="accordionContainer">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              id="panel1-header"
              className="accordionHeader"
              aria-controls="panel1-content"
            >
              Descpription
            </AccordionSummary>
            <AccordionDetails>
              <span>{product.details}</span>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              id="panel2-header"
              className="accordionHeader"
              aria-controls="panel2-content"
            >
              Details
            </AccordionSummary>
            <AccordionDetails id="detailsDropdown">
              <span>Colour: {product.colour}</span>
              <span>Material: {product.material}</span>
              <span>Condition: {product.condition}</span>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
