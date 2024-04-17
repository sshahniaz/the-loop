import React, { useState } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DeleteItem } from "@/app/actions/SellingActions";

type sellingModel = {
  products: {
    id: string;
    name: string;
    price: number;
    imageLink: string[];
  }[];
  onDelete: (productId: string) => void;
};
const SellingDisplay = ({ products, onDelete }: sellingModel) => {
  const [isEdit, setIsEdit] = useState(false);
  const [productData, setProductData] = useState(products);
  return (
    <>
      <div className="listing">
        {products.map((product, index) => (
          <li key={product.id}>
            <div className="listingFlex">
              <div className="sellingImage">
                <img src={product.imageLink[0]} alt={product.name} />
              </div>
              <div className="sellingDetails">
                <p className="sellingName">{product.name} -</p>{" "}
                <p className="sellingName">£{product.price}</p>
                <div className="detailsFlex">
                  <div className="listingFlex1">
                    <p>Revise Listing</p>
                    <button>
                      <CreateOutlinedIcon />
                    </button>
                  </div>
                  <div className="listingFlex1">
                    <p>Delete Listing</p>
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            `Are you sure you want to delete ${product.name}?`
                          )
                        ) {
                          onDelete(product.id);
                        }
                      }}
                    >
                      <DeleteOutlineIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
        ))}
      </div>
    </>
  );
};

export default SellingDisplay;
