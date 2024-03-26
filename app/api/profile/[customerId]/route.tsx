import prisma from "@/prisma/client";

export async function GET(request: Request) {
  const profile = await prisma.profile.findUnique({
    where: {
      customerId: "65faf8493a25aae6e6aedda2",
    },
  });
  console.log(profile);
  return Response.json({profile})
}
