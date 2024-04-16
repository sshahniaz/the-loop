'use server'
import prisma from "@/prisma/client"


export const fetchProfileData = async (userId: string) => {
  try {
    // Fetch the profile data from the database using prisma
    const profileData = await prisma.profile.findUnique({
      where: {
        customerId: userId,
      },
    });

   

    return {
      profileData: profileData || {
         id: '',
    active: '',
    firstName: '',
    lastName: '',
    stars: null,
    address: '',
    deliveryAddress: '',
    wishlist: [],
    marketing: null,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      profileData: {
         id: '',
    active: '',
    firstName: '',
    lastName: '',
    stars: null,
    address: '',
    deliveryAddress: '',
    wishlist: [],
    marketing: null,
      },
    };
  }
}

export const updateWithlist = async (updatedWishlist: any, userId: string) => {
  try {
    // Update the wishlist in the database
    await prisma.profile.update({
      where: { customerId: userId },
      data: {
        wishlist: updatedWishlist,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export const fetchWishList = async (userId: string) => {
  try {
    // Fetch the wishlist from the database using prisma
    const wishlist =
      await prisma.profile.findUnique({
        where: { customerId: userId },
        select: { wishlist: true }, // Select only the wishlist field
      });

    return wishlist?.wishlist || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

//fetch product details
export const fetchProductDetails = async (productId: string) => {
  try {
    // Fetch the product details from the database using prisma
    const productDetails = await prisma.product.findUnique({
      where: { id: productId },
    });

    return productDetails;
  } catch (error) {
    console.error(error);
    return null;
  }
}