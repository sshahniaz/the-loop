import Image from "next/image";
import "./homePage.scss";
import HomePageCard from "./components/homepagecards/HomePageCard";
import SocialMediaCard from "./components/homepagecards/SocialMediaCard";
import QuickLinks from "./components/navigation/QuickLinks";
import Card from "./components/steps/Card";
import { SvgIcon } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArchiveIcon from "@mui/icons-material/Archive";
import Carousel from "./components/carousel/Carousel";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { CldVideoPlayer } from "next-cloudinary";

export default async function Home() {
  return (
    <>
      <main className="homepageContainer">
        <Carousel />

        <QuickLinks />
        {/* </div> */}
        <div className="firstSecondInfoCard">
          <HomePageCard
            img="/assets/throwImg.jpg"
            imgName="throws"
            link="#"
            heading="Perfect chairs for cozy days"
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
        {/* Steps Section */}
        <div className="stepsSection">
          <h2>Money in your pocket in four steps!</h2>
          <div className="steps-card">
            <Card
              title="Sign-up For a Free Account."
              href="https://example.com/article"
              linkItem={HowToRegIcon}
            />
            <Card
              title="Upload your Pre-loved Goodies."
              href="https://example.com/resource"
              linkItem={AddPhotoAlternateIcon}
            />

            <Card
              title="Post Items To New Home."
              href="https://example.com/article"
              linkItem={ArchiveIcon}
            />
            <Card
              title="Get Paid!"
              href="https://example.com/resource"
              linkItem={CurrencyPoundIcon}
            />
          </div>
          <div className="tcs">
            <h5>
              <span>*</span>Terms &amp; Conditions apply.
            </h5>
          </div>
        </div>
      </main>
    </>
  );
}
