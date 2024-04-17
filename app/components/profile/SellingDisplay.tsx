import React, { ChangeEvent, useState } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DeleteItem } from "@/app/actions/SellingActions";
import { updateProduct } from "@/app/actions/actions";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import SellingProductContainer from "./SellingProductContainer";

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
  // const [isEdit, setIsEdit] = useState(false);
  // const [productData, setProductData] = useState(products);

  // const handleEdit = () => {
  //   setIsEdit(!isEdit);
  // };
  // const handleSave = async () => {
  //   updateProduct(productData);
  //   setIsEdit(false);
  // };

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setProductData({ ...productData, [event.target.name]: event.target.value });
  // };

  // const handleCancel = () => {
  //   setProductData(products); // Reset to original data
  //   setIsEdit(false);
  // };
  return (
    <div className="listing">
      {products.map((product, index) => (
        
         <SellingProductContainer key={product.id} product={product} onDelete={onDelete} />
      
      ))}
    </div>
  );
};

export default SellingDisplay;
