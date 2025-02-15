
import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              TutionsInIndia
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">
              Pricing
            </a>
            <Button variant="outline" className="mr-2">
              Login
            </Button>
            <Button>
              Get Started
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="outline" className="w-full mb-2">
                Login
              </Button>
              <Button className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
