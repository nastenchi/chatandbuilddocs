import React from 'react';
import { ArrowLeft, Github, Code, Zap, Shield, Database, Users, Rocket, CheckCircle, AlertTriangle, Lightbulb, Target, Settings, Globe, Lock, FileText, GitBranch, TestTube, Monitor, Smartphone, Search, BarChart3, RefreshCw, Clock, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BestPractices = () => {
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
            Development Best Practices
          </h1>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Master the art of building exceptional applications with ChatAndBuild. Follow these proven practices to create maintainable, scalable, and production-ready projects.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-secondary-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <a href="#code-quality" className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-sm font-medium text-blue-700">
              <Code className="h-4 w-4 mr-2" />
              Code Quality
            </a>
            <a href="#version-control" className="flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-sm font-medium text-green-700">
              <Github className="h-4 w-4 mr-2" />
              Version Control
            </a>
            <a href="#security" className="flex items-center p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-sm font-medium text-red-700">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </a>
            <a href="#performance" className="flex items-center p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-sm font-medium text-purple-700">
              <Zap className="h-4 w-4 mr-2" />
              Performance
            </a>
            <a href="#testing" className="flex items-center p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors text-sm font-medium text-yellow-700">
              <TestTube className="h-4 w-4 mr-2" />
              Testing
            </a>
            <a href="#deployment" className="flex items-center p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors text-sm font-medium text-indigo-700">
              <Rocket className="h-4 w-4 mr-2" />
              Deployment
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          
          {/* Code Quality Section */}
          <section id="code-quality" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary-900">Code Quality & Standards</h2>
                <p className="text-secondary-600">Write clean, maintainable, and readable code</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Best Practices
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-secondary-900">Use TypeScript</p>
                      <p className="text-sm text-secondary-600">Catch errors early and improve code documentation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-secondary-900">Follow naming conventions</p>
                      <p className="text-sm text-secondary-600">Use descriptive, consistent variable and function names</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-secondary-900">Keep functions small</p>
                      <p className="text-sm text-secondary-600">Single responsibility principle - one function, one purpose</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-secondary-900">Comment complex logic</p>
                      <p className="text-sm text-secondary-600">Explain the "why", not just the "what"</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <Settings className="h-5 w-5 text-gray-500 mr-2" />
                  Tools & Configuration
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-secondary-900">ESLint</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Recommended</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-secondary-900">Prettier</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Recommended</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-secondary-900">Husky (Git hooks)</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Optional</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-secondary-900">SonarQube</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Advanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Version Control Section */}
          <section id="version-control" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary-900">Version Control & Collaboration</h2>
                <p className="text-secondary-600">Manage code changes and collaborate effectively</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <GitBranch className="h-5 w-5 text-green-500 mr-2" />
                  Git Workflow
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-900 text-sm">Feature Branches</p>
                    <p className="text-xs text-green-700">Create separate branches for each feature</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900 text-sm">Meaningful Commits</p>
                    <p className="text-xs text-blue-700">Write clear, descriptive commit messages</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-purple-900 text-sm">Pull Requests</p>
                    <p className="text-xs text-purple-700">Use PRs for code review and discussion</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-blue-500 mr-2" />
                  Documentation
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">README.md with setup instructions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">API documentation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Contributing guidelines</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Changelog for releases</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 text-purple-500 mr-2" />
                  Team Collaboration
                </h3>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-secondary-900">Code Review Checklist:</p>
                    <div className="text-xs text-secondary-600 space-y-1">
                      <div>• Functionality works as expected</div>
                      <div>• Code follows style guidelines</div>
                      <div>• Tests are included and passing</div>
                      <div>• Documentation is updated</div>
                      <div>• No security vulnerabilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section id="security" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mr-4">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary-900">Security Best Practices</h2>
                <p className="text-secondary-600">Protect your application and user data</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <Lock className="h-5 w-5 text-red-500 mr-2" />
                  Authentication & Authorization
                </h3>
                <div className="space-y-4">
                  <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-900 text-sm">Critical Security Measures</p>
                        <ul className="text-xs text-red-700 mt-2 space-y-1">
                          <li>• Use HTTPS everywhere</li>
                          <li>• Implement proper session management</li>
                          <li>• Validate all user inputs</li>
                          <li>• Use secure password hashing (bcrypt)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">JWT tokens with proper expiration</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">Role-based access control (RBAC)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">Two-factor authentication (2FA)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <Database className="h-5 w-5 text-blue-500 mr-2" />
                  Data Protection
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-medium text-blue-900 text-sm mb-2">Environment Variables</p>
                    <p className="text-xs text-blue-700">Store sensitive data in .env files, never in code</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">SQL injection prevention</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">Data encryption at rest</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">Regular security audits</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">GDPR compliance measures</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Section */}
          <section id="performance" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary-900">Performance Optimization</h2>
                <p className="text-secondary-600">Build fast, responsive applications</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <Monitor className="h-5 w-5 text-purple-500 mr-2" />
                  Frontend Performance
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-purple-900 text-sm">Code Splitting</p>
                    <p className="text-xs text-purple-700">Load only what's needed</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900 text-sm">Image Optimization</p>
                    <p className="text-xs text-blue-700">WebP format, lazy loading</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-900 text-sm">Caching Strategy</p>
                    <p className="text-xs text-green-700">Browser and CDN caching</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <Database className="h-5 w-5 text-blue-500 mr-2" />
                  Backend Performance
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Database indexing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Query optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">API response caching</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Connection pooling</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 text-orange-500 mr-2" />
                  Monitoring
                </h3>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-secondary-900">Key Metrics:</p>
                    <div className="text-xs text-secondary-600 space-y-1">
                      <div>• Core Web Vitals (LCP, FID, CLS)</div>
                      <div>• Time to First Byte (TTFB)</div>
                      <div>• Bundle size analysis</div>
                      <div>• Memory usage patterns</div>
                      <div>• API response times</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testing Section */}
          <section id="testing" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mr-4">
                <TestTube className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary-900">Testing Strategy</h2>
                <p className="text-secondary-600">Ensure code quality and reliability</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <Target className="h-5 w-5 text-yellow-500 mr-2" />
                  Testing Pyramid
                </h3>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="font-medium text-green-900 text-sm">Unit Tests (70%)</p>
                      <p className="text-xs text-green-700">Test individual functions and components</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="font-medium text-blue-900 text-sm">Integration Tests (20%)</p>
                      <p className="text-xs text-blue-700">Test component interactions</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
                      <p className="font-medium text-purple-900 text-sm">E2E Tests (10%)</p>
                      <p className="text-xs text-purple-700">Test complete user workflows</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <Settings className="h-5 w-5 text-gray-500 mr-2" />
                  Testing Tools
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-secondary-900 text-sm mb-2">Frontend</p>
                        <div className="space-y-1 text-xs text-secondary-600">
                          <div>• Jest + React Testing Library</div>
                          <div>• Cypress (E2E)</div>
                          <div>• Storybook (Component)</div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-secondary-900 text-sm mb-2">Backend</p>
                        <div className="space-y-1 text-xs text-secondary-600">
                          <div>• Jest + Supertest</div>
                          <div>• Postman/Newman</div>
                          <div>• Artillery (Load testing)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-yellow-200 bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-900 text-sm">Testing Best Practices</p>
                        <ul className="text-xs text-yellow-700 mt-2 space-y-1">
                          <li>• Write tests before fixing bugs</li>
                          <li>• Aim for 80%+ code coverage</li>
                          <li>• Test edge cases and error scenarios</li>
                          <li>• Keep tests simple and focused</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deployment Section */}
          <section id="deployment" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <Rocket className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary-900">Deployment & DevOps</h2>
                <p className="text-secondary-600">Ship your applications reliably and efficiently</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <RefreshCw className="h-5 w-5 text-indigo-500 mr-2" />
                  CI/CD Pipeline
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <p className="font-medium text-indigo-900 text-sm">Automated Testing</p>
                    <p className="text-xs text-indigo-700">Run tests on every commit</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-900 text-sm">Build Automation</p>
                    <p className="text-xs text-green-700">Consistent, reproducible builds</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900 text-sm">Deployment Automation</p>
                    <p className="text-xs text-blue-700">Zero-downtime deployments</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <Globe className="h-5 w-5 text-green-500 mr-2" />
                  Hosting Options
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium text-secondary-900">Vercel</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Frontend</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium text-secondary-900">Netlify</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Frontend</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium text-secondary-900">Railway</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Full-stack</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium text-secondary-900">AWS/GCP</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Enterprise</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-orange-500 mr-2" />
                  Monitoring & Maintenance
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Error tracking (Sentry)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Performance monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Uptime monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Automated backups</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Responsive Design Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mr-4">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary-900">Responsive Design & Accessibility</h2>
                <p className="text-secondary-600">Create inclusive experiences for all users</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Mobile-First Approach</h3>
                <div className="space-y-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="font-medium text-pink-900 text-sm mb-2">Breakpoint Strategy</p>
                    <div className="text-xs text-pink-700 space-y-1">
                      <div>• Mobile: 320px - 768px</div>
                      <div>• Tablet: 768px - 1024px</div>
                      <div>• Desktop: 1024px+</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">Touch-friendly interface elements</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">Flexible grid systems</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">Optimized images for different screens</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Accessibility (WCAG 2.1)</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-medium text-blue-900 text-sm mb-2">Essential Requirements</p>
                    <div className="text-xs text-blue-700 space-y-1">
                      <div>• Keyboard navigation support</div>
                      <div>• Screen reader compatibility</div>
                      <div>• Color contrast ratios (4.5:1)</div>
                      <div>• Alt text for images</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">Semantic HTML structure</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">ARIA labels and roles</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-secondary-700">Focus management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mr-4">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary-900">SEO & Performance</h2>
                <p className="text-secondary-600">Optimize for search engines and user experience</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Technical SEO</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Meta tags optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">XML sitemap generation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Robots.txt configuration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Structured data markup</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Content Strategy</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Keyword research and targeting</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Quality content creation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Internal linking strategy</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-secondary-700">Regular content updates</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Analytics & Tracking</h3>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-secondary-900">Essential Tools:</p>
                    <div className="text-xs text-secondary-600 space-y-1">
                      <div>• Google Analytics 4</div>
                      <div>• Google Search Console</div>
                      <div>• Core Web Vitals monitoring</div>
                      <div>• Conversion tracking</div>
                      <div>• Heat mapping tools</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Quick Reference Card */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Quick Reference Checklist</h2>
            <p className="text-xl opacity-90">Essential practices for every ChatAndBuild project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold mb-3 flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Before You Start
              </h3>
              <div className="space-y-2 text-sm">
                <div>✓ Set up version control</div>
                <div>✓ Configure development environment</div>
                <div>✓ Plan your architecture</div>
                <div>✓ Define coding standards</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold mb-3 flex items-center">
                <Code className="h-5 w-5 mr-2" />
                During Development
              </h3>
              <div className="space-y-2 text-sm">
                <div>✓ Write tests alongside code</div>
                <div>✓ Regular code reviews</div>
                <div>✓ Security best practices</div>
                <div>✓ Performance optimization</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold mb-3 flex items-center">
                <Rocket className="h-5 w-5 mr-2" />
                Before Deployment
              </h3>
              <div className="space-y-2 text-sm">
                <div>✓ Comprehensive testing</div>
                <div>✓ Security audit</div>
                <div>✓ Performance testing</div>
                <div>✓ Documentation complete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BestPractices;
