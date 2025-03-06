import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, BookMarked, DollarSign, Truck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={false} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Next Book at a Fraction of the Cost</h1>
              <p className="text-xl mb-8">Buy and sell used books with BookSwap - the marketplace for book lovers.</p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/register" 
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition text-center"
                >
                  Sign Up Free
                </Link>
                <Link 
                  to="/books" 
                  className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-md hover:bg-gray-100 transition text-center"
                >
                  Browse Books
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How BookSwap Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-700 mb-4">
                  <BookMarked className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">List Your Books</h3>
                <p className="text-gray-600">
                  Create listings for your used books in minutes. Add photos, set your price, and describe the condition.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-700 mb-4">
                  <DollarSign className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Save Money</h3>
                <p className="text-gray-600">
                  Find textbooks, novels, and more at prices much lower than retail. Great deals on the books you need.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-700 mb-4">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Easy Exchange</h3>
                <p className="text-gray-600">
                  Arrange meetups or shipping with buyers and sellers. Safe, secure, and convenient transactions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/category/textbooks" className="relative h-64 rounded-lg overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1588580000645-f39a59f07b81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                  alt="Textbooks"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">Textbooks</h3>
                  <p className="text-gray-200">Save on course materials</p>
                </div>
              </Link>
              
              <Link to="/category/fiction" className="relative h-64 rounded-lg overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                  alt="Fiction"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">Fiction</h3>
                  <p className="text-gray-200">Discover new worlds</p>
                </div>
              </Link>
              
              <Link to="/category/non-fiction" className="relative h-64 rounded-lg overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                  alt="Non-Fiction"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">Non-Fiction</h3>
                  <p className="text-gray-200">Expand your knowledge</p>
                </div>
              </Link>
              
              <Link to="/category/novels" className="relative h-64 rounded-lg overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                  alt="Novels"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">Novels</h3>
                  <p className="text-gray-200">Bestsellers and classics</p>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-10">
              <Link 
                to="/books"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                View All Categories
                <svg className="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Buying and Selling Books?</h2>
            <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
              Join thousands of book lovers who are saving money and finding new homes for their books.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/register" 
                className="px-8 py-3 bg-white text-indigo-700 font-medium rounded-md hover:bg-gray-100 transition"
              >
                Sign Up Now
              </Link>
              <Link 
                to="/login" 
                className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-indigo-600 transition"
              >
                Log In
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;