import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Briefcase, Check, Shield, AlertCircle, Loader2 } from 'lucide-react';
import { colors } from '../../constants/colors';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useRecaptcha } from '../../hooks/useRecaptcha';
import PrivacyNotice from './PrivacyNotice';

const ContactForm: React.FC = () => {
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);
  const {
    formData,
    formErrors,
    isSubmitted,
    isSubmitting,
    handleSubmit: submitForm,
    handleInputChange,
    setRecaptchaToken
  } = useFormValidation();

  const { recaptchaRef, getRecaptchaToken, resetRecaptcha } = useRecaptcha();

  // Verificar reCAPTCHA cuando cambia
  useEffect(() => {
    const interval = setInterval(() => {
      const token = getRecaptchaToken();
      if (token && token !== formData.recaptchaToken) {
        setRecaptchaToken(token);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [formData.recaptchaToken, getRecaptchaToken, setRecaptchaToken]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = getRecaptchaToken();
    if (token) {
      setRecaptchaToken(token);
      setTimeout(() => {
        submitForm(e, resetRecaptcha);
      }, 100);
    } else {
      submitForm(e, resetRecaptcha);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="backdrop-blur-lg bg-white/40 rounded-3xl p-8 border border-white/30"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: colors.darkGreen }}>
                <User className="w-4 h-4 inline mr-2" />
                Nombre Completo
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border-2 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 transition-all ${
                  formErrors.nombre ? 'border-red-500' : 'border-white/30'
                }`}
                placeholder="Tu nombre completo"
                disabled={isSubmitting}
              />
              {formErrors.nombre && (
                <p className="text-red-500 text-sm mt-1">{formErrors.nombre}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: colors.darkGreen }}>
                <Mail className="w-4 h-4 inline mr-2" />
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border-2 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 transition-all ${
                  formErrors.email ? 'border-red-500' : 'border-white/30'
                }`}
                placeholder="tu@email.com"
                disabled={isSubmitting}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: colors.darkGreen }}>
                <Phone className="w-4 h-4 inline mr-2" />
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border-2 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 transition-all ${
                  formErrors.telefono ? 'border-red-500' : 'border-white/30'
                }`}
                placeholder="Tu número de teléfono"
                disabled={isSubmitting}
              />
              {formErrors.telefono && (
                <p className="text-red-500 text-sm mt-1">{formErrors.telefono}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: colors.darkGreen }}>
                <Briefcase className="w-4 h-4 inline mr-2" />
                Servicio de Interés
              </label>
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border-2 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 transition-all ${
                  formErrors.servicio ? 'border-red-500' : 'border-white/30'
                }`}
                disabled={isSubmitting}
              >
                <option value="">Selecciona un servicio</option>
                <option value="desarrollo-web">Desarrollo Web</option>
                <option value="desarrollo-mobile">Desarrollo Mobile</option>
                <option value="cloud-computing">Cloud Computing</option>
                <option value="consultoria">Consultoría IT</option>
                <option value="devops">DevOps</option>
                <option value="base-datos">Base de Datos</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="seo">SEO & Marketing</option>
                <option value="soporte">Soporte Técnico</option>
                <option value="otro">Otro</option>
              </select>
              {formErrors.servicio && (
                <p className="text-red-500 text-sm mt-1">{formErrors.servicio}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colors.darkGreen }}>
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Mensaje
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto, necesidades específicas, plazos estimados..."
              className={`w-full px-4 py-3 rounded-lg border-2 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                formErrors.mensaje ? 'border-red-500' : 'border-white/30'
              }`}
              disabled={isSubmitting}
            />
            {formErrors.mensaje && (
              <p className="text-red-500 text-sm mt-1">{formErrors.mensaje}</p>
            )}
          </div>

          {/* reCAPTCHA */}
          <div className="flex flex-col items-center space-y-3">
            <div ref={recaptchaRef} className="transform scale-90 sm:scale-100"></div>
            {formErrors.recaptchaToken && (
              <p className="text-red-500 text-sm text-center">{formErrors.recaptchaToken}</p>
            )}
          </div>

          {/* Checkbox de privacidad */}
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="aceptaPrivacidad"
                name="aceptaPrivacidad"
                checked={formData.aceptaPrivacidad}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                disabled={isSubmitting}
              />
              <label htmlFor="aceptaPrivacidad" className="text-sm text-gray-700 flex-1">
                <Shield className="w-4 h-4 inline mr-1" />
                Acepto el{' '}
                <button
                  type="button"
                  onClick={() => setShowPrivacyNotice(true)}
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  aviso de privacidad
                </button>
                {' '}y autorizo el tratamiento de mis datos personales para los fines establecidos.
              </label>
            </div>
            {formErrors.aceptaPrivacidad && (
              <p className="text-red-500 text-sm">{formErrors.aceptaPrivacidad}</p>
            )}
          </div>

          {/* Error general */}
          {formErrors.submit && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                <p className="text-red-700 text-sm">{formErrors.submit}</p>
              </div>
            </div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full py-4 rounded-lg text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            style={{ backgroundColor: colors.orange }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : isSubmitted ? (
              <>
                <Check className="w-5 h-5" />
                Mensaje Enviado
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
                Enviar Mensaje
              </>
            )}
          </motion.button>
        </form>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-6 p-4 rounded-lg text-center text-white"
              style={{ backgroundColor: colors.green }}
            >
              <div className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5" />
                <span>¡Gracias por tu mensaje!</span>
              </div>
              <p className="mt-2 text-sm">
                Nos pondremos en contacto contigo en las próximas 24 horas.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Modal de aviso de privacidad */}
      <PrivacyNotice
        isOpen={showPrivacyNotice}
        onClose={() => setShowPrivacyNotice(false)}
      />
    </>
  );
};

export default ContactForm;