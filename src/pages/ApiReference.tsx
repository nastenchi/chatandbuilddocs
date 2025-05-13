import React from 'react';
import { ArrowLeft, Code, Copy, ExternalLink, Search, FileText, Lock, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ApiReference = () => {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [copiedEndpoint, setCopiedEndpoint] = React.useState<string | null>(null);

  const handleCopyCode = (code: string, endpoint: string) => {
    navigator.clipboard.writeText(code);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

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
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">API Reference</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Comprehensive documentation for the ChatAndBuild API
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-150 ease-in-out sm:text-sm"
              placeholder="Search API documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sticky top-20">
              <h3 className="font-semibold text-lg mb-4 text-secondary-900">Contents</h3>
              <nav className="space-y-1">
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'overview' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-secondary-700 hover:bg-gray-50'
                  } transition-colors duration-200`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'authentication' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-secondary-700 hover:bg-gray-50'
                  } transition-colors duration-200`}
                  onClick={() => setActiveTab('authentication')}
                >
                  Authentication
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'projects' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-secondary-700 hover:bg-gray-50'
                  } transition-colors duration-200`}
                  onClick={() => setActiveTab('projects')}
                >
                  Projects
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'files' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-secondary-700 hover:bg-gray-50'
                  } transition-colors duration-200`}
                  onClick={() => setActiveTab('files')}
                >
                  Files
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'deployment' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-secondary-700 hover:bg-gray-50'
                  } transition-colors duration-200`}
                  onClick={() => setActiveTab('deployment')}
                >
                  Deployment
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'webhooks' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-secondary-700 hover:bg-gray-50'
                  } transition-colors duration-200`}
                  onClick={() => setActiveTab('webhooks')}
                >
                  Webhooks
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'rate-limits' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-secondary-700 hover:bg-gray-50'
                  } transition-colors duration-200`}
                  onClick={() => setActiveTab('rate-limits')}
                >
                  Rate Limits
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'errors' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-secondary-700 hover:bg-gray-50'
                  } transition-colors duration-200`}
                  onClick={() => setActiveTab('errors')}
                >
                  Errors
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'sdks' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-secondary-700 hover:bg-gray-50'
                  } transition-colors duration-200`}
                  onClick={() => setActiveTab('sdks')}
                >
                  SDKs & Libraries
                </button>
              </nav>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-grow">
            {activeTab === 'overview' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 animate-fadeIn">
                <div className="flex items-center mb-6">
                  <Globe className="h-6 w-6 text-primary-600 mr-2" />
                  <h2 className="text-2xl font-bold text-secondary-900">API Overview</h2>
                </div>
                
                <p className="text-secondary-600 mb-6">
                  The ChatAndBuild API allows you to programmatically interact with your projects, files, and deployments. 
                  This reference provides a comprehensive guide to all available endpoints, authentication methods, and response formats.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">Base URL</h3>
                  <div className="bg-gray-50 p-4 rounded-md flex justify-between items-center border border-gray-200">
                    <code className="text-sm text-secondary-800 font-mono">https://api.chatandbuild.com/v1</code>
                    <button 
                      className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      onClick={() => handleCopyCode('https://api.chatandbuild.com/v1', 'base-url')}
                    >
                      {copiedEndpoint === 'base-url' ? (
                        <span className="text-green-600 text-sm font-medium">Copied!</span>
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">Request Format</h3>
                  <p className="text-secondary-600 mb-4">
                    All requests should be sent with the appropriate HTTP method (GET, POST, PUT, DELETE) and include the following headers:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                    <pre className="text-sm text-secondary-800 font-mono overflow-x-auto">
                      <code>{`Content-Type: application/json
