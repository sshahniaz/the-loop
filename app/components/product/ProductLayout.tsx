// import OthersBoughtProduct from "../components/product/OthersBoughtProduct";
import ProductDetails from "./ProductDetails";

import ProductImages from "./ProductImages";
// import SimilarProduct from "../components/product/SimilarProduct";
import "./Product.scss";
import { ProductDetailsActions } from "@/app/actions/ProductDetailsActions";

export default async function ProductLayout() {
  const getData = await ProductDetailsActions();
  console.log(getData);
  return (
    <>
      <div className="productContainer">
        <ProductImages />
        <ProductDetails product={getData} />
      </div>
    </>
  );
}
