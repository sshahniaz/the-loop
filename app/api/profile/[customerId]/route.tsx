import prisma from "@/prisma/client";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: {
        ownerId: "65fc1d82bffb6b8984064dd4",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" });
  }
}
