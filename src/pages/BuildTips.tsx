import React from 'react'
import { ArrowLeft, Lightbulb, Target, Clock, Users, Code, Zap, CheckCircle, AlertTriangle, Star, Rocket, Brain, Heart, Trophy, Coffee, MessageSquare, Github, ExternalLink, ChevronRight, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BuildTips = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Tips & Tricks</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Master the art of building with ChatAndBuild. From hackathon strategies to production-ready applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Welcome Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg">
                  <Trophy className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Ultimate Build Guide 🚀</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Your ultimate hackathon build guide! Whether you're racing against the clock in a 24-hour hackathon 
                    or building your next big idea, these tips will help you maximize your productivity and create 
                    something amazing with ChatAndBuild.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Start Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Rocket className="h-8 w-8 text-primary-600 mr-3" />
              Quick Start Tips
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TipCard
                icon={<Zap className="h-6 w-6" />}
                title="Start with a Clear Vision"
                description="Define your MVP in one sentence. What's the core problem you're solving? Keep it simple and focused."
                color="bg-yellow-50 text-yellow-700"
              />
              <TipCard
                icon={<Target className="h-6 w-6" />}
                title="Plan Your Features"
                description="List 3 must-have features, 3 nice-to-have features. Build the must-haves first, add nice-to-haves if time permits."
                color="bg-green-50 text-green-700"
              />
              <TipCard
                icon={<Clock className="h-6 w-6" />}
                title="Time Management"
                description="Allocate 60% for core features, 20% for polish, 20% for unexpected issues. Always leave buffer time."
                color="bg-blue-50 text-blue-700"
              />
              <TipCard
                icon={<Users className="h-6 w-6" />}
                title="Team Coordination"
                description="If working in a team, assign clear roles. Use ChatAndBuild's collaboration features to work together seamlessly."
                color="bg-purple-50 text-purple-700"
              />
            </div>
          </section>

          {/* ChatAndBuild Specific Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <MessageSquare className="h-8 w-8 text-primary-600 mr-3" />
              ChatAndBuild Pro Tips
            </h2>
            
            <div className="space-y-6">
              <ProTipCard
                title="Master the Art of Prompting"
                tips={[
                  "Be specific about what you want: 'Create a login form with email validation' vs 'Make a form'",
                  "Describe the user experience: 'When users click submit, show a loading spinner then redirect to dashboard'",
                  "Mention styling preferences: 'Use a modern, clean design with blue accents'",
                  "Ask for explanations: 'Explain how this authentication system works'"
                ]}
                icon={<Brain className="h-6 w-6" />}
              />
              
              <ProTipCard
                title="Iterate Quickly"
                tips={[
                  "Start with basic functionality, then enhance: 'Add a simple todo list' → 'Add categories' → 'Add due dates'",
                  "Use the preview to test immediately after each change",
                  "Don't be afraid to ask for modifications: 'Make the buttons larger' or 'Change the color scheme'",
                  "Build in small increments rather than asking for everything at once"
                ]}
                icon={<Zap className="h-6 w-6" />}
              />
              
              <ProTipCard
                title="Leverage AI Assistance"
                tips={[
                  "Ask for code explanations when you want to learn: 'Explain how this React component works'",
                  "Request best practices: 'What's the best way to handle form validation here?'",
                  "Get debugging help: 'This button isn't working, can you help me fix it?'",
                  "Ask for optimization suggestions: 'How can I make this code more efficient?'"
                ]}
                icon={<Lightbulb className="h-6 w-6" />}
              />
            </div>
          </section>

          {/* Development Workflow */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Code className="h-8 w-8 text-primary-600 mr-3" />
              Optimal Development Workflow
            </h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="space-y-6">
                  <WorkflowStep
                    number={1}
                    title="Project Setup"
                    description="Start with a clear project description. Tell ChatAndBuild what you're building and your target audience."
                    time="5-10 minutes"
                  />
                  <WorkflowStep
                    number={2}
                    title="Core Structure"
                    description="Build the main layout and navigation first. This gives you a foundation to build upon."
                    time="15-20 minutes"
                  />
                  <WorkflowStep
                    number={3}
                    title="Key Features"
                    description="Implement your must-have features one by one. Test each feature before moving to the next."
                    time="60-70% of time"
                  />
                  <WorkflowStep
                    number={4}
                    title="Polish & Refine"
                    description="Add styling, improve UX, fix bugs. This is where your app goes from functional to impressive."
                    time="20-25% of time"
                  />
                  <WorkflowStep
                    number={5}
                    title="Final Testing"
                    description="Test all features, check responsiveness, ensure everything works smoothly."
                    time="5-10 minutes"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Design Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Palette className="h-8 w-8 text-primary-600 mr-3" />
              Design Tips
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white p-3 rounded-lg">
                    <Palette className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Typography Matters</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Design matters! Use{' '}
                      <a 
                        href="https://fonts.google.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700 underline font-medium"
                      >
                        Google Fonts
                      </a>
                      {' '}to style your app — try something expressive like{' '}
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">Space Grotesk</code>
                      {' '}or{' '}
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">Libre Baskerville</code>.
                    </p>
                    <div className="flex items-center text-sm text-purple-700">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span>Browse thousands of free fonts at fonts.google.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white p-3 rounded-lg">
                    <Palette className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Color Inspiration</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Color inspo? Search{' '}
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">"HEX color palettes"</code>
                      {' '}or{' '}
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">"gradient generators"</code>
                      {' '}to add mood and depth.
                    </p>
                    <div className="flex items-center text-sm text-blue-700">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span>Find beautiful color combinations and gradients online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Pitfalls */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
              Common Pitfalls to Avoid
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PitfallCard
                title="Feature Creep"
                description="Don't keep adding features. Stick to your MVP and make it excellent rather than building something mediocre with many features."
                solution="Write down your core features and resist the urge to add more until they're complete."
              />
              <PitfallCard
                title="Perfectionism"
                description="Don't spend hours perfecting one small detail. Good enough is often good enough, especially in hackathons."
                solution="Set time limits for each task. If it's taking too long, move on and come back if time permits."
              />
              <PitfallCard
                title="Not Testing Early"
                description="Building everything before testing can lead to major issues discovered too late."
                solution="Test each feature as you build it. Use the live preview constantly."
              />
              <PitfallCard
                title="Ignoring User Experience"
                description="Focusing only on functionality without considering how users will interact with your app."
                solution="Think about user flows. Ask yourself: 'How would someone actually use this?'"
              />
            </div>
          </section>

          {/* Hackathon Specific Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Coffee className="h-8 w-8 text-primary-600 mr-3" />
              Hackathon Success Strategies
            </h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-orange-600 mr-2" />
                    Time Management
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Plan your 24 hours: 8 hours building, 6 hours sleeping, 2 hours eating/breaks, 8 hours polishing
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Set hourly goals and stick to them
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Use timers for focused work sessions
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Heart className="h-5 w-5 text-red-600 mr-2" />
                    Stay Energized
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Take regular breaks (Pomodoro technique works great)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Stay hydrated and eat healthy snacks
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Get some sleep - tired coding is inefficient coding
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="h-8 w-8 text-primary-600 mr-3" />
              Advanced Building Techniques
            </h2>
            
            <div className="space-y-8">
              <AdvancedTip
                title="Component-First Thinking"
                description="Think in reusable components. If you need a button in multiple places, create one good button component and reuse it."
                example="Instead of creating multiple different buttons, ask: 'Create a reusable Button component with variants for primary, secondary, and danger styles'"
              />
              
              <AdvancedTip
                title="Data Flow Planning"
                description="Plan how data moves through your app before building. This prevents major refactoring later."
                example="Map out: User input → Processing → Storage → Display. Ask ChatAndBuild to help design your data structure."
              />
              
              <AdvancedTip
                title="Progressive Enhancement"
                description="Start with basic functionality, then add advanced features. Your app should work at every stage."
                example="Build: Basic form → Add validation → Add real-time feedback → Add auto-save → Add offline support"
              />
            </div>
          </section>

          {/* Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResourceCard
                title="ChatAndBuild Documentation"
                description="Comprehensive guides and API references"
                link="#"
                icon={<ExternalLink className="h-5 w-5" />}
              />
              <ResourceCard
                title="Video Tutorials"
                description="Step-by-step video guides for common use cases"
                link="/tutorials"
                icon={<ExternalLink className="h-5 w-5" />}
              />
              <ResourceCard
                title="Best Practices"
                description="Development best practices and coding standards"
                link="/best-practices"
                icon={<ExternalLink className="h-5 w-5" />}
              />
              <ResourceCard
                title="Community Discord"
                description="Connect with other builders and get help"
                link="#"
                icon={<ExternalLink className="h-5 w-5" />}
              />
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-blue-500 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-lg mb-6 opacity-90">
                Put these tips into practice and start building your next project with ChatAndBuild.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-md font-medium transition-all duration-200 flex items-center justify-center"
                >
                  Start Building Now
                </a>
                <Link 
                  to="/tutorials" 
                  className="px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-md font-medium transition-all duration-200 flex items-center justify-center"
                >
                  Watch Tutorials <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      <Footer />
    </div>
  )
}

// Component definitions
interface TipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function TipCard({ icon, title, description, color }: TipCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
      <div className={`inline-flex items-center justify-center p-2 rounded-lg mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

interface ProTipCardProps {
  title: string;
  tips: string[];
  icon: React.ReactNode;
}

function ProTipCard({ title, tips, icon }: ProTipCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="bg-primary-50 text-primary-600 p-2 rounded-lg mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface WorkflowStepProps {
  number: number;
  title: string;
  description: string;
  time: string;
}

function WorkflowStep({ number, title, description, time }: WorkflowStepProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{time}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

interface PitfallCardProps {
  title: string;
  description: string;
  solution: string;
}

function PitfallCard({ title, description, solution }: PitfallCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-red-200">
      <div className="flex items-center mb-3">
        <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
        <p className="text-sm text-green-800"><strong>Solution:</strong> {solution}</p>
      </div>
    </div>
  )
}

interface AdvancedTipProps {
  title: string;
  description: string;
  example: string;
}

function AdvancedTip({ title, description, example }: AdvancedTipProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800"><strong>Example:</strong> {example}</p>
      </div>
    </div>
  )
}

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

function ResourceCard({ title, description, link, icon }: ResourceCardProps) {
  return (
    <Link 
      to={link}
      className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">{title}</h3>
        <div className="text-gray-400 group-hover:text-primary-600 transition-colors duration-200">
          {icon}
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

export default BuildTips
