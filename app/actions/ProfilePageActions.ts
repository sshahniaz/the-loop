'use server'
import prisma from "@/prisma/client";

//update personal details
export async function updatePersonalDetails(userData: any) {
  const { id, firstName, lastName, email } = userData;
  console.log("Updating personal details:", userData);
    await prisma.profile.update({
      where: { customerId: userData.id },
      data: {
        firstName: userData.firstName,
        lastName: userData.lastName,
      },
    });

    //Update the email using prisma in customer table
    await prisma.customer.update({
      where: { id: userData.id },
      data: {
        email: userData.email,
      },
    });
  
  return userData;
}

//update payment cards
export async function updatePaymentCards(editedCards: any, editedCardIndex: number | null) {
  if (editedCardIndex !== null) {
    console.log("Updating payment cards:", editedCards[editedCardIndex]);
    await prisma.cardDetails.updateMany({
      where: { id: editedCards[editedCardIndex].id },
      data: {
        name: editedCards[editedCardIndex].name,
        cardNumber: editedCards[editedCardIndex].cardNumber,
        expiryDate: editedCards[editedCardIndex].expiryDate,
        billingAddress: editedCards[editedCardIndex].billingAddress,
        cvv: editedCards[editedCardIndex].cvv,
      },
    });
  }
  return editedCards;
}

//update address info
export async function updateAddressInfo(userData: any) {
  console.log("Updating address info:", userData);
  await prisma.profile.update({
    where: { customerId: userData.id },
    data: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      address: userData.address,
    },
  });

  return userData;
}

//update billing address
export async function updateBillingAddress(userData: any) {
  console.log("Updating billing address:", userData);
  await prisma.profile.update({
    where: { customerId: userData.id },
    data: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      address: userData.address,
    },
  });

  return userData;
}