import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Open Source Portfolio Template',
    description: 'A modern portfolio template built with Next.js, Shadcn UI, TailwindCSS',
    longDescription:
      'A responsive and performant portfolio website showcasing my work and skills. Features dark mode, animations, and a clean design focused on user experience. Built from ground up to be a template for anyone to use.',
    image: '/projects/portfolio-website.webp',
    tags: ['Next.js', 'TypeScript', 'Shadcn UI', 'TailwindCSS', 'Framer Motion'],
    demoUrl: 'https://prem-gadwal.vercel.app/',
    repoUrl: 'https://github.com/premg16/prem-gadwal',
    featured: true,
    category: 'web',
    date: '2025',
    status: 'completed',
  },
  {
    id: 'ai-studio',
    title: 'AI Studio',
    description: 'An AI-powered studio for creating and editing images, videos, and music.',
    longDescription:
      'A full fledged AI studio for creating and editing images, videos, and music using the power of AI. You can create content using models like DALL-E, Midjourney, Flux, and more. It has web native editors for images, videos, and music.',
    image: '/projects/ai-studio.webp',
    tags: [
      'AI',
      'Generative AI',
      'Image Generation',
      'Video Generation',
      'Content Generation',
      'Editing',
      'Content Creation',
      'Content Intelligence',
      'Content Personalization',
    ],
    featured: true,
    category: 'fullstack',
    date: '2025',
    status: 'in-progress',
  },
  {
    id: 'filerobot-image-editor',
    title: 'Filerobot Image Editor',
    description: 'Contributor to Web Image Editor',
    longDescription:
      'The Filerobot Image Editor is the easiest way to integrate an easy-to-use image editor in your web application. Integrated with few lines of code, your users will be able to apply basic transformations like resize, crop, flip, finetune, annotate, watermark and various filters to any image.',
    image: '/projects/web-image-editor.webp',
    tags: ['Image Editor', 'Web Editor', 'React', 'Typescript'],
    demoUrl: 'https://scaleflex.github.io/filerobot-image-editor/',
    repoUrl: 'https://github.com/scaleflex/filerobot-image-editor',
    featured: true,
    category: 'web',
    date: '2024',
    status: 'in-progress',
  },
  {
    id: 'foss-rag-chat',
    title: 'RAG Chat Application',
    description: 'Open Source Chat Application with RAG integration',
    longDescription:
      'A feature-rich AI chat application with RAG integration. It uses the power of LLMs to answer questions and provide information using fully open source tools like Ollama for text generation and LlamaIndex and LangChain for RAG.',
    image: '/projects/foss-rag.webp',
    tags: ['Next.js', 'Typescript', 'LlamaIndex', 'LangChain', 'Ollama', 'Python', 'FastAPI'],
    repoUrl: 'https://github.com/bytes2pro/rag-foss',
    featured: true,
    category: 'fullstack',
    date: '2024',
    status: 'completed',
  },
  {
    id: 'yt-transcript',
    title: 'Real-time YouTube Transcription Tool',
    description: 'A cli based transcription tool for real-time transcription of videos',
    longDescription:
      'A cli based transcription tool that can transcribe any youtube video provided an url or any locally downloaded video.',
    image: '/projects/yt-transcript.webp',
    tags: ['Python', 'Whisper', 'FastRTT', 'Cuda'],
    demoUrl: 'https://github.com/RUiNtheExtinct/yt-transcript',
    repoUrl: 'https://github.com/RUiNtheExtinct/yt-transcript',
    featured: false,
    category: 'cli',
    date: '2023',
    status: 'completed',
  },
];
