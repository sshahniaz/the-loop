import React from "react";

interface WListItem {
  productItem: {
    id: string;
    name: string;
    image: string;
    price: string;
  };
  onRemove: Function;
}

const WishlistItem = ({ productItem, onRemove }: WListItem) => {
  return (
    <li key={productItem.id}>
      <div className="product-details">
        <p>{productItem.name}</p>
        {/* Add image and price if available in product data */}
        {productItem.image && (
          <img src={productItem.image} alt={productItem.name} />
        )}
        {productItem.price && <span>Price: ${productItem.price}</span>}
      </div>
      <button onClick={() => onRemove(productItem.id)}>Remove</button>
    </li>
  );
};

export default WishlistItem;
