"use client";
import { useRouter } from "next/navigation";
import { CartProductType } from "./ProductDetails";

interface ProductCardProps {
  product: CartProductType;
}

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const router = useRouter();

//   return (
//     <div onClick={() => router.push(`../../product/${product.id}`)}>
//       <img src={product.imageLink[0]} alt={product.name} />
//       <div className="productCardDetails">
//         <p>{product.name}</p>
//         <p>£{product.price}</p>
//       </div>
//     </div>
//   );
// };

const ProductCard = ({
  product: { id, name, colour, material, imageLink, price, details, condition },
}: ProductCardProps) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`../../product/${id}`)}>
      <img src={imageLink[0]} alt={name} />
      <div className="productCardDetails">
        <p>{name}</p>
        <p>£{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
