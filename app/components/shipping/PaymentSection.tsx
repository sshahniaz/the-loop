import React, {useState} from 'react'
import PaymentMethodSelection from './PaymentMethodSelection'
import AddPaymentCard from './AddPaymentCard'
import PaymentMethod from './PaymentMethod'

interface PaymentSectionProps {
  paymentMethods: PaymentMethod[];
  selectedPaymentMethodId: string;
  onPaymentMethodChange: (id: string) => void;
}

const PaymentSection = ({ paymentMethods, onPaymentMethodChange }: PaymentSectionProps) => {
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState<string | null>(null);
  const [isAddingCard, setIsAddingCard] = useState(false);

  const handlePaymentMethodChange = (id: string) => {
    setSelectedPaymentMethodId(id);
    onPaymentMethodChange(id);
  }

  const handleAddCard = (card: any) => {  
    //Adding new cards to the paymentMethods array and updating the state
    paymentMethods.push(card);

    console.log('Adding card:', card);
    setSelectedPaymentMethodId(card.id);
    setIsAddingCard(false);
  }

  const handleCancelAddCard = () => { setIsAddingCard(false) }    




  return (
   <div className="payment-section">
      <PaymentMethodSelection
        paymentMethods={paymentMethods}
        selectedPaymentMethodId={selectedPaymentMethodId || ''}
        onPaymentMethodChange={handlePaymentMethodChange}
      />
      {isAddingCard ? (
        <AddPaymentCard onSubmit={handleAddCard} onCancel={handleCancelAddCard} />
      ) : (
        <button onClick={() => setIsAddingCard(true)}>Add Card</button>
      )}
    </div>
  )

}

export default PaymentSection