import React, {useState,ChangeEvent,FormEvent} from 'react'
import prisma from '@/prisma/client'
import { add } from 'lodash';
import { addPaymentCard } from '@/app/actions/ShippingPageActions';

interface UserPaymentCard {
   id: string;
    name: string;
    cardNumber: string;
    expiryDate: Date;
    billingAddress: string;
    cvv: string;
    profileId: string | null;
}

interface AddPaymentCardProps {
  onSubmit: (card: UserPaymentCard) => void;
  onCancel: () => void;
}


const AddPaymentCard = ({onSubmit,onCancel}: AddPaymentCardProps) => {
  // AddPaymentCard components
  const [newCard, setNewCard] = useState<UserPaymentCard>({
    id: "",
    name: "",
    cardNumber: "",
    expiryDate: new Date(),
    billingAddress: "",
    cvv: "",
    profileId: null,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // Save user data to the database using prisma
    const newCardData  = await addPaymentCard(newCard);

    // Clear the form after submission
    console.log("Adding card:", newCard);
    setNewCard({
      id: "",
    name: "",
    cardNumber: "",
    expiryDate: new Date(),
    billingAddress: "",
    cvv: "",
    profileId: null,
    });
    onSubmit(newCardData);
  };

  // Cancel the form submission
  const handleCancel = () => {
    setNewCard({
      id: "",
      name: "",
      cardNumber: "",
      expiryDate: new Date(),
      billingAddress: "",
      cvv: "",
      profileId: null,
    });
  };
  
  
  return (
    <div className="addPaymentCard">
      <h2>Add Payment Card</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newCard.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={newCard.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text" // Consider using a date picker for better UX
            id="expiryDate"
            name="expiryDate"
            value={newCard.expiryDate.toString()}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="billingAddress">Billing Address:</label>
          <input
            type="text"
            id="billingAddress"
            name="billingAddress"
            value={newCard.billingAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={newCard.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit">Add Card</button>
        </div>
      </form>
    </div>
  )
}

export default AddPaymentCard