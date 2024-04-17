import Link from "next/link";
import React from "react";
import "../cart/Cart.scss";

const page = () => {
  return (
    <div className="successContainer">
      <Link className="backHome" href={"../page.tsx"}>
        <span>Back To Home</span>
      </Link>
      <div className="successDetails">
        <h2>Thank you for your order!</h2>
        <span>You will receive and order confirmation soon!</span>
      </div>
    </div>
  );
};

export default page;
