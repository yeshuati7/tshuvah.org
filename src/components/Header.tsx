import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary">Grace Community Church</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md transition-colors">
                Services
              </a>
              <a href="#ministries" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md transition-colors">
                Ministries
              </a>
              <a href="#events" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md transition-colors">
                Events
              </a>
              <a href="#contact" className="text-gray-900 hover:text-primary px-3 py-2 rounded-md transition-colors">
                Contact
              </a>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Visit Us</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary p-2 rounded-md"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 hover:text-primary block px-3 py-2 rounded-md">
                Home
              </a>
              <a href="#about" className="text-gray-900 hover:text-primary block px-3 py-2 rounded-md">
                About
              </a>
              <a href="#services" className="text-gray-900 hover:text-primary block px-3 py-2 rounded-md">
                Services
              </a>
              <a href="#ministries" className="text-gray-900 hover:text-primary block px-3 py-2 rounded-md">
                Ministries
              </a>
              <a href="#events" className="text-gray-900 hover:text-primary block px-3 py-2 rounded-md">
                Events
              </a>
              <a href="#contact" className="text-gray-900 hover:text-primary block px-3 py-2 rounded-md">
                Contact
              </a>
              <div className="pt-4">
                <Button className="w-full">Visit Us</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}