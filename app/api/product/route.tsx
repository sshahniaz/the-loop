// import prisma from "@/prisma/client";

// async function main() {
//   await prisma.$connect();
//   //prisma client queries go here
//   const allProducts = await prisma.product.findMany();
//   console.log(allProducts);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "@/prisma/client";

// export default async function handler(req: Request, res: Response) {
//   if (req.method === "GET") {
//     const products = await prisma.product.findMany({
//       select: {
//         name: true,
//         details: true,
//         owner: {
//           select: { profile: { select: { firstName: true, stars: true } } },
//         },
//         price: true,
//         imageLink: true,
//         colour: true,
//         material: true,
//         type: true,
//         condition: true,
//       },
//     });
//     res.status(200).json(products);
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
