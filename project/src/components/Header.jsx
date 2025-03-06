import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, LogOut, User } from 'lucide-react';

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session/token
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8" />
          <span className="text-xl font-bold">BookSwap</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-6 items-center">
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/dashboard" className="hover:text-indigo-200 transition">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:text-indigo-200 transition">
                    <User className="h-5 w-5 inline mr-1" />
                    Profile
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center hover:text-indigo-200 transition"
                  >
                    <LogOut className="h-5 w-5 inline mr-1" />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:text-indigo-200 transition">
                    Login
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/register" 
                    className="bg-white text-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-100 transition"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;