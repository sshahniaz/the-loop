"use server";

import prisma from "@/prisma/client";

// export async function ProductDetailsActions() {
//   const uniqueItem = await prisma.product.findUnique({
//     where: {
//       id: "66018465f2635697495f4c36",
//     },
//   });
//   console.log(uniqueItem);
//   return uniqueItem;
// }
// select: {
//   name: true,
//   price: true,
//   condition: true,
//   material: true,
//   colour: true,
//   type: true,
//   details: true,
//   imageLink: true,
//   ownerId: true,
// },

export const fetchProductData = async (productId: string) => {
  try {
    const productData = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      select: {
        name: true,
        price: true,
        condition: true,
        material: true,
        colour: true,
        type: true,
        details: true,
        imageLink: true,
        ownerId: true,
      },
    });
    return { productData };
  } catch (error) {
    console.error("Error fetching profile data:", error);
  }
};
