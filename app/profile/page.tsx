'use client';

import React from 'react';
import useSWR from 'swr';

interface ProfileData {
  firstName: string;
  lastName: string;
  stars: number;
  address: string;
  deliveryAddress: string;
}

const getData = async () => {
  const res = await fetch("http://localhost:3002/api/profile/65faf8493a25aae6e6aedda2");
  return await res.json();
};

const page = () => {
  const { data: profileData } = useSWR('profile', getData);

  // if (error) return <div>Failed to load profile data</div>;
  if (!profileData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profileData.firstName} {profileData.lastName}</h1>
      <p>Stars: {profileData.stars}</p>
      <p>Delivery Address: {profileData.deliveryAddress}</p>
    </div>
  );
};

export default page;
