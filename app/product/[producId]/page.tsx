"use server";

import ProductMainContainer from "../../components/product/ProductMainContainer";
import SimilarProduct from "../../components/product/SimilarProduct";

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: string[];
  quantity: number;
  price: number;
};

const Page = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <div>
        <ProductMainContainer productId={params.productId} />
      </div>
      <div>
        <SimilarProduct data={params.productId} />
        <SimilarProduct data={params.productId} />
        <SimilarProduct data={params.productId} />
        <SimilarProduct data={params.productId} />
      </div>
    </>
  );
};

export default Page;
