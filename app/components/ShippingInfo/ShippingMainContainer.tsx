import React, {useState,useEffect,Suspense, useCallback, useRef, use} from 'react'
import PersonalDetails from '@/app/components/profile/PersonalDetails'
import AddressInfo from '@/app/components/profile/AddressInfo'
import BillingAddress from '@/app/components/profile/BillingAddress'
import { fetchProfileData } from '@/app/actions/ShippingPageActions'

import { loadStripe } from '@stripe/stripe-js'
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import PaymentSection from './PaymentSection'
import StripeElementsForm from './StripeElementsForm'
import { Elements } from '@stripe/react-stripe-js'


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

interface Props{
  userId: string;

}

const ShippingMainContainer = ({userId}: Props) => {
  
  const [ profileData, setProfileData ] = useState<ProfileData | null>(null);
  const [ email, setEmail ] = useState<Email>({ email: '' });

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')
  const [ showCheckout, setShowCheckout ] = useState(false)
  
  const fetchClientSecret = useCallback(async () => {
    const response = await fetch('/api/embedded-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID }),
    }).then((res) => res.json()).then((data) => data.client_secret)
    
  }, [])

  // const options = { fetchClientSecret };
  
  useEffect(() => {
    const getProfileData = async () => {
      const { profileData, email } :any = await fetchProfileData(userId);
      setProfileData(profileData);
      setEmail(email);
    };
    getProfileData();
  }, [userId]);
 

  // combine profiledata and Email
  const userData  = {
    ...profileData,
    email: email.email,
  };


    const userDataFiltered = {
    id: userData.id || '',
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    email: email.email,
    address: userData.address || null,
    deliveryAddress: userData.deliveryAddress || null,
  };

  const userAddressDataFiltered = {
    id: userData.id || '', // Set a default value of an empty string if userData.id is undefined
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    address: userData.address
  };

  const billingAddressDataFiltered = {
    id: userData.id || '', // Set a default value of an empty string if userData.id is undefined
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    address: userData.address 
  };

   const handlePaymentSuccess = () => {
    // Handle successful payment (e.g., redirect to order confirmation)
    // router.push('/order-confirmation');
  };

  return (
    <>
      {profileData != null && (
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <PersonalDetails details={userDataFiltered} />
            <AddressInfo addressData={{ ...userAddressDataFiltered, address: userAddressDataFiltered.address || null }} />
            <BillingAddress addressData={{ ...billingAddressDataFiltered, address: billingAddressDataFiltered.address || null }} />
            
            {/* <PaymentSection setShowCheckout={setShowCheckout} /> */}

            <Elements stripe={stripePromise}>

            <StripeElementsForm onPaymentSuccess={handlePaymentSuccess} />
            </Elements>
            
          </div>
        </Suspense>
      )}
    </>
  )
}

export default ShippingMainContainer