import getProductById from "@/app/actions/SingleProductActions";
import SimilarProduct from "../../components/product/SimilarProduct";
import ProductDetails from "@/app/components/product/ProductDetails";
import ProductCard from "@/app/components/product/ProductCard";

interface IParams {
  productId: string;
}

const Page = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);

  console.log("params", params);

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
