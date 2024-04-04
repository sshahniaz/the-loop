"use server";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

interface ProductData {
  name: string;
  details: string;
  condition: string;
  type: string;
  category: string;
  subCategory: string;
  price: number;
  colour: string;
  material: string;
}

export async function listItem(formData: FormData) {
  const name = formData.get("name");
  const details = formData.get("details");
  const condition = formData.get("condition");
  const type = formData.get("type");
  const category = formData.get("category");
  const subCategory = formData.get("subCategory");
  const price = formData.get("price");
  const imageLink = formData.get("image");
  const colour = formData.get("colour");
  const material = formData.get("material");

  const product = await prisma.product.create({
    data: {
      name: name as string,
      details: details as string,
      price: Number(formData.get("price")) as number,
      discount: 0,
      imageLink: [
        "/assets/stock-photos/lighting/ceilinglight1.png",
        "/assets/stock-photos/lighting/ceilinglight1.png",
      ],

      colour: colour as string,
      material: material as string,
      type: type as string,
      catagory: category as string,
      subCatagory: subCategory as string,
      sale: 0,
      condition: condition as string,
      ownerId: "65faf8493a25aae6e6aedda2",
    },
  });

  revalidatePath("/sell/form");

  console.log("data:", formData);
}
