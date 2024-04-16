import React from "react";
import Link from "next/link";

const SellingListEmpty = () => {
  return (
    <div>
      <p>You have no active listings.</p>
      <p>Want to sell something? </p>
      <p>
        <Link href="/sell-form">Start Selling here</Link>
      </p>
    </div>
  );
};

export default SellingListEmpty;
