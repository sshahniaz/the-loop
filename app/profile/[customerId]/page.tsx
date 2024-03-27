"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import PersonalDetails from "@/app/components/profile/PersonalDetails";

export default function ProfilePage() {
  // get the pathname
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<any[]>([]);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      // url to api endpoint
      const URL = `http://localhost:3000/api/${pathname}?${searchParams}`;

      // const URL = `http://localhost:3000/api/profile/65faf8493a25aae6e6aedda3`;
      console.log(pathname);
      // fetch data from end point and store in the data object
      const data = await fetch(URL).then((res) => res.json());

      console.log(data);
      setProducts(data);
    };
    fetchUser();
  }, []);

  //test var

  const details = {
    firstName: "john",
    lastName: "doe",
    email: "j.doe@mail.com",
  };
  return (
    <>
      <h1>{searchParams}</h1>
      <PersonalDetails details={details} />
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
