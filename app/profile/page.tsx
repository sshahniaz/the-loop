"use client";
import { useState, useEffect } from "react";

interface ProductApiResponse {
  products: Product[];
}

interface Product {
  name: string;
  details: string;
  image: string;
}

export default function ProfilePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      // url to api endpoint
      const URL = "http://localhost:3003/api/profile/";
      // fetch data from end point and store in the data object
      const data = await fetch(URL).then((res) => res.json());

      console.log(data);
      setProducts(data);
    };
    fetchUser();
  }, []);

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product.name}</li>
      ))}
      {/* {products.map((product, index) => (
            <li key={product.}></li>
        ))} */}
    </ul>
  );
}

// async function getUserDetails(customerId: string) {
//   const response = await fetch(`/api/profile${customerId}`, { method: "GET" });
//   return response.json();
// }
