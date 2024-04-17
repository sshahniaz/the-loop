"use server";
import prisma from "@/prisma/client";

import { NextResponse } from "next/server";

// fetch data from selling
export async function fetchProductData(userId: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        ownerId: userId,
      },
      select: {
        id: true,
        name: true,
        price: true,
        imageLink: true,
      },
    });
    return products || [];
  } catch (error) {
    console.error("Failed: ", error);
    return [];
  }
}

// delete item from selling
export async function DeleteItem(productId: string) {
  try {
    await prisma.product.delete({
      where: { id: productId },
    });
  } catch (error) {
    console.error("Failed: ", error);
    return [];
  }
}

// update listing
export async function UpdateItem(productId: string) {}
