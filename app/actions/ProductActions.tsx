"use server";
import prisma from "@/prisma/client";

// products page

export async function ProductAction() {
  const product = await prisma.product.findMany({
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
  console.log(product);
  return product;
}
