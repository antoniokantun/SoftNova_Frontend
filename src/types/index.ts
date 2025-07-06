// types/index.ts
import type { LucideIcon } from 'lucide-react';

export interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  servicio: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface WorkProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Technology {
  name: string;
  category: string;
}

export interface Colors {
  mint: string;
  lightGreen: string;
  green: string;
  orange: string;
  darkGreen: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
  isSubmitted: boolean;
}

export interface ServiceCardProps {
  service: Service;
  index: number;
  variant: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export interface ProcessStepProps {
  step: WorkProcessStep;
  index: number;
}

export interface AnimatedBackgroundProps {
  y1: unknown; // MotionValue from framer-motion
  y2: unknown; // MotionValue from framer-motion
}