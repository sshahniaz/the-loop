import React, { useState, useEffect } from "react";
import WishlistItem from "./WishlistItem";
import WishlistEmpty from "./WishlistEmpty";

import { fetchWishList, updateWithlist } from '@/app/actions/WishlistActions';

interface WishlistProps { userId: string; }


const Wishlist = ({ userId }: WishlistProps) => {
  // Fetch wishlist items on component mount
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  
  useEffect(() => {
    const getWishlist = async () => {
      if (userId) {
        const wishlist = await fetchWishList(userId);
        setWishlistItems(wishlist || []);
      }
    };
    getWishlist();
  }, []);

  const handleRemoveFromWishlist = async (itemId: string) => {
    const updatedWishlist = wishlistItems
      .filter((item) => item !== itemId);
    setWishlistItems(updatedWishlist);

    // Update wishlist on server using prisma 
    if (userId) {
      await updateWithlist(updatedWishlist, userId);
    }
  };


  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {/* Display message if no items in wishlist */}   
      {wishlistItems.length === 0 ? (
        <WishlistEmpty />
      ) : (
        <ul>
          {wishlistItems.map((item, index) => (
            <WishlistItem
              key={index}
              wLItem={item}
              onRemove={handleRemoveFromWishlist}
            />
          ))}
        </ul>
      )}
      <p>
        {/* Inform user on how to add products (assuming button elsewhere) */}
        Click "Add to Wishlist" buttons on product pages to add items.
      </p>
    </div>
  );
};

export default Wishlist;
