// import prisma from "@/prisma/client";

// export async function POST(request: Request) {
//   let res = { message: "Invalid regquest" };
//   const data = await request.formData();
//   const name = data.get("name");
//   const details = data.get("details");
//   const condition = data.get("condition");
//   const type = data.get("type");
//   const category = data.get("category");
//   const subCategory = data.get("subCategory");
//   const price = data.get("price");
//   const colour = data.get("colour");
//   const material = data.get("material");

//     const product = await prisma.product.create({
//       data: {
//         name: body.name ,
//         details: ,
//         ownerId: "65faf8493a25aae6e6aedda3",
//         price: ,
//         discount: 0,
//         imageLink: [
//           "/assets/stock-photos/lighting/ceilinglight1.png",
//           "/assets/stock-photos/lighting/ceilinglight1.png",
//         ],
//         colour: ,
//         material: ,
//         type: ,
//         catagory: ,
//         subCatagory: ,
//         sale: 0,
//         condition: ,
//       },
//     });
//     return Response.json(product);
//     console.log(product);
// }
