import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Selling.scss";
import Link from "next/link";

type sellingModel = {
  products: {
    name: string;
    price: number;
    imageLink: string[];
  }[];
};

const SellingComponent = ({ products }: sellingModel) => {
  return (
    <>
      <div className="sellingContainer">
        {products.map((product, index) => (
          <div className="sellingComponentContainer" key={index}>
            <img src={product.imageLink[0]} alt={product.name} />
            <div className="sellingInfo">
              <h3 className="sellingHeading">
                {product.name} - £{product.price}
              </h3>
              <div className="chevronFlex">
                <p>
                  {" "}
                  <Link href="#">Revise Product Listing</Link>
                </p>
                <span className="chevron">
                  <KeyboardArrowDownIcon />
                </span>
              </div>
              <div className="chevronFlex">
                <p>
                  {" "}
                  <Link href="#">End Product Listing</Link>
                </p>
                <span className="chevron">
                  <KeyboardArrowDownIcon />
                </span>
              </div>
              {/* <div className="hrContainer">
              <hr />
            </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SellingComponent;
