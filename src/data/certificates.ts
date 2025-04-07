import type { Certificate } from '@/types';

export const certificates: Certificate[] = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    url: '/certificates/aws-cloud-practitioner.pdf',
    description:
      'Validates foundational knowledge of AWS Cloud concepts, services, and terminology.',
  },
  {
    id: 'google-cloud-digital-leader',
    name: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    date: '2023',
    url: '/certificates/google-cloud-digital-leader.pdf',
    description:
      'Demonstrates understanding of Google Cloud products and services and how they can be used to drive business transformation.',
  },
];
