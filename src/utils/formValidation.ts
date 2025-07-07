import type { FormData } from '../types/index';

export const validateForm = (formData: FormData): { [key: string]: string } => {
  const errors: { [key: string]: string } = {};

  // Validación del nombre
  if (!formData.nombre.trim()) {
    errors.nombre = 'El nombre completo es requerido';
  } else if (formData.nombre.trim().length < 2) {
    errors.nombre = 'El nombre debe tener al menos 2 caracteres';
  } else if (formData.nombre.trim().length > 50) {
    errors.nombre = 'El nombre no puede exceder los 50 caracteres';
  }

  // Validación del email
  if (!formData.email.trim()) {
    errors.email = 'El correo electrónico es requerido';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'El formato del correo no es válido';
  }

  // Validación del teléfono
  if (!formData.telefono.trim()) {
    errors.telefono = 'El teléfono es requerido';
  } else {
    const phoneRegex = /^\d{10,15}$/;
    const cleanPhone = formData.telefono.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      errors.telefono = 'El teléfono debe tener entre 10 y 15 dígitos';
    }
  }

  // Validación del mensaje
  if (!formData.mensaje.trim()) {
    errors.mensaje = 'El mensaje es requerido';
  } else if (formData.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
  } else if (formData.mensaje.trim().length > 500) {
    errors.mensaje = 'El mensaje no puede exceder los 500 caracteres';
  }

  // Validación del servicio
  if (!formData.servicio) {
    errors.servicio = 'Selecciona un servicio';
  }

  // Validación de privacidad
  if (!formData.aceptaPrivacidad) {
    errors.aceptaPrivacidad = 'Debes aceptar el aviso de privacidad';
  }

  // Validación de reCAPTCHA
  if (!formData.recaptchaToken) {
    errors.recaptchaToken = 'Completa la verificación reCAPTCHA';
  }

  return errors;
};

export const sanitizeFormData = (formData: FormData): FormData => {
  return {
    nombre: formData.nombre.trim(),
    email: formData.email.trim().toLowerCase(),
    telefono: formData.telefono.trim(),
    mensaje: formData.mensaje.trim(),
    servicio: formData.servicio,
    aceptaPrivacidad: formData.aceptaPrivacidad,
    recaptchaToken: formData.recaptchaToken
  };
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\d{10,15}$/;
  const cleanPhone = phone.replace(/\D/g, '');
  return phoneRegex.test(cleanPhone);
};

export const formatPhoneNumber = (phone: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length === 10) {
    return cleanPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
  return phone;
};

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