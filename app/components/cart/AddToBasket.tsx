import React, { useState } from "react";
import { fetchProfileData, updateWithlist } from "@/app/actions/CartActions";
interface AddToWishlistProps {
  productId: string;
  userId?: string; // Optional user ID
  onUpdateCart?: () => void; // Optional callback to update wishlist state in parent component
}

const AddToBasket = ({
  productId,
  userId,
  onUpdateCart,
}: AddToWishlistProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleClick = async () => {
    if (!userId) {
      return; //Handle the case where userId is not available
    }
    setIsAdding(true);
    try {
      // Fetch user profile
      const userProfile: any = await fetchProfileData(userId);

      // Check if product is already in cart
      if (userProfile?.basket.includes(productId)) {
        setIsAdding(false);

        return; // Product is already in cart
      }

      const updatedCart = [...(userProfile?.cart || []), productId];

      // Update the cart in the database
      await updateCart(updatedCart, userId);

      // Call the callback function to update the cart state in the parent component
      if (onUpdateCart) {
        onUpdateCart();
      }
    } catch (error) {
      console.error(error);
      return; // Handle the error
    } finally {
      setIsAdding(false);
    }
  };

  const buttonText = isAdding ? "Adding..." : "Add to Basket";

  return (
    <button disabled={isAdding} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default AddToBasket;
