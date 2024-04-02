import React from "react";

const WishlistItem = ({ product, onRemove }) => {
    return (
    <li key={product.id}>
      <div className="product-details">
        <p>{product.name}</p>
        {/* Add image and price if available in product data */}
        {product.image && <img src={product.image} alt={product.name} />}
        {product.price && <span>Price: ${product.price}</span>}
      </div>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </li>
  );
};

};

export default WishlistItem;
