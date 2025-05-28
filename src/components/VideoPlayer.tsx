import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  videoId, 
  title, 
  thumbnail,
  className = "" 
}) => {
  // Convert Google Drive share link to direct download/view URL
  const getDirectUrl = (id: string) => {
    return `https://drive.google.com/file/d/${id}/view`;
  };

  // Generate thumbnail URL from video ID if not provided
  const getThumbnailUrl = (id: string) => {
    if (thumbnail) return thumbnail;
    return `https://drive.google.com/thumbnail?id=${id}&sz=w640-h360`;
  };

  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayClick = () => {
    // Open video in new tab instead of embedding
    window.open(getDirectUrl(videoId), '_blank');
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full h-0 pb-[56.25%] bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
        <img
          src={getThumbnailUrl(videoId)}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback to a placeholder if thumbnail fails to load
            e.currentTarget.src = 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=360&q=80';
          }}
        />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
          <button
            onClick={handlePlayClick}
            className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-lg"
          >
            <Play className="h-6 w-6 text-gray-800 ml-1" fill="currentColor" />
          </button>
        </div>
        
        {/* External link indicator */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center w-8 h-8 bg-white bg-opacity-90 rounded-full">
            <ExternalLink className="h-4 w-4 text-gray-700" />
          </div>
        </div>
        
        {/* Video title overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white font-medium text-sm">{title}</h3>
          <p className="text-white text-xs opacity-75 mt-1">Click to watch on Google Drive</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
