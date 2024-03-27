import React, { useState } from "react";

interface userPaymentCards {
  cards: {
    name: string;
    cardNumber: string;
    expiryDate: string;
    billingAddress: string;
    [key: string]: any;
  }[];
}

const PaymentCards = ({ cards }: userPaymentCards) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedCardIndex, setEditedCardIndex] = useState<number | null>(null);
  const [editedCards, setEditedCards] =
    useState<userPaymentCards["cards"]>(cards); // Renamed to editedCards

  const handleEdit = (index: number) => {
    setIsEdit(true);
    setEditedCardIndex(index);
  };

  const handleCancel = () => {
    setIsEdit(false);
    setEditedCardIndex(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (editedCardIndex !== null) {
      // Update specific card based on editedCardIndex
      const updatedCards = [...editedCards]; // Create a copy to avoid mutation
      updatedCards[editedCardIndex][name] = value;

      setEditedCards(updatedCards);
    }
  };

  const handleSave = () => {
    // Implement api later
    console.log("Saving data:", editedCards);
    setIsEdit(false);
    setEditedCardIndex(null);
  };

  return (
    <div className="personalDetails">
      <h2>Payment Cards</h2>
      {editedCards.map(
        (
          card,
          index // Use editedCards here
        ) => (
          <li key={index}>
            {isEdit && editedCardIndex === index ? ( // Check for edit and matching index
              <form>
                <div>
                  <label htmlFor={`name-${index}`}>Name:</label>
                  <input
                    type="text"
                    id={`name-${index}`}
                    name="name"
                    value={card.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor={`cardNumber-${index}`}>Card Number:</label>
                  <input
                    type="text"
                    id={`cardNumber-${index}`}
                    name="cardNumber"
                    value={card.cardNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor={`expiryDate-${index}`}>Expiry Date:</label>
                  <input
                    type="text"
                    id={`expiryDate-${index}`}
                    name="expiryDate"
                    value={card.expiryDate}
                    onChange={handleChange}
                    // Add appropriate input type for expiry date (e.g., "date")
                  />
                </div>
                <div>
                  <label htmlFor={`billingAddress-${index}`}>
                    Billing Address:
                  </label>
                  <input
                    type="text"
                    id={`billingAddress-${index}`}
                    name="billingAddress"
                    value={card.billingAddress}
                    onChange={handleChange}
                  />
                </div>
                <button type="button" onClick={handleSave}>
                  Save
                </button>
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <p>
                  <strong>Name:</strong> {card.name}
                </p>
                <p>
                  <strong>Card Number:</strong> {card.cardNumber.slice(-4)}{" "}
                  {/* Display last 4 digits */}
                </p>
                <p>
                  <strong>Expiry Date:</strong> {card.expiryDate}
                </p>
                <p>
                  <strong>Billing Address:</strong> {card.billingAddress}
                </p>
                <button type="button" onClick={() => handleEdit(index)}>
                  Edit
                </button>
              </div>
            )}
          </li>
        )
      )}
    </div>
  );
};

export default PaymentCards;
