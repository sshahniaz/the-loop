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
  return (
    <div className="listing">
      {products.map((product, index) => (
        <SellingProductContainer
          key={product.id}
          product={product}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default SellingDisplay;
