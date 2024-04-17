"use server";

import { product } from "@/utils/product";
import SimilarProduct from "../../components/product/SimilarProduct";
import ProductDetails from "@/app/components/product/ProductDetails";

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
  console.log("params", params);

  return (
    <>
      <div>
        <ProductDetails product={product} />
      </div>
    </>
  );
};

export default Page;
