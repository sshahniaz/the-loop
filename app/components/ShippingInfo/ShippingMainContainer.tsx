"use client";
import React, { useState, useEffect, Suspense, useContext } from "react";
import PersonalDetails from "@/app/components/profile/PersonalDetails";
import AddressInfo from "@/app/components/profile/AddressInfo";
import BillingAddress from "@/app/components/profile/BillingAddress";
import { fetchProfileData } from "@/app/actions/ShippingPageActions";
import { CartContext, CartContextType } from "../cart/CartActions";
import Checkout from "./Checkout";

interface ProfileData {
  id: string;
  firstName: string;
  lastName: string;
  address: string | null;
  deliveryAddress: string | null;
}

interface Email {
  email: string;
}

interface Props {
  userId: string;
}

const ShippingMainContainer = ({ userId }: Props) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [email, setEmail] = useState<Email>({ email: "" });
  const [products, setProducts] = useState<
    Array<{ id: string; name: string; price: number }>
  >([]);

  //Access cart products using context
  const { cartProducts } = useContext(CartContext) || {}; // Add null check
  console.log("cartprod:", cartProducts);
  useEffect(() => {
    const getProfileData = async () => {
      const { profileData, email }: any = await fetchProfileData(userId);
      setProfileData(profileData);
      setEmail(email);
      if (cartProducts) {
        setProducts(cartProducts);
      }
    };
    getProfileData();
  }, [userId]);

  // combine profiledata and Email
  const userData = {
    ...profileData,
    email: email.email,
  };

  const userDataFiltered = {
    id: userData.id || "",
    firstName: userData.firstName || "",
    lastName: userData.lastName || "",
    email: email.email,
    address: userData.address || null,
    deliveryAddress: userData.deliveryAddress || null,
  };

  const userAddressDataFiltered = {
    id: userData.id || "", // Set a default value of an empty string if userData.id is undefined
    firstName: userData.firstName || "",
    lastName: userData.lastName || "",
    address: userData.address,
  };

  const billingAddressDataFiltered = {
    id: userData.id || "", // Set a default value of an empty string if userData.id is undefined
    firstName: userData.firstName || "",
    lastName: userData.lastName || "",
    address: userData.address,
  };

  console.log("basket:", products);

  return (
    <>
      {profileData != null && (
        <Suspense fallback={<div>Loading...</div>}>
          <div className="shippingDetailsPage">
            <div className="shippingCardsFlex">
              <PersonalDetails details={userDataFiltered} />
              <AddressInfo
                addressData={{
                  ...userAddressDataFiltered,
                  address: userAddressDataFiltered.address || null,
                }}
              />
              <BillingAddress
                addressData={{
                  ...billingAddressDataFiltered,
                  address: billingAddressDataFiltered.address || null,
                }}
              />
            </div>
            <Checkout products={cartProducts || []} />
          </div>
        </Suspense>
      )}
    </>
  );
};

export default ShippingMainContainer;