Authorization: Bearer YOUR_API_KEY`}</code>
                    </pre>
                  </div>
                  <p className="text-secondary-600">
                    Request bodies should be formatted as JSON.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">Response Format</h3>
                  <p className="text-secondary-600 mb-4">
                    All responses are returned in JSON format with the following structure:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <pre className="text-sm text-secondary-800 font-mono overflow-x-auto">
                      <code>{`{
  "success": true,
  "data": {
    // Response data here
  },
  "meta": {
    // Pagination or additional metadata
  }
}`}</code>
                    </pre>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">API Versioning</h3>
                  <p className="text-secondary-600 mb-4">
                    The ChatAndBuild API is versioned to ensure backward compatibility. The current version is <code className="text-sm bg-gray-100 px-1 py-0.5 rounded text-secondary-800 font-mono">v1</code>.
                  </p>
                  <p className="text-secondary-600">
                    When a new version is released, the previous version will be supported for at least 12 months to give you time to migrate your integrations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">Getting Started</h3>
                  <p className="text-secondary-600 mb-4">
                    To get started with the ChatAndBuild API, you'll need to:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-secondary-600 mb-6">
                    <li>Create an API key in your account settings</li>
                    <li>Include your API key in the Authorization header of your requests</li>
                    <li>Make requests to the appropriate endpoints</li>
                  </ol>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-primary-600 hover:text-primary-700 inline-flex items-center font-medium transition-colors duration-200">
                      View API key documentation <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                    <button 
                      className="px-4 py-2 bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-700 hover:to-blue-600 text-white rounded-md transition-all duration-200 text-sm font-medium shadow-sm hover:shadow"
                      onClick={() => setActiveTab('authentication')}
                    >
                      Authentication Guide
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'authentication' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 animate-fadeIn">
                <div className="flex items-center mb-6">
                  <Lock className="h-6 w-6 text-primary-600 mr-2" />
                  <h2 className="text-2xl font-bold text-secondary-900">Authentication</h2>
                </div>
                
                <p className="text-secondary-600 mb-6">
                  The ChatAndBuild API uses API keys to authenticate requests. You can view and manage your API keys in your account settings.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">API Keys</h3>
                  <p className="text-secondary-600 mb-4">
                    API keys are used to authenticate your requests to the ChatAndBuild API. Each API key is associated with your account and has specific permissions.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">Security Warning</h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          <p>
                            Keep your API keys secure and never share them publicly. Anyone with your API key can make requests on your behalf.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">Creating API Keys</h3>
                  <p className="text-secondary-600 mb-4">
                    To create a new API key:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-secondary-600 mb-4">
                    <li>Go to your account settings</li>
                    <li>Navigate to the "API Keys" section</li>
                    <li>Click "Create New API Key"</li>
                    <li>Give your key a descriptive name and select the appropriate permissions</li>
                    <li>Click "Create Key"</li>
                  </ol>
                  <p className="text-secondary-600 mb-4">
                    Your new API key will be displayed only once. Make sure to copy it and store it securely.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">Using API Keys</h3>
                  <p className="text-secondary-600 mb-4">
                    Include your API key in the Authorization header of your requests:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                    <pre className="text-sm text-secondary-800 font-mono overflow-x-auto">
                      <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
                    </pre>
                  </div>
                  <p className="text-secondary-600 mb-4">
                    Example request using cURL:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 flex justify-between items-start">
                    <pre className="text-sm text-secondary-800 font-mono overflow-x-auto">
                      <code>{`curl -X GET \\
  https://api.chatandbuild.com/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
                    </pre>
                    <button 
                      className="text-primary-600 hover:text-primary-700 transition-colors duration-200 ml-4 flex-shrink-0"
                      onClick={() => handleCopyCode(`curl -X GET \\
  https://api.chatandbuild.com/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`, 'curl-example')}
                    >
                      {copiedEndpoint === 'curl-example' ? (
                        <span className="text-green-600 text-sm font-medium">Copied!</span>
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">API Key Permissions</h3>
                  <p className="text-secondary-600 mb-4">
                    When creating an API key, you can specify the permissions it should have. This allows you to create keys with limited access for specific use cases.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permission</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">read:projects</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">View project information</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">write:projects</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Create, update, and delete projects</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">read:files</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">View file contents</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">write:files</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Create, update, and delete files</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">deploy</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Deploy projects</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">Revoking API Keys</h3>
                  <p className="text-secondary-600 mb-4">
                    If an API key is compromised or no longer needed, you should revoke it immediately:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-secondary-600 mb-4">
                    <li>Go to your account settings</li>
                    <li>Navigate to the "API Keys" section</li>
                    <li>Find the key you want to revoke</li>
                    <li>Click "Revoke Key"</li>
                    <li>Confirm the action</li>
                  </ol>
                  <p className="text-secondary-600">
                    Once revoked, a key cannot be restored. You'll need to create a new key if needed.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'projects' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 animate-fadeIn">
                <div className="flex items-center mb-6">
                  <Code className="h-6 w-6 text-primary-600 mr-2" />
                  <h2 className="text-2xl font-bold text-secondary-900">Projects API</h2>
                </div>
                
                <p className="text-secondary-600 mb-6">
                  The Projects API allows you to manage your ChatAndBuild projects programmatically. You can list, create, update, and delete projects.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">List Projects</h3>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">GET</span>
                      <code className="text-sm text-secondary-800 font-mono">/projects</code>
                    </div>
                    <p className="text-sm text-secondary-600 mb-2">
                      Returns a list of all projects in your account.
                    </p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-secondary-900 mb-2">Query Parameters</h4>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameter</th>
                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">page</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">integer</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Page number (default: 1)</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">limit</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">integer</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Number of projects per page (default: 10, max: 100)</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">sort</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">string</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Sort field (created_at, updated_at, name)</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">order</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">string</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Sort order (asc, desc)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                    <h4 className="text-sm font-medium text-secondary-900 mb-2">Example Request</h4>
                    <div className="flex justify-between items-start">
                      <pre className="text-sm text-secondary-800 font-mono overflow-x-auto">
                        <code>{`curl -X GET \\
  https://api.chatandbuild.com/v1/projects?limit=5&sort=updated_at&order=desc \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
                      </pre>
                      <button 
                        className="text-primary-600 hover:text-primary-700 transition-colors duration-200 ml-4 flex-shrink-0"
                        onClick={() => handleCopyCode(`curl -X GET \\
  https://api.chatandbuild.com/v1/projects?limit=5&sort=updated_at&order=desc \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`, 'list-projects-example')}
                      >
                        {copiedEndpoint === 'list-projects-example' ? (
                          <span className="text-green-600 text-sm font-medium">Copied!</span>
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <h4 className="text-sm font-medium text-secondary-900 mb-2">Example Response</h4>
                    <pre className="text-sm text-secondary-800 font-mono overflow-x-auto">
                      <code>{`{
  "success": true,
  "data": [
    {
      "id": "proj_123456789",
      "name": "My Project",
      "description": "A sample project",
      "created_at": "2023-01-15T12:00:00Z",
      "updated_at": "2023-01-20T15:30:00Z",
      "status": "active",
      "url": "https://myproject.chatandbuild.app"
    },
    {
      "id": "proj_987654321",
      "name": "Another Project",
      "description": "Another sample project",
      "created_at": "2023-01-10T09:00:00Z",
      "updated_at": "2023-01-18T14:20:00Z",
      "status": "active",
      "url": "https://anotherproject.chatandbuild.app"
    }
  ],
  "meta": {
    "total": 25,
    "page": 1,
    "limit": 5,
    "pages": 5
  }
}`}</code>
                    </pre>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">Get Project</h3>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                    <div className="flex items-center mb-2">
                <pivotalAction type="file" filePath="src/pages/ApiReference.tsx">                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">GET</span>
                      <code className="text-sm text-secondary-800 font-mono">/projects/:id</code>
                    </div>
                    <p className="text-sm text-secondary-600 mb-2">
                      Returns detailed information about a specific project.
                    </p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-secondary-900 mb-2">Path Parameters</h4>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameter</th>
                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">id</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">string</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Project ID</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">Create Project</h3>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">POST</span>
                      <code className="text-sm text-secondary-800 font-mono">/projects</code>
                    </div>
                    <p className="text-sm text-secondary-600 mb-2">
                      Creates a new project.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">Update Project</h3>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">PUT</span>
                      <code className="text-sm text-secondary-800 font-mono">/projects/:id</code>
                    </div>
                    <p className="text-sm text-secondary-600 mb-2">
                      Updates an existing project.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900">Delete Project</h3>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">DELETE</span>
                      <code className="text-sm text-secondary-800 font-mono">/projects/:id</code>
                    </div>
                    <p className="text-sm text-secondary-600 mb-2">
                      Deletes a project. This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Other tabs would be implemented similarly */}
            {(activeTab !== 'overview' && activeTab !== 'authentication' && activeTab !== 'projects') && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center py-12 animate-fadeIn">
                <FileText className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Documentation Coming Soon</h3>
                <p className="text-secondary-600 text-center max-w-md mb-6">
                  We're currently working on this section of the documentation. Check back soon for updates.
                </p>
                <button 
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                  onClick={() => setActiveTab('overview')}
                >
                  Return to Overview
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ApiReference;
