import React from "react";
import prisma from "@/prisma/client";
import useSWR from "swr";
import axios from "axios";
import { Product } from "@prisma/client";
import Link from "next/link";

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   details: {
//     material: string;
//     colour: string;
//     type: string;
//     condition: string;
//   };
//   seller: { name: string; id: string };
//   sellerRaiting: number;
//   price: number;
// }

// async function getItems() {
//   const items = await prisma.product.findMany();
// }
const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const ProductDetails = () => {
  // const [items, setItems] = React.useState<Product>([]);

  // React.useEffect(() => {
  //   async function fetchItems() {
  //     const items = await prisma.product.findMany();
  //     setItems(items);
  //   }
  //   fetchItems();
  // }, []);
  const { data, error } = useSWR<Product[]>("/api/product", fetcher);
  if (error) return <div>Error fetching</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      {data.map((product: Product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Details: {product.details}</p>
          <p>Owner: {product.ownerId}</p>
          <p>Price: {product.price}</p>

          <p>Colour: {product.colour}</p>
          <p>Material: {product.material}</p>
          <p>Type: {product.type}</p>
          <p>Condition: {product.condition}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
