import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-bold">BookSwap</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your marketplace for buying and selling used books at affordable prices.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition">FAQ</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/category/fiction" className="text-gray-300 hover:text-white transition">Fiction</a></li>
              <li><a href="/category/non-fiction" className="text-gray-300 hover:text-white transition">Non-Fiction</a></li>
              <li><a href="/category/textbooks" className="text-gray-300 hover:text-white transition">Textbooks</a></li>
              <li><a href="/category/novels" className="text-gray-300 hover:text-white transition">Novels</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-gray-300">support@bookswap.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-gray-300">123 Book Street, Reading City</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BookSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;