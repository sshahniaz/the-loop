
import ProductsMainContainer from "@/app/components/categories/ProductsMainContainer";
import React from "react";

const page = ({params}: {params:{id:string}}) => {
  // console.log(params.id);
  return <div> <ProductsMainContainer pType={params.id[0] } /> </div>;
};

export default page;

// import ProductCategoryDetails from "@/app/components/product/productCategoryDetails";
// import "./Product.scss";
// import { ProductAction } from "@/app/actions/ProductActions";

// export default async function CategoryPage() {
//   const getData = await ProductAction();
//   console.log(getData);
//   return (
//     <>
//       <div className="productContainer">
//         <ProductCategoryDetails products={getData} />
//       </div>
//     </>
//   );
// }
// >>>>>>> Stashed changes
