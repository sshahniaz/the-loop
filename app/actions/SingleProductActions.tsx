"use server";

import prisma from "@/prisma/client";

interface IParams {
  productId: string;
}

export default async function getProductById(params: IParams) {
  try {
    const { productId } = params;

    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      select: {
        id: true,
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

    if (!product) {
      return null;
    }
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
