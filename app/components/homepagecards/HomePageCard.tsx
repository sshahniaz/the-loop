import Link from "next/link";
import React from "react";
import "./HomePageCard.scss";

interface Props {
  img: string;
  imgName: string;
  link: string;
  heading: string;
  paragraph: string;
  buttonName: string;
}

const HomePageCard = (props: Props) => {
  return (
    <div>
      <>
        <div className="cardFlex" id={props.imgName}>
          <img src={props.img} alt={props.imgName} />
          <div className="cardInfo">
            <h3>{props.heading}</h3>
            <p>{props.paragraph}</p>
            <button>
              <Link href={props.link}>{props.buttonName}</Link>
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default HomePageCard;
