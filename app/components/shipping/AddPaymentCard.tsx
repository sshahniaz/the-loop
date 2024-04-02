import React, {useState,ChangeEvent,FormEvent} from 'react'
import prisma from '@/prisma/client'

interface UserPaymentCard {
  name: string;
  cardNumber: string;
  expiryDate: string;
  billingAddress: string;
  cvv: string;
}
const AddPaymentCard = () => {
  // AddPaymentCard components
  const [newCard, setNewCard] = useState<UserPaymentCard>({
    name: "",
    cardNumber: "",
    expiryDate: "",
    billingAddress: "",
    cvv: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // Save user data to the database using prisma
    await prisma.cardDetails.create({
      data: {
        name: newCard.name,
        cardNumber: newCard.cardNumber,
        expiryDate: newCard.expiryDate,
        billingAddress: newCard.billingAddress,
        cvv: newCard.cvv,
      },
    });

    // Clear the form after submission
    console.log("Adding card:", newCard);
    setNewCard({
      name: "",
      cardNumber: "",
      expiryDate: "",
      billingAddress: "",
      cvv: "",
    });
  };

  // Cancel the form submission
  const handleCancel = () => {
    setNewCard({
      name: "",
      cardNumber: "",
      expiryDate: "",
      billingAddress: "",
      cvv: "",
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
            value={newCard.expiryDate}
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