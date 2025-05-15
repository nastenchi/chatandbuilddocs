import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GettingStarted = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 py-12 max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>
        </div>
        
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Getting Started</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Learn the basics and set up your first project with ChatAndBuild
          </p>
        </div>
        
        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Welcome to ChatAndBuild</h2>
          
          <p className="text-secondary-600 mb-6">
            ChatAndBuild is a revolutionary platform that lets you create applications through natural conversation with an AI assistant. This guide will help you get started with your first project.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">Step 1: Create an Account</h3>
            <p className="text-secondary-600 mb-4">
              To get started with ChatAndBuild, you'll need to create an account. Visit our sign-up page and follow the instructions to create your account.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            >
              Sign up for ChatAndBuild
            </a>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">Step 2: Start a New Project</h3>
            <p className="text-secondary-600 mb-4">
              Once you've created an account, you can start a new project by clicking the "New Project" button on your dashboard. You'll be asked to provide a name and description for your project.
            </p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
              <p className="text-sm text-secondary-700">
                <strong>Tip:</strong> Choose a descriptive name for your project to make it easier to find later.
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">Step 3: Describe Your Application</h3>
            <p className="text-secondary-600 mb-4">
              Now comes the fun part! Start a conversation with the AI assistant by describing what you want to build. Be as specific as possible about the features, design, and functionality you want.
            </p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
              <p className="text-sm text-secondary-700">
                <strong>Example:</strong> "I want to build a todo app with the ability to create, edit, and delete tasks. It should have a clean, modern design with a light and dark mode."
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">Step 4: Refine and Iterate</h3>
            <p className="text-secondary-600 mb-4">
              As the AI generates code and previews, you can provide feedback and ask for changes. This iterative process allows you to refine your application until it meets your requirements.
            </p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
              <p className="text-sm text-secondary-700">
                <strong>Tip:</strong> Don't worry about getting everything perfect in your initial description. You can always ask for changes and additions later.
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">Step 5: Deploy Your Application</h3>
            <p className="text-secondary-600 mb-4">
              Once you're happy with your application, you can deploy it with a single click. ChatAndBuild handles all the deployment details for you, making it easy to share your creation with the world.
            </p>
          </div>
          
          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-semibold mb-4 text-secondary-900">Next Steps</h3>
            <p className="text-secondary-600 mb-4">
              Now that you've created your first project, you might want to explore more advanced features and capabilities:
            </p>
            <ul className="list-disc list-inside space-y-2 text-secondary-600">
              <li>Learn about integrating third-party APIs</li>
              <li>Explore database options and data modeling</li>
              <li>Discover how to customize the UI with advanced styling</li>
              <li>Set up authentication and user management</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GettingStarted;
