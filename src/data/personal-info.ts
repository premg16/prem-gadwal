import type { PersonalInfo, Stat } from '@/types';
import { Award, Briefcase, Code, GraduationCap } from 'lucide-react';

export const personalInfo: PersonalInfo = {
  name: 'Prem Sai Gadwal',
  title: 'Full Stack Developer & AI Engineer',
  bio: 'Full-Stack Developer and AI Engineer with 2+ years of experience building production-scale AI systems and web applications. Expertise in Generative AI, LLM integrations, and real-time applications using Next.js, TypeScript, and Python.',
  email: 'premsaig1605@gmail.com',
  phone: '+91-6360231174',
  location: 'India',
  dp: '/personal/dp.webp',
  avatar: '/personal/dp.webp',
  resumeUrl: '/personal/resume.pdf',
};

export const aboutMeMessage = [
  'Experienced in building enterprise-grade AI systems and web applications with a focus on performance, scalability, and user experience.',
  'Passionate about implementing cutting-edge AI solutions and optimizing systems for high performance and reliability.',
];

export const stats: Stat[] = [
  {
    icon: Code,
    value: '2+',
    label: 'Years of Experience',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Briefcase,
    value: '15+',
    label: 'Projects Completed',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    icon: GraduationCap,
    value: '1',
    label: 'Degree',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: Award,
    value: '2',
    label: 'Certifications',
    color: 'bg-amber-500/10 text-amber-500',
  },
];
