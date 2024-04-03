import React, {useState,useEffect} from 'react'
import prisma from '@/prisma/client'
import AddressInfo from '@/app/components/profile/AddressInfo'
import BillingAddress from '@/app/components/profile/BillingAddress'
import PersonalDetails from '@/app/components/profile/PersonalDetails'
import PaymentSection from '@/app/components/ShippingInfo/PaymentSection'
import PaymentMethod from '@/app/components/ShippingInfo/PaymentMethod'

interface ShippingProps {
  userId: string;
}

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

const page = ({ userId }: ShippingProps) => {
  // State to store profile Data
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData);
  // Set emal state
  const [email, setEmail] = useState<Email>({} as Email);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

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
  const fetchProfileData = async () => {
    try {
      // Fetch the profile data from the database using prisma
    const profileData = await prisma.profile.findUnique({
      where: {
        customerId: userId,
      },
    });

    // Fetch email from the database using prisma
    const email = await prisma.customer.findUnique({
      where: {
        id: userId,
      },
    });

    // Set the profile data in the state

    setProfileData(profileData || {
      id: '',
      firstName: '',
      lastName: '',
      address: null,
      deliveryAddress: null,
    });

    setEmail(email || {
      email: '',
    });
   } catch (error) {
    console.error('Error fetching profile data:', error);

  }

  // Get the payment methods from the database
  const getPaymentMethods = async () => {
    try {
      // Fetch the card details from the database using prisma
      const cards = await prisma.cardDetails.findMany({
        where: {
          profileId: profileData.id,
        },
      });
      // Set the payment methods in the state
      setPaymentMethods(cards.map((card) => ({
        id: card.id,
        name: card.name,
        // Get the last 4 digits of the card number
        endingDigits: card.cardNumber.slice(-4),
      })));

    } catch (error) {
      console.error('Error fetching payment methods:', error);
    }
    }
    
    // Fetch the profile data and payment methods when the component mounts
    useEffect(() => {
      fetchProfileData();
      getPaymentMethods();
    }, [userId]);
  
  return (
    <>
      <PersonalDetails details={userData}/>
      <AddressInfo addressData={userAddressData}/>
      <BillingAddress addressData={billingAddressData}/>
      <PaymentSection paymentMethods={paymentMethods} selectedPaymentMethodId={paymentMethods[0].id} onPaymentMethodChange={(id) => console.log(id)} />    
    </>
  )
  }
}

  export default page;