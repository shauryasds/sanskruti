import React from "react";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { v4 as uuidv4 } from 'uuid';
const PaymentComponent = () => {
  const { error, isLoading, Razorpay } = useRazorpay();

  const handlePayment = ({name="my name",description="desc",amount="50000"}) => {
    const options= {
      key: "YOUR_RAZORPAY_KEY",
      amount: amount, // Amount in paise
      currency: "INR",
      name: name,
      description: description,
order_id:uuidv4() , // Generate order_id on server
      handler: (response) => {
        console.log(response);
        alert("Payment Successful!");
      },
      
      theme: {
        color: "#F37254",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div>
      <h1>Payment Page</h1>
      {isLoading && <p>Loading Razorpay...</p>}
      {error && <p>Error loading Razorpay: {error}</p>}
      <button onClick={handlePayment} disabled={isLoading}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentComponent;