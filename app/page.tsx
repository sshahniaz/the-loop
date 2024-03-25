import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/prisma/client";
export default async function Home() {

  const res = await prisma.product.findMany();
  console.log(res)

  return (
    <main className={styles.main}>
     
    </main>
  );
}