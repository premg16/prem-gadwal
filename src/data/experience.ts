import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'workipo-1',
    company: 'WorkIPO',
    location: 'Mumbai, Maharashtra',
    startDate: 'March 2025',
    endDate: 'Present',
    technologies: ['React.js', 'Python', 'Flask', 'PostgreSQL'],
    projects: [
      {
        id: 'sde-l2',
        role: 'Software Development Engineer L2',
        name: 'Malibu',
        description:
          'Inventory management, tracing and monitoring platform for manufacturing companies.',
        achievements: [
          'Setup modular testing suite and automated CI pipelines using GitHub Actions.',
          'Implemented a traceability solution for manufacturing processes, allowing for efficient tracking of products.',
          'Develop order tracking and management systems.',
        ],
        technologies: ['React.js', 'Python', 'Flask', 'PostgreSQL'],
      },
    ],
  },
  {
    id: 'publicis-sapient-1',
    company: 'Publicis Sapient',
    location: 'India',
    startDate: 'June 2024',
    endDate: 'Present',
    technologies: [
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'Stable Diffusion',
      'Flux',
      'Imagen',
      'LLM Integration',
      'RAG',
      'WebSockets',
      'React',
      'Node.js',
      'LangChain',
    ],
    projects: [
      {
        id: 'ai-studio',
        role: 'Associate Software Development Engineer L2',
        name: 'AI Studio',
        description:
          'Led frontend development for an enterprise-grade AI multimedia studio processing 10,000+ image generation requests daily using Stable Diffusion, Flux, and Imagen 3.',
        achievements: [
          "Developed 'PromptBoost', an internal AI tool that auto-tuned user prompts based on user behavior analytics, improving image generation success rate by 25%",
          'Reduced load time by 40% by implementing efficient state management and optimizing API calls',
          'Designed and built a real-time streaming Chat UI with multi-modal capabilities (text, image, audio) that increased user engagement by 35%',
          'Implemented custom React hooks to streamline LLM integration, reducing boilerplate code by 50%',
          'Established performance benchmarks and implemented monitoring for AI systems, maintaining 99.9% uptime and sub-200ms response times',
        ],
        technologies: [
          'Next.js',
          'TypeScript',
          'React',
          'Stable Diffusion',
          'Flux',
          'Imagen',
          'LLM Integration',
          'WebSockets',
        ],
      },
      {
        id: 'engage-next',
        role: 'Associate Software Development Engineer L2',
        name: 'Engage Next',
        description:
          'Scaled Quiz Next platform to handle 5,000+ concurrent users with real-time leaderboards and interactive elements.',
        achievements: [
          'Achieved 98% test coverage while integrating new AI features, resulting in zero critical bugs during production launch',
          'Engineered multilingual virtual assistant with context-aware responses using vector databases and RAG, supporting 8 languages',
          'Implemented real-time data synchronization using WebSockets, reducing latency by 60% for competitive quiz features',
          'Optimized image generation pipeline, cutting processing time from 5s to 1.2s while maintaining high-quality outputs',
        ],
        technologies: [
          'Next.js',
          'TypeScript',
          'Python',
          'FastAPI',
          'WebSockets',
          'RAG',
          'Vector Databases',
        ],
      },
    ],
  },
  {
    id: 'publicis-sapient-2',
    company: 'Publicis Sapient',
    location: 'India',
    startDate: 'June 2022',
    endDate: 'June 2024',
    technologies: [
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'RAG',
      'LLM Integration',
      'VS Code Extension',
    ],
    projects: [
      {
        id: 'quiz-next',
        role: 'Associate Software Development Engineer L1',
        name: 'Quiz Next',
        description:
          'Developed end-to-end AI-powered quiz generation system using RAG to automatically create quizzes from transcripts and session content.',
        achievements: [
          'Built scalable backend architecture on GCP that processed 500+ concurrent quiz sessions with real-time scoring and analytics',
          'Reduced question generation latency by 65% through caching strategies and optimized model inference',
          'Created dashboard with real-time analytics that increased client adoption of the platform by 45%',
        ],
        technologies: [
          'Next.js',
          'TypeScript',
          'Python',
          'FastAPI',
          'GCP',
          'RAG',
          'LLM Integration',
        ],
      },
      {
        id: 'codebuddy',
        role: 'Associate Software Development Engineer L1',
        name: 'Codebuddy - VS Code Extension',
        description:
          'Co-developed VS Code extension for AI-assisted coding that achieved 3,000+ installs within first month.',
        achievements: [
          'Architected integration layer for multiple LLM providers, allowing seamless switching between models',
          'Implemented token-efficient code chunking algorithm that reduced API costs by 30% while improving code context understanding',
          'Built streaming response UI with syntax highlighting and code completion that reduced development time for users by 20%',
        ],
        technologies: ['VS Code Extension', 'TypeScript', 'LLM Integration', 'Node.js'],
      },
    ],
  },
];
