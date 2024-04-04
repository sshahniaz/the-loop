"use server";
import prisma from "@/prisma/client";

export async function NavigationAction() {
  const navType = await prisma.nav.findMany({
    select: {
      name: true,
      catagory: true,
    },
  });
  return navType;
  //   return { productTypes: navType };
}
