"use client";
import { useState, useEffect, use } from "react";
import { usePathname } from "next/navigation";
import PersonalDetails from "../components/profile/PersonalDetails";
// import SellingComponent from "../components/profile/Selling";

interface ProductApiResponse {
  products: Product[];
}

interface Product {
  name: string;
  details: string;
  image: string;
}

export default function ProfilePage() {
  const pathname = usePathname();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      // url to api endpoint
      const URL = "http://localhost:3000/api/profile/";
      // fetch data from end point and store in the data object
      const data = await fetch(URL).then((res) => res.json());

      console.log(data);
      setProducts(data);
    };
    fetchUser();
  }, []);

  const details = {
    firstName: "john",
    lastName: "doe",
    email: "j.doe@mail.com",
  };

  return (
    <>
      <PersonalDetails details={details} />
      <h1>{pathname}</h1>
      <h1>Hello</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
        {/* {products.map((product, index) => (
            <li key={product.}></li>
        ))} */}
      </ul>
    </>
  );
}

// async function getUserDetails(customerId: string) {
//   const response = await fetch(`/api/profile${customerId}`, { method: "GET" });
//   return response.json();
// }
