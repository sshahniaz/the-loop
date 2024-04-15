'use server'
import prisma from "@/prisma/client";

//check if user exists in the database by email
export async function checkUser(email: string) {
  try {
    console.log("Checking user:", email);
    const user = await prisma.customer.findUnique({
      where: {
        email: email
        
      },
    });
    const profile = await prisma.profile.findUnique({
      where: { customerId: user?.id },
    });
    
    console.log("User found:", user);
    console.log("Profile found:", profile);
    return {user: user, profile: profile};
  } catch (error) {
    console.error('Error checking user:', error);
    return null; // Or return a specific error object
  }
}

export async function displaySelling(customerId: string) {
  console.log(customerId)
  const selling = await prisma.product.findMany({
    where: {ownerId: customerId},
  })
  console.log(selling)
  return selling;
}
//create a new user
export async function createNewUser(email: string, firstName: string, lastName: string) {
  console.log("Creating new user:", email, firstName, lastName);

  try {
    // Hash the password before creating the user (replace with your hashing logic)
    const hashedPassword = "password1"// Implement password hashing

    const newUser = await prisma.customer.create({
      data: {
        email: email,
        password: hashedPassword, // Use the hashed password
      },
    });

    const profile = await prisma.profile.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        active: true,
        stars: 5,
        marketing: false,
        customerId: newUser.id,
      },
    });
    

    return { user: newUser, profile }; // Return both user and profile for potential use
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; // Re-throw the error for handling in the calling function
  }
}



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

//get ratings/stars from profile
export async function fetchRatings(customerId: string) {
  const ratings = await prisma.profile.findUnique({
    where: { customerId },
    select: {
      stars: true,
    },
      });
  return ratings;
}
