import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ hello: "world" });
// }

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

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ data });
}

export async function PUT() {
  return NextResponse.json({ hello: "world" });
}

export async function DELETE() {
  return NextResponse.json({ hello: "world" });
}
// // set data in products
// export async function PUT(request: Request) {
//   const updateProduct = await prisma.product.update({
//     where: {
//       id: "66018465f2635697495f4c36",
//     },
//     data: {
//       // data from form input
//     },
//   });
// }
// // delete products

// export async function DELETE(request: Request) {
//   const deleteProduct = await prisma.product.delete({
//     where: {
//       id: "66018465f2635697495f4c36",
//     },
//   });
// }
