import OthersBoughtProduct from "../components/product/OthersBoughtProduct";
import ProductDetails from "../components/product/ProductDetails";
import ProductImages from "../components/product/ProductImages";
import SimilarProduct from "../components/product/SimilarProduct";
import "./Product.scss";
import { ProductDetailsActions } from "../actions/ProductDetailsActions";
import ProductLayout from "../components/product/ProductLayout";

export default async function Page() {
  const getData = await ProductDetailsActions();
  console.log(getData);
  return (
    <>
      <div className="productContainer">
        <ProductLayout />
      </div>
    </>
  );
}
