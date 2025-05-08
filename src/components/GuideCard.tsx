import React from 'react'
import { Calendar, Clock, User } from 'lucide-react'
import { Guide } from '../types'

interface GuideCardProps {
  guide: Guide
}

const GuideCard: React.FC<GuideCardProps> = ({ guide }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-gray-100 flex flex-col h-full">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={guide.image} 
          alt={guide.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {guide.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-gray-900">{guide.title}</h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-4">{guide.description}</p>
        
        {/* Metadata */}
        <div className="flex flex-wrap text-sm text-gray-500 gap-4 mt-auto">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{guide.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{guide.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{guide.readTime} min read</span>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <a 
          href={guide.url} 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Read Guide →
        </a>
      </div>
    </div>
  )
}

export default GuideCard
