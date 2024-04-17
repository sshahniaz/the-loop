'use server'
import prisma from "@/prisma/client"

//fetch proucts from the database by category or subcategory

export const fetchProducts = async (ptype: string) => {
  const decodedPtype = decodeURIComponent(ptype);
  const products = await prisma.product.findMany({
    where: {
      OR: [
        {
          type: {
            contains: decodedPtype
          }
        },
        {
          catagory: 
          {
            contains: decodedPtype
          }
         },
        {
          subCatagory: {
            contains: decodedPtype
          }
        }
      ],
    
    }
  })
  return products
}

// export interface IProductsParams{
//   category?:string | null
// }

// export default async function getProducts(params:IProductsParams) {
//   try{
//     const {category}=params;
//       const decodedPtype = decodeURIComponent(params);


//     let query: any={};
//     if(category){
//       query.category=category;
//     }

//     const products=await prisma.product.findMany({
//       where:{
//         ...query,
//         OR:[
//           category: ca
//         ]
//       }
//     })

//   }catch{}
// }