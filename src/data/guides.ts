import { Guide } from '../types';

export const guides: Guide[] = [
  {
    id: 'getting-started',
    title: 'Getting Started with ChatAndBuild',
    description: 'Learn the basics of ChatAndBuild and create your first project in minutes.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Beginner', 'Tutorial'],
    author: 'Sarah Johnson',
    date: 'Jan 15, 2023',
    readTime: 5,
    url: '#'
  },
  {
    id: 'react-app',
    title: 'Building a React App with ChatAndBuild',
    description: 'Step-by-step guide to creating a React application using conversational development.',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Frontend'],
    author: 'Michael Chen',
    date: 'Feb 3, 2023',
    readTime: 12,
    url: '#'
  },
  {
    id: 'api-integration',
    title: 'Integrating Third-Party APIs',
    description: 'How to connect your ChatAndBuild project with external APIs and services.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['API', 'Integration'],
    author: 'Alex Rodriguez',
    date: 'Mar 21, 2023',
    readTime: 8,
    url: '#'
  }
];
