import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentOptions from '../components/PaymentOptions';

const Checkout = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 199,
      quantity: 1,
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 3,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 150,
      quantity: 1,
      cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  ]);
  
  const [address, setAddress] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });
  
  const [step, setStep] = useState(1); // 1: Cart, 2: Address, 3: Payment
  
  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });
  };
  
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingFee = 50;
  const total = subtotal + shippingFee;
  
  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={true} />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          {/* Checkout Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className={`flex items-center ${step >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
                <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                  <ShoppingCart className="h-4 w-4" />
                </div>
                <span className="ml-2 text-sm font-medium">Cart</span>
              </div>
              <div className={`w-12 h-1 mx-2 ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center ${step >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
                <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="ml-2 text-sm font-medium">Address</span>
              </div>
              <div className={`w-12 h-1 mx-2 ${step >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center ${step >= 3 ? 'text-indigo-600' : 'text-gray-400'}`}>
                <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                  <span className="text-sm font-medium">₹</span>
                </div>
                <span className="ml-2 text-sm font-medium">Payment</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              {step === 1 && (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Your Cart</h2>
                    <Link to="/dashboard" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Continue Shopping
                    </Link>
                  </div>
                  
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">Your cart is empty</p>
                      <Link 
                        to="/dashboard"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Browse Books
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div className="border-b pb-4 mb-4">
                        <div className="grid grid-cols-12 gap-4 font-medium text-gray-500 mb-2">
                          <div className="col-span-6">Product</div>
                          <div className="col-span-2 text-center">Price</div>
                          <div className="col-span-2 text-center">Quantity</div>
                          <div className="col-span-2 text-right">Total</div>
                        </div>
                        
                        {cart.map(item => (
                          <div key={item.id} className="grid grid-cols-12 gap-4 py-4 border-t">
                            <div className="col-span-6 flex items-center">
                              <img 
                                src={item.cover} 
                                alt={item.title}
                                className="w-16 h-20 object-cover rounded mr-4"
                              />
                              <div>
                                <h3 className="font-medium text-gray-900">{item.title}</h3>
                                <p className="text-gray-500 text-sm">by {item.author}</p>
                                <button 
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="text-red-600 text-sm mt-1 hover:text-red-800"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                            <div className="col-span-2 flex items-center justify-center">
                              <span className="font-medium">₹{item.price.toFixed(2)}</span>
                            </div>
                            <div className="col-span-2 flex items-center justify-center">
                              <div className="flex items-center">
                                <button 
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  className="w-8 h-8 rounded-l border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  value={item.quantity}
                                  readOnly
                                  className="w-10 h-8 border-t border-b border-gray-300 text-center"
                                />
                                <button 
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  className="w-8 h-8 rounded-r border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="col-span-2 flex items-center justify-end">
                              <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="w-full max-w-md">
                          <div className="flex justify-between py-2">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-medium">₹{shippingFee.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between py-2 border-t border-gray-200 mt-2">
                            <span className="text-lg font-bold">Total</span>
                            <span className="text-lg font-bold">₹{total.toFixed(2)}</span>
                          </div>
                          
                          <button
                            onClick={handleContinue}
                            className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Proceed to Address
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
              
              {step === 2 && (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Shipping Address</h2>
                    <button 
                      onClick={handleBack}
                      className="text-indigo-600 hover:text-indigo-800 flex items-center"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Back to Cart
                    </button>
                  </div>
                  
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={address.fullName}
                        onChange={handleAddressChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
                      <input
                        type="text"
                        id="addressLine1"
                        name="addressLine1"
                        value={address.addressLine1}
                        onChange={handleAddressChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2 (Optional)</label>
                      <input
                        type="text"
                        id="addressLine2"
                        name="addressLine2"
                        value={address.addressLine2}
                        onChange={handleAddressChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={address.city}
                        onChange={handleAddressChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={address.state}
                        onChange={handleAddressChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">PIN Code</label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={address.pincode}
                        onChange={handleAddressChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={address.phone}
                        onChange={handleAddressChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </form>
                  
                  <div className="mt-8 flex justify-end">
                    <div className="w-full max-w-md">
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-medium">₹{shippingFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-t border-gray-200 mt-2">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg font-bold">₹{total.toFixed(2)}</span>
                      </div>
                      
                      <button
                        onClick={handleContinue}
                        className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Proceed to Payment
                      </button>
                    </div>
                  </div>
                </>
              )}
              
              {step === 3 && (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Payment</h2>
                    <button 
                      onClick={handleBack}
                      className="text-indigo-600 hover:text-indigo-800 flex items-center"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Back to Address
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <PaymentOptions />
                    </div>
                    
                    <div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                        
                        {cart.map(item => (
                          <div key={item.id} className="flex justify-between py-2 border-b">
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                            </div>
                            <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                        
                        <div className="mt-4">
                          <div className="flex justify-between py-2">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-medium">₹{shippingFee.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between py-2 border-t border-gray-200 mt-2">
                            <span className="text-lg font-bold">Total</span>
                            <span className="text-lg font-bold">₹{total.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;