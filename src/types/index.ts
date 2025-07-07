// types/index.ts
import type { LucideIcon } from 'lucide-react';

export interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  servicio: string;
  aceptaPrivacidad: boolean;
  recaptchaToken: string;
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

// Nuevas interfaces para el backend
export interface ApiFormData {
  nombre_completo: string;
  correo: string;
  telefono: string;
  servicio_id: number;
  mensaje: string;
  recaptchaToken: string;
}

export interface ApiResponse {
  mensaje: string;
  id?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detalles?: any;
}

// Mapeo de servicios para el backend
export const SERVICIOS_MAP: { [key: string]: number } = {
  'desarrollo-web': 1,
  'desarrollo-mobile': 2,
  'cloud-computing': 3,
  'consultoria': 4,
  'devops': 5,
  'base-datos': 6,
  'ui-ux': 7,
  'seo': 8,
  'soporte': 9,
  'otro': 10
};