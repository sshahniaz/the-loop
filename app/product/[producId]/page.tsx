"use client";
import getProductById from "@/app/actions/SingleProductActions";
import SimilarProduct from "../../components/product/SimilarProduct";
import ProductDetails from "@/app/components/product/ProductDetails";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { producId: string } }) => {
  console.log(params);
  const [product, setProduct] = useState<any>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(params.producId);
      setProduct(product);
    };
    fetchProduct();
  }, [params.producId]);
  console.log(product);

  if (!product) return <p>Product doesn't exist</p>;

  return (
    <>
      <div>
        <ProductDetails product={product} />
      </div>
    </>
  );
};

export default Page;
