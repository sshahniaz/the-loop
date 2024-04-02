import React from "react";
import prisma from "@/prisma/client";

interface WListItemProps {
  wLItem: string;
  onRemove: Function;
}

const WishlistItem = async ({ wLItem, onRemove }: WListItemProps) => {

  // Add product details to the wishlist item
  const productItem = await prisma.product.findUnique({
    where: { id: wLItem },
  });

// If productItem is not found, return null
if (!productItem) {
    return null;
  }

  return (
    // Display product details and remove button
    <li key={productItem.id}>
      <div className="product-details">
        <p>{productItem.name}</p>
        {/* Add image and price if available in product data */}
        {productItem.imageLink[0] && (
          <img src={productItem.imageLink[0]} alt={productItem.name} />
        )}
        {!!productItem.price && <span>Price: ${productItem.price}</span>}
      </div>
      <button onClick={() => onRemove(productItem.id)}>Remove</button>
    </li>
  );
};

export default WishlistItem;
