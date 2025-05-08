import React from 'react'
import { Github, ChevronLeft, GitBranch, GitPullRequest, GitMerge, GitCommit } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const GitHubIntegration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="mb-8 inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5 mr-1" /> Back to Home
          </button>
          <div className="flex items-center mb-6">
            <div className="bg-white p-3 rounded-lg mr-5">
              <Github className="h-10 w-10 text-gray-900" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">GitHub Integration</h1>
          </div>
          <p className="text-xl md:text-2xl max-w-3xl">
            Seamlessly connect your ChatAndBuild projects with GitHub for version control, collaboration, and deployment.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Why GitHub Integration Matters</h2>
            <p className="text-gray-700 mb-6">
              GitHub integration is more than just a convenience—it's essential for professional development and protecting your work. By connecting ChatAndBuild with GitHub, you gain access to powerful tools for version control, collaboration, and deployment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 p-2 rounded-lg mr-3">
                    <GitBranch className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Version Control</h3>
                </div>
                <p className="text-gray-700">
                  Track changes, create branches, and manage your project's history. Every change is automatically committed, making it easy to revert to previous versions if needed.
                </p>
              </div>
              
              <div>
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 p-2 rounded-lg mr-3">
                    <GitPullRequest className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Pull Requests</h3>
                </div>
                <p className="text-gray-700">
                  Create pull requests directly from ChatAndBuild to propose changes, review code, and discuss implementations with your team before merging.
                </p>
              </div>
              
              <div>
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 p-2 rounded-lg mr-3">
                    <GitCommit className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Commit History</h3>
                </div>
                <p className="text-gray-700">
                  View a detailed history of all changes made to your project, including who made them and when. This makes it easy to track progress and understand how your project has evolved.
                </p>
              </div>
              
              <div>
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 p-2 rounded-lg mr-3">
                    <GitMerge className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Seamless Integration</h3>
                </div>
                <p className="text-gray-700">
                  Connect existing GitHub repositories or create new ones directly from ChatAndBuild. Push and pull changes with a single click.
                </p>
              </div>
            </div>
          </div>
          
          {/* How to Connect */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">How to Connect Your GitHub Account</h2>
            
            <div className="mb-8">
              <p className="text-gray-700 mb-6">
                Connecting your GitHub account to ChatAndBuild is a straightforward process that takes just a few minutes. Once connected, you'll be able to sync your projects, manage repositories, and leverage GitHub's powerful features directly from the ChatAndBuild interface.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Step-by-Step Instructions</h3>
                <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                  <li>
                    <strong>Go to your ChatAndBuild account settings</strong>
                    <p className="mt-1">Click on your profile picture in the top-right corner and select "Settings" from the dropdown menu.</p>
                  </li>
                  <li>
                    <strong>Navigate to the Integrations section</strong>
                    <p className="mt-1">In the left sidebar, click on "Integrations" to view all available third-party services.</p>
                  </li>
                  <li>
                    <strong>Find GitHub in the list of available integrations</strong>
                    <p className="mt-1">Locate the GitHub card among the integration options and click on it.</p>
                  </li>
                  <li>
                    <strong>Authorize ChatAndBuild</strong>
                    <p className="mt-1">Click "Connect" and you'll be redirected to GitHub. Review the permissions and click "Authorize ChatAndBuild" to proceed.</p>
                  </li>
                  <li>
                    <strong>Choose repositories to sync</strong>
                    <p className="mt-1">Select which repositories you want to sync with ChatAndBuild, or create a new repository directly from the interface.</p>
                  </li>
                  <li>
                    <strong>Start using GitHub features</strong>
                    <p className="mt-1">Once connected, you'll see GitHub options appear in your project dashboard, allowing you to commit changes, create branches, and more.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Connect GitHub?</h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Start protecting your work and collaborating more effectively by connecting your GitHub account today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
            >
              <Github className="mr-2 h-5 w-5" /> Connect GitHub
            </a>
            <a 
              href="#" 
              className="px-8 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
            >
              Learn More About GitHub
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default GitHubIntegration
