"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import SellingComponent from "@/app/components/profile/Selling";
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

  return (
    <>
      {/* pass the product data  */}
      <SellingComponent products={products} />
    </>
  );
}

// async function getUserDetails(customerId: string) {
//   const response = await fetch(`/api/profile${customerId}`, { method: "GET" });
//   return response.json();
// }
