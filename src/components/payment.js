import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the payment processing
    console.log("Payment submitted");
    // After successful payment, you would update the user's subscription status
    // and redirect them back to the main application
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Confirm Payment</h2>
        <p className="text-gray-600 mb-6">
          Please select a payment method and enter your details to complete your subscription.
        </p>

        <form onSubmit={handlePaymentSubmit}>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div className="flex space-x-4">
              <button
                type="button"
                className={`flex items-center justify-center p-3 rounded-md ${
                  paymentMethod === 'credit' ? 'bg-[#738065] text-white' : 'bg-gray-200'
                }`}
                onClick={() => setPaymentMethod('credit')}
              >
                <FontAwesomeIcon  className="mr-2" />
                Credit Card
              </button>
              <button
                type="button"
                className={`flex items-center justify-center p-3 rounded-md ${
                  paymentMethod === 'paypal' ? 'bg-[#738065] text-white' : 'bg-gray-200'
                }`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <FontAwesomeIcon  className="mr-2" />
                PayPal
              </button>
              <button
                type="button"
                className={`flex items-center justify-center p-3 rounded-md ${
                  paymentMethod === 'applepay' ? 'bg-[#738065] text-white' : 'bg-gray-200'
                }`}
                onClick={() => setPaymentMethod('applepay')}
              >
                <FontAwesomeIcon  className="mr-2" />
                Apple Pay
              </button>
              <button
                type="button"
                className={`flex items-center justify-center p-3 rounded-md ${
                  paymentMethod === 'googlepay' ? 'bg-[#738065] text-white' : 'bg-gray-200'
                }`}
                onClick={() => setPaymentMethod('googlepay')}
              >
                <FontAwesomeIcon  className="mr-2" />
                Google Pay
              </button>
            </div>
          </div>

          {paymentMethod === 'credit' && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Credit Card Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  className="col-span-2 p-2 border rounded"
                  placeholder="Card Number"
                  required
                />
                <input
                  type="text"
                  className="p-2 border rounded"
                  placeholder="MM/YY"
                  required
                />
                <input
                  type="text"
                  className="p-2 border rounded"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
          )}

          {paymentMethod === 'paypal' && (
            <div className="mb-6">
              <p>You will be redirected to PayPal to complete your payment.</p>
            </div>
          )}

          {(paymentMethod === 'applepay' || paymentMethod === 'googlepay') && (
            <div className="mb-6">
              <p>Please confirm the payment on your device.</p>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              className="w-full p-2 border rounded mb-2"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              placeholder="Address"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="p-2 border rounded"
                placeholder="City"
                required
              />
              <input
                type="text"
                className="p-2 border rounded"
                placeholder="Zip Code"
                required
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">Total: $840.00</p>
            <button
              type="submit"
              className=" text-white px-6 py-2 rounded-full hover:bg-[#8c9c7b] transition duration-200"
            >
              Complete Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;