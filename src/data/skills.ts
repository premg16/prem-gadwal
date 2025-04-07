import type { Skill } from '@/types';
import { BadgePlus, CloudIcon, ImageIcon, SparklesIcon, VideoIcon } from 'lucide-react';
import { FaAws, FaGoogle } from 'react-icons/fa';
import { RiJavaFill } from 'react-icons/ri';
import {
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiFlask,
  SiGit,
  SiGithubactions,
  SiJenkins,
  SiKubernetes,
  SiLangchain,
  SiLanguagetool,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

export const categories = [
  {
    name: 'Programming Languages',
    description: 'Core programming languages and frameworks',
    icon: SiLanguagetool,
  },
  {
    name: 'Frontend',
    description: 'Building responsive and interactive user interfaces',
    icon: SiReact,
  },
  {
    name: 'Backend',
    description: 'Server-side development and API architecture',
    icon: SiNodedotjs,
  },
  {
    name: 'AI/ML',
    description: 'Artificial Intelligence and Machine Learning',
    icon: SparklesIcon,
  },
  {
    name: 'Cloud & Infrastructure',
    description: 'Cloud computing and infrastructure services',
    icon: CloudIcon,
  },
  {
    name: 'Developer Tools',
    description: 'Development and deployment tools',
    icon: BadgePlus,
  },
  {
    name: 'Design',
    description: 'UI/UX design and prototyping',
    icon: SiFigma,
  },
];

export const skills: Skill[] = [
  // Programming Languages
  {
    name: 'TypeScript',
    icon: SiTypescript,
    category: 'programming',
    level: 'expert',
    description: 'Strongly typed programming language that builds on JavaScript',
    relatedTech: ['Type System', 'Interfaces', 'Generics', 'Decorators'],
  },
  {
    name: 'Python',
    icon: SiPython,
    category: 'programming',
    level: 'expert',
    description: 'High-level programming language for general-purpose programming',
    relatedTech: ['FastAPI', 'Flask', 'Data Science', 'Machine Learning'],
  },
  {
    name: 'C++',
    icon: SiCplusplus,
    category: 'programming',
    level: 'intermediate',
    description: 'General-purpose programming language',
    relatedTech: ['OOP', 'STL', 'Memory Management', 'Templates'],
  },
  {
    name: 'Java',
    icon: RiJavaFill,
    category: 'programming',
    level: 'intermediate',
    description: 'Object-oriented programming language',
    relatedTech: ['Spring Boot', 'JVM', 'Concurrency', 'Collections'],
  },
  {
    name: 'Bash',
    icon: SiLanguagetool,
    category: 'programming',
    level: 'intermediate',
    description: 'Shell scripting and command-line interface',
    relatedTech: ['Shell Scripting', 'CLI', 'Automation', 'System Administration'],
  },

  // Frontend Skills
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    category: 'frontend',
    level: 'expert',
    description: 'Full-stack React framework with SSR and static generation',
    relatedTech: ['App Router', 'Server Components', 'API Routes', 'ISR'],
  },
  {
    name: 'React.js',
    icon: SiReact,
    category: 'frontend',
    level: 'expert',
    description: 'Building scalable component-based user interfaces',
    relatedTech: ['Hooks', 'Context', 'Redux', 'React Query'],
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    category: 'frontend',
    level: 'expert',
    description: 'JavaScript runtime for building scalable network applications',
    relatedTech: ['Express', 'NPM', 'Event Loop', 'Streams'],
  },

  // Backend Skills
  {
    name: 'FastAPI',
    icon: SiFastapi,
    category: 'backend',
    level: 'expert',
    description: 'Modern, fast, and efficient web framework for Python',
    relatedTech: ['Async', 'Type Annotations', 'Dependency Injection', 'OpenAPI'],
  },
  {
    name: 'Flask',
    icon: SiFlask,
    category: 'backend',
    level: 'advanced',
    description: 'Micro web framework for Python',
    relatedTech: ['Routes', 'Blueprints', 'Templates', 'SQLAlchemy'],
  },
  {
    name: 'LangChain',
    icon: SiLangchain,
    category: 'backend',
    level: 'advanced',
    description: 'Framework for developing applications powered by language models',
    relatedTech: ['LLM Integration', 'RAG', 'Agents', 'Chains'],
  },

  // AI/ML Skills
  {
    name: 'LLM Integration',
    icon: SparklesIcon,
    category: 'ai',
    level: 'expert',
    description: 'Integration of Large Language Models in applications',
    relatedTech: ['OpenAI', 'Llama', 'HuggingFace', 'RAG'],
  },
  {
    name: 'Stable Diffusion',
    icon: ImageIcon,
    category: 'ai',
    level: 'advanced',
    description: 'Text-to-image generation model',
    relatedTech: ['Image Generation', 'Prompt Engineering', 'Fine-tuning'],
  },
  {
    name: 'Imagen',
    icon: ImageIcon,
    category: 'ai',
    level: 'advanced',
    description: 'Advanced text-to-image generation model',
    relatedTech: ['Image Generation', 'Prompt Engineering', 'Fine-tuning'],
  },
  {
    name: 'Flux',
    icon: VideoIcon,
    category: 'ai',
    level: 'advanced',
    description: 'Video generation and editing AI model',
    relatedTech: ['Video Generation', 'Editing', 'Processing'],
  },

  // Cloud & Infrastructure
  {
    name: 'AWS',
    icon: FaAws,
    category: 'cloud',
    level: 'advanced',
    description: 'Amazon Web Services cloud platform',
    relatedTech: ['EC2', 'S3', 'Lambda', 'CloudFormation'],
  },
  {
    name: 'GCP',
    icon: FaGoogle,
    category: 'cloud',
    level: 'advanced',
    description: 'Google Cloud Platform',
    relatedTech: ['Compute Engine', 'Cloud Storage', 'Cloud Functions'],
  },
  {
    name: 'Azure',
    icon: VscAzure,
    category: 'cloud',
    level: 'intermediate',
    description: 'Microsoft Azure cloud platform',
    relatedTech: ['Virtual Machines', 'Blob Storage', 'Functions'],
  },
  {
    name: 'Kubernetes',
    icon: SiKubernetes,
    category: 'cloud',
    level: 'intermediate',
    description: 'Container orchestration platform',
    relatedTech: ['Pods', 'Services', 'Deployments', 'Helm'],
  },
  {
    name: 'Docker',
    icon: SiDocker,
    category: 'cloud',
    level: 'advanced',
    description: 'Containerization platform',
    relatedTech: ['Containers', 'Images', 'Docker Compose', 'Dockerfile'],
  },
  {
    name: 'Terraform',
    icon: SiTerraform,
    category: 'cloud',
    level: 'intermediate',
    description: 'Infrastructure as Code tool',
    relatedTech: ['IaC', 'Provisioning', 'State Management'],
  },

  // Developer Tools
  {
    name: 'Git',
    icon: SiGit,
    category: 'tools',
    level: 'expert',
    description: 'Version control system',
    relatedTech: ['GitHub', 'GitLab', 'Version Control', 'CI/CD'],
  },
  {
    name: 'CI/CD',
    icon: SiGithubactions,
    category: 'tools',
    level: 'advanced',
    description: 'Continuous Integration and Deployment',
    relatedTech: ['GitHub Actions', 'Jenkins', 'Automation', 'Pipelines'],
  },
  {
    name: 'Jenkins',
    icon: SiJenkins,
    category: 'tools',
    level: 'intermediate',
    description: 'Automation server',
    relatedTech: ['Pipelines', 'Jobs', 'Plugins', 'Automation'],
  },
  {
    name: 'VS Code Extension',
    icon: BadgePlus,
    category: 'tools',
    level: 'advanced',
    description: 'VS Code extension development',
    relatedTech: ['Extension API', 'Customization', 'Integration'],
  },

  // Design
  {
    name: 'Figma',
    icon: SiFigma,
    category: 'design',
    level: 'intermediate',
    description: 'UI/UX design and prototyping',
    relatedTech: ['Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    name: 'Blender',
    icon: BadgePlus,
    category: 'design',
    level: 'intermediate',
    description: '3D modeling and animation',
    relatedTech: ['3D Modeling', 'Animation', 'Rendering'],
  },
  {
    name: 'Spline',
    icon: BadgePlus,
    category: 'design',
    level: 'intermediate',
    description: '3D design and collaboration',
    relatedTech: ['3D Design', 'Collaboration', 'Prototyping'],
  },
  {
    name: 'Illustrator',
    icon: BadgePlus,
    category: 'design',
    level: 'intermediate',
    description: 'Vector graphics editor',
    relatedTech: ['Vector Graphics', 'Illustration', 'Design'],
  },
];
