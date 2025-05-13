import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Guide } from '../types';

interface GuideCardProps {
  guide: Guide;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden hover:border-primary-200 group">
      {/* Image */}
      {guide.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={guide.image} 
            alt={guide.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full">
            {guide.category}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {guide.title}
        </h3>
        
        {/* Description */}
        <p className="text-secondary-600 mb-4 line-clamp-2">
          {guide.description}
        </p>
        
        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          {/* Reading Time */}
          <div className="flex items-center text-secondary-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{guide.readingTime} min read</span>
          </div>
          
          {/* Read More Link */}
          <a 
            href={guide.url} 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-0.5 transition-all duration-200"
          >
            Read More <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
