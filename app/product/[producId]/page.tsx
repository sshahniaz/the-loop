"use client";
import getProductById from "@/app/actions/SingleProductActions";
import SimilarProduct from "../../components/product/SimilarProduct";
import ProductDetails from "@/app/components/product/ProductDetails";
import ProductCard from "@/app/components/product/ProductCard";
import React, { useEffect, useState } from "react";
interface IParams {
  productId: string;
}

const Page = ({ params }: { params: IParams }) => {
  const [product, setProduct] = useState<any>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(params.productId);
      setProduct(product);
    };
    fetchProduct();
  }, [params]);
  console.log(product);

  if (!product) return <p>Product doesn't exist</p>;

  return (
    <>
      <div>
        <ProductDetails product={product} />
        <ProductCard product={product} />
      </div>
    </>
  );
};

export default Page;
