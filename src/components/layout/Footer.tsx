import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle 
} from 'lucide-react';
import { colors } from '../../constants/colors';

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/20" style={{ backgroundColor: colors.darkGreen }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">SoftNova</h3>
            <p className="text-white/80 mb-6">
              Somos una empresa especializada en desarrollo de software y consultoría tecnológica, comprometida con la innovación y la excelencia.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2">
              {[
                "Desarrollo Web",
                "Desarrollo Mobile",
                "Cloud Computing",
                "Consultoría IT",
                "DevOps & CI/CD",
                "UI/UX Design",
                "Soporte Técnico"
              ].map((service, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-white/80 hover:text-white transition-colors flex items-center"
                  >
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2">
              {[
                "Sobre Nosotros",
                "Nuestro Equipo",
                "Carreras",
                "Portafolio",
                "Blog",
                "Recursos",
                "Términos de Servicio",
                "Política de Privacidad"
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4 text-white">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/80 mt-1" />
                <div>
                  <p className="text-white/80">
                    Av. Tecnológico 123<br />
                    Zona Tech, Ciudad<br />
                    CP 12345, México
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80" />
                <a href="tel:+525512345678" className="text-white/80 hover:text-white transition-colors">
                  +52 55 1234 5678
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80" />
                <a href="mailto:contacto@softnova.com" className="text-white/80 hover:text-white transition-colors">
                  contacto@softnova.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-white/80" />
                <p className="text-white/80">
                  Lun - Vie: 9:00 AM - 6:00 PM<br />
                  Sáb: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 mb-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-2 text-white">
              Mantente actualizado
            </h4>
            <p className="text-white/80 mb-4">
              Suscríbete a nuestro newsletter para recibir las últimas noticias tecnológicas y tips de desarrollo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg text-white font-medium transition-all"
                style={{ backgroundColor: colors.orange }}
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 SoftNova. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4 text-white/60 text-sm">
            <span>Hecho con ❤️ en México</span>
            <span>|</span>
            <span>Powered by Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;