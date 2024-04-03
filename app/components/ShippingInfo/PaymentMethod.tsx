interface PaymentMethod {
  id: string;
  name: string;
  type?: string; 
  endingDigits?: string; // Optional for card ending digits
}

export default PaymentMethod;