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