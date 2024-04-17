import React, { ChangeEvent, useState } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DeleteItem } from "@/app/actions/SellingActions";
import { updateProduct } from "@/app/actions/actions";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

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
    setProductData(products); // Reset to original data
    setIsEdit(false);
  };
  return (
    <div className="listing">
      {products.map((product, index) => (
        <>
          {isEdit ? (
            <form action="">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                />
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={product.price}
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
            </li>
          )}
        </>
      ))}
    </div>
  );
};

export default SellingDisplay;
