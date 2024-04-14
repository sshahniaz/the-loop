import React, { useState, useEffect } from 'react';
import { loadStripe, StripeCardElement } from '@stripe/stripe-js';
import {  Elements, useStripe, useElements } from '@stripe/react-stripe-js';


// Replace with your actual Stripe publishable key

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const StripeElementsForm = ({ onPaymentSuccess }:any) => {
  const stripe = useStripe();
  const elements = useElements();

  const [cardElement, setCardElement] = useState<any>(null); // Type any for now

  useEffect(() => {
    if (!elements) {
      return;
    }

    const cardElement = elements.create('card');
    setCardElement(cardElement);
  }, [elements]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements || !cardElement) {
      // Handle potential errors
      return;
    }


    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement('card') as StripeCardElement,
    });

    if (error) {
      console.error('Payment error:', error);
      // Handle payment errors appropriately
      return;
    }

    // Send payment method ID to your server-side API route for processing
    const response = await fetch('/api/process-payment', {
      method: 'POST',
      body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (data.success) {
      onPaymentSuccess(); // Handle successful payment
    } else {
      console.error('Payment processing error:', data.error);
      // Handle payment processing errors
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit}>
        <fieldset className="StripeElement">
          <legend>Payment Details</legend>
          <div className="FormRow">
            <label htmlFor="card-element">Card details</label>
            <div id="card-element" ref={setCardElement} />
          </div>
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </fieldset>
      </form>
    </Elements>
  );
};

export default StripeElementsForm;
