import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
const SellingDisplay = async ({ products, onDelete }: sellingModel) => {
  return (
    <>
      <div className="listings">
        {products.map((product, index) => (
          <li key={product.id}>
            <div className="sellingImage">
              <img src={product.imageLink[0]} alt={product.name} />
            </div>
            <div className="sellingDetails">
              <div className="detailsFlex">
                <p className="sellingName">
                  {product.name} - £{product.price}
                </p>
                <div className="listingFlex">
                  <p>Revise Listing</p>
                  <button>
                    <EditIcon />
                  </button>
                </div>
                <div className="listingFlex">
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
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

export default SellingDisplay;
