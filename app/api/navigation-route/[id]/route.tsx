import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: number } }
// ) {
//   const response = await prisma.product.findUnique({
//     where: {
//       id: parseInt(params.id),
//     },
//   });
//   if (!params.id)
//     return NextResponse.json({ error: "User not Found" }, { status: 404 });
//   return NextResponse.json(response);
// }

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const response = await request.json();
  const validation = schema.safeParse(response);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  //   if (params.id > 10) {
  //     return NextResponse.json({ error: "User not found" }, { status: 404 });

  //     return NextResponse.json({ id: 1, name: response.name });
  //   }
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({});
  }
}
