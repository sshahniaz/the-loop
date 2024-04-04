'use client';
import React, { useState, useEffect, Suspense } from 'react'
import prisma from '@/prisma/client'
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import AddressInfo from '@/app/components/profile/AddressInfo'
import BillingAddress from '@/app/components/profile/BillingAddress'
import PersonalDetails from '@/app/components/profile/PersonalDetails'
import PaymentSection from '@/app/components/ShippingInfo/PaymentSection'
import PaymentMethod from '@/app/components/ShippingInfo/PaymentMethod'
import { fetchProfileData } from '@/app/actions/ShippingPageActions'

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

const page = () => {
  // State to store profile Data
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData);
  // Set emal state
  const [email, setEmail] = useState<Email>({} as Email);
  const [ paymentMethods, setPaymentMethods ] = useState<PaymentMethod[]>([]);
  const [ userId, setUserId ] = useState<string>('65faf8493a25aae6e6aedda2');
  
  
  
  const pathname = usePathname();
  const searchParams = useSearchParams();

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


  // Fetch Profile Data from the database
  // const fetchProfileData = async () => {
  //   try {
  //     // Fetch the profile data from the database using prisma
  //     const profileData = await prisma.profile.findUnique({
  //       where: {
  //         customerId: userId,
  //       },
  //     });

  //     // Fetch email from the database using prisma
  //     const email = await prisma.customer.findUnique({
  //       where: {
  //         id: userId,
  //       },
  //     });
    
  //     // Set the profile data in the state

  //     setProfileData(profileData || {
  //       id: '',
  //       firstName: '',
  //       lastName: '',
  //       address: null,
  //       deliveryAddress: null,
  //     });

  //     setEmail(email || {
  //       email: '',
  //     });
  //   } catch (error) {
  //     console.error('Error fetching profile data:', error);

  //   }
  // }

  // Get the payment methods from the database
  // const getPaymentMethods = async () => {
  //   try {
  //     // Fetch the card details from the database using prisma
  //     const cards = await prisma.cardDetails.findMany({
  //       where: {
  //         profileId: profileData.id,
  //       },
  //     });
  //     // Set the payment methods in the state
  //     setPaymentMethods(cards.map((card) => ({
  //       id: card.id,
  //       name: card.name,
  //       // Get the last 4 digits of the card number
  //       endingDigits: card.cardNumber.slice(-4),
  //     })));

  //   } catch (error) {
  //     console.error('Error fetching payment methods:', error);
  //   }
  //   }
    
    // Fetch the profile data and payment methods when the component mounts
    useEffect(() => {
      // setUserId(pathname.split('/')[2]);
      
      const fetchData = async () => {
      
        if (userId) {
          const { profileData, email }: any = await fetchProfileData(userId);
          console.log('profileData:', profileData);
          console.log('email:', email);
          setProfileData(profileData);
          setEmail(email);
          // getPaymentMethods();
        }
        setUserId('65faf8493a25aae6e6aedda2');
        console.log('userId:', userId);
      }
      fetchData();
    }, [userId]);
  
  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
        {profileData && (
          <div>

            <PersonalDetails details={userData} />
            <AddressInfo addressData={userAddressData} />
            <BillingAddress addressData={billingAddressData} />
          </div>
          )}
          </Suspense>
    </>
  );
  
}

  export default page;