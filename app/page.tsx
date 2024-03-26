import Image from "next/image";
import styles from "./page.module.css";
import "./homePage.scss";
import HomePageCard from "./components/homepagecards/HomePageCard";
import SocialMediaCard from "./components/homepagecards/SocialMediaCard";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className="firstSecondInfoCard">
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
      </div>
      <div className="thirdFourthInfoCard">
        <HomePageCard
          img="/assets/homedecorImg.jpg"
          imgName="homeDecor"
          link="#"
          heading="Make a house a home"
          paragraph="Shop the wide range of accessories available to make your home your own."
          buttonName="Shop Home Decor"
        />

        <SocialMediaCard />
      </div>
    </main>
  );
}
