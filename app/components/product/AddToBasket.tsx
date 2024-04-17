"use client";

import React from "react";

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const AddToBasket: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="addToBasket" onClick={onClick}>
      Add to Basket
    </button>
  );
};

export default AddToBasket;
