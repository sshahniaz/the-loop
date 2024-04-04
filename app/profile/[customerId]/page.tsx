"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import PersonalDetails from "@/app/components/profile/PersonalDetails";
import SellingComponent from "@/app/components/profile/Selling";
import Link from "next/link";
import "./ProfilePage.scss";
import Wishlist from "@/app/components/wishlist/Wishlist";
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
    id: "65faf8493a25aae6e6aedda3",
    firstName: "john",
    lastName: "doe",
    email: "j.doe@mail.com",
  };
  return (
    <>
      <div className="profilePageContainer">
        <h1>{searchParams}</h1>
        <PersonalDetails details={details} />

        {/* pass the product data  */}
        {/* <SellingComponent products={products} /> */}

      {/*TODO: Fix the wishlist component by passing dynamic userId*/}
      {/* Wishlist hardcoded for now */}
        <Wishlist userId="65faf8493a25aae6e6aedda3" />
        
      {/*TODO: Usage of AddToWishlist component 
      
       <AddToWishlist productId={product.id} userId={userId} />
      
      */}
        {/* link to shippingPage with Link*/}
        {/* <Link href="/shipping"></Link> */}
      </div>
    </>
  );
}

// async function getUserDetails(customerId: string) {
//   const response = await fetch(`/api/profile${customerId}`, { method: "GET" });
//   return response.json();
// }
