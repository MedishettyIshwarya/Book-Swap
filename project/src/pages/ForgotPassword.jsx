import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    try {
      // Mock API call for password reset
      // const response = await axios.post('/api/auth/forgot-password', { email });
      
      // Simulate successful submission
      setIsSubmitted(true);
      setMessage('Password reset instructions have been sent to your email.');
    } catch (err) {
      setMessage('Failed to process your request. Please try again.');
      console.error('Forgot password error:', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={false} />
      
      <main className="flex-grow flex items-center justify-center bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-xl bg-opacity-95">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Reset your password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
          </div>
          
          {message && (
            <div className={`${isSubmitted ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} border px-4 py-3 rounded relative`} role="alert">
              <span className="block sm:inline">{message}</span>
            </div>
          )}
          
          {!isSubmitted ? (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Reset Instructions
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-6 text-center">
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Return to login
              </Link>
            </div>
          )}
          
          <div className="text-center mt-4">
            <Link to="/login" className="font-medium text-gray-600 hover:text-gray-500 text-sm">
              Remember your password? Sign in
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForgotPassword;