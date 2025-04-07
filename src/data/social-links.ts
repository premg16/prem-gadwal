import type { SocialLink } from '@/types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/premg16',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/prem-sai-gadwal-b665811a1/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:premsaig1605@gmail.com',
    icon: Mail,
  },
];
