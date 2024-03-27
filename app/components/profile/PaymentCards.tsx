import React, { useState } from "react";

interface userPaymentCards {
  cards: {
    name: string;
    cardNumber: string;
    expiryDate: string;
    billingAddress: string;
  }[];
}
const PaymentCards = ({ cards }: userPaymentCards) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    cards,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = () => {
    //impliment api later
    console.log("Saving data:", userData);
    setIsEdit(false);
  };

  const handleCancel = () => {
    setUserData({ cards }); // Reset to original data
    setIsEdit(false);
  };

  return (
    <div className="personalDetails">
      <h2>Personal Details</h2>
      {userData.cards.map((cards, index) => (
        <li key={index}>
          {isEdit ? (
            <form>
              <div>
                <label htmlFor="firstName">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userData.cards[index].name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={userData.cards[index].cardNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="expiryDate">Expiry Date:</label>
                <input
                  type="expiryDate"
                  id="expiryDate"
                  name="expiryDate"
                  value={userData.cards[index].expiryDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="billingAddress">Billing Address:</label>
                <input
                  type="billingAddress"
                  id="billingAddress"
                  name="billingAddress"
                  value={userData.cards[index].billingAddress}
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
                <strong>Name:</strong> {userData.cards[index].name}
              </p>
              <p>
                <strong>Card Number:</strong> {userData.cards[index].cardNumber}
              </p>
              <p>
                <strong>Expiry Date:</strong> {userData.cards[index].expiryDate}
              </p>
              <p>
                <strong>Billing Address:</strong>{" "}
                {userData.cards[index].billingAddress}
              </p>
              <button type="button" onClick={handleEdit}>
                Edit
              </button>
            </div>
          )}
        </li>
      ))}
    </div>
  );
};

export default PaymentCards;
