import React from "react";
import Link from "next/link";
import "../cart/Cart.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const page = () => {
  return (
    <div className="successContainer">
      <Link className="backHome" href="/">
        <span>Back Home</span>
      </Link>

      <div className="successDetails">
        <h2>Sorry! Order unsuccessful.</h2>
        <span>Please try again!</span>

        <div className="backToCart">
          <ArrowBackIcon />
          <Link className="backHome" href="../cart">
            <span>Back to cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
