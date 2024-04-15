import React from "react";
import { fetchProductDetails } from "@/app/actions/WishlistActions";
import { dividerClasses } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface WListItemProps {
  wLItem: string;
  onRemove: Function;
}

const WishlistItem = async ({ wLItem, onRemove }: WListItemProps) => {
  // Add product details to the wishlist item
  const productItem = await fetchProductDetails(wLItem);

  // If productItem is not found, return null
  if (!productItem) {
    return null;
  }

  return (
    // Display product details and remove button

    <li key={productItem.id}>
      <div className="wishlistIndividualItem">
        <div className="wishlistImg">
          {productItem.imageLink[0] && (
            <img src={productItem.imageLink[0]} alt={productItem.name} />
          )}
        </div>

        <div className="wishlistProductDetails">
          <div className="headingFlex1">
            <p className="wishlistName">{productItem.name} </p>
            {!!productItem.price && (
              <p className="wishlistPrice"> £{productItem.price}</p>
            )}
          </div>

          {/* <button onClick={() => onRemove(productItem.id)}>
              <DeleteIcon />
            </button> */}

          {/* Add image and price if available in product data */}

          <div className="headingFlex">
            <p>Remove Item</p>
            <button onClick={() => onRemove(productItem.id)}>
              <DeleteOutlineIcon />
            </button>
          </div>
        </div>
      </div>
      <hr />
    </li>
  );
};

export default WishlistItem;
