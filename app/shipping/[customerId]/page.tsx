"use client";
import React, { useState, Suspense } from 'react'
import ShippingMainContainer from '@/app/components/ShippingInfo/ShippingMainContainer';

// import useSWR from 'swr'


const Page = ({ params}: {params: {customerId: string}}) => {
  
 

  return (
    <div>
      <ShippingMainContainer userId={params.customerId} />
    </div>
  )


}



export default Page