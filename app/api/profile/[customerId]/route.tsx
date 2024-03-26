import prisma from "@/prisma/client";

export async function GET(request: Request) {
  const profile = await prisma.profile.findUnique({
    where: {
      customerId: "65faf15c82787c2c9e5beb75",
    },
  });
}
