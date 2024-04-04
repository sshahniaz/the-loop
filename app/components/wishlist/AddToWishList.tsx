import React, { useState } from 'react'
import prisma from '@/prisma/client';
interface AddToWishlistProps {
  productId: string;
  userId?: string; // Optional user ID
  onUpdateWishlist?: () => void; // Optional callback to update wishlist state in parent component
}

const AddToWishList = ({ productId, userId, onUpdateWishlist }: AddToWishlistProps) => {
  const [isAdding, setIsAdding] = useState(false)
  
  const handleClick = async () => {
    if (!userId) {  
      return //Handle the case where userId is not available
    
    }
    setIsAdding(true)
    try {
      // Fetch user profile
      const userProfile = await prisma.profile.findUnique({
        where: { customerId: userId }
      })
      
      // Check if product is already in wishlist
      if (userProfile?.wishlist.includes(productId)) {
        setIsAdding(false)

        return // Product is already in wishlist
      }

      const updatedWishlist = [...(userProfile?.wishlist || []), productId]

      // Update the wishlist in the database  
      await prisma.profile.update({
        where: { customerId: userId },
        data: {
          wishlist: updatedWishlist
        }
      })  

      // Call the callback function to update the wishlist state in the parent component
    if (onUpdateWishlist) {
      onUpdateWishlist()
    }

    } catch (error) { 
      console.error(error)
      return // Handle the error
    } finally {
      setIsAdding(false)
    }
 
  }
  
  const buttonText = isAdding ? 'Adding...' : 'Add to Wishlist';

  return (
    <button disabled={isAdding} onClick={handleClick}>
      {buttonText}
    </button>
  )
}

export default AddToWishList