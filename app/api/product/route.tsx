import prisma from "@/prisma/client";

async function main() {
  await prisma.$connect();
  //prisma client queries go here
  const allProducts = await prisma.product.findMany();
  console.log(allProducts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
