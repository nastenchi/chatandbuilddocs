import React from 'react';
import { ArrowLeft, Server, Globe, Shield, Zap, CheckCircle, ExternalLink, Copy, AlertTriangle, Clock, Users, Rocket, Settings, Link, Monitor, Smartphone, Database, Cloud } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link as RouterLink } from 'react-router-dom';

const Publish = () => {
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 py-12 max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <RouterLink to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </RouterLink>
        </div>
        
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-secondary-900 mb-6 leading-tight">
            Publish Your Applications
          </h1>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Take your ChatAndBuild projects from development to production with our comprehensive publishing guide. Learn how to publish to various platforms and configure custom domains.
          </p>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 bg-green-100 text-green-600 rounded-lg mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">30 Seconds</h3>
            <p className="text-secondary-600">Average publishing time</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">Global CDN</h3>
            <p className="text-secondary-600">Worldwide content delivery</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 bg-purple-100 text-purple-600 rounded-lg mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">SSL Included</h3>
            <p className="text-secondary-600">Automatic HTTPS certificates</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 bg-orange-100 text-orange-600 rounded-lg mb-4">
              <Monitor className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">99.9% Uptime</h3>
            <p className="text-secondary-600">Reliable hosting infrastructure</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Guide */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-3xl font-bold text-secondary-900 mb-8 flex items-center">
                <Server className="h-8 w-8 text-primary-600 mr-3" />
                Publishing Options
              </h2>
              
              <div className="space-y-12">
                {/* One-Click Publishing */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center">
                    <div className="h-8 w-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                      1
                    </div>
                    One-Click Publishing
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    Publish your ChatAndBuild project instantly with our integrated publishing system. No configuration required.
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200 mb-6">
                    <h4 className="font-semibold text-secondary-900 mb-3">How it works:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-secondary-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Click "Publish" in your ChatAndBuild project
                      </div>
                      <div className="flex items-center text-sm text-secondary-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Choose your publishing settings
                      </div>
                      <div className="flex items-center text-sm text-secondary-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Get your live URL in seconds
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <Rocket className="h-5 w-5 text-primary-600 mb-2" />
                      <p className="text-sm font-medium text-secondary-900">Instant Preview</p>
                      <p className="text-xs text-secondary-600">Live URL available immediately</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <Shield className="h-5 w-5 text-green-600 mb-2" />
                      <p className="text-sm font-medium text-secondary-900">Auto SSL</p>
                      <p className="text-xs text-secondary-600">HTTPS enabled by default</p>
                    </div>
                  </div>
                </div>

                {/* Custom Domain Setup */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center">
                    <div className="h-8 w-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                      2
                    </div>
                    Custom Domain Configuration
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    Connect your own domain to your published application for a professional appearance.
                  </p>

                  {/* Domain Setup Steps */}
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                        <Globe className="h-5 w-5 text-primary-600 mr-2" />
                        Step 1: Purchase Your Domain
                      </h4>
                      <p className="text-secondary-600 mb-4">
                        Get your domain from popular registrars like Namecheap, GoDaddy, or Google Domains.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-800">
                          <strong>Pro Tip:</strong> Choose a domain that reflects your brand and is easy to remember. Consider .com, .app, or .io extensions for tech projects.
                        </p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                        <Settings className="h-5 w-5 text-primary-600 mr-2" />
                        Step 2: Configure DNS Records
                      </h4>
                      <p className="text-secondary-600 mb-4">
                        Add these DNS records in your domain registrar's control panel:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-medium text-secondary-900">A Record</h5>
                            <button 
                              onClick={() => copyToClipboard('185.199.108.153', 'A Record')}
                              className="text-primary-600 hover:text-primary-700 text-sm flex items-center"
                            >
                              <Copy className="h-4 w-4 mr-1" />
                              {copiedText === 'A Record' ? 'Copied!' : 'Copy'}
                            </button>
                          </div>
                          <div className="text-sm text-secondary-600 space-y-1">
                            <p><strong>Name:</strong> @ (or leave blank)</p>
                            <p><strong>Value:</strong> 185.199.108.153</p>
                            <p><strong>TTL:</strong> 3600</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-medium text-secondary-900">CNAME Record</h5>
                            <button 
                              onClick={() => copyToClipboard('your-app.chatandbuild.app', 'CNAME')}
                              className="text-primary-600 hover:text-primary-700 text-sm flex items-center"
                            >
                              <Copy className="h-4 w-4 mr-1" />
                              {copiedText === 'CNAME' ? 'Copied!' : 'Copy'}
                            </button>
                          </div>
                          <div className="text-sm text-secondary-600 space-y-1">
                            <p><strong>Name:</strong> www</p>
                            <p><strong>Value:</strong> your-app.chatandbuild.app</p>
                            <p><strong>TTL:</strong> 3600</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                          <div>
                            <p className="text-sm text-yellow-800">
                              <strong>Important:</strong> DNS changes can take up to 48 hours to propagate worldwide, though they usually take effect within a few hours.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                        <Link className="h-5 w-5 text-primary-600 mr-2" />
                        Step 3: Connect Domain in ChatAndBuild
                      </h4>
                      <p className="text-secondary-600 mb-4">
                        Once DNS is configured, connect your domain in the ChatAndBuild dashboard:
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-secondary-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Go to your project settings
                        </div>
                        <div className="flex items-center text-sm text-secondary-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Click "Custom Domain"
                        </div>
                        <div className="flex items-center text-sm text-secondary-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Enter your domain name
                        </div>
                        <div className="flex items-center text-sm text-secondary-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Verify DNS configuration
                        </div>
                        <div className="flex items-center text-sm text-secondary-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          SSL certificate will be automatically generated
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform-Specific Publishing */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center">
                    <div className="h-8 w-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                      3
                    </div>
                    Platform-Specific Publishing
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    Publish to popular hosting platforms with pre-configured settings.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 bg-black text-white rounded-lg flex items-center justify-center mr-3">
                          <Cloud className="h-5 w-5" />
                        </div>
                        <h4 className="text-lg font-semibold text-secondary-900">Vercel</h4>
                      </div>
                      <p className="text-sm text-secondary-600 mb-4">
                        Perfect for React, Next.js, and static sites with automatic publishing.
                      </p>
                      <div className="space-y-2 text-xs text-secondary-600">
                        <p>• Zero configuration</p>
                        <p>• Automatic HTTPS</p>
                        <p>• Global CDN</p>
                        <p>• Git integration</p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 bg-green-600 text-white rounded-lg flex items-center justify-center mr-3">
                          <Database className="h-5 w-5" />
                        </div>
                        <h4 className="text-lg font-semibold text-secondary-900">Netlify</h4>
                      </div>
                      <p className="text-sm text-secondary-600 mb-4">
                        Excellent for static sites and JAMstack applications with form handling.
                      </p>
                      <div className="space-y-2 text-xs text-secondary-600">
                        <p>• Drag & drop publishing</p>
                        <p>• Form processing</p>
                        <p>• Split testing</p>
                        <p>• Edge functions</p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 bg-purple-600 text-white rounded-lg flex items-center justify-center mr-3">
                          <Server className="h-5 w-5" />
                        </div>
                        <h4 className="text-lg font-semibold text-secondary-900">Heroku</h4>
                      </div>
                      <p className="text-sm text-secondary-600 mb-4">
                        Great for full-stack applications with database requirements.
                      </p>
                      <div className="space-y-2 text-xs text-secondary-600">
                        <p>• Add-on ecosystem</p>
                        <p>• Database hosting</p>
                        <p>• Scaling options</p>
                        <p>• CI/CD pipeline</p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3">
                          <Globe className="h-5 w-5" />
                        </div>
                        <h4 className="text-lg font-semibold text-secondary-900">DigitalOcean</h4>
                      </div>
                      <p className="text-sm text-secondary-600 mb-4">
                        Flexible cloud hosting with app platform for containerized applications.
                      </p>
                      <div className="space-y-2 text-xs text-secondary-600">
                        <p>• Docker support</p>
                        <p>• Managed databases</p>
                        <p>• Load balancing</p>
                        <p>• Monitoring tools</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Troubleshooting */}
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                    Common Issues & Solutions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2">Domain not connecting</h4>
                      <p className="text-sm text-red-800">
                        Check DNS propagation using tools like whatsmydns.net. Ensure A and CNAME records are correctly configured.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2">SSL certificate issues</h4>
                      <p className="text-sm text-red-800">
                        SSL certificates are automatically generated. If issues persist, try removing and re-adding your domain.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2">Publishing failures</h4>
                      <p className="text-sm text-red-800">
                        Check build logs for errors. Ensure all dependencies are properly listed and environment variables are set.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-secondary-900 mb-4 flex items-center">
                  <Rocket className="h-5 w-5 text-primary-600 mr-2" />
                  Quick Publish
                </h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-700 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                    <Zap className="mr-2 h-4 w-4" />
                    Publish Now
                  </button>
                  <button className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-secondary-700 rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Configure Domain
                  </button>
                </div>
              </div>

              {/* Publishing Checklist */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-secondary-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                  Pre-Publishing Checklist
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm text-secondary-600">Test application locally</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm text-secondary-600">Configure environment variables</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 border-2 border-gray-300 rounded mr-3"></div>
                    <span className="text-sm text-secondary-600">Set up custom domain</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 border-2 border-gray-300 rounded mr-3"></div>
                    <span className="text-sm text-secondary-600">Configure DNS records</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 border-2 border-gray-300 rounded mr-3"></div>
                    <span className="text-sm text-secondary-600">Verify SSL certificate</span>
                  </div>
                </div>
              </div>

              {/* Performance Tips */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-200 p-6">
                <h3 className="text-lg font-bold text-secondary-900 mb-3">Performance Tips</h3>
                <div className="space-y-3 text-sm text-secondary-600">
                  <div className="flex items-start">
                    <Zap className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>Enable compression and caching</span>
                  </div>
                  <div className="flex items-start">
                    <Monitor className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Optimize images and assets</span>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-4 w-4 text-purple-600 mr-2 mt-0.5" />
                    <span>Use CDN for global delivery</span>
                  </div>
                  <div className="flex items-start">
                    <Database className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                    <span>Monitor application metrics</span>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl border border-primary-200 p-6">
                <h3 className="text-lg font-bold text-secondary-900 mb-3">Need Help?</h3>
                <p className="text-sm text-secondary-600 mb-4">
                  Get assistance with publishing issues or domain configuration.
                </p>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Publishing Support
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Domain Help Center
                  </a>
                  <a href="#" className="block text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Contact Technical Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Publish Your Application?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take your project live with our streamlined publishing process
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                <Rocket className="mr-2 h-5 w-5" /> Publish Now
              </button>
              <button className="px-8 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                <ExternalLink className="mr-2 h-5 w-5" /> View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Publish;
