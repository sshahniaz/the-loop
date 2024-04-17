import ProductsMainContainer from "@/app/components/categories/ProductsMainContainer";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  // console.log(params.id);
  return (
    <div>
      {" "}
      <ProductsMainContainer pType={params.id[0]} />{" "}
    </div>
  );
};

export default page;
