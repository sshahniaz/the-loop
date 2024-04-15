"use client";
import { useState, useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";
import PersonalDetails from "../components/profile/PersonalDetails";
import SellingComponent from "../components/profile/Selling";
import Link from "next/link";
import "./ProfilePage.scss";
import Wishlist from "../components/wishlist/Wishlist";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { checkUser, createNewUser } from "../actions/ProfilePageActions";
import AddressInfo from "../components/profile/AddressInfo";
import BillingAddress from "../components/profile/BillingAddress";

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
  const [userData, setUserData] = useState<any>({}); // user details
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(products);
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn && user.primaryEmailAddress) {
      const checkAndCreate = async () => {
        isLoading(true); // Set loading state

        try {
          // Check if user exists in the database
          const existingUserData = await checkUser(
            user.primaryEmailAddress?.emailAddress ?? ""
          );

          if (existingUserData) {
            // User exists, set user data
            setUserData(existingUserData);
          } else {
            // User doesn't exist, create a new user
            const newUserData = await createNewUser(
              user.primaryEmailAddress?.emailAddress ?? "", // Use nullish coalescing for default empty strings
              user.firstName ?? "", // Use nullish coalescing for default empty strings
              user.lastName ?? ""
            );
            setUserData(newUserData);
          }
        } catch (error) {
          // setError(erro); // Handle errors
        } finally {
          isLoading(false); // Set loading state to false
        }
      };

      checkAndCreate();
    }
  }, [isSignedIn, user]);
  // console.log(userData);
  const details = {
    id: userData?.user?.id ?? "",
    firstName: userData?.profile?.firstName ?? "",
    lastName: userData?.profile?.lastName ?? "",
    email: userData?.user?.email ?? "",
  };

  const primaryAddress = {
    id: userData?.user?.id ?? "",
    firstName: userData?.profile?.firstName ?? "",
    lastName: userData?.profile?.lastName ?? "",
    address: userData?.profile?.address ?? "",
  };

  const deliveryAddress = {
    id: userData?.user?.id ?? "",
    firstName: userData?.profile?.firstName ?? "",
    lastName: userData?.profile?.lastName ?? "",
    address: userData?.profile?.deliveryAddress ?? "",
  };
  // const customerid = '65faf8493a25aae6e6aedda2';

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="dashboardGreeting">Hello {user?.fullName}</h1>

          {userData.user && (
            <Suspense fallback={<div>Loading...</div>}>
              <div className="dashboardContainer">
                <div className="dashboardOne">
                  {/* <h2>{userData?.user?.id}</h2> */}
                  <PersonalDetails details={details} />
                  <AddressInfo addressData={primaryAddress} />
                  <BillingAddress addressData={deliveryAddress} />
                </div>
                {/* <Wishlist userId={userData?.user?.id} /> */}
                <div className="dashboardTwo">
                  <Wishlist userId={"65fc1d82bffb6b8984064dd3"} />
                  {/* <SellingComponent userId={"65fc1d82bffb6b8984064dd4"} /> */}
                  <SellingComponent userId={userData?.user?.id} />
                </div>
                <Link href={`../../shipping/${userData?.user?.id}`}>
                  {" "}
                  SHIPPING{" "}
                </Link>
              </div>
            </Suspense>
          )}
        </>
      )}

      {/* <h1>{pathname}</h1> */}

      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
        {/* {products.map((product, index) => (
            <li key={product.}></li>
        ))} */}
      </ul>
      <SignOutButton />
    </>
  );
}
