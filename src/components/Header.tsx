import React from 'react'
import { Command, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500">ChatAndBuild</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium">Features</a>
            <a href="#" className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium">Communities</a>
            <a href="#" className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium">Documentation</a>
            <a href="#" className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium">Tutorials</a>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium">Sign In</a>
            <a 
              href="#" 
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-700 hover:to-blue-600 text-white rounded-md transition-all duration-200 flex items-center font-medium shadow-sm hover:shadow"
            >
              <Command className="h-4 w-4 mr-1" /> Get Started
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-md animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium">Features</a>
            <a href="#" className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium">Communities</a>
            <a href="#" className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium">Documentation</a>
            <a href="#" className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium">Tutorials</a>
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
              <a href="#" className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium">Sign In</a>
              <a 
                href="#" 
                className="px-4 py-2 bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-700 hover:to-blue-600 text-white rounded-md transition-all duration-200 flex items-center justify-center font-medium shadow-sm hover:shadow"
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
