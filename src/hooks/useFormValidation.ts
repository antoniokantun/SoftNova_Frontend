import { useState } from 'react';
import type { FormData, FormErrors } from '../types';

export const useFormValidation = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    servicio: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    
    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre completo es requerido';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El formato del correo no es válido';
    }
    
    if (!formData.telefono.trim()) {
      errors.telefono = 'El teléfono es requerido';
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\D/g, ''))) {
      errors.telefono = 'El teléfono debe tener 10 dígitos';
    }
    
    if (!formData.mensaje.trim()) {
      errors.mensaje = 'El mensaje es requerido';
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '', servicio: '' });
      setFormErrors({});
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return {
    formData,
    formErrors,
    isSubmitted,
    handleSubmit,
    handleInputChange
  };
};