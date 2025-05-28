import React from 'react'
import { ChevronRight, Code, Command, Github, Laptop, Lightbulb, Rocket, Terminal, Twitter, Instagram, Linkedin, Youtube, MessageSquare, Zap, Users, Book, FileText, HelpCircle, Bookmark, Settings, Server, ChevronDown, AlertCircle, X, ExternalLink, Clock, Upload, GitBranch } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import GuideCard from './components/GuideCard'
import { guides } from './data/guides'
import { useNavigate } from 'react-router-dom'

function App() {
  const [showTroubleshootingPopup, setShowTroubleshootingPopup] = React.useState(false);
  const navigate = useNavigate();

  const handleTroubleshootingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTroubleshootingPopup(true);
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/best-practices');
  };

  const handleGettingStartedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/getting-started');
  };

  const handleApiReferenceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/api-reference');
  };

  const handleBestPracticesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/best-practices');
  };

  const handleTutorialsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/tutorials');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Build apps through conversation</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            ChatAndBuild is a revolutionary platform that lets you create applications simply by having a conversation. No coding required - just describe what you want, and watch it come to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="px-8 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-md font-medium transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <Command className="mr-2 h-5 w-5" /> Get Started
            </a>
            <a 
              href="#" 
              className="px-8 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-md font-medium transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <Play className="mr-2 h-5 w-5" /> Watch Demo
            </a>
          </div>
        </div>
      </section>
      
      {/* What is ChatAndBuild Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">What is ChatAndBuild?</h2>
            <p className="section-description">
              ChatAndBuild is a revolutionary platform that combines AI-powered chat with real-time development capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MessageSquare className="h-10 w-10" />}
              title="Conversational Development"
              description="Build applications through natural conversation with an AI assistant that understands your requirements and generates code in real-time."
            />
            <FeatureCard 
              icon={<Zap className="h-10 w-10" />}
              title="Instant Deployment"
              description="See your changes instantly with live preview. No need to set up complex development environments or deployment pipelines."
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10" />}
              title="Collaborative Building"
              description="Work together with team members in real-time, sharing ideas and making changes that everyone can see immediately."
            />
          </div>
        </div>
      </section>
      
      {/* Documentation Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Documentation</h2>
            <p className="section-description">
              Explore our comprehensive documentation to get the most out of ChatAndBuild.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocCard 
              icon={<Book className="h-8 w-8" />}
              title="Getting Started"
              description="Learn the basics and set up your first project"
              url="#"
              onClick={handleGettingStartedClick}
            />
            <DocCard 
              icon={<FileText className="h-8 w-8" />}
              title="API Reference"
              description="Comprehensive guide to the ChatAndBuild API"
              url="#"
              onClick={handleApiReferenceClick}
            />
            <DocCard 
              icon={<HelpCircle className="h-8 w-8" />}
              title="Tutorials"
              description="Step-by-step video guides for common use cases"
              url="#"
              onClick={handleTutorialsClick}
            />
            <DocCard 
              icon={<Bookmark className="h-8 w-8" />}
              title="Best Practices"
              description="Development best practices, optimization tips, and coding standards"
              url="#"
              onClick={handleBestPracticesClick}
            />
            <DocCard 
              icon={<AlertCircle className="h-8 w-8" />}
              title="Troubleshooting"
              description="Solutions for common issues and error messages"
              url="#"
              onClick={handleTroubleshootingClick}
            />
            <DocCard 
              icon={<Server className="h-8 w-8" />}
              title="Deployment"
              description="Deploy your applications to production"
              url="#"
            />
          </div>
          
          <div className="mt-10 text-center">
            <a 
              href="#" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View all documentation <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Video Tutorials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Video Tutorials</h2>
            <p className="section-description">
              Learn ChatAndBuild through step-by-step video tutorials covering all essential features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TutorialCard 
              icon={<Code className="h-8 w-8" />}
              title="Getting Started - Sign in"
              description="Learn the basics and your first steps with ChatAndBuild."
              difficulty="Beginner"
              duration="25 min"
            />
            <TutorialCard 
              icon={<Github className="h-8 w-8" />}
              title="Connect Github account"
              description="Learn how to connect your GitHub account to ChatAndBuild."
              difficulty="Beginner"
              duration="27 sec"
            />
            <TutorialCard 
              icon={<Rocket className="h-8 w-8" />}
              title="Build your first project"
              description="Create your first project using ChatAndBuild."
              difficulty="Beginner"
              duration="41 sec"
            />
            <TutorialCard 
              icon={<AlertCircle className="h-8 w-8" />}
              title="Error Handling"
              description="Learn how to handle and debug errors in ChatAndBuild."
              difficulty="Beginner"
              duration="40 sec"
            />
            <TutorialCard 
              icon={<Upload className="h-8 w-8" />}
              title="Push to Github & Export Chat"
              description="Learn how to push your projects to GitHub and export chat history."
              difficulty="Beginner"
              duration="39 sec"
            />
            <TutorialCard 
              icon={<GitBranch className="h-8 w-8" />}
              title="Clone Github & Import Chat"
              description="Learn how to clone GitHub repositories and import chat functions."
              difficulty="Beginner"
              duration="31 sec"
            />
            <TutorialCard 
              icon={<HelpCircle className="h-8 w-8" />}
              title="Support Center"
              description="Learn how to access and use the support center for help and resources."
              difficulty="Beginner"
              duration="39 sec"
            />
          </div>
          
          <div className="mt-10 text-center">
            <a 
              href="#" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              onClick={handleTutorialsClick}
            >
              View all tutorials <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Find answers to common questions about ChatAndBuild.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* General Questions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">General Questions</h3>
              <div className="space-y-4">
                <FaqItem 
                  question="What is ChatAndBuild?" 
                  answer="ChatAndBuild is an AI-powered development platform that allows you to build applications through natural conversation. It combines the power of AI with real-time development capabilities, making it easier and faster to create web applications, mobile apps, and more."
                />
                <FaqItem 
                  question="Do I need coding experience to use ChatAndBuild?" 
                  answer="While coding experience is helpful, ChatAndBuild is designed to be accessible to users with varying levels of technical expertise. The AI assistant can guide you through the development process, explain concepts, and generate code based on your requirements, making it easier for beginners to get started."
                />
                <FaqItem 
                  question="What types of applications can I build with ChatAndBuild?" 
                  answer="ChatAndBuild supports a wide range of application types, including web applications, mobile apps, APIs, databases, and more. You can build everything from simple landing pages to complex full-stack applications with features like authentication, data storage, and third-party integrations."
                />
                <FaqItem 
                  question="Is ChatAndBuild free to use?" 
                  answer="ChatAndBuild offers both free and premium plans. The free plan allows you to create basic projects with limited features, while premium plans provide access to advanced capabilities, increased resource limits, and priority support. Visit our pricing page for detailed information about our plans and pricing."
                />
              </div>
            </div>
            
            {/* Technical Questions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Technical Questions</h3>
              <div className="space-y-4">
                <FaqItem 
                  question="How does the real-time preview work?" 
                  answer="ChatAndBuild provides a live preview of your application as you build it. When you make changes through the chat interface, the AI generates the necessary code, and the changes are immediately reflected in the preview. This allows you to see the results of your work in real-time without having to set up complex development environments."
                />
                <FaqItem 
                  question="What programming languages and frameworks does ChatAndBuild support?" 
                  answer="ChatAndBuild supports a wide range of programming languages and frameworks, including JavaScript, TypeScript, Python, React, Vue, Angular, Node.js, Express, Django, and many more. The AI assistant can generate code in these languages and frameworks based on your requirements."
                />
                <FaqItem 
                  question="Can I use my own custom components or libraries with ChatAndBuild?" 
                  answer="Yes, ChatAndBuild allows you to import and use custom components, libraries, and packages in your projects. You can specify the dependencies you want to use, and the AI will incorporate them into your application. This gives you the flexibility to build applications with your preferred tools and technologies."
                />
                <FaqItem 
                  question="How does ChatAndBuild handle database operations?" 
                  answer="ChatAndBuild supports various database systems, including SQL databases (like PostgreSQL, MySQL) and NoSQL databases (like MongoDB, Firebase). The AI can generate database schemas, queries, and CRUD operations based on your requirements. It also provides tools for database migration, seeding, and management."
                />
              </div>
            </div>
            
            {/* Browser Compatibility */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Browser Compatibility</h3>
              <div className="space-y-4">
                <FaqItem 
                  question="Which browsers are supported by ChatAndBuild?" 
                  answer="ChatAndBuild is optimized for modern browsers including Google Chrome (version 90+), Mozilla Firefox (version 88+), Microsoft Edge (version 90+), and Safari (version 14+). For the best experience, we recommend using the latest version of these browsers."
                />
                <FaqItem 
                  question="Does ChatAndBuild work on mobile browsers?" 
                  answer="Yes, ChatAndBuild works on mobile browsers, but the experience is optimized for desktop use. While you can view and make minor edits on mobile devices, we recommend using a desktop or laptop computer for the full development experience due to the complex nature of coding and the need for a larger screen."
                />
                <FaqItem 
                  question="Are there any browser extensions required to use ChatAndBuild?" 
                  answer="No, ChatAndBuild doesn't require any browser extensions to function. It works directly in your browser without any additional installations. However, some optional browser extensions may enhance your experience, such as developer tools extensions for debugging."
                />
                <FaqItem 
                  question="I'm experiencing issues with a specific browser. What should I do?" 
                  answer="If you're experiencing browser-specific issues, first try clearing your browser cache and cookies, then restart your browser. If problems persist, try using one of our other supported browsers. For persistent issues, please contact our support team with details about your browser version and the specific problems you're encountering."
                />
              </div>
            </div>
            
            {/* Collaboration and Sharing */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Collaboration and Sharing</h3>
              <div className="space-y-4">
                <FaqItem 
                  question="Can I collaborate with others on ChatAndBuild?" 
                  answer="Yes, ChatAndBuild supports real-time collaboration. You can invite team members to join your project, and everyone can see changes as they happen. This makes it ideal for pair programming, team projects, and educational settings where multiple people need to work together."
                />
                <FaqItem 
                  question="How do I share my ChatAndBuild projects with others?" 
                  answer="ChatAndBuild provides several ways to share your projects. You can generate a shareable link that allows others to view your application, export your project as a code repository, or deploy it to a hosting service. You can also invite specific users to collaborate on your project with different permission levels."
                />
                <FaqItem 
                  question="Can I control access permissions for collaborators?" 
                  answer="Yes, ChatAndBuild allows you to set different permission levels for collaborators, such as view-only, edit, or admin access. This gives you control over who can make changes to your project and what actions they can perform."
                />
              </div>
            </div>
            
            {/* Deployment and Integration */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Deployment and Integration</h3>
              <div className="space-y-4">
                <FaqItem 
                  question="How do I deploy applications built with ChatAndBuild?" 
                  answer="ChatAndBuild offers seamless deployment options. You can deploy your applications directly from the platform to various hosting services with just a few clicks. The platform handles the build process, configuration, and deployment, making it easy to share your work with others or launch it to production."
                />
                <FaqItem 
                  question="Can I integrate third-party services and APIs with my ChatAndBuild application?" 
                  answer="Yes, ChatAndBuild supports integration with a wide range of third-party services and APIs. You can connect your application to services like authentication providers, payment gateways, email services, and more. The AI assistant can help you implement these integrations based on your requirements."
                />
                <FaqItem 
                  question="Can I export my code from ChatAndBuild?" 
                  answer="Yes, you can export your code from ChatAndBuild at any time. The platform generates clean, well-structured code that follows best practices, making it easy to continue development outside of ChatAndBuild if needed. You can export your project as a ZIP file or connect it to a Git repository."
                />
              </div>
            </div>
            
            {/* Account and Billing */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Account and Billing</h3>
              <div className="space-y-4">
                <FaqItem 
                  question="How do I create an account on ChatAndBuild?" 
                  answer="Creating an account on ChatAndBuild is simple. Visit our website and click on the 'Sign Up' button. You can sign up using your email address, Google account, or GitHub account. Follow the prompts to complete the registration process and start building your first project."
                />
                <FaqItem 
                  question="What payment methods do you accept?" 
                  answer="ChatAndBuild accepts various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise plans. All payments are processed securely through our payment providers."
                />
                <FaqItem 
                  question="Can I upgrade or downgrade my subscription plan?" 
                  answer="Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. When you upgrade, you'll immediately get access to the additional features and resources. When you downgrade, the changes will take effect at the end of your current billing cycle."
                />
                <FaqItem 
                  question="Do you offer refunds?" 
                  answer="ChatAndBuild offers a 14-day money-back guarantee for new subscriptions. If you're not satisfied with our service within the first 14 days, you can request a full refund. After this period, refunds are handled on a case-by-case basis. Please contact our support team for assistance with refunds."
                />
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-700 hover:to-blue-600 text-white rounded-md transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
      
      {/* Socials Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Connect With Us</h2>
          <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, tips, and community highlights.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            <SocialCard 
              icon={<Twitter className="h-8 w-8" />}
              name="X"
              handle="@chatandbuild"
              color="bg-black"
            />
            <SocialCard 
              icon={<Github className="h-8 w-8" />}
              name="GitHub"
              handle="chatandbuild"
              color="bg-gray-800"
            />
            <SocialCard 
              icon={<Linkedin className="h-8 w-8" />}
              name="LinkedIn"
              handle="chatandbuild"
              color="bg-blue-700"
            />
            <SocialCard 
              icon={<Youtube className="h-8 w-8" />}
              name="YouTube"
              handle="ChatAndBuild"
              color="bg-red-600"
            />
            <SocialCard 
              icon={<MessageSquare className="h-8 w-8" />}
              name="Discord"
              handle="chatandbuild"
              color="bg-indigo-600"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build your next project?</h2>
          <p className="text-xl mb-8">
            Start building amazing applications with ChatAndBuild today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-700 hover:to-blue-600 text-white rounded-md transition-all duration-200 font-medium flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <Command className="mr-2 h-5 w-5" /> Get Started
            </a>
            <a 
              href="#" 
              className="px-8 py-3 bg-gray-700 hover:bg-gray-800 rounded-md transition-all duration-200 font-medium flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <Github className="mr-2 h-5 w-5" /> View on GitHub
            </a>
          </div>
        </div>
      </section>
      
      {/* Troubleshooting Popup */}
      {showTroubleshootingPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative animate-slideUp">
            <button 
              onClick={() => setShowTroubleshootingPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600 mb-4">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Need Help with an Error?</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Copy and paste your error message back into the chat to get immediate assistance from our AI.
              </p>
              
              <div className="border-t border-gray-200 pt-4 text-center">
                <p className="text-gray-600 mb-4">Or visit our support center for more help</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  onClick={() => setShowTroubleshootingPopup(false)}
                >
                  Go to Support Center <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center feature-card">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-secondary-900">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  )
}

interface DocCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
  onClick?: (e: React.MouseEvent) => void;
}

function DocCard({ icon, title, description, url, onClick }: DocCardProps) {
  return (
    <a 
      href={url}
      className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full group card-hover"
      onClick={onClick}
    >
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">{title}</h3>
      <p className="text-secondary-600 mb-4">{description}</p>
      <div className="mt-auto">
        <span className="text-primary-600 group-hover:text-primary-700 flex items-center text-sm font-medium">
          Learn more <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  )
}

// Updated TutorialCard component to match tutorials page
interface TutorialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
}

function TutorialCard({ icon, title, description, difficulty, duration }: TutorialCardProps) {
  // Define difficulty badge color
  const difficultyColor = {
    'Beginner': 'bg-green-50 text-green-700',
    'Intermediate': 'bg-blue-50 text-blue-700',
    'Advanced': 'bg-purple-50 text-purple-700'
  }[difficulty];
  
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="text-primary-600 p-3 bg-primary-50 rounded-lg">{icon}</div>
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-secondary-600 mb-4">
          {description}
        </p>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center text-secondary-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          
          <a 
            href="#" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-all duration-200"
          >
            Watch Tutorial <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      <button
        className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-secondary-900">{question}</h3>
        <ChevronDown 
          className={`h-5 w-5 text-secondary-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="p-5 bg-gray-50 border-t border-gray-200 animate-fadeIn">
          <p className="text-secondary-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

interface SocialCardProps {
  icon: React.ReactNode;
  name: string;
  handle: string;
  color: string;
}

function SocialCard({ icon, name, handle, color }: SocialCardProps) {
  return (
    <a 
      href="#" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 card-hover"
    >
      <div className={`${color} text-white p-4 rounded-full mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-secondary-900">{name}</h3>
      <p className="text-secondary-600">{handle}</p>
    </a>
  )
}

// Add missing Play icon component
const Play = ({ className = "h-6 w-6" }: { className?: string }) => (
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

export default App
