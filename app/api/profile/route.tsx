import prisma from "@/prisma/client";

export async function GET(request: Request) {
  const products = await prisma.product.findMany({
    where: {
      ownerId: "65faf15c82787c2c9e5beb75",
    },
  });
}
// set data in products
export async function PUT(request: Request) {
  const updateProduct = await prisma.product.update({
    where: {
      id: "66018465f2635697495f4c36",
    },
    data: {
      // data from form input
    },
  });
}
// delete products

export async function DELETE(request: Request) {
  const deleteProduct = await prisma.product.delete({
    where: {
      id: "66018465f2635697495f4c36",
    },
  });
}
