import React, { useState } from "react";
import prisma from "@/prisma/client";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { updateWith } from "lodash";
import { fetchProfileData, updateWithlist } from "@/app/actions/WishlistActions";

interface AddToWishlistProps {
  productId: string;
  userId?: string; // Optional user ID
  onUpdateWishlist?: () => void; // Optional callback to update wishlist state in parent component
}

const AddToWishList = ({
  productId,
  userId,
  onUpdateWishlist,
}: AddToWishlistProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleClick = async () => {
    if (!userId) {
      return; //Handle the case where userId is not available
    }
    setIsAdding(true);
    try {
      // Fetch user profile
      const userProfile = await fetchProfileData(userId);

      // Check if product is already in wishlist
      if ((userProfile?.profileData.wishlist || []).includes(productId as never)) {
        setIsAdding(false);

        return; // Product is already in wishlist
      }

      const updatedWishlist = [...(userProfile?.profileData.wishlist || []), productId];

      // Update the wishlist in the database
      updateWithlist(updatedWishlist, userId);

      // Call the callback function to update the wishlist state in the parent component
      if (onUpdateWishlist) {
        onUpdateWishlist();
      }
    } catch (error) {
      console.error(error);
      return; // Handle the error
    } finally {
      setIsAdding(false);
    }
  };

  const buttonText = isAdding ? "Adding..." : <FavoriteBorderIcon />;

  return (
    <button disabled={isAdding} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default AddToWishList;
