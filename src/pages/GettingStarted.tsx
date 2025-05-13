import React, { useState } from 'react';
import { ArrowLeft, Book, ChevronRight, Command, Github, HelpCircle, Lightbulb, Rocket, CheckCircle, ChevronDown, ExternalLink, Code, Terminal, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GettingStarted = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (stepIndex: number) => {
    setActiveStep(activeStep === stepIndex ? null : stepIndex);
  };

  const markStepComplete = (stepIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (completedSteps.includes(stepIndex)) {
      setCompletedSteps(completedSteps.filter(step => step !== stepIndex));
    } else {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>
        </div>
        
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Getting Started with ChatAndBuild</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Everything you need to know to start building with ChatAndBuild
          </p>
        </div>

        {/* Onboarding Progress */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-secondary-900">Your Onboarding Progress</h2>
            <span className="text-sm font-medium text-secondary-500">{completedSteps.length}/5 completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div 
              className="bg-primary-600 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${(completedSteps.length / 5) * 100}%` }}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            {['Create Account', 'Set Up Profile', 'First Project', 'Explore Features', 'Deploy App'].map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center p-3 rounded-lg border ${
                  completedSteps.includes(index) 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className={`rounded-full p-2 mb-2 ${
                  completedSteps.includes(index) 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-center">{step}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quick Start Guide */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Quick Start Guide</h2>
          
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
                onClick={() => toggleStep(0)}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                    completedSteps.includes(0) ? 'bg-green-100 text-green-600' : 'bg-primary-100 text-primary-600'
                  }`}>
                    <span className="font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900">Create Your Account</h3>
                    <p className="text-sm text-secondary-500">Set up your ChatAndBuild account to get started</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    className={`mr-3 p-1 rounded-full ${
                      completedSteps.includes(0) 
                        ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                    onClick={(e) => markStepComplete(0, e)}
                    title={completedSteps.includes(0) ? "Mark as incomplete" : "Mark as complete"}
                  >
                    <CheckCircle className="h-5 w-5" />
                  </button>
                  <ChevronDown 
                    className={`h-5 w-5 text-secondary-400 transition-transform duration-200 ${
                      activeStep === 0 ? 'transform rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              {activeStep === 0 && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="space-y-4">
                    <p className="text-secondary-600">
                      Creating your ChatAndBuild account is quick and easy. You can sign up using your email address, 
                      Google account, or GitHub account.
                    </p>
                    
                    <div className="bg-primary-50 border border-primary-100 rounded-lg p-4">
                      <h4 className="font-medium text-primary-800 mb-2">To create your account:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-secondary-700">
                        <li>Visit the ChatAndBuild website and click on the "Sign Up" button in the top right corner</li>
                        <li>Choose your preferred sign-up method (Email, Google, or GitHub)</li>
                        <li>Follow the prompts to complete your registration</li>
                        <li>Verify your email address if you signed up with email</li>
                        <li>Set up your profile with a username and profile picture</li>
                      </ol>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <a href="#" className="text-primary-600 hover:text-primary-700 inline-flex items-center text-sm font-medium">
                        Learn more about account types <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200 text-sm font-medium">
                        Create Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Step 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
                onClick={() => toggleStep(1)}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                    completedSteps.includes(1) ? 'bg-green-100 text-green-600' : 'bg-primary-100 text-primary-600'
                  }`}>
                    <span className="font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900">Explore the Interface</h3>
                    <p className="text-sm text-secondary-500">Get familiar with the ChatAndBuild dashboard</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    className={`mr-3 p-1 rounded-full ${
                      completedSteps.includes(1) 
                        ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                    onClick={(e) => markStepComplete(1, e)}
                    title={completedSteps.includes(1) ? "Mark as incomplete" : "Mark as complete"}
                  >
                    <CheckCircle className="h-5 w-5" />
                  </button>
                  <ChevronDown 
                    className={`h-5 w-5 text-secondary-400 transition-transform duration-200 ${
                      activeStep === 1 ? 'transform rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              {activeStep === 1 && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="space-y-4">
                    <p className="text-secondary-600">
                      The ChatAndBuild interface is designed to be intuitive and easy to navigate. Here's a quick overview of the main components:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Command className="h-5 w-5 text-primary-600 mr-2" />
                          <h4 className="font-medium text-secondary-900">Dashboard</h4>
                        </div>
                        <p className="text-sm text-secondary-600">
                          Your central hub showing all your projects, recent activity, and quick access to common actions.
                        </p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <MessageIcon className="h-5 w-5 text-primary-600 mr-2" />
                          <h4 className="font-medium text-secondary-900">Chat Interface</h4>
                        </div>
                        <p className="text-sm text-secondary-600">
                          Where you communicate with the AI assistant to build and modify your applications.
                        </p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Code className="h-5 w-5 text-primary-600 mr-2" />
                          <h4 className="font-medium text-secondary-900">Code Editor</h4>
                        </div>
                        <p className="text-sm text-secondary-600">
                          View and edit your code directly with syntax highlighting and auto-completion.
                        </p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <PlayIcon className="h-5 w-5 text-primary-600 mr-2" />
                          <h4 className="font-medium text-secondary-900">Preview Panel</h4>
                        </div>
                        <p className="text-sm text-secondary-600">
                          See your application in action with real-time updates as you make changes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <a href="#" className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200 text-sm font-medium">
                        Take Interface Tour
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Step 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
                onClick={() => toggleStep(2)}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                    completedSteps.includes(2) ? 'bg-green-100 text-green-600' : 'bg-primary-100 text-primary-600'
                  }`}>
                    <span className="font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900">Create Your First Project</h3>
                    <p className="text-sm text-secondary-500">Start building with ChatAndBuild</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    className={`mr-3 p-1 rounded-full ${
                      completedSteps.includes(2) 
                        ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                    onClick={(e) => markStepComplete(2, e)}
                    title={completedSteps.includes(2) ? "Mark as incomplete" : "Mark as complete"}
                  >
                    <CheckCircle className="h-5 w-5" />
                  </button>
                  <ChevronDown 
                    className={`h-5 w-5 text-secondary-400 transition-transform duration-200 ${
                      activeStep === 2 ? 'transform rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              {activeStep === 2 && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="space-y-4">
                    <p className="text-secondary-600">
                      Creating your first project is simple. You can start from scratch or use one of our templates to get up and running quickly.
                    </p>
                    
                    <div className="bg-primary-50 border border-primary-100 rounded-lg p-4">
                      <h4 className="font-medium text-primary-800 mb-2">To create a new project:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-secondary-700">
                        <li>Click the "New Project" button on your dashboard</li>
                        <li>Choose a project type or template (or start from scratch)</li>
                        <li>Give your project a name and description</li>
                        <li>Start a conversation with the AI by describing what you want to build. Start small, step by step, don't put all your ideas in one prompt</li>
                        <li>Iterate and refine your project through conversation</li>
                      </ol>
                    </div>
                    
                    <div className="bg-gray-100 text-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Example conversation starter:</h4>
                      <p className="italic">
                        "I want to build a simple todo list app with React that stores tasks in local storage. It should have the ability to add, edit, delete, and mark tasks as completed."
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <a href="#" className="text-primary-600 hover:text-primary-700 inline-flex items-center text-sm font-medium">
                        Browse project templates <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200 text-sm font-medium">
                        Create New Project
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Step 4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
                onClick={() => toggleStep(3)}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                    completedSteps.includes(3) ? 'bg-green-100 text-green-600' : 'bg-primary-100 text-primary-600'
                  }`}>
                    <span className="font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900">Learn Key Commands</h3>
                    <p className="text-sm text-secondary-500">Master the special commands to speed up development</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    className={`mr-3 p-1 rounded-full ${
                      completedSteps.includes(3) 
                        ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                    onClick={(e) => markStepComplete(3, e)}
                    title={completedSteps.includes(3) ? "Mark as incomplete" : "Mark as complete"}
                  >
                    <CheckCircle className="h-5 w-5" />
                  </button>
                  <ChevronDown 
                    className={`h-5 w-5 text-secondary-400 transition-transform duration-200 ${
                      activeStep === 3 ? 'transform rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              {activeStep === 3 && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="space-y-4">
                    <p className="text-secondary-600">
                      ChatAndBuild offers special commands that help you communicate more effectively with the AI assistant and speed up your development workflow.
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">Command</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">Description</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">Example</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-3 text-sm font-mono text-secondary-900">/help</td>
                            <td className="px-4 py-3 text-sm text-secondary-500">Show available commands</td>
                            <td className="px-4 py-3 text-sm text-secondary-500"><code>/help</code></td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm font-mono text-secondary-900">/new [type]</td>
                            <td className="px-4 py-3 text-sm text-secondary-500">Create a new file or component</td>
                            <td className="px-4 py-3 text-sm text-secondary-500"><code>/new component Button</code></td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm font-mono text-secondary-900">/edit [file]</td>
                            <td className="px-4 py-3 text-sm text-secondary-500">Edit an existing file</td>
                            <td className="px-4 py-3 text-sm text-secondary-500"><code>/edit src/App.js</code></td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm font-mono text-secondary-900">/install [package]</td>
                            <td className="px-4 py-3 text-sm text-secondary-500">Install a package or dependency</td>
                            <td className="px-4 py-3 text-sm text-secondary-500"><code>/install react-router-dom</code></td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm font-mono text-secondary-900">/deploy</td>
                            <td className="px-4 py-3 text-sm text-secondary-500">Deploy your application</td>
                            <td className="px-4 py-3 text-sm text-secondary-500"><code>/deploy</code></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="flex justify-end">
                      <a href="#" className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200 text-sm font-medium">
                        View All Commands
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Step 5 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
                onClick={() => toggleStep(4)}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                    completedSteps.includes(4) ? 'bg-green-100 text-green-600' : 'bg-primary-100 text-primary-600'
                  }`}>
                    <span className="font-semibold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900">Deploy Your Application</h3>
                    <p className="text-sm text-secondary-500">Share your creation with the world</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    className={`mr-3 p-1 rounded-full ${
                      completedSteps.includes(4) 
                        ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                    onClick={(e) => markStepComplete(4, e)}
                    title={completedSteps.includes(4) ? "Mark as incomplete" : "Mark as complete"}
                  >
                    <CheckCircle className="h-5 w-5" />
                  </button>
                  <ChevronDown 
                    className={`h-5 w-5 text-secondary-400 transition-transform duration-200 ${
                      activeStep === 4 ? 'transform rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              {activeStep === 4 && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="space-y-4">
                    <p className="text-secondary-600">
                      Once you're satisfied with your application, you can deploy it with just a few clicks. ChatAndBuild offers seamless deployment options to share your creation with others.
                    </p>
                    
                    <div className="bg-primary-50 border border-primary-100 rounded-lg p-4">
                      <h4 className="font-medium text-primary-800 mb-2">Deployment options:</h4>
                      <ul className="list-disc list-inside space-y-2 text-secondary-700">
                        <li>One-click deployment to ChatAndBuild's hosting service</li>
                        <li>Export your project to GitHub and deploy with GitHub Pages</li>
                        <li>Deploy to Vercel, Netlify, or other popular hosting services</li>
                        <li>Download your project as a ZIP file for manual deployment</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                      <div className="flex items-start">
                        <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-yellow-700">
                          <strong>Pro Tip:</strong> Set up automatic deployments by connecting your GitHub repository to a hosting service like Vercel or Netlify. This way, your application will be automatically deployed whenever you push changes to your repository.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <a href="#" className="text-primary-600 hover:text-primary-700 inline-flex items-center text-sm font-medium">
                        Learn about deployment options <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200 text-sm font-medium">
                        Deploy Your App
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Tips for Success */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Tips for Success</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-600 p-2 rounded-full mr-3">
                  <Terminal className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-secondary-900">Be Specific</h3>
              </div>
              <p className="text-secondary-600 mb-4">
                The more specific your instructions to the AI, the better the results. Include details about functionality, design preferences, and any specific technologies you want to use.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-secondary-500 mb-2">Instead of:</p>
                <p className="text-sm text-secondary-700 italic mb-3">"Build me a website."</p>
                <p className="text-sm text-secondary-500 mb-2">Try:</p>
                <p className="text-sm text-secondary-700 italic">"Build me a responsive e-commerce website with a product catalog, shopping cart, and checkout process. Use React for the frontend and include a dark mode toggle."</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-600 p-2 rounded-full mr-3">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-secondary-900">Iterate Gradually</h3>
              </div>
              <p className="text-secondary-600 mb-4">
                Start with a basic version of your application and add features incrementally. This approach makes it easier to identify and fix issues as they arise, and helps you understand how each component works.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-secondary-500 mb-2">Instead of:</p>
                <p className="text-sm text-secondary-700 italic mb-3">"Add user authentication, database integration, payment processing, and email notifications all at once."</p>
                <p className="text-sm text-secondary-500 mb-2">Try:</p>
                <p className="text-sm text-secondary-700 italic">"Let's start by implementing the basic user authentication. Once that's working, we'll add database integration, and then move on to the other features."</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-600 p-2 rounded-full mr-3">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-secondary-900">Ask for Explanations</h3>
              </div>
              <p className="text-secondary-600 mb-4">
                Don't hesitate to ask the AI to explain how certain parts of your application work. This will help you learn and make it easier to maintain and extend your project in the future.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-secondary-700 italic">"Can you explain how the state management works in this component?" or "Please walk me through how the authentication flow works in this application."</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-600 p-2 rounded-full mr-3">
                  <Github className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-secondary-900">Use Version Control</h3>
              </div>
              <p className="text-secondary-600 mb-4">
                Connect your ChatAndBuild projects to GitHub to keep track of changes, collaborate with others, and have a backup of your code. This also makes it easier to deploy your application.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <ol className="list-decimal list-inside text-sm text-secondary-700 space-y-1">
                  <li>Go to your project settings</li>
                  <li>Click on "Connect to GitHub"</li>
                  <li>Select or create a repository</li>
                  <li>Choose your preferred sync options</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        {/* Next Steps */}
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Next Steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="#" className="block p-6 border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all duration-200 group">
              <div className="flex items-center mb-4">
                <Book className="h-6 w-6 text-primary-600 mr-2" />
                <h3 className="text-xl font-semibold text-secondary-900">Explore Tutorials</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Dive deeper with our step-by-step tutorials covering various project types and features.
              </p>
              <span className="text-primary-600 group-hover:text-primary-700 inline-flex items-center font-medium">
                View Tutorials <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
            
            <Link to="/api-reference" className="block p-6 border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all duration-200 group">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-primary-600 mr-2" />
                <h3 className="text-xl font-semibold text-secondary-900">API Reference</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Learn how to integrate ChatAndBuild with your existing tools and workflows.
              </p>
              <span className="text-primary-600 group-hover:text-primary-700 inline-flex items-center font-medium">
                View API Reference <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Custom MessageIcon component since it's not available in lucide-react
const MessageIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

// Renamed Play to PlayIcon to avoid duplicate declaration
const PlayIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

export default GettingStarted;
