import React, { useState, useEffect } from "react";
import WishlistItem from "./WishlistItem";
import WishlistEmpty from "./WishlistEmpty";
import prisma from "@/prisma/client";

interface UserProfile {
  usrProfile: {
    userId: string;
  };
}

const Wishlist = ({ usrProfile }: UserProfile) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Fetch wishlist items on component mount
  useEffect(() => {
    const fetchWishlist = async () => {
      if (usrProfile.userId) {
        const profile = await prisma.profile.findUnique({
          where: { customerId: usrProfile.userId },
          select: { wishlist: true }, // Select only the wishlist field
        });
        setWishlistItems(profile?.wishlist || []);
      }
    };
    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (productId) => {
    const updatedWishlist = wishlistItems
      .filter
      //   (item) => item.toString() !== productId
      ();
    setWishlistItems(updatedWishlist);

    // Update wishlist on server using prisma (optional)
    if (usrProfile.userId) {
      await prisma.profile.update({
        where: { customerId: usrProfile.userId },
        data: { wishlist: updatedWishlist },
      });
    }
  };

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <WishlistEmpty />
      ) : (
        <ul>
          {wishlistItems.map((item, index) => (
            <WishlistItem
              key={index}
              productItem={item}
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
