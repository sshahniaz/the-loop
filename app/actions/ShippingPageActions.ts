'use server'

import prisma from "@/prisma/client"

//add payment card
export const addPaymentCard = async (card: any) => {
  try {
    const newCard = await prisma.cardDetails.create({
      data: {
        name: card.name,
        cardNumber: card.cardNumber,
        expiryDate: card.expiryDate,
        billingAddress: card.billingAddress,
        cvv: card.cvv,
      },
    });

    return newCard;
  } catch (error) {
    console.error("Error adding payment card:", error);
  }
};

// fetch profile data
export const fetchProfileData = async (userId: string) => {
  try {
    // Fetch the profile data from the database using prisma
    const profileData = await prisma.profile.findUnique({
      where: {
        customerId: userId,
      },
    });

    // Fetch email from the database using prisma
    const email = await prisma.customer.findUnique({
      where: {
        id: userId,
      },
    });

    return { profileData, email };
  } catch (error) {
    console.error("Error fetching profile data:", error);
  }
};
