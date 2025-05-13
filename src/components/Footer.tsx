import React from 'react'
import { Github, Twitter, Linkedin, Youtube, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500">ChatAndBuild</span>
            </Link>
            <p className="text-secondary-600 mb-4">
              Build applications through conversation with AI. No coding required.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-secondary-900 uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Communities</a></li>
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Changelog</a></li>
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Integrations</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-secondary-900 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/getting-started" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Getting Started</Link></li>
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Tutorials</a></li>
              <li><Link to="/api-reference" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">API Reference</Link></li>
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Community</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-secondary-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-500 text-sm">
            &copy; {new Date().getFullYear()} ChatAndBuild. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200 text-sm">Terms</a></li>
              <li><a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200 text-sm">Privacy</a></li>
              <li><a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200 text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
