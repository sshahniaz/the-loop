import Image from "next/image";
import styles from "./page.module.css";
import "./homePage.scss";
import HomePageCard from "./components/homepagecards/HomePageCard";
import SocialMediaCard from "./components/homepagecards/SocialMediaCard";
import PersonalDetails from "./components/profile/PersonalDetails";
import QuickLinks from "./components/navigation/QuickLinks";
import Card from './components/steps/Card';
import { SvgIcon } from '@mui/material';

export default async function Home() {
  return (
    <main className="homepageContainer">
      {/* <div className="quickLinkContainer"> */}
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
        <div>
        {/* <Slider /> */}
      </div>
      </div>
      {/* Steps Section */}
      <div className="stepsSection">
        <h2>Money in your pocket in four steps!</h2>
        <div className="steps-card">
        <Card title="Sign-up For a Free Account" href="https://example.com/article" linkItem="Sign-up" />
        <Card title="Upload your Loved Goodies" href="https://example.com/resource" linkItem="Learn More"/>
        <Card title="Post Items To New Home" href="https://example.com/article" linkItem="Learn More" />
        <Card title="Get Paid" href="https://example.com/resource" linkItem="Learn More" />
        </div>
    </div>
    </main>
  );
}
