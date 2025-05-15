import React from 'react';
import { ArrowLeft, Github, GitBranch, GitCommit, GitMerge, GitPullRequest } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GitHubIntegration = () => {
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
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">GitHub Integration</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Connect your ChatAndBuild projects with GitHub repositories
          </p>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center mb-6">
              <Github className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-secondary-900">Why Connect to GitHub?</h2>
            </div>
            
            <p className="text-secondary-600 mb-6">
              Integrating your ChatAndBuild projects with GitHub provides several benefits:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">Version Control</h3>
                <p className="text-secondary-600">
                  Track changes to your code over time and easily revert to previous versions if needed.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">Collaboration</h3>
                <p className="text-secondary-600">
                  Work with team members using familiar GitHub workflows like pull requests and code reviews.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">CI/CD Integration</h3>
                <p className="text-secondary-600">
                  Connect your project to GitHub Actions or other CI/CD tools for automated testing and deployment.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">Code Backup</h3>
                <p className="text-secondary-600">
                  Keep your code safe and accessible, even outside of the ChatAndBuild platform.
                </p>
              </div>
            </div>
          </div>
          
          {/* Setup Instructions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Setting Up GitHub Integration</h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 text-primary-700 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-3">1</div>
                  <h3 className="text-xl font-semibold text-secondary-900">Connect Your GitHub Account</h3>
                </div>
                <div className="ml-11">
                  <p className="text-secondary-600 mb-4">
                    First, you'll need to connect your GitHub account to ChatAndBuild:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-secondary-600 mb-4">
                    <li>Go to your account settings</li>
                    <li>Click on "Integrations"</li>
                    <li>Find GitHub in the list of available integrations</li>
                    <li>Click "Connect" and follow the authorization process</li>
                  </ol>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <p className="text-sm text-secondary-700">
                      <strong>Note:</strong> You'll be asked to authorize ChatAndBuild to access your GitHub repositories. You can choose to grant access to all repositories or only specific ones.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 text-primary-700 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-3">2</div>
                  <h3 className="text-xl font-semibold text-secondary-900">Link a Repository to Your Project</h3>
                </div>
                <div className="ml-11">
                  <p className="text-secondary-600 mb-4">
                    Once your GitHub account is connected, you can link a repository to your ChatAndBuild project:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-secondary-600 mb-4">
                    <li>Open your project in ChatAndBuild</li>
                    <li>Go to the project settings</li>
                    <li>Click on "GitHub Integration"</li>
                    <li>Choose to either link an existing repository or create a new one</li>
                    <li>Follow the prompts to complete the linking process</li>
                  </ol>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 text-primary-700 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-3">3</div>
                  <h3 className="text-xl font-semibold text-secondary-900">Configure Sync Settings</h3>
                </div>
                <div className="ml-11">
                  <p className="text-secondary-600 mb-4">
                    Configure how changes are synchronized between ChatAndBuild and GitHub:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-secondary-600 mb-4">
                    <li>Choose whether to automatically commit changes made in ChatAndBuild</li>
                    <li>Set up branch preferences for development work</li>
                    <li>Configure commit message templates</li>
                    <li>Set up pull request automation (optional)</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <p className="text-sm text-secondary-700">
                      <strong>Tip:</strong> For team projects, we recommend setting up a development branch and using pull requests to merge changes into the main branch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Workflow */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Working with GitHub and ChatAndBuild</h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <GitBranch className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-secondary-900">Branching</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  Create and switch between branches directly from the ChatAndBuild interface:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-600">
                  <li>Use the branch selector in the project toolbar</li>
                  <li>Create new branches for features or bug fixes</li>
                  <li>Switch between branches to work on different aspects of your project</li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <GitCommit className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-secondary-900">Committing Changes</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  Commit your changes to GitHub:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-600">
                  <li>Use the commit button in the project toolbar</li>
                  <li>Write descriptive commit messages to document your changes</li>
                  <li>Choose which files to include in your commit</li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <GitPullRequest className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-secondary-900">Pull Requests</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  Create and manage pull requests:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-600">
                  <li>Create pull requests from the ChatAndBuild interface</li>
                  <li>Review code changes and leave comments</li>
                  <li>Merge approved pull requests</li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <GitMerge className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-secondary-900">Resolving Conflicts</h3>
                </div>
                <p className="text-secondary-600 mb-4">
                  Handle merge conflicts:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-600">
                  <li>ChatAndBuild will notify you of conflicts when pulling changes</li>
                  <li>Use the built-in conflict resolution tool to resolve conflicts</li>
                  <li>Choose which changes to keep from each version</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Best Practices */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Best Practices</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">Commit Frequently</h3>
                <p className="text-secondary-600">
                  Make small, focused commits that address a single issue or feature. This makes it easier to track changes and revert if necessary.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">Use Descriptive Commit Messages</h3>
                <p className="text-secondary-600">
                  Write clear, concise commit messages that explain what changes were made and why. This helps team members understand the purpose of each commit.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">Branch for Features</h3>
                <p className="text-secondary-600">
                  Create a new branch for each feature or bug fix. This keeps your main branch clean and makes it easier to manage parallel development efforts.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">Pull Before Push</h3>
                <p className="text-secondary-600">
                  Always pull the latest changes from the remote repository before pushing your own changes. This reduces the likelihood of conflicts.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">Use Pull Requests for Code Review</h3>
                <p className="text-secondary-600">
                  Even for small teams, using pull requests provides an opportunity for code review and discussion before changes are merged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GitHubIntegration;
