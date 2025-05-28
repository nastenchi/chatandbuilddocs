import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Users, Zap, Code, Rocket, MessageSquare, Lightbulb, Target, Star, Trophy } from 'lucide-react';
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
        
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-secondary-900 mb-6 leading-tight">
            Your Build Guide
          </h1>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into reality with ChatAndBuild. This comprehensive guide will take you from concept to deployment in record time, perfect for rapid prototyping and development.
          </p>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 bg-green-100 text-green-600 rounded-lg mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">5 Minutes</h3>
            <p className="text-secondary-600">From idea to working prototype</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">Team Ready</h3>
            <p className="text-secondary-600">Built for collaborative development</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 bg-purple-100 text-purple-600 rounded-lg mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">Zero Setup</h3>
            <p className="text-secondary-600">No complex configurations needed</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Guide */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-3xl font-bold text-secondary-900 mb-8 flex items-center">
                <Rocket className="h-8 w-8 text-primary-600 mr-3" />
                The ChatAndBuild Experience
              </h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      1
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-secondary-900 mb-3">Start Your Conversation</h3>
                      <p className="text-secondary-600 mb-4">
                        Begin by describing your project idea in natural language. ChatAndBuild's AI understands context and can help you refine your concept.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-secondary-700 italic">
                          "I want to build a social media app for pet owners where they can share photos and connect with other pet parents in their area."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      2
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-secondary-900 mb-3">Watch the Magic Happen</h3>
                      <p className="text-secondary-600 mb-4">
                        Our AI analyzes your requirements and generates a complete application structure, including frontend, backend, and database components.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <Code className="h-5 w-5 text-blue-600 mb-2" />
                          <p className="text-sm font-medium text-blue-900">Frontend Components</p>
                          <p className="text-xs text-blue-700">React, TypeScript, Tailwind</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <MessageSquare className="h-5 w-5 text-green-600 mb-2" />
                          <p className="text-sm font-medium text-green-900">API Endpoints</p>
                          <p className="text-xs text-green-700">RESTful APIs, Authentication</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      3
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-secondary-900 mb-3">Iterate and Refine</h3>
                      <p className="text-secondary-600 mb-4">
                        Continue the conversation to add features, modify designs, or fix issues. The AI learns from your feedback and improves the application.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-secondary-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          "Add a dark mode toggle to the navigation"
                        </div>
                        <div className="flex items-center text-sm text-secondary-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          "Make the pet profile cards more colorful"
                        </div>
                        <div className="flex items-center text-sm text-secondary-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          "Add geolocation features for nearby pets"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      4
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-secondary-900 mb-3">Deploy and Share</h3>
                      <p className="text-secondary-600 mb-4">
                        When you're ready, deploy your application with a single command. Share it with users or your team instantly.
                      </p>
                      <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-4 rounded-lg border border-primary-200">
                        <p className="text-sm font-medium text-primary-900 mb-2">🚀 Ready to deploy?</p>
                        <p className="text-xs text-primary-700">Your app will be live at a custom URL in under 30 seconds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Tips */}
              <div className="mt-12 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center">
                  <Lightbulb className="h-6 w-6 text-yellow-600 mr-2" />
                  Development Pro Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Start with the MVP</h4>
                    <p className="text-sm text-secondary-600">Focus on core functionality first, then add polish and features.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Use Real Data</h4>
                    <p className="text-sm text-secondary-600">Connect to real APIs and databases to make your application more robust.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Think Mobile-First</h4>
                    <p className="text-sm text-secondary-600">Design with mobile users in mind for better accessibility and reach.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Document Your Code</h4>
                    <p className="text-sm text-secondary-600">Use ChatAndBuild's export feature to maintain clean, documented code.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Start */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-secondary-900 mb-4 flex items-center">
                  <Target className="h-5 w-5 text-primary-600 mr-2" />
                  Quick Start Checklist
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm text-secondary-600">Create your account</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm text-secondary-600">Start a new project</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 border-2 border-gray-300 rounded mr-3"></div>
                    <span className="text-sm text-secondary-600">Describe your idea</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 border-2 border-gray-300 rounded mr-3"></div>
                    <span className="text-sm text-secondary-600">Iterate and improve</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 border-2 border-gray-300 rounded mr-3"></div>
                    <span className="text-sm text-secondary-600">Deploy and share</span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-700 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-200">
                  Start Building Now
                </button>
              </div>

              {/* Popular Templates */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-secondary-900 mb-4 flex items-center">
                  <Star className="h-5 w-5 text-primary-600 mr-2" />
                  Popular Project Ideas
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <p className="text-sm font-medium text-secondary-900">Social Impact App</p>
                    <p className="text-xs text-secondary-600">Community-driven solutions</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <p className="text-sm font-medium text-secondary-900">AI-Powered Tool</p>
                    <p className="text-xs text-secondary-600">Machine learning integrations</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <p className="text-sm font-medium text-secondary-900">Productivity Dashboard</p>
                    <p className="text-xs text-secondary-600">Data visualization and analytics</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <p className="text-sm font-medium text-secondary-900">E-commerce Platform</p>
                    <p className="text-xs text-secondary-600">Online marketplace solutions</p>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl border border-primary-200 p-6">
                <h3 className="text-lg font-bold text-secondary-900 mb-3">Need Help?</h3>
                <p className="text-sm text-secondary-600 mb-4">
                  Our community and support team are here to help you succeed with your project.
                </p>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Join Discord Community
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Browse Examples
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Success Stories</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              See how developers have used ChatAndBuild to create amazing projects and bring their ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4"></div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">EcoTracker</h3>
              <p className="text-sm text-secondary-600 mb-4">
                "Built a carbon footprint tracking app in 6 hours that now helps thousands of users monitor their environmental impact"
              </p>
              <div className="flex items-center text-xs text-secondary-500">
                <Trophy className="h-4 w-4 mr-1" />
                <span>Featured Project</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-4"></div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">StudyBuddy</h3>
              <p className="text-sm text-secondary-600 mb-4">
                "Created an AI-powered study companion that helps students learn more effectively and retain information better"
              </p>
              <div className="flex items-center text-xs text-secondary-500">
                <Star className="h-4 w-4 mr-1" />
                <span>Community Favorite</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-4"></div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">LocalConnect</h3>
              <p className="text-sm text-secondary-600 mb-4">
                "Developed a community platform that connects neighbors and local businesses, fostering stronger communities"
              </p>
              <div className="flex items-center text-xs text-secondary-500">
                <Users className="h-4 w-4 mr-1" />
                <span>Social Impact</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Next Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers who've used ChatAndBuild to create amazing applications
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                <Rocket className="mr-2 h-5 w-5" /> Start Building
              </button>
              <button className="px-8 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                <MessageSquare className="mr-2 h-5 w-5" /> View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GettingStarted;
