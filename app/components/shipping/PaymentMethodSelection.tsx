import React, {useState,ChangeEvent} from 'react'
import PaymentMethod from './PaymentMethod'


interface PaymentMethodSelectionProps {
  paymentMethods: PaymentMethod[];
  selectedPaymentMethodId: string;
  onPaymentMethodChange: (id: string) => void;
}

const PaymentMethodSelection = ({
  paymentMethods,
  selectedPaymentMethodId,
  onPaymentMethodChange,
}: PaymentMethodSelectionProps) => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  const handlePaymentMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
    onPaymentMethodChange(event.target.value);
  };

  const handleAddCardClick = () => {
    setIsAddingCard(true);
    //show 
  };

  return (
    <div className="payment-method-selection">
      <h2>Payment Methods</h2>
      <ul>
        {paymentMethods.map((paymentMethod) => (
          <li key={paymentMethod.id}>
            <input
              type="radio"
              id={paymentMethod.id}
              name="paymentMethod"
              value={paymentMethod.id}
              checked={paymentMethod.id === selectedPaymentMethodId}
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor={paymentMethod.id}>
              {paymentMethod.name} {paymentMethod.endingDigits && `(ending in ${paymentMethod.endingDigits})`}
            </label>
          </li>
        ))}
      </ul>
      {/* Conditionally render "Add Card" button or form */}
      {!isAddingCard && <button onClick={handleAddCardClick}>Add Card</button>}
    </div>
  );
};

export default PaymentMethodSelection