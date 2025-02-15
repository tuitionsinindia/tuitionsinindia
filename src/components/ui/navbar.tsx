
import { useState } from "react";
import { Button } from "./button";
import { Menu, X, Phone, Search } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm">
              <Phone size={16} className="mr-2" />
              <span>Call us: +91 98765 43210</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <a href="#" className="hover:text-primary-light transition-colors">Blog</a>
              <a href="#" className="hover:text-primary-light transition-colors">About Us</a>
              <a href="#" className="hover:text-primary-light transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-2xl font-bold text-primary">
                TutionsInIndia
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Find Tutors
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Post Requirement
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                For Tutors
              </a>
              <Button variant="outline" className="mr-2">
                Login
              </Button>
              <Button>
                Join Free
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Find Tutors
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Post Requirement
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                For Tutors
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full mb-2">
                  Login
                </Button>
                <Button className="w-full">
                  Join Free
                </Button>
              </div>
              {/* Mobile top bar links */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Blog</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">About Us</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
