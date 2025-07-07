import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Eye, Lock, Users, FileText, Phone, Mail } from 'lucide-react';
import { colors } from '../../constants/colors';

interface PrivacyNoticeProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6" style={{ color: colors.green }} />
                <h2 className="text-2xl font-bold" style={{ color: colors.darkGreen }}>
                  Aviso de Privacidad
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  En <strong>SoftNova</strong>, respetamos y protegemos tu privacidad. Este aviso explica cómo recolectamos,
                  usamos y protegemos tu información personal de acuerdo con la Ley Federal de Protección de Datos Personales
                  en Posesión de los Particulares.
                </p>
              </div>

              <section>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2" style={{ color: colors.darkGreen }}>
                  <Users className="w-5 h-5" />
                  Responsable del Tratamiento
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>SoftNova</strong></p>
                  <p className="text-gray-600">Empresa dedicada al desarrollo de software y tecnología</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2" style={{ color: colors.darkGreen }}>
                  <FileText className="w-5 h-5" />
                  Datos Personales Recolectados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Datos de Identificación:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Nombre completo</li>
                      <li>• Correo electrónico</li>
                      <li>• Número de teléfono</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Datos de Contacto:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Servicio de interés</li>
                      <li>• Mensaje o consulta</li>
                      <li>• Fecha de contacto</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2" style={{ color: colors.darkGreen }}>
                  <Eye className="w-5 h-5" />
                  Finalidades del Tratamiento
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-3">Utilizamos tus datos personales para:</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Responder a tus consultas y solicitudes de información</li>
                    <li>• Proporcionar cotizaciones y propuestas comerciales</li>
                    <li>• Brindar soporte técnico y atención al cliente</li>
                    <li>• Mejorar nuestros servicios y experiencia de usuario</li>
                    <li>• Cumplir con obligaciones legales y regulatorias</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2" style={{ color: colors.darkGreen }}>
                  <Lock className="w-5 h-5" />
                  Medidas de Seguridad
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-3">Implementamos medidas de seguridad para proteger tus datos:</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Cifrado de datos en tránsito y almacenamiento</li>
                    <li>• Acceso restringido solo a personal autorizado</li>
                    <li>• Sistemas de respaldo y recuperación de datos</li>
                    <li>• Monitoreo continuo de seguridad</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2" style={{ color: colors.darkGreen }}>
                  <Shield className="w-5 h-5" />
                  Tus Derechos ARCO
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-3">Tienes derecho a:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Acceder</strong> a tus datos personales</li>
                        <li>• <strong>Rectificar</strong> datos inexactos</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Cancelar</strong> el tratamiento</li>
                        <li>• <strong>Oponerte</strong> al uso de tus datos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2" style={{ color: colors.darkGreen }}>
                  <Phone className="w-5 h-5" />
                  Contacto
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-3">Para ejercer tus derechos ARCO o resolver dudas:</p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>privacidad@softnova.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>+52 (999) 123-4567</span>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Última actualización:</strong> Enero 2025. Nos reservamos el derecho de actualizar este aviso.
                  Los cambios serán notificados a través de nuestro sitio web.
                </p>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full py-3 rounded-lg text-white font-medium transition-colors"
                style={{ backgroundColor: colors.green }}
              >
                Entendido
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyNotice;