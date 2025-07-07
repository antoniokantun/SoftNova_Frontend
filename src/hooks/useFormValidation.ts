import { useState } from 'react';
import type { FormData, FormErrors, ApiFormData, ApiResponse } from '../types';

const serviciosMap: { [key: string]: number } = {
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

export const useFormValidation = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    servicio: '',
    aceptaPrivacidad: false,
    recaptchaToken: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};

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

  const submitToAPI = async (data: FormData): Promise<ApiResponse> => {
    const apiData: ApiFormData = {
      nombre_completo: data.nombre.trim(),
      correo: data.email.trim().toLowerCase(),
      telefono: data.telefono.trim(),
      servicio_id: serviciosMap[data.servicio] || 10,
      mensaje: data.mensaje.trim(),
      recaptchaToken: data.recaptchaToken
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/mensajes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.mensaje || 'Error al enviar el mensaje');
    }

    return await response.json();
  };

  const handleSubmit = async (e: React.FormEvent, resetRecaptcha: () => void) => {
    e.preventDefault();
    setIsSubmitting(true);

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      try {
        await submitToAPI(formData);
        setIsSubmitted(true);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: '',
          servicio: '',
          aceptaPrivacidad: false,
          recaptchaToken: ''
        });
        setFormErrors({});
        resetRecaptcha();
        setTimeout(() => setIsSubmitted(false), 5000);
      } catch (error) {
        console.error('Error al enviar formulario:', error);
        setFormErrors({ 
          submit: error instanceof Error ? error.message : 'Error al enviar el mensaje' 
        });
        resetRecaptcha();
      }
    } else {
      setFormErrors(errors);
      resetRecaptcha();
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const setRecaptchaToken = (token: string) => {
    setFormData(prev => ({ ...prev, recaptchaToken: token }));
    if (formErrors.recaptchaToken) {
      setFormErrors(prev => ({ ...prev, recaptchaToken: '' }));
    }
  };

  return {
    formData,
    formErrors,
    isSubmitted,
    isSubmitting,
    handleSubmit,
    handleInputChange,
    setRecaptchaToken
  };
};