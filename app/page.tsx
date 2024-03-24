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

      <HomePageCard
        img="/assets/saleImg.jpg"
        imgName="sale"
        link="#"
        heading="S.A.L.E."
        paragraph="Grab yourself a bargain today!"
        buttonName="Shop Sale"
      />

      <HomePageCard
        img="/assets/homedecorImg.jpg"
        imgName="homeDecor"
        link="#"
        heading="Make a house a home"
        paragraph="Shop the wide range of accessories available to make your home your own."
        buttonName="Shop Home Decor"
      />
    </main>
  );
}
