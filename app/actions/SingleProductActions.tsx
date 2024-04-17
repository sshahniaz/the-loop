"use server";

import prisma from "@/prisma/client";

interface IParams {
  productId: string;
}

export default async function getProductById(params: string) {
  try {
    // const { productId } = params;
    console.log(params);
    const product = await prisma.product.findUnique({
      where: {
        id: params,
      },
    });
    console.log(product);
    if (!product) {
      return null;
    }
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
// ,
//       select: {
//         id: true,
//         name: true,
//         price: true,
//         condition: true,
//         material: true,
//         colour: true,
//         type: true,
//         details: true,
//         imageLink: true,
//         ownerId: true,
//       },
