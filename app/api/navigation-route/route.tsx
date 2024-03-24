// import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const response = await prisma.product.findMany({
    where: {},
    distinct: ["catagory"],
  });
  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json(
    { id: "Furniture", name: body.name },
    { status: 201 }
  );
}
