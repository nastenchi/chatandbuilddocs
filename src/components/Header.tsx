import React from 'react'
import { Command, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-900">ChatAndBuild</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Documentation</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Blog</a>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Sign In</a>
            <a 
              href="#" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 flex items-center"
            >
              <Command className="h-4 w-4 mr-1" /> Get Started
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Documentation</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Blog</a>
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Sign In</a>
              <a 
                href="#" 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <Command className="h-4 w-4 mr-1" /> Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
