import React, { useState } from 'react';
import { CreditCard, Smartphone, Wallet } from 'lucide-react';

const PaymentOptions = ({ onSelectPayment }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
    if (onSelectPayment) {
      onSelectPayment(method);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Methods</h3>
      
      <div className="space-y-4">
        <div 
          className={`border rounded-lg p-4 cursor-pointer transition ${selectedMethod === 'card' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-300'}`}
          onClick={() => handleSelectMethod('card')}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-md font-medium text-gray-900">Credit/Debit Card</h4>
              <p className="text-sm text-gray-500">Pay securely with your card</p>
            </div>
          </div>
          
          {selectedMethod === 'card' && (
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    id="expiry"
                    placeholder="MM/YY"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    placeholder="123"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name on Card</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          )}
        </div>
        
        <div 
          className={`border rounded-lg p-4 cursor-pointer transition ${selectedMethod === 'upi' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-300'}`}
          onClick={() => handleSelectMethod('upi')}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <Smartphone className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-md font-medium text-gray-900">UPI</h4>
              <p className="text-sm text-gray-500">Pay using UPI apps like Google Pay, PhonePe, Paytm</p>
            </div>
          </div>
          
          {selectedMethod === 'upi' && (
            <div className="mt-4">
              <label htmlFor="upi-id" className="block text-sm font-medium text-gray-700">UPI ID</label>
              <input
                type="text"
                id="upi-id"
                placeholder="yourname@upi"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <div className="mt-4 grid grid-cols-4 gap-2">
                <div className="p-2 border rounded-md text-center hover:bg-gray-50 cursor-pointer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-8 mx-auto" />
                  <span className="text-xs mt-1 block">Google Pay</span>
                </div>
                <div className="p-2 border rounded-md text-center hover:bg-gray-50 cursor-pointer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/512px-Paytm_Logo_%28standalone%29.svg.png" alt="Paytm" className="h-8 mx-auto" />
                  <span className="text-xs mt-1 block">Paytm</span>
                </div>
                <div className="p-2 border rounded-md text-center hover:bg-gray-50 cursor-pointer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/PhonePe_Logo.png/640px-PhonePe_Logo.png" alt="PhonePe" className="h-8 mx-auto" />
                  <span className="text-xs mt-1 block">PhonePe</span>
                </div>
                <div className="p-2 border rounded-md text-center hover:bg-gray-50 cursor-pointer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="Other UPI" className="h-8 mx-auto" />
                  <span className="text-xs mt-1 block">Other UPI</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div 
          className={`border rounded-lg p-4 cursor-pointer transition ${selectedMethod === 'cod' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-300'}`}
          onClick={() => handleSelectMethod('cod')}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <Wallet className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-md font-medium text-gray-900">Cash on Delivery</h4>
              <p className="text-sm text-gray-500">Pay when you receive the book</p>
            </div>
          </div>
        </div>
      </div>
      
      {selectedMethod && (
        <div className="mt-6">
          <button
            type="button"
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {selectedMethod === 'cod' ? 'Place Order' : 'Pay Now'}
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;