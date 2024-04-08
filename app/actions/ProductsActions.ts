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
