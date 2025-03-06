import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ShoppingCart, Heart, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [categories, setCategories] = useState([
    { id: 1, name: 'Fiction', icon: '📚' },
    { id: 2, name: 'Non-Fiction', icon: '📖' },
    { id: 3, name: 'Textbooks', icon: '🎓' },
    { id: 4, name: 'Novels', icon: '📘' },
    { id: 5, name: 'Children\'s Books', icon: '🧸' },
    { id: 6, name: 'Science Fiction', icon: '🚀' }
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryBooks, setCategoryBooks] = useState([]);

  // Mock books data by category
  const booksByCategory = {
    fiction: [
      {
        id: 101,
        title: 'The Midnight Library',
        author: 'Matt Haig',
        price: 299,
        condition: 'Like New',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.7
      },
      {
        id: 102,
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        price: 250,
        condition: 'Good',
        cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.5
      },
      {
        id: 103,
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        price: 350,
        condition: 'Excellent',
        cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.8
      },
      {
        id: 104,
        title: 'The Thursday Murder Club',
        author: 'Richard Osman',
        price: 275,
        condition: 'Good',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.3
      }
    ],
    'non-fiction': [
      {
        id: 201,
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 399,
        condition: 'Like New',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.9
      },
      {
        id: 202,
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        price: 450,
        condition: 'Good',
        cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.7
      },
      {
        id: 203,
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        price: 375,
        condition: 'Acceptable',
        cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.6
      },
      {
        id: 204,
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        price: 325,
        condition: 'Good',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.5
      }
    ],
    textbooks: [
      {
        id: 301,
        title: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen',
        price: 599,
        condition: 'Good',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.8
      },
      {
        id: 302,
        title: 'Fundamentals of Database Systems',
        author: 'Ramez Elmasri',
        price: 650,
        condition: 'Acceptable',
        cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.4
      },
      {
        id: 303,
        title: 'Principles of Physics',
        author: 'Resnick & Halliday',
        price: 750,
        condition: 'Like New',
        cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.7
      },
      {
        id: 304,
        title: 'Organic Chemistry',
        author: 'Morrison & Boyd',
        price: 550,
        condition: 'Good',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.6
      }
    ],
    novels: [
      {
        id: 401,
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        price: 199,
        condition: 'Good',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.8
      },
      {
        id: 402,
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        price: 250,
        condition: 'Like New',
        cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.7
      },
      {
        id: 403,
        title: 'Life of Pi',
        author: 'Yann Martel',
        price: 225,
        condition: 'Good',
        cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.5
      },
      {
        id: 404,
        title: 'The God of Small Things',
        author: 'Arundhati Roy',
        price: 275,
        condition: 'Acceptable',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.6
      }
    ]
  };

  // Mock featured books data
  useEffect(() => {
    // This would be an API call in a real application
    setFeaturedBooks([
      {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 199,
        condition: 'Good',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.8
      },
      {
        id: 2,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 175,
        condition: 'Like New',
        cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.5
      },
      {
        id: 3,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: 150,
        condition: 'Acceptable',
        cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.7
      },
      {
        id: 4,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: 250,
        condition: 'Good',
        cover: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        rating: 4.9
      }
    ]);

    // Get user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleCategoryClick = (categoryName) => {
    const normalizedName = categoryName.toLowerCase();
    setSelectedCategory(categoryName);
    setCategoryBooks(booksByCategory[normalizedName] || []);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={true} />
      
      <main className="flex-grow">
        {/* Welcome Section */}
        <section className="bg-indigo-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name || 'Reader'}!</h1>
            <p className="text-indigo-200 mb-6">Find your next favorite book at an affordable price.</p>
            
            <div className="relative max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:text-sm"
                placeholder="Search for books by title, author, or ISBN..."
              />
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map(category => (
                <button 
                  key={category.id}
                  onClick={() => handleCategoryClick(category.name)}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Category Books Section (conditionally rendered) */}
        {selectedCategory && categoryBooks.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">{selectedCategory} Books</h2>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Back to All Categories
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryBooks.map(book => (
                  <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={book.cover} 
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{book.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-500 flex items-center">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1">{book.rating}</span>
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-gray-600 text-sm">Condition: {book.condition}</span>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <span className="font-bold text-indigo-700">₹{book.price.toFixed(2)}</span>
                        <div className="flex space-x-2">
                          <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                            <Heart className="h-5 w-5 text-gray-600" />
                          </button>
                          <button className="p-1 rounded-full bg-indigo-100 hover:bg-indigo-200">
                            <ShoppingCart className="h-5 w-5 text-indigo-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Featured Books Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Books</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBooks.map(book => (
                <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={book.cover} 
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500 flex items-center">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1">{book.rating}</span>
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600 text-sm">Condition: {book.condition}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-indigo-700">₹{book.price.toFixed(2)}</span>
                      <div className="flex space-x-2">
                        <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                          <Heart className="h-5 w-5 text-gray-600" />
                        </button>
                        <button className="p-1 rounded-full bg-indigo-100 hover:bg-indigo-200">
                          <ShoppingCart className="h-5 w-5 text-indigo-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/books"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                View All Books
                <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Sell Your Books Section */}
        <section className="py-12 bg-indigo-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Have books to sell?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              List your used books on BookSwap and connect with buyers looking for affordable books. It's quick, easy, and free to get started!
            </p>
            <Link 
              to="/sell"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Sell Your Books
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;