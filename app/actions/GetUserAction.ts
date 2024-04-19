"use server";

import prisma from "@/prisma/client";

export default async function getUser(email: string) {
  const user = await prisma.customer.findUnique({
    where: { email: email },
  });
  return user;
}
