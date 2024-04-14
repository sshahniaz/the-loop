import { NextResponse } from "next/server";
import { stripe } from "../../../utils/stripe";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY || '');

interface PaymentData {
  paymentMethodId: string;
}
export async function POST(request: Request) {

  const body = await request.json() as PaymentData;

  // const stripe = await stripePromise;
  try {

    const paymentIntent = await stripe?.paymentIntents.create({
      payment_method: body.paymentMethodId,
      amount: 1000,
      currency: 'usd',
      confirmation_method: 'manual',
      confirm: true,
    });

    

    return NextResponse.json({ success: true});
    
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}