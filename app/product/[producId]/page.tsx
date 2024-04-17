import getProductById from "@/app/actions/SingleProductActions";
import SimilarProduct from "../../components/product/SimilarProduct";
import ProductDetails from "@/app/components/product/ProductDetails";
import ProductCard from "@/app/components/product/ProductCard";

interface IParams {
  productId: string;
}

const Page = ({ params }: { params: IParams }) => {
  const fetchProducts = async () => {
    try {
      const product = await getProductById(params);
      return product;
    } catch (error) {
      console.log(error);
    }
  };
  console.log("params", params);

  const returnedProducts = fetchProducts();
  if (!returnedProducts) return <p>Product doesn't exist</p>;

  return (
    <>
      <div>
        <ProductDetails product={returnedProducts} />
        <ProductCard product={returnedProducts} />
      </div>
    </>
  );
};

export default Page;
