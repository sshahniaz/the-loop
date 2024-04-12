import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Selling.scss";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
        <form action="">
          {products.map((product, index) => (
            <div className="sellingComponentContainer">
              <img src={product.imageLink[0]} alt={product.name} />
              <input type="text" value={product.name} />
              <input type="text" value={product.price} />
              <button type="submit">
                <EditIcon />
              </button>
              <button type="submit">
                <DeleteIcon />
              </button>
            </div>
          ))}
        </form>
      </div>
      {/* <div className="sellingContainer">
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
      
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default SellingComponent;
