import React from "react";
import "./sale.scss";
import Link from "next/link";

const SalePage = () => {
  return (
    <div className="saleContainer">
      <div className="saleHeading">
        <h1>S.A.L.E</h1>
      </div>
      <p>Hi Friend, there are currently no sale items.</p>
      <p>Check back later for some good buys!</p>
      <div className="saleButton">
        <Link href="/">
          <button>Take me home</button>
        </Link>
      </div>
    </div>
  );
};

export default SalePage;
