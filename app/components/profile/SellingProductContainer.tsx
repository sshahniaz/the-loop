import React, { useState, useEffect, ChangeEvent } from "react";
import { updateProduct } from "@/app/actions/actions";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DeleteItem } from "@/app/actions/SellingActions";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageLink: string[];
  };
  onDelete: (productId: string) => void;
}

const SellingProductContainer = ({
  product: { id, name, price, imageLink },
  onDelete,
}: ProductProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [productData, setProductData] = useState({
    id,
    name,
    price,
    imageLink,
  });

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleSave = async () => {
    updateProduct(productData);
    setIsEdit(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleCancel = () => {
    setProductData({ id, name, price, imageLink }); // Reset to original data
    setIsEdit(false);
  };

  return (
    <div>
      {" "}
      {isEdit ? (
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </div>
          <div className="dashboardButtons">
            <button type="button" onClick={handleSave}>
              <DoneIcon />
            </button>
            <button type="button" onClick={handleCancel}>
              <CloseIcon />
            </button>
          </div>
        </form>
      ) : (
        <li key={id}>
          <div className="listingFlex">
            <div className="sellingImage">
              <img src={productData.imageLink[0]} alt={productData.name} />
            </div>
            <div className="sellingDetails">
              <p className="sellingName">{productData.name} -</p>{" "}
              <p className="sellingName">£{productData.price}</p>
              <div className="detailsFlex">
                <div className="listingFlex1">
                  <p>Revise Listing</p>
                  <button onClick={handleEdit}>
                    <CreateOutlinedIcon />
                  </button>
                </div>
                <div className="listingFlex1">
                  <p>Delete Listing</p>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you want to delete ${productData.name}?`
                        )
                      ) {
                        onDelete(productData.id);
                      }
                    }}
                  >
                    <DeleteOutlineIcon />
                  </button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </li>
      )}
    </div>
  );
};

export default SellingProductContainer;
