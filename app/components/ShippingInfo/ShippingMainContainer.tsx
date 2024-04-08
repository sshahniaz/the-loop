import React, {useState,useEffect,Suspense} from 'react'
import PersonalDetails from '@/app/components/profile/PersonalDetails'
import AddressInfo from '@/app/components/profile/AddressInfo'
import BillingAddress from '@/app/components/profile/BillingAddress'
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

interface Props{
  userId: string;

}

const ShippingMainContainer = ({userId}: Props) => {
  
  const [ profileData, setProfileData ] = useState<ProfileData | null>(null);
  const [ email, setEmail ] = useState<Email>({ email: '' });

  
  
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

  return (
    <>
      {profileData != null && (
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <PersonalDetails details={userDataFiltered} />
            <AddressInfo addressData={{ ...userAddressDataFiltered, address: userAddressDataFiltered.address || null }} />
            <BillingAddress addressData={{ ...billingAddressDataFiltered, address: billingAddressDataFiltered.address || null }} />
          </div>
        </Suspense>
      )}
    </>
  )
}

export default ShippingMainContainer