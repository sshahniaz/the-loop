import Image from "next/image";
import styles from "./page.module.css";
// import prisma from "@/prisma/client";

export default async function Home() {
  // const response = await prisma.product.findMany({
  //   select: {
  //     catagory: true,
  //     subCatagory: true,
  //   },
  //   distinct: ["catagory", "subCatagory"],
  // });
  // console.log(response);
  return <main className={styles.main}>Hello from homepage</main>;
}
