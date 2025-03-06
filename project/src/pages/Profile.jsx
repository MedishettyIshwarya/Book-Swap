import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Edit, Trash2, LogOut, ShoppingBag, ShoppingCart, CreditCard, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  // Mock user data
  useEffect(() => {
    // This would be an API call in a real application
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser({
        ...userData,
        phone: '(555) 123-4567',
        address: '123 Book Street, Reading City',
        joinedDate: '2023-01-15'
      });
      
      setFormData({
        name: userData.name || '',
        email: userData.email || '',
        phone: '(555) 123-4567',
        address: '123 Book Street, Reading City'
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Update user data
    setUser({
      ...user,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address
    });
    
    // Update localStorage
    localStorage.setItem('user', JSON.stringify({
      ...JSON.parse(localStorage.getItem('user')),
      name: formData.name,
      email: formData.email
    }));
    
    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Clear user data and redirect to home
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header isLoggedIn={false} />
        <main className="flex-grow flex items-center justify-center">
          <p>Loading profile...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={true} />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Sidebar */}
              <div className="md:w-1/4 bg-gray-50 p-6 border-r">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 text-indigo-700 text-2xl font-bold mb-2">
                    {user.name.charAt(0)}
                  </div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-gray-600 text-sm">Member since {new Date(user.joinedDate).toLocaleDateString()}</p>
                </div>
                
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setActiveTab('profile')}
                        className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'profile' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <User className="h-5 w-5 mr-3" />
                        Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab('selling')}
                        className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'selling' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <ShoppingBag className="h-5 w-5 mr-3" />
                        My Listings
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab('purchases')}
                        className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'purchases' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <ShoppingCart className="h-5 w-5 mr-3" />
                        My Purchases
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab('payment')}
                        className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'payment' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <CreditCard className="h-5 w-5 mr-3" />
                        Payment Methods
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab('reviews')}
                        className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'reviews' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <Star className="h-5 w-5 mr-3" />
                        Reviews
                      </button>
                    </li>
                  </ul>
                </nav>
                
                <div className="mt-8 pt-6 border-t">
                  <button
                    onClick={handleDeleteAccount}
                    className="flex items-center text-red-600 hover:text-red-800 w-full px-4 py-2 rounded-md hover:bg-red-50"
                  >
                    <Trash2 className="h-5 w-5 mr-3" />
                    Delete Account
                  </button>
                  <Link
                    to="/login"
                    onClick={() => {
                      localStorage.removeItem('token');
                      localStorage.removeItem('user');
                    }}
                    className="flex items-center text-gray-700 hover:text-gray-900 w-full px-4 py-2 rounded-md hover:bg-gray-100 mt-2"
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    Logout
                  </Link>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="md:w-3/4 p-6">
                {activeTab === 'profile' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">Profile Information</h2>
                      {!isEditing && (
                        <button
                          onClick={() => setIsEditing(true)}
                          className="flex items-center text-indigo-600 hover:text-indigo-800"
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit Profile
                        </button>
                      )}
                    </div>
                    
                    {isEditing ? (
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                              Address
                            </label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                        </div>
                        
                        <div className="flex space-x-4">
                          <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Save Changes
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Full Name</p>
                            <p className="font-medium">{user.name}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Email Address</p>
                            <p className="font-medium">{user.email}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                            <p className="font-medium">{user.phone}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Address</p>
                            <p className="font-medium">{user.address}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'selling' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">My Listings</h2>
                      <Link
                        to="/sell"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        + Add New Listing
                      </Link>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                      <p className="text-gray-500 mb-4">You don't have any active listings yet.</p>
                      <p className="mb-6">Start selling your books today!</p>
                      <Link
                        to="/sell"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Sell Your First Book
                      </Link>
                    </div>
                  </div>
                )}
                
                {activeTab === 'purchases' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">My Purchases</h2>
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                      <p className="text-gray-500 mb-4">You haven't made any purchases yet.</p>
                      <p className="mb-6">Explore our collection and find your next favorite book!</p>
                      <Link
                        to="/books"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Browse Books
                      </Link>
                    </div>
                  </div>
                )}
                
                {activeTab === 'payment' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                      <p className="text-gray-500 mb-4">You don't have any payment methods saved.</p>
                      <p className="mb-6">Add a payment method to make checkout faster!</p>
                      <button
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add Payment Method
                      </button>
                    </div>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">My Reviews</h2>
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                      <p className="text-gray-500 mb-4">You haven't left any reviews yet.</p>
                      <p className="mb-6">Share your thoughts on books you've purchased!</p>
                      <Link
                        to="/books"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Browse Books
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;