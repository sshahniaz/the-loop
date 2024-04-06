"use client";
import React, { useState, useEffect, Suspense } from 'react'
import { useRouter } from 'next/router'
import { fetchProfileData } from '@/app/actions/ShippingPageActions'
import PersonalDetails from '@/app/components/profile/PersonalDetails'
import AddressInfo from '@/app/components/profile/AddressInfo'
import BillingAddress from '@/app/components/profile/BillingAddress'

import useSWR from 'swr'

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
const ShippingPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [ profileData, setProfileData ] = useState<ProfileData>({
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    deliveryAddress: '',
  });
  const [ email, setEmail ] = useState<Email>({ email: '' });

  const { data, isLoading } = useSWR(userId as string, () => fetchProfileData(userId as string));
  useEffect(() => {
    
      if (userId) {
        console.log(userId);
        try {
          console.log(data);
          setProfileData(data?.profileData || {
            id: '',
            firstName: '',
            lastName: '',
            address: null,
            deliveryAddress: null,
          });
          if (data?.email) {
            setEmail(data.email);
          }
        } catch (error) {
          console.error(error);
        }
      }
    
  }, [userId]);



  // combine profiledata and Email
  const userData = {
    ...profileData,
    email: email.email,
  };

  // filter for address from userData
  const userAddressData = {
    id: userData.id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    address: userData.address,
  };

  // filter for billing address from userData
  const billingAddressData = {
    id: userData.id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    address: userData.deliveryAddress,
  };
  return (
    <>
      {profileData && (
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <PersonalDetails details={userData} />
            <AddressInfo addressData={userAddressData} />
            <BillingAddress addressData={billingAddressData} />
          </div>
        </Suspense>
      )}
    </>
  )
}

export default ShippingPage