"use server";
import prisma from "@/prisma/client";
import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
  ownerId: string;
}
// export async function listItem(formData: FormData, userId: string)
export async function listItem(formData: FormData, userId: string) {
  const name = formData.get("name");
  const details = formData.get("details");
  const condition = formData.get("condition");
  const type = formData.get("type");
  const category = formData.get("category");
  const subCategory = formData.get("subCategory");
  const price = formData.get("price");
  const imageLink = formData.get("image") as File;
  const colour = formData.get("colour");
  const material = formData.get("material");
  // const ownerId = formData.get("ownerId");

  //kebabcase
  const kebabCase = (text: string) =>
    text
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();

  //  Section for image upload
  const buffer = Buffer.from(await imageLink.arrayBuffer());
  const extension = mime.getExtension(imageLink.type);
  const relativeUploadDir = `public/assets/stock-photos/${category}/${subCategory}`;

  const uploadDir = join(process.cwd(), relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch {
    await mkdir(uploadDir, { recursive: true });
  }

  const fileName = `${kebabCase(name as string)}.${extension}`;
  const filePath = join(uploadDir, fileName);

  await writeFile(filePath, buffer);
  const imageLinkPath = `/assets/stock-photos/${category}/${subCategory}/${fileName}`;

  const product = await prisma.product.create({
    data: {
      name: name as string,
      details: details as string,
      price: Number(formData.get("price")) as number,
      discount: 0,
      imageLink: [imageLinkPath],
      colour: colour as string,
      material: material as string,
      type: type as string,
      catagory: category as string,
      subCatagory: subCategory as string,
      sale: 0,
      condition: condition as string,
      ownerId: userId,
    },
  });
  // console.log(imageLinkPath);

  // ideally re-direct to profile page
  revalidatePath("/sell/form");
  redirect("/");
  // redirect('/dashboard/invoices')
}

export async function updateProduct(productData: any) {
  const { id, name, price } = productData;
  await prisma.product.update({
    where: { id: productData.id },

    data: {
      name: productData.name,
      price: productData.price,
    },
  });
}
