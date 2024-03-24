import Image from "next/image";
import styles from "./page.module.css";
import HomePageCard from "./components/homepagecards/HomePageCard";

export default async function Home() {
  return (
    <main className={styles.main}>
      <HomePageCard
        img="/assets/throwImg.jpg"
        imgName="throws"
        link="#"
        heading="Perfect throws for cozy days"
        paragraph="Discover the range of throws."
        buttonName="Shop Now"
      />
    </main>
  );
}
