export const VIDEO_IDS = {
  // Main featured video
  MAIN_VIDEO_ID: '1bZgauhXlEP2fOnS0VXZewqi71rv1JkN_',
  
  // Beginner tutorial series
  BEGINNER_VIDEO_1_ID: '1I55_FA-7TQmBQhg0a3fQFNlfbeZ2hNid',
  BEGINNER_VIDEO_2_ID: '1B4VJPf7OvQfM9z2T4UhjDl564Cq1rcld',
  BEGINNER_VIDEO_3_ID: '1hbPBlq4Tf6LacMZdS2uctTUz4hk2xAYq',
  BEGINNER_VIDEO_4_ID: '1AtLVc6kb9rC3vkTQZEaCFnF3h8JWbkHn',
  BEGINNER_VIDEO_5_ID: '14Mu5-exfarp0l4IVwkDFmDmUvMlEqhPQ',
  BEGINNER_VIDEO_6_ID: '14bBfJChUxv2H2dKJOYdVIIYv7nQLm4b3',
  BEGINNER_VIDEO_7_ID: '1-tMbQGy1zlsyzxP744nrDIFnCcH8E7bG',
};

export const videoTutorials = [
  {
    id: 'main-tutorial',
    title: 'Complete ChatAndBuild Tutorial',
    description: 'Comprehensive guide covering all features and capabilities',
    videoId: VIDEO_IDS.MAIN_VIDEO_ID,
    duration: '13 min',
    level: 'All Levels',
    featured: true
  },
  {
    id: 'getting-started',
    title: 'Getting Started - Sign in',
    description: 'Your first steps with ChatAndBuild',
    videoId: VIDEO_IDS.BEGINNER_VIDEO_1_ID,
    duration: '8 min',
    level: 'Beginner'
  },
  {
    id: 'connect-github',
    title: 'Connect Github account',
    description: 'Learn how to connect your GitHub account to ChatAndBuild',
    videoId: VIDEO_IDS.BEGINNER_VIDEO_2_ID,
    duration: '27 sec',
    level: 'Beginner'
  },
  {
    id: 'build-first-project',
    title: 'Build your first project',
    description: 'Create your first project using ChatAndBuild',
    videoId: VIDEO_IDS.BEGINNER_VIDEO_3_ID,
    duration: '41 sec',
    level: 'Beginner'
  },
  {
    id: 'error-handling',
    title: 'Error Handling',
    description: 'Learn how to handle and debug errors in ChatAndBuild',
    videoId: VIDEO_IDS.BEGINNER_VIDEO_4_ID,
    duration: '40 sec',
    level: 'Beginner'
  },
  {
    id: 'push-github-export',
    title: 'Push to Github & Export Chat - Why this is important',
    description: 'Learn how to push your projects to GitHub and export chat history',
    videoId: VIDEO_IDS.BEGINNER_VIDEO_5_ID,
    duration: '39 sec',
    level: 'Beginner'
  },
  {
    id: 'clone-github-import',
    title: 'Clone Github & Import Chat function',
    description: 'Learn how to clone GitHub repositories and import chat functions',
    videoId: VIDEO_IDS.BEGINNER_VIDEO_6_ID,
    duration: '31 sec',
    level: 'Beginner'
  },
  {
    id: 'support-center',
    title: 'Support Center',
    description: 'Learn how to access and use the support center for help and resources',
    videoId: VIDEO_IDS.BEGINNER_VIDEO_7_ID,
    duration: '39 sec',
    level: 'Beginner'
  }
];
